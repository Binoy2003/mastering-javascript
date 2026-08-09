function createCounter (){
  let counter = 0;

  return function () {
    counter ++;
    return counter;
  };

}

let counter = createCounter ();

console.log(counter ());


function cashRegister (){
  let amount = 0;

  return function(){
    return amount;
  }
}

let coffeeShopCashCounter = cashRegister()

console.log(coffeeShopCashCounter(879797));