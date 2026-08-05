function canApply(age, hasNID) {
  if (age === 18 || hasNID) {
    return "Eligible";
  }
  return " NOT Eligible";
}
