// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = " belajar javascript";

// Jawaban Soal 1
var kataPertama = pertama.substring(0, 4);
var kataKedua = pertama.substring(11, 18);
console.log("Jawaban Soal 1 : ");
console.log(kataPertama + kataKedua + kedua);

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// Jawaban Soal 2
kataPertama = Number("10");
kataKedua = Number("2");
kataKetiga = Number("4");
kataKeempat = Number("6");

operasi = kataPertama + kataKedua * kataKetiga + kataKeempat;
console.log("Jawaban Soal 2 : ");
console.log(operasi);

// Soal 3
var kalimat = "wah javascript itu keren sekali";

// Jawaban Soal 3

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Jawaban Soal 3 : ");
console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);
