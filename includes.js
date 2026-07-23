const numbers = [23,3,4,56,33,53]
const number2 = [77,88]

const hasItem = numbers.includes(4);
console.log(hasItem);

const allNumbers = numbers.concat(number2)
console.log(allNumbers);

console.log(Array.isArray([77]));