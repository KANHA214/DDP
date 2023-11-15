const prompt = require("prompt-sync")(); // import module

let score = 0; // varibel score
let jawaban_benar = 0; // varibel jwab_benar
let jawaban_salah = 0; // varibel jwab_salah
let point_per_soal = 1; // varibel point_soal

let soal = [
    {
        "q": "Yang merupakan member JKT 48?", // q untuk question memberikan pertanyaan
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut', // o untuk opstion memberikan pilihan jawaban
        ],
        "a": 1 // a untuk answer, koreksi jawaban benar 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    
    {
        "q": "Nama bapaknya naruto uzumaki adalah...",
        "o": [
            'yanto',
            'minato',
            'opet',
            'ajik', 
        ],
        "a": 1
    },
    {
        "q": "nama julukan yang diberikan kepada luffy adalah...",
        "o": [
            'manusia lentur',
            'tangan panjang',
            'topi jerami',
            'gk nonton, epsnya banyak', 
        ],
        "a": 2
    },
    {
        "q": "nama panjang spongebob adalah....",
        "o": [
            'spongebob squarepants',
            'spons cuci piring',
            'spongebobbbbb',
            'kuning ngambang', 
        ],
        "a": 0
    },
]; // variable array dari soal

let nama = prompt("Input nama: "); // input nama

for (let i = 0; i < soal.length; i++) {
  // looping array soal
  console.log(soal[i].q); // output question soal
  for (let j = 0; j < soal[i].o.length; j++) {
    // looping semua options
    console.log(`${j + 1}. ${soal[i].o[j]}`);
  }

  const jawaban = prompt("Jawaban: ");
  if (parseInt(jawaban) === soal[i].a + 1) { // jika jawaban sama dengan answer dari soal
    score += point_per_soal; // tambahkan score sesuai dengan point soal
    jawaban_benar++; // tambahkan jwabn yg bnear
  } else {
    jawaban_salah++; // tambahkan jawaban yg slah
  }
}

// output
// menampilkan statistik kuis
console.log("Kuis selesai");
console.log("\n");
console.log("Statistik Kuis");
console.log("Nama\t\t:", nama);
console.log("Score\t\t:", score);
console.log("Jawaban benar\t:", jawaban_benar);
console.log("Jawaban salah\t:", jawaban_salah);
