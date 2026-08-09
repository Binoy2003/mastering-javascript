function createCounter (){
  let counter = 0;

  return function () {
    counter ++;
    return counter;
  };

}

let counter = createCounter ();

console.log(counter ());