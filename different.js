function chowdurify (name){

  const fullName = name + ' Chowdury';
  return fullName;
}

const robinchow = chowdurify('Robin');
console.log(robinchow);

function isStudentAPlus(student){
  console.log('got the student', student);
  const marks = student.marks;
  console.log('his marks', marks);
  if(marks >= 80){
    return true;
  }else{
    return false;
  }
}

const isAPlus = isStudentAPlus(student);