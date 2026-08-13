const responseExtractor = (obj) => {
  const {
    user: {name: userName, age = 18},
  } = obj;

  return{
    userName,
    age,
  };
};

console.log(responseExtractor({user: {name: "Pritom Hasan", age: 32}}));

console.log(responseExtractor({user: {name: "Jobs Hasan", age: 92}}));

console.log(responseExtractor({user: {name: "Chabul Hasan", age: 89}}));

