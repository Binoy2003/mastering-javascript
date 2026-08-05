function sumArray(number){
  let total = 0;

  for(let i = 0; i < number.length; i++){
    total += (number[i].toFixed(2));
  }
  return total;
}

console.log(sumArray([10, 20.2244, 30.524]));