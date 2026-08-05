function sumRange(n) {
  for (let i = 1; i < n; i++) {
    console.log('i-> ', i);
    let total = 0;
    total += i;
    return total;
  }
}

console.log(sumRange(5));