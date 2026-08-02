function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    console.log("i ==> ", i);
    result = result * i;
  }
  return result;
}

console.log(getFactorial(5));
