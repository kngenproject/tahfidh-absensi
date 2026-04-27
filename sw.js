/* ==============================
   SERVICE WORKER — Tamma PWA
   Cache strategy:
     CDN libs & HTML page → cache-first  (offline tetap jalan)
     Firebase API calls   → network-only (Firestore punya offline-nya sendiri)
     Everything else      → network-first dengan cache fallback
============================== */

const CACHE = 'tamma-v6';

// URLs to precache on install.
// NOTE: When inlined in index.html these were injected at runtime via
//       template literals. As a standalone file, list them statically here
//       (or pass them via postMessage / import if you prefer a dynamic list).
const CDN = [
  // The app shell (update this to your deployed URL if needed)
  self.location.origin + '/',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js'
];

// ── Install: precache CDN libs + HTML ──────────────────────────────────────
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.allSettled(CDN.map(u => cache.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ────────────────────────────────────────────
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch ──────────────────────────────────────────────────────────────────
self.addEventListener('fetch', evt => {
  const url = evt.request.url;

  // Skip non-HTTP requests (blob:, data:, chrome-extension:, etc.)
  if (!url.startsWith('http')) return;

  // Firebase Firestore / Auth API → never cache via SW
  const isFirebaseAPI =
    url.includes('firestore.googleapis.com') ||
    url.includes('identitytoolkit.googleapis.com') ||
    url.includes('securetoken.googleapis.com');

  if (isFirebaseAPI) return; // let the browser handle it normally

  const isCDNorPage =
    CDN.includes(url) ||
    url.includes('cdnjs.cloudflare.com') ||
    url.includes('cdn.jsdelivr.net') ||
    url.includes('gstatic.com/firebasejs');

  if (isCDNorPage) {
    // Cache-first: serve instantly offline
    evt.respondWith(
      caches.match(evt.request).then(cached => {
        if (cached) return cached;
        return fetch(evt.request).then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(evt.request, copy));
          }
          return res;
        }).catch(() => new Response('Offline', { status: 503 }));
      })
    );
  } else {
    // Network-first: try fresh, fall back to cache
    evt.respondWith(
      fetch(evt.request).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(evt.request, copy));
        }
        return res;
      }).catch(() =>
        caches.match(evt.request).then(c => c || new Response('Offline', { status: 503 }))
      )
    );
  }
});
