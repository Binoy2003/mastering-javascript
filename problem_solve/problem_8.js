// count words in a Sentence

function wordCount(str){
 
  let strSplitArr = str.split(" ");
  return strSplitArr.length;

}

console.log(wordCount("The man who died standing"));