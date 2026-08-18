// Flexible Total Calculator

function calculateTotal (discount, ...prices){

  console.log(discount, prices);

  let total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

let discountAmount = (total * discount) / 100;

console.log(discountAmount);

let totalAfterDiscountApply = total - discountAmount;

console.log(totalAfterDiscountApply);

//console.log(total);
return totalAfterDiscountApply

}



calculateTotal(10, 100, 200, 50, 300);

calculateTotal(15, 180, 654, 550, 7700);

calculateTotal(152, 1850, 14685, 10000, 1444);