const numbers = [2, 3, 5 ,1, 9, 8, 6];

const slice = numbers.slice(2, 6)
console.log(slice);
console.log(numbers);

const parts = numbers.splice(2, 4, 99);
console.log(parts);
console.log(numbers);