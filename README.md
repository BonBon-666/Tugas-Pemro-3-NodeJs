# Table of Contents
1. [Backend NodeJS + MongoDB](#backend-nodejs--mongodb)
2. [Tugas: Create Endpoint CRUD Dosen](#tugas-create-endpoint-crud-dosen)
3. [TDLR;](#tldr)
4. [Proof of Concept](#proof-of-concept)

## Backend NodeJS + MongoDB

Paduan Download dan Install Dependensi yang dibbutuhkan dengan cara dibawah

```sh
git clone https://github.com/ahmdsk/BackendNodeJSMongoDB
cd BackendNodeJSMongoDB
npm install
nodemon server.js
```

Setelah itu local server akan berjalan di port 3000

http://localhost:3000

## Tugas: Create Endpoint CRUD Dosen

## TDLR;
Sebelumnya kita telah selesai membuat endpoint untuk operasi CRUD Mahasiswa dengan NodeJS dan MongoDB sebagai database nya. untuk selanjutnya ada test pemahaman tentang materi sebelumnya untuk berfokus pada materi restful api backend dengan NodeJS dan MongoDB. test pemahaman atau tugas nya membuat endpoint untuk CRUD Dosen, rekan-rekan dapat mengikuti kode sebelumnya untuk mengerjakan.

## Proof of Concept
Untuk isi object dari collection dosen sebagai berikut:
- nama
- matkul_diampu
- alamat

silahkan dibuat model dari data object diatas pada folder `models/` kemudian buat file `Dosen.js` jadi pada file `models/` terdapat 2 file yaitu `Mahasiswa.js` dan `Dosen.js`

Untuk ketentuan endpoint restful api dosen sebagai berikut:

| HTTP METHOD      | PATH URL |
| :---        |    :----:   |
| GET      | /dosen       |
| POST   | /dosen        |
| PUT | /dosen/edit/:id |
| DELETE | /dosen/delete/:id |

jika tugas sudah selesai, susun semua endpoint dalam satu collection Postman. kemudian share/invite collection ke email ahmadsaleh2409@gmail.com