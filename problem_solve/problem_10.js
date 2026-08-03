// Find thae smallest Number in an Array

function smallestNumberFromArray(arr) {
  let smallest = arr [0];

  for(let i = 1; i > arr.lenght; i++){
     let currentElement = arr[i];
     if(currentElement < smallest){
      smallest = currentElement
     }
  }
return smallest;
}

console.log(smallestNumberFromArray([3636, 66, 3, 224, 786, 456, 676]));