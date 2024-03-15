- menginstall npm init -y ✔
- Selanjutnya  ubah main pada package json index.js menjadi app.js ✔
- buat file app.js ✔
- Buat folder db/connection.js ✔
- menginstall npm install express body-parser mysql2 cors ✔
- menginstall npm install -g nodemon ✔
- Buat file dengan nama .gitignore ✔
- Konfigurasi db/connection.js ke mysql ✔
- Buat database baru dengan nama smk_bazma_todo ✔
- konfigurasi app.js ✔
- buat table todo: id, title, description ✔
 create table todo(
     id int primary key auto_increment,
     title varchar(255) not null,
     description text);
- jalankan nodemon ✔
- konfigurasi membaca file todo rest api ✔
- menjalankan get todos menggunakan thunder client 
- konfigurasi memnambahkan data todo rest api 
- menjalakan menambahkan data baru todo rest api menggunakan thunder clients 
- setting headers = accept = application/json
- Setting Content-Type = application/json
- [Tugas]Mmebuat validation untuk mengirim data todo yang wajib diisikan, artinya validasi tersebut harus jalan dengan npm validator
"title.required" : "Title WAJIB Disikan",
"title.in" : "Title minimal 1 karakter",
"title.max" : "Title maksimal 255 karakter"

- konfigurasi mengubah data todo berdasarkan id rest api menggunakan thunder client ✔
- Konfigurasi melihat data berdasarkan id rest api menggunakan thunder client
-Konfigurasi bug affectedRowss menjadi length
-membuat folder helpers
 - membuat file response.js