const numbers = [23,3,4,56,33,53]

const reversed = numbers.reverse()
console.log(reversed);

const fruits = ['Mango', 'Lychee', 'grape']
const afterReverse = [];

for(const fruit of fruits){
  console.log(fruit);
  afterReverse.unshift(fruit)
  console.log(afterReverse);
}