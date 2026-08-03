// find largest number in an array

// let arr = [500, 120, 34, 445, 1325, 5808];

// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];

//   if (currentElement > largest) {
//     largest = currentElement;
//   }

//   console.log("current Element", currentElement);
// }

// console.log("largest => ", largest);

// with Function

function largestNumberFromArray(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];

    if (currentElement > largest) {
      largest = currentElement;
    }

    //console.log("current Element", currentElement);
  }
  return largest;
}

console.log(largestNumberFromArray([234, 4545, 555, 222, 84594, 2232, 555555]));