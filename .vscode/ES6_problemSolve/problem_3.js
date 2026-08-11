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