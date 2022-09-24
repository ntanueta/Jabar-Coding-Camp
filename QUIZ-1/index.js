// SOAL 1

function next_date(tanggal, bulan, tahun) {
  var format = { year: "numeric", month: "long", day: "numeric" };
  const tglBaru = new Date(tahun, bulan - 1, tanggal + 1);
  console.log(tglBaru.toLocaleDateString("id", format));
}

//JAWABAN SOAL NO 1
console.log("Jawaban No 1 :");
console.log("Contoh 1 :");
next_date(29, 2, 2020);
console.log();
console.log("Contoh 2 :");
next_date(28, 2, 2021);
console.log();
console.log("Contoh 3 :");
next_date(31, 12, 2020);
console.log();

// SOAL 2
function hitung_jumlah_kata(kalimat) {
  var kata = kalimat.split(" ");
  return kata.length;
}
//JAWABAN SOAL NO 2
console.log("Jawaban No 2 :");
console.log("Kalimat 1 :");
console.log(hitung_jumlah_kata("Halo nama saya Muhammad Iqbal Mubarok"));
console.log();
console.log("Kalimat 2 :");
console.log(hitung_jumlah_kata("Saya Iqbal"));
console.log();
console.log("Kalimat 3 :");
console.log(hitung_jumlah_kata("Saya Muhammad Iqbal Mubarok"));
