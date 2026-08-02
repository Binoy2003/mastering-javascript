// Count Vowels in a String

// let str = "Programming Hero";

// let vowels = "aeiou";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let letter = str[i];

//   console.log("i, -> letter ->>> ", i, letter);

//   if (vowels.includes(letter)) {
//     console.log("Vowel");
//     count++;
//   }
// }

// console.log("count->> ", count);

// with function

function countVowels(str) {
  let vowels = "aeiou";

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    console.log("i, -> letter ->>> ", i, letter);

    if (vowels.includes(letter)) {
      console.log("Vowel");
      count++;
    }
  }
  return count;
}

console.log(countVowels("Programming Hero"));

console.log(countVowels("Binoy Sarker"));