// check if a String is a Palindrome

// let str = 'madam';

// let reverseStr = '';

// for(let i = str.length -1; i>=0; i--){
//   let letter = str[i];
//   reverseStr += letter;
// }

// console.log(reverseStr);

// if( str == reverseStr){
//   console.log('Palindrome');

// }else{
//   console.log('Not Palindrome');
// }

// with function

function isPalindrome(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseStr += letter;
  }

  console.log(reverseStr);

  if (str == reverseStr) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
  return str;
}

console.log(isPalindrome('civic'));

console.log(isPalindrome('Wizaro'));