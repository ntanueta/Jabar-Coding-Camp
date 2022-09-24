// SOAL 1
var nilai;
nilai = 75;

console.log("Jawaban no 1 (N=75) :");

if (nilai >= 85) {
  console.log("A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("B");
} else if (nilai >= 65 && nilai < 75) {
  console.log("C");
} else if (nilai >= 55 && nilai < 65) {
  console.log("D");
} else {
  console.log("E");
}

console.log();

// SOAL 2
var tanggal = 3;
var bulan = 8;
var tahun = 2001;

console.log("Jawaban Soal No 2 (Tanggal Ulang Tahun Saya):");

switch (bulan) {
  case 1: {
    console.log(3 + " Januari" + " 2001");
    break;
  }
  case 2: {
    console.log(3 + " Februari" + " 2001");
    break;
  }
  case 3: {
    console.log(3 + " Maret" + " 2001");
    break;
  }
  case 4: {
    console.log(3 + " April" + " 2001");
    break;
  }
  case 5: {
    console.log(3 + " Mei" + " 2001");
    break;
  }
  case 6: {
    console.log(3 + " Juni" + " 2001");
    break;
  }
  case 7: {
    console.log(3 + " Juli" + " 2001");
    break;
  }
  case 8: {
    console.log(3 + " Agustus" + " 2001");
    break;
  }
  case 9: {
    console.log(3 + " September" + " 2001");
    break;
  }
  case 10: {
    console.log(3 + " Oktober" + " 2001");
    break;
  }
  case 11: {
    console.log(3 + " November" + " 2001");
    break;
  }
  default: {
    console.log(3 + " Desember" + " 2001");
    break;
  }
}

console.log();

// SOAL 3
// OUTPUT N=3
let hasil = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    hasil += "# ";
  }
  hasil += "\n";
}
console.log("Jawaban Soal No 3 (N=3):");
console.log(hasil);

// OUTPUT N=7
let hasil2 = "";
for (let i = 0; i < 7; i++) {
  for (let j = 0; j <= i; j++) {
    hasil2 += "# ";
  }
  hasil2 += "\n";
}
console.log("Jawaban Soal No 3 (N=7):");
console.log(hasil2);

// SOAL 4
// OUTPUT M=3
console.log("Jawaban Soal No 4 (M=3):");
for (let i = 0; i < 3; i++) {
  if (i === 0) {
    console.log(`${i} - I love programming`);
  } else if (i === 1) {
    console.log(`${i} - I love Javascript`);
  } else {
    console.log(`${i} - I love VueJS`);
  }
}

// OUTPUT M=5
console.log();
console.log("Jawaban Soal No 4 (M=5):");
for (let i = 1; i <= 5; i++) {
  if (i === 1 || i === 4) {
    console.log(`${i} - I love programming`);
  } else if (i === 2 || i === 5) {
    console.log(`${i} - I love Javascript`);
  } else {
    console.log(`${i} - I love VueJS`);
    console.log("===");
  }
}

console.log();
// OUTPUT M=7
console.log("Jawaban Soal No 4 (M=7):");
for (let i = 1; i <= 7; i++) {
  if (i === 1 || i === 4 || i === 7) {
    console.log(`${i} - I love programming`);
  } else if (i === 2 || i === 5) {
    console.log(`${i} - I love Javascript`);
  } else {
    console.log(`${i} - I love VueJS`);
    console.log("===");
  }
}

// OUTPUT M=10
console.log();
console.log("Jawaban Soal No 4 (M=10):");
for (let i = 1; i <= 10; i++) {
  if (i === 1 || i === 4 || i === 7 || i === 10) {
    console.log(`${i} - I love programming`);
  } else if (i === 2 || i === 5 || i === 8) {
    console.log(`${i} - I love Javascript`);
  } else {
    console.log(`${i} - I love VueJS`);
    console.log("===");
  }
}
