// Flexible Total Calculator

function calculateTotal (discount, ...prices){

  console.log(discount, prices);

  let total = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );



console.log(total);

}



calculateTotal(10, 100, 200, 50, 300);