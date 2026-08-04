const student = {
  name: "Binoy",
  age: 23,
  university: "UIU",
  department: "CSE",
};

function onjOperation(obj){
  for(let key in obj){
    console.log(key, ' ');
  }
}

onjOperation(student)