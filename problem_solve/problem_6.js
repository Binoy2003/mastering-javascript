// Count Vowels in a String

let str = "Programming Hero";

let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {
  let letter = str[i];

  if(vowels.includes(letter)){
    console.log("Vowel");
  }

  console.log("i, -> letter ->>> ", i, letter);
}
