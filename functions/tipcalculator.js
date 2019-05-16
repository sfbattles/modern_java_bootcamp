function calculate_tip(totalBill, tipPercent= 0.20) {
  return(totalBill * tipPercent)
}


console.log (calculate_tip(100));
console.log (calculate_tip(100,0.25));