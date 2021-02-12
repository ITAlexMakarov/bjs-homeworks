"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  
  let S = amount - contribution; //тело кредита

  let year = (date.getFullYear() - new Date().getFullYear()); //кол-во лет для кредита
  let month = date.getMonth() - new Date().getMonth();  //кол-во месяцев для кредита в отдельном году
  let n = year * 12 + month; //кол-во месяцев

  let hundredthPercent = percent / 100; //сотая часть процента
  let P = hundredthPercent / 12;  //с.ч.п. приведенная к месяцу
  let payment = S * (P + P / (((1 + P) ** n) - 1)); //ежем. платёж
  let totalAmount = new Number(payment * n); //общая сумма 
  return Number(totalAmount.toFixed(2));
};

function getGreeting(name) {
  let greeting = name ? `Привет, мир! Меня зовут ${name}.` : `Привет, мир! Меня зовут Аноним.`;
  return greeting;
}