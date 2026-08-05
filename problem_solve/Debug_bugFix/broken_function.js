function calculateTotal(price, tax){
  let total = price + tax;
  console.log(total);

  return total;
}

let finalAmount = calculateTotal(500, 25);

console.log(finalAmount + 20);