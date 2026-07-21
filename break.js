for(let i = 0; i <= 100; i++ ){
  if(i > 5){
    break;
  }
  console.log(i);
}

for(let j=0; j<=10; j++){
   if(j % 2 === 0){
    continue;
   }
   console.log('value of j', j);
}