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
