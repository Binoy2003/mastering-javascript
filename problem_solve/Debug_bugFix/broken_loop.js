function sumRange(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    console.log('i-> ', i);
    // let total = 0;
    total += i;
    
  }
  return total;
}

console.log(sumRange(5));