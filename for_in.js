const numbers = [11, 22, 33, 44, 99]
for(const number of numbers){
  console.log(number);
}

const student = {
  name: 'Akbar mogol',
  id: 69,
  age: 87,
  favSubjects:['physics', 'math', 'chemistry']
}

// for--of--> array
// for--of--> object

for(const key in student){
   console.log(key);
   const value = student[key];
   console.log(key, value);
}