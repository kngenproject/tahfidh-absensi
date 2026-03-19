# Tamma v0.2 - Aplikasi Manajemen Tahfidh & Absensi Siswa

![Tamma App](assets/icons/icon-192x192.png)

Aplikasi PWA untuk mencatat hafalan Juz 30 dan absensi siswa. Bisa digunakan offline, bisa diinstall ke HP.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/username/tamma-app)](https://github.com/username/tamma-app/releases)
[![PWA](https://img.shields.io/badge/PWA-Ready-blue)](https://developers.google.com/web/progressive-web-apps)

## ✨ Fitur Utama

- 📖 **Tahfidh Juz 30** - Input hafalan harian khusus surat Juz 30
- 👥 **Absensi Terintegrasi** - Import siswa sekali untuk semua fitur
- 📊 **Viewer Universal** - Baca file Excel Tahfidh/Absensi dengan filter
- 💾 **Offline & PWA** - Data tersimpan lokal, bisa diinstall
- 🔍 **Pencarian & Filter** - Cari data dengan mudah
- 📱 **Responsive Design** - Optimal untuk tablet dan HP

## 🚀 Demo Langsung

🔗 **[https://kngenproject.github.io/tahfidh-absensi-Tamma-v0.2/](https://kngenproject.github.io/tahfidh-absensi-Tamma-v0.2/)**

## 📱 Screenshot

| Tahfidh | Absensi | Viewer | Tentang |
|---------|---------|--------|---------|
| ![Tahfidh](assets/screenshots/screenshot-1.webp) | ![Absensi](assets/screenshots/screenshot-2.webp) | ![Viewer](assets/screenshots/screenshot-3.webp) | ![Tentang](assets/screenshots/screenshot-4.webp) |

## 📥 Cara Install di HP

### Android (Chrome)
1. Buka `https://kngenproject.github.io/tahfidh-absensi-Tamma-v0.2/`
2. Tap menu ⋮ → "Tambahkan ke layar utama"
3. Aplikasi akan terinstall seperti native app

### iOS (Safari)
1. Buka di Safari
2. Tap ikon Share (□↑)
3. Pilih "Tambahkan ke Layar Utama"

## 📖 Cara Penggunaan Singkat

1. **Import Data Siswa** (Tab Tahfidh)
   - Upload file Excel dengan kolom A = Nama, Kolom C = Kelas
   - Contoh format ada di folder `/examples`

2. **Input Tahfidh**
   - Pilih siswa, surat, rentang ayat
   - Tandai ayat yang salah dengan mengetuknya
   - Simpan

3. **Absensi**
   - Tandai status siswa per hari
   - Download laporan Excel

> 📚 **Panduan lengkap**: [CARA_PENGGUNAAN.md](docs/CARA_PENGGUNAAN.md)

## 🔧 Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript ES6
- **PWA**: Service Worker + Web App Manifest
- **Excel Processing**: SheetJS (XLSX)
- **Icons**: Font Awesome 6
- **Storage**: LocalStorage API
- **UI/UX**: Mobile-first, Touch optimized

## 📦 Format File Excel

| Jenis File | Kolom yang Dibutuhkan |
|------------|----------------------|
| **Import Siswa** | A: Nama, C: Kelas |
| **Tahfidh** | Tanggal, Nama, Surat, Rentang, Status, dll |
| **Absensi** | Nama, Kelas, Status, Waktu |

📋 **Detail format**: [FORMAT_EXCEL.md](docs/FORMAT_EXCEL.md)

## 📁 Struktur Proyek

```
tamma-app/
├── index.html          # Aplikasi utama
├── manifest.webmanifest # PWA manifest
├── sw.js               # Service Worker
├── LICENSE             # MIT License
├── README.md           # Dokumentasi ini
├── assets/             # Ikon & screenshot
├── docs/               # Dokumentasi lengkap
└── examples/           # Contoh file Excel

```

Aplikasi akan live di: `https://kngenproject.github.io/tahfidh-absensi-Tamma-v0.2/`

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:

1. Fork repository
2. Buat branch fitur (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Tambah fitur X'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 🐛 Issue

Jika menemukan bug atau memiliki saran, silakan [buat issue baru](https://github.com/username/tamma-app/issues).

## 📝 Lisensi

[MIT License](LICENSE) - Silakan gunakan dan modifikasi sesuai kebutuhan.

## 👨‍💻 Credit

Dibuat dengan ❤️ untuk kemudahan pencatatan Tahfidh dan Absensi Siswa.

**Tamma** - v0.2 stable | © 2024

---
⭐ **Jangan lupa kasih bintang jika bermanfaat!** ⭐   - Upload file Excel hasil download
   - Filter berdasarkan status
   - Cari nama siswa

## 🔧 Teknologi

- HTML5, CSS3, JavaScript ES6
- PWA (Service Worker + Manifest)
- SheetJS (XLSX) untuk export/import Excel
- Font Awesome 6 untuk ikon
- LocalStorage untuk penyimpanan data

## 📦 File Excel yang Didukung

- **Tahfidh**: Tanggal, Nama, Surat, Rentang Ayat, Status, Jml Salah, Ayat Salah, Kategori, Tambahan
- **Absensi**: Nama, Kelas, Status, Waktu
- Lihat contoh di folder `/examples`

## 📝 Lisensi

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan

## 👨‍💻 Developer

Dibuat untuk kemudahan pencatatan Tahfidh dan Absensi Siswa

---
**Tamma** - v0.2 stable | [Demo](https://[username].github.io/tamma-app/)
