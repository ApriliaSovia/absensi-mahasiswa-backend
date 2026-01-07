# BACKEND – APLIKASI ABSENSI MAHASISWA
Backend aplikasi Absensi Mahasiswa dibuat menggunakan Node.js, Express JS, dan MySQL.
Backend berfungsi sebagai REST API untuk mengelola data absensi mahasiswa (Create, Read, Update, Delete).

## TEKNOLOGI YANG DIGUNAKAN

* Node.js
* Express JS
* MySQL
* dotenv

## PERSIAPAN
Pastikan sebelum memulai:
1. Node.js sudah terinstall
2. MySQL Server sudah berjalan
3. Database dapat diakses

## INSTALL DEPENDENCIES
Masuk ke folder backend melalui terminal

Jalankan perintah berikut:
```
npm install
```
Perintah ini akan menginstall seluruh dependency yang dibutuhkan oleh backend.

## KONFIGURASI DATABASE

Buat database di MySQL dengan perintah:
```
CREATE DATABASE absensi_db;
```

Buat tabel absensi:
```
CREATE TABLE absensi (
id INT AUTO_INCREMENT PRIMARY KEY,
nama VARCHAR(100),
nim VARCHAR(20),
tanggal DATE,
status VARCHAR(20)
);
```

Buat file konfigurasi bernama .env di folder backend, lalu isi dengan:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=absensi_db
PORT=5000
```

## MENJALANKAN BACKEND

Untuk menjalankan server, gunakan perintah:
```
node server.js
```

Jika menggunakan nodemon, jalankan:
```
nodemon server.js
```

Setelah server berjalan, backend dapat diakses melalui alamat:
### http://localhost:5000


## CATATAN PENTING
1. Pastikan MySQL sudah aktif sebelum menjalankan backend
2. Backend harus dijalankan terlebih dahulu sebelum frontend
3. Jangan mengupload folder node_modules ke GitHub
