// 7 = 1+2+3+4+5+6+7 = 28 sum of (1 to N)

function sumRange(number){
  let sum = 0;
for (let i = 1; i <= number; i++){
  sum = sum + i;
  console.log("i=>>>", i);
}
return sum;
}

console.log(sumRange(7));