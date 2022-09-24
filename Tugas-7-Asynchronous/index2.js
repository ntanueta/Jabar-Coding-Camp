// JAWABAN SOAL NO 2
var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

const bacaBuku = (waktu, book, i) => {
  if (i < book.length) {
    readBooksPromise(waktu, book[i])
      .then((r) => bacaBuku(r, book, i + 1))
      .catch((e) => console.log(e));
  }
};

bacaBuku(10000, books, 0);
