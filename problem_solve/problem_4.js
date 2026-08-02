// FizzBuzz (1 to N)
// divisible by 3 -- Fizz
// divisible by 5 -- Buzz
// divisible by both -- FizzBuzz


// let number = 7;

// for (let i = 1; i<=7; i++){
//   console.log('i ==> ', i);
//   if( i % 3 === 0){
//     console.log('Fizz');
//   }else if{
//     if( i % 5 === 0){
//     console.log('Buzz');
//   }else if{
//     if( i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//   }else{
//     console.log('i = ', i);
//   }
// }



let number = 15;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}