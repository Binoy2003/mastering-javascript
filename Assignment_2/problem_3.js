function calculateAiCost(tokensUsed) {

  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
 
if(tokensUsed <= 500){
  return 0;
}
let extraTokens = tokensUsed - 500;

let chargeAmount = Math.floor(extraTokens / 100);

return chargeAmount * 5;

}

console.log(calculateAiCost(300));    // 0
console.log(calculateAiCost(500));    // 0
console.log(calculateAiCost(650));    // 5
console.log(calculateAiCost(1000));   // 25
console.log(calculateAiCost(-10));    // Invalid
console.log(calculateAiCost("500"));  