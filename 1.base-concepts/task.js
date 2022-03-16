function solveEquation(a, b, c) {
  let arr = [];
  let descr = b**2-4*a*c
  if(descr < 0){
    return arr
  }
  if(descr == 0){
    arr.push(-b/(2*a))
    return arr
  }

  arr.push((-b + Math.sqrt(descr) )/(2*a), (-b - Math.sqrt(descr) )/(2*a))

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
