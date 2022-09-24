//JAWABAN SOAL 1
const luasPersegi = (panjang, lebar) => {
  return "Luas persegi panjang = " + panjang * lebar;
};

const kelilingPersegi = (panjang, lebar) => {
  return "Keliling persegi panjang = " + 2 * (panjang + lebar);
};

console.log("Jawaban Soal No 1 (Panjang = 3 , Lebar = 4):");
console.log(luasPersegi(3, 4));
console.log(kelilingPersegi(3, 4));
console.log();

//JAWABAN SOAL 2
const newFunction = (firstName, lastName) => {
  return {
    fullName() {
      console.log("Jawaban Soal No 2 : ");
      console.log(`${firstName} ${lastName}`);
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName();
console.log();

//JAWABAN SOAL 3
const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

console.log("Jawaban Soal No 3 : ");
const { firstName, lastName, address, hobby } = newObject;

// Driver code
console.log(firstName, lastName, address, hobby);
console.log();

//JAWABAN SOAL 4
console.log("Jawaban Soal No 4 : ");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

//Driver Code
console.log(combined);
console.log();

//JAWABAN SOAL 5
const planet = "earth";
const view = "glass";

const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet}`;
console.log("Jawaban Soal No 5 : ");
console.log(before);
