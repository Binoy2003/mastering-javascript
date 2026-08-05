function canApply(age, hasNID) {
  if (age >= 18 && hasNID) {
    return "Eligible";
  }
  return " NOT Eligible";
}

console.log(canApply(15, true));

console.log(canApply(77, true));

console.log(canApply(18, true));