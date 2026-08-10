// let numbers = [2, 4, 6, 8, 10];

// let double = []

// for(let i = 0; i < array.length; i++){
//   double.push(array[i]*2)
// }

// const double = numbers.map(function(elem){
// console.log(elem *2);
// return elem *2;
// });


// const double = numbers.map((elem) => elem * 2);


// console.log(double);



// Foreach

// let rolls = [10, 12, 34, 30]

// rolls.forEach((elem, ind, arr)=>{
//   console.log(elem, ind, arr);
// });


// filter

let prices = [200, 466, 655, 886, 1000];

let expensiveProducts = prices.filter((elem)=>{
 console.log(elem);
 
 if(elem >= 500){
  return true
 }
  return false
});

console.log(expensiveProducts);