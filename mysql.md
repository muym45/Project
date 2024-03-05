## Pertemuan 1

### Cara membuat database baru

Buka terminal, lalu ketikan 'mysql' u- root -p dan password enter aja
default mysql adalah username : root

disini akan membuat table baru dengan nama biodata
create table biodata (
id int primary key not null,
nama varchar(255),
kelas varchar(20),
jurusan varchar(255),
umur int
);

disini akan menambahkan data baru dengan query berikut:
insert into biodata (id, nama, kelas, jurusan, umur) values(1, "Attar", "XI", "SIJA", 16);

bagaimana jika ingin melihat datanya? select * from biodata;

disini menggunakan query 
select * from biodata where id =?

kita akan memfilter

create table sekolahan (
id int primary key not null,
nama_sekolah varchar(255),
jurusan varchar(20),
kapasitas_siswa int,
alamat varchar(255)
);

Buatlah sebuah table dengan nama "sekolahan", didalam table sekolahan, terdapat beberapa kolum: id, nama_sekolah, jurusan,kapasitas_siswa, alamat. Buatlah sebanyak 10 data dengan berbagai jenis jurusan dan kapasitas_siswa ;
Sifat datanya dalam video:
Insert Data
Mencari data berdasarkan field
Mengubah Data
Delete Data 

insert into sekolahan (id, nama_sekolah, jurusan, kapasitas_siswa, alamat) values (1,"SMK RAWAMANGUN","SIJA", 90, "JAKARTA"),(2, "SMK CIREBON 1","RPL", 80,"CIREBON"), (3, "SMK 1 JAKARTA", "TATA BOGA",100,"JAKARTA"), (4, "SMK 2 JAKARTA", "TATA BOGA",70,"JAKARTA"), (5, "SMK 1 BEKASI", "MESIN",90, "BEKASI"), (6, "SMK ENGREKANG", "ANALISIS",90,"SULAWESI SELATAN"), (7, "SMK 80 JAKARTA", "BANK",100,"JAKARTA"), (8, "SMK 1 JOGJA", "PERTANIAN",100, "DIY"), (9, "SMK 1 BOGOR", "POLITIK",100,"BOGOR"), (10, "SMK 70 JAKARTA", "TATA BOGA",100,"JAKARTA");

UPDATE sekolahan SET nama_sekolah = "SMK TI BAZMA" WHERE id = 1;

DELETE FROM sekolahan WHERE id = 10;

select * from sekolahan where alamat = ? and kapasitas_siswa = ?

CREATE DATABASE: Digunakan untuk membuat database baru.
CREATE DATABASE nama_database;

USE: Digunakan untuk memilih database yang akan digunakan.
USE nama_database;

CREATE TABLE: Digunakan untuk membuat tabel baru dalam database.
CREATE TABLE nama_tabel (
    kolom1 tipe_data,
    kolom2 tipe_data,
    ...
);

INSERT INTO: Digunakan untuk menyisipkan data ke dalam tabel.
INSERT INTO nama_tabel (kolom1, kolom2, ...) VALUES (nilai1, nilai2, ...);

SELECT: Digunakan untuk mengambil data dari tabel.
SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi;

UPDATE: Digunakan untuk memperbarui data dalam tabel.
UPDATE nama_tabel SET kolom1 = nilai1 WHERE kondisi;

DELETE: Digunakan untuk menghapus data dari tabel.
DELETE FROM nama_tabel WHERE kondisi;

CREATE INDEX: Digunakan untuk membuat indeks pada kolom atau kombinasi kolom tertentu.
CREATE INDEX nama_indeks ON nama_tabel (kolom);

ALTER TABLE: Digunakan untuk mengubah struktur tabel, seperti menambah atau menghapus kolom.
ALTER TABLE nama_tabel ADD COLUMN nama_kolom tipe_data;

DROP: Digunakan untuk menghapus objek database, seperti tabel atau indeks.
DROP TABLE nama_tabel;

JOIN: Digunakan untuk menggabungkan data dari dua atau lebih tabel berdasarkan hubungan tertentu.
SELECT * FROM tabel1 INNER JOIN tabel2 ON tabel1.kolom = tabel2.kolom;

WHERE: Digunakan untuk memberikan kondisi dalam perintah SELECT, UPDATE, atau DELETE.
SELECT * FROM nama_tabel WHERE kondisi;

GROUP BY: Digunakan untuk mengelompokkan hasil query berdasarkan kolom tertentu.
SELECT kolom, COUNT(*) FROM nama_tabel GROUP BY kolom;

ORDER BY: Digunakan untuk mengurutkan hasil query berdasarkan kolom tertentu.
SELECT * FROM nama_tabel ORDER BY kolom ASC/DESC;

1. Filtering data (where)
2. Cari data dengan (like) = judul, kategori, penulis
3. Data id Desc
4. Filtering jumlah halaman >= & < & = (bebas)
5. Tahun terbit >= 2020 =< 2026
6. Batas Umur dimulai dari 8 s/d 20
7. Harga dimulai dari desc / asc
8. Harga range dari bebas - bebas (1  - 100000000)
9. Harus ada update deletedel

create table perpustakaan (
    id int primary key auto_increment not null,
    kategori varchar (255),
    judul varchar (400),
    descripsi text,
    penulis varchar(255),
    penerbit varchar(255),
    tahun_terbit int,
    jumlah_halaman int,
    batas_umur int,
    isbn int,
    harga int);

insert into perpustakaan (judul, kategori, deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga) values  
insert into perpustakaan (judul,kategori,descripsi,penulis,penerbit,tahun_terbit,jumlah_halaman,batas_umur,isbn,harga) values ("Belajar bahasa inggirs" , "English" , "Belajar Bahasa Ingris dari kecil" , "Dzaki" , "English hits",2024,226,10,3455469,8000) , ("Belajar Keuangan" , "Money" , "Belajar keuangan dari kecil" , "Aziz" , "Money plus",2024,225,10,0546642,10000),( "Kisah Legenda Naga Perak","Fantasi/Sejarah","Legenda tentang seorang ksatria yang berani mempertaruhkan segalanya","Andi Wijaya","Legenda Nusantara",2024,260,11,978-1-2345-6784-9,85000),("Misteri Kepulauan Terlarang","Misteri/Petualangan"," Sebuah ekspedisi ke kepulauan terpencil","Rini Setiawan","Pustaka Pahlawan",2022,280,13,978-1-2345-6783-2,90000);

insert into perpustakaan (judul, kategori,deskripsi, penulis, penerbit, tahun_terbit, jumlah_halaman, batas_umur, isbn, harga) values

+----+---------------------+-----------------------------+----------------------------------------------------------------------+---------------+-------------------+--------------+----------------+------------+---------+-------+
|  1 | English             | Belajar bahasa inggirs      | Belajar Bahasa Ingris dari kecil                                     | Dzaki         | English hits      |         2024 |            226 |         10 | 3455469 |  8000 |
|  2 | Money               | Belajar Keuangan            | Belajar keuangan dari kecil                                          | Aziz          | Money plus        |         2024 |            225 |         10 |  546642 | 10000 |
|  3 | Fantasi/Sejarah     | Kisah Legenda Naga Perak    | Legenda tentang seorang ksatria yang berani mempertaruhkan segalanya | Andi Wijaya   | Legenda Nusantara |         2024 |            260 |         11 |   -8161 | 85000 |
|  4 | Misteri/Petualangan | Misteri Kepulauan Terlarang |  Sebuah ekspedisi ke kepulauan terpencil                             | Rini Setiawan | Pustaka Pahlawan  |         2022 |            280 |         13 |   -8153 | 90000 |
+----+---------------------+-----------------------------+----------------------------------------------------------------------+---------------+-------------------+--------------+----------------+------------+---------+-------+

SELECT * FROM perpustakaan WHERE jumlah_halaman >= 200 AND jumlah_halaman <= 300 AND jumlah_halaman = 225;
UPDATE nama_tabel SET kolom1 = nilai1 WHERE kondisi;
DELETE FROM nama_tabel WHERE kondisi;