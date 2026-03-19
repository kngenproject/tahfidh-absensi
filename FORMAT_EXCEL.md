# Format File Excel yang Didukung

## 1. Format Import Data Siswa
Digunakan di tab **Tahfidh** → tombol Import

| Kolom | Isi | Keterangan |
|-------|-----|------------|
| A | Nama Siswa | Wajib diisi |
| C | Kelas | Opsional, default "Umum" |

**Contoh:**
| A | B | C |
|---|---|---|
| Nama | (kosong) | Kelas |
| Ahmad Fauzi | | 3A |
| Siti Aminah | | 3B |

## 2. Format File Tahfidh (Hasil Download)

| Kolom | Keterangan |
|-------|------------|
| Tanggal | Tanggal input |
| Nama Siswa | Nama lengkap |
| Surat | Nama surat Juz 30 |
| Rentang Ayat | Rentang yang disetorkan |
| Status | L / KL |
| Jml Salah | Jumlah ayat salah |
| Ayat Salah | Nomor ayat yang salah |
| Kategori | Tajwid, Panjang Pendek, Makhraj |
| Tambahan | Catatan tambahan |

## 3. Format File Absensi (Hasil Download)

| Kolom | Keterangan |
|-------|------------|
| Nama | Nama siswa |
| Kelas | Kelas siswa |
| Status | Hadir / Ijin / Sakit / Alpha |
| Waktu | Waktu absen |

## 4. Format yang Dikenali Viewer

Viewer bisa membaca file dengan header:
- **Tanggal**: tanggal, date
- **Nama**: nama siswa, nama, name
- **Surat**: surat
- **Rentang**: rentang ayat, rentang
- **Status**: status
- **Jml Salah**: jml salah, jumlah salah
- **Ayat Salah**: ayat salah
- **Kategori**: kategori salah, kategori, ket
- **Tambahan**: tambahan, kelas, catatan
- **Waktu**: waktu, time
