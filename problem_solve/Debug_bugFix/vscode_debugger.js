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
