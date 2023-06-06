"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if ( discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);   
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  } 
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Ежемесячная процентная ставка
  let monthPercent = percent / 100 / 12;
  // Сумма, которую нужно вернуть банку
  let credit = amount - contribution;
  // Ежемесячная оплата
  let monthPayment = credit * (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));
  // Общая сумма
  let totalSum = (monthPayment * countMonths).toFixed(2);
  return Number(totalSum);  
}