//Sum and Avg of an array

// let arr = [1, 2, 5, 10];

//  let sum = 0;

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);

//   sum += arr[i];
// }

// console.log(sum);
// let avg = sum / arr.length;
// console.log(avg);

function generateAvg(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    sum += arr[i];
  }

  console.log(sum);
  let avg = sum / arr.length;

  return avg;
}

console.log(generateAvg([5, 10, 15]));


console.log(generateAvg([5, 10, 46, 58, 99, 77]));


console.log(generateAvg([10, 20, 30, 40, 50, 60, 70, 80, 90]));
