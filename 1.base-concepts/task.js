"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d === 0) {
    arr = [-b/(2*a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
  let loanBase = amount - contribution;
  let monthlyRate = percent / 12;
  let monthlyPayment = loanBase * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return Number(totalAmount.toFixed(2));
}

let result = Number(calculateTotalMortgage(percent, contribution, amount, countMonths));

console.log(result);