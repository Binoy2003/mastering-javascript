// receipt Generator

function receiptGenerator(name, price, qty){
   
  const total = price * qty;

  return `${name} x${qty} = ${total} Taka`

}

console.log(receiptGenerator("Pen", 20, 3));