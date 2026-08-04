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

  for(let key in obj){
    console.log(obj[key]);
  }
  for(let key in obj){
    console.log(key, ": ", obj[key]);
  }

let objKeyCount = Object.key(obj);


}

onjOperation(student)