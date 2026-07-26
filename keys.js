const person = {
  name: 'Janoyar Ali',
  profession: 'student',
  age: 64,
  isSingle: true
}

delete person.isSingle;

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);