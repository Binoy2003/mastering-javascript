// return all even numbers, Then Their Sum

let arr = [10, 20, 50, 150, 6, 7, 9, 11, 23];

let evenNumbers = [];

for(let i = 0; i<arr.length; i++){
  console.log(arr[i]);

  if(arr[i] % 2 === 0){
    console.log(arr[i]);
    evenNumbers.push(arr[i]);
  }
}