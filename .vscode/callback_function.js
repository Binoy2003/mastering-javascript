// function registerStudent(cb){
//   // console.log("User is registering. Need more data.");

//   cb();

//   function userBasicInfo(){
//     let student = {
//       name: "Binoy",
//       age: 23,
//       id: 0112330701
//     }
//     console.log(student);
//   }
// }

// console.log(registerStudent(userBasicInfo));

function registerStudent(cb) {
  cb();
}

function userBasicInfo() {
  let student = {
    name: "Binoy",
    age: 23,
    id: "0112330701"
  };

  console.log(student);
}

registerStudent(userBasicInfo);