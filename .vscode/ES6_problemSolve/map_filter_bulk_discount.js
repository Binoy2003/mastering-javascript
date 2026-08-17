let applyDiscount = (prices, discountRate=0) => {
  let pricesAfterDiscount = prices.map ((elem, ind, arr) => {
    const discountedPrice = elem - ((elem*discountRate)/100)
    return discountedPrice
  });
    return pricesAfterDiscount;
}

let productPrices = [500, 1000, 345, 700, 600];
console.log(applyDiscount(productPrices, 10));