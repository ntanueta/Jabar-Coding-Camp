//  SOAL 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort();
console.log("Jawaban No 1 :");
console.log(daftarHewan);
console.log();

// SOAL 2
var data = {
  name: "Sinta",
  age: 20,
  address: "Jalan Saluyu",
  hobby: "Menggambar",
};

function introduce() {
  console.log("Jawaban No 2 : ");
  console.log(`Nama saya ${data.name}, umur saya ${data.age} alamat saya di ${data.address} dan saya punya hobby yaitu ${data.hobby}`);
}
var perkenalan = introduce(data);
console.log();

// SOAL 3
function hitung_huruf_vokal(str) {
  var count = str.match(/[aiueo]/gi).length;

  return count;
}
var hitung_1 = hitung_huruf_vokal("Sinta");
var hitung_2 = hitung_huruf_vokal("Nurleta");
console.log("Jawaban No 3 :");
console.log(hitung_1, hitung_2);

console.log();

// SOAL 4
var ambilAngka = (angka) => {
  var iterasi = -2;
  var daftarAngkaGenap = [];
  // Generate angka -2 -> 100
  while (iterasi <= 100) {
    daftarAngkaGenap.push(iterasi);
    iterasi += 2;
  }
  var getAngka = daftarAngkaGenap[angka];
  return getAngka;
};

console.log("Jawaban No 4 : ");
console.log(ambilAngka(0));
console.log(ambilAngka(1));
console.log(ambilAngka(2));
console.log(ambilAngka(3));
console.log(ambilAngka(5));
