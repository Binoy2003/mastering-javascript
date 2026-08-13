const calculateShipping = (orderAmount, shippingFee = 60) => {
 if(orderAmount >= 1000){
  return "Free Shipping"
 }else{
  return `Shipping Fee: ${shippingFee} Taka`
 }
}

console.log(calculateShipping(1200));