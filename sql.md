# Membuat database
create database keuangan;

# Menggunakan database
use keuangan;

# Membuat table pendapatan
create table `pendapatan` (
    `id` int auto_increment not null,
    `pendapatan` int,
    `waktu` DATE NOT NULL,
    `deskripsi` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

# Membuat table pengeluaran
create table `pengeluaran` (
    `id` int auto_increment not null,
    `pengeluaran` int,
    `waktu` DATE NOT NULL,
    `deskripsi` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

# Membuat table investasi
create table `investasi` (
    `id` int auto_increment not null,
    `investasi` int,
    `waktu` DATE NOT NULL,
    `deskripsi` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

# Membuat table tabungan
create table `tabungan` (
    `id` int auto_increment not null,
    `pendapatan_id` int,
    `pengeluaran_id`int,
    `investasi_id` int,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`pendapatan_id`) REFERENCES `pendapatan`(`id`)
    ON DELETE CASCADE,
    FOREIGN KEY (`pengeluaran_id`) REFERENCES `pengeluaran`(`id`)
    ON DELETE CASCADE,
    FOREIGN KEY (`investasi_id`) REFERENCES `investasi`(`id`)
    ON DELETE CASCADE
);

# Memasukan data ke pendapatan
insert into `pendapatan` (`pendapatan`,`waktu`,`deskripsi`) values (100000,'2024-01-01','Awal nabung'),(120000,'2024-02-15','Bismillah HP'),(180000,'2024-03-07','Bismillah');

# Memmasukan data ke pengeluaran,(8000,'2024-03-20','Beli Mie')
insert into `pengeluaran` (`pengeluaran`,`waktu`,`deskripsi`) values (1000,'2024-01-09','Jajan Cilok'),(2000,'2024-02-20','Janjan Milor');

# Memasukan data ke investasi
insert into `investasi` (`investasi`,`waktu`,`deskripsi`) values (100000,'2024-01-01','Bitcoin'),(200000,'2024-02-15','Bitcoin'),(80000,'2024-03-07','Bitcoin');

# Memasukan data ke table tabungan
insert into `tabungan` (`pendapatan_id`,`pengeluaran_id`,`investasi_id`) values (1,1,1),(2,2,2),(3,3,3);

# Gabungkan table pendapatan dan pengeluaran dengan metode left
select 
pendapatan.pendapatan,
pengeluaran.pengeluaran,
pendapatan.waktu,
pengeluaran.waktu
from 
tabungan
LEFT JOIN pendapatan ON tabungan.pendapatan_id = pendapatan.id
LEFT JOIN pengeluaran ON tabungan.pengeluaran_id = pengeluaran.id

# Gabungkan table pendapatan dan pengeluaran dengan metode RIGHT
select 
pendapatan.pendapatan,
pengeluaran.pengeluaran,
pendapatan.waktu,
pengeluaran.waktu
from 
tabungan
RIGHT JOIN pendapatan ON tabungan.pendapatan_id = pendapatan.id
RIGHT JOIN pengeluaran ON tabungan.pengeluaran_id = pengeluaran.id

# Gabungkan semua table
select
pendapatan.pendapatan,
pendapatan.waktu,
pendapatan.deskripsi,
pengeluaran.pengeluaran,
pengeluaran.waktu,
pengeluaran.deskripsi,
investasi.investasi,
investasi.waktu,
investasi.deskripsi
from 
tabungan
JOIN pendapatan ON tabungan.pendapatan_id = pendapatan.id
JOIN pengeluaran ON tabungan.pengeluaran_id = pengeluaran.id
JOIN investasi ON tabungan.investasi_id = investasi.id;