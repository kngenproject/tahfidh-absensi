# Panduan Penggunaan Tamma

## 🚀 Memulai

### 1. Import Data Siswa
- Buka tab **Tahfidh**
- Klik tombol **Import**
- Pilih file Excel dengan format:
  - Kolom A: Nama Siswa
  - Kolom C: Kelas (opsional)
- Data akan otomatis tersimpan

### 2. Mengisi Tahfidh
1. Pilih nama siswa dari dropdown
2. Pilih surat (otomatis surat Juz 30)
3. Tentukan rentang ayat
4. Ketuk ayat yang salah (akan berwarna merah)
5. Centang kategori kesalahan
6. Klik **Simpan**

### 3. Absensi Harian
1. Buka tab **Absen**
2. Untuk setiap siswa, pilih status:
   - ✅ Hadir
   - ✏️ Ijin
   - 🏥 Sakit
   - ❌ Alpha
3. Status otomatis tersimpan

### 4. Download Laporan
- **Download Tahfidh**: Klik tombol download di tab Tahfidh
- **Download Absensi**: Klik tombol di tab Absen
- **Download Gabungan**: Tersedia di tab Tahfidh

## 🔄 Sinkronisasi Data

Data tersimpan otomatis di localStorage browser. Tidak perlu login.

## 📱 Install ke HP

### Android (Chrome)
1. Buka aplikasi di browser Chrome
2. Tap menu (⋮) di pojok kanan atas
3. Pilih "Tambahkan ke layar utama"
4. Konfirmasi dengan tap "Tambahkan"

### iOS (Safari)
1. Buka aplikasi di Safari
2. Tap ikon Share (□↑)
3. Pilih "Tambahkan ke Layar Utama"
4. Tap "Tambah"

## ❓ Troubleshooting

**Q: Data hilang setelah clear cache?**  
A: Data disimpan di localStorage, tidak akan hilang jika hanya clear cache. Tapi jika clear data browser, data akan hilang.

**Q: File Excel tidak terbaca?**  
A: Pastikan format sesuai contoh di folder `/examples`. Gunakan file .xlsx atau .xls.

**Q: Tidak bisa install ke HP?**  
A: Pastikan browser mendukung PWA (Chrome/Samsung Internet/Edge). Untuk iOS minimal versi 11.3.
