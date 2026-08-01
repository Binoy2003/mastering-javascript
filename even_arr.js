const numbers = [12, 23, 34, 49, 56, 66];

for(const num of numbers){
  console.log(num);
  if(num%2 === 0){
    console.log('even', num);
  }else{
    console.log('odd', num);
  }
}
