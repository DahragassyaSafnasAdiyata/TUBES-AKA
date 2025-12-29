// ==================================
// Data Buku (Simulasi Linked List)
// ==================================
const linkedListBuku = [
    { isbn: "978001", judul: "Algoritma dan Pemrograman" },
    { isbn: "978002", judul: "Struktur Data" },
    { isbn: "978003", judul: "Basis Data" },
    { isbn: "978004", judul: "Pemrograman Web" },
    { isbn: "978005", judul: "Kecerdasan Buatan" },
    { isbn: "978006", judul: "Sistem Operasi" },
    { isbn: "978007", judul: "Jaringan Komputer" },
    { isbn: "978008", judul: "Rekayasa Perangkat Lunak" }
];

// ==================================
// Pencarian Iteratif
// ==================================
function cariIteratif() {
    const isbnCari = document.getElementById("isbn").value;
    let operasi = 0;

    for (let i = 0; i < linkedListBuku.length; i++) {
        operasi++;
        if (linkedListBuku[i].isbn === isbnCari) {
            document.getElementById("hasil").innerHTML =
                "Iteratif: Buku ditemukan<br>" +
                "Judul: " + linkedListBuku[i].judul + "<br>" +
                "Jumlah operasi: " + operasi;
            return;
        }
    }

    document.getElementById("hasil").innerHTML =
        "Iteratif: Buku tidak ditemukan<br>" +
        "Jumlah operasi: " + operasi;
}

// ==================================
// Pencarian Rekursif
// ==================================
function cariRekursif(index = 0, operasi = 0) {
    const isbnCari = document.getElementById("isbn").value;

    if (index >= linkedListBuku.length) {
        document.getElementById("hasil").innerHTML =
            "Rekursif: Buku tidak ditemukan<br>" +
            "Jumlah operasi: " + operasi;
        return;
    }

    operasi++;

    if (linkedListBuku[index].isbn === isbnCari) {
        document.getElementById("hasil").innerHTML =
            "Rekursif: Buku ditemukan<br>" +
            "Judul: " + linkedListBuku[index].judul + "<br>" +
            "Jumlah operasi: " + operasi;
        return;
    }

    cariRekursif(index + 1, operasi);
}
