// check if a String is a Palindrome

let str = 'madam';

let reverseStr = '';

for(let i = str.length -1; i>=0; i--){
  let letter = str[i];
  reverseStr += letter;
}

console.log(reverseStr);