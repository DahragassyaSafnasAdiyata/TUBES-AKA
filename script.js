// ===============================
// Simulasi Struktur Linked List
// ===============================

// Setiap objek merepresentasikan node
const linkedListBuku = [
    { isbn: "978001", judul: "Algoritma" },
    { isbn: "978002", judul: "Struktur Data" },
    { isbn: "978003", judul: "Basis Data" },
    { isbn: "978004", judul: "Pemrograman Web" },
    { isbn: "978005", judul: "Kecerdasan Buatan" }
];

// ===============================
// Pencarian Iteratif
// ===============================
function cariIteratif(isbnCari) {
    let operasi = 0;

    for (let i = 0; i < linkedListBuku.length; i++) {
        operasi++;
        if (linkedListBuku[i].isbn === isbnCari) {
            return {
                hasil: "Buku ditemukan",
                judul: linkedListBuku[i].judul,
                operasi: operasi
            };
        }
    }

    return {
        hasil: "Buku tidak ditemukan",
        operasi: operasi
    };
}

// ===============================
// Pencarian Rekursif
// ===============================
function cariRekursif(isbnCari, index = 0, operasi = 0) {
    if (index >= linkedListBuku.length) {
        return {
            hasil: "Buku tidak ditemukan",
            operasi: operasi
        };
    }

    operasi++;

    if (linkedListBuku[index].isbn === isbnCari) {
        return {
            hasil: "Buku ditemukan",
            judul: linkedListBuku[index].judul,
            operasi: operasi
        };
    }

    return cariRekursif(isbnCari, index + 1, operasi);
}

// ===============================
// Contoh Pemanggilan Fungsi
// ===============================
const isbnCari = "978004";

const hasilIteratif = cariIteratif(isbnCari);
console.log("Iteratif:", hasilIteratif);

const hasilRekursif = cariRekursif(isbnCari);
console.log("Rekursif:", hasilRekursif);
