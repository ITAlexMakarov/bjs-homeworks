"use strict"

//======task1======//
function getSolutions(a, b, c)  {
    let D = b ** 2 - 4 * a * c;
    if (D == 0) {
      let x1 = - b / 2 * a;
      return {D: `${D}`, roots: [`${x1}`]};
    } else if (D > 0) {
      let x1 =  (- b + Math.sqrt(D)) / 2 * a;
      let x2 =  (- b - Math.sqrt(D)) / 2 * a;
      return {D: `${D}`, roots: [`${x1}`, `${x2}`]};
    }
    return {D: `${D}`, roots: []};
}

function  showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}*x**2 + ${b}*x + ${c}`);
    console.log("Значение дискриминанта: " + Number(result.D));
    if (result.D == 0) {
      console.log("Уравнение имеет один корень x1 = " + Number(result.roots[0]));
    } else if (result.D > 0)  {
      console.log("Уравнение имеет два корня. " +  "x1 = " + result.roots[0] + ", x2 = " + result.roots[1]);
    } else if (result.D < 0)  {
      console.log("Уравнение не имеет вещественных корней");
    }
  }


  
//======task2======//
let data = {
  algebra: [2,3,4],
  geometry: [3,4,5],
  russian: [4,4,3],
  physics: [5,5],
  music: [3,3,5],
  english: [4,3,4],
  poetry: [5,3,4],
  chemistry: [3],
  french: [4,4,5,5,5,5]
};

function  getAverageMark(marks) {  //создание вспомогательной функции для вычисления средней оценки каждого предмета
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let average = sum / marks.length;
return average;
}

function  getAverageScore(data) {
const outputData = {};      //создание объекта для хранения средних оценок по предметам

let allMarks = [];      //создание нового массива для хранения всех средних оценок

for (let subject in data)  {  //обход всех свойств объекта data
  let mark = data[ subject ];

  outputData[subject] = getAverageMark(mark); //запись итераций в новый объект outputData

  allMarks.push(outputData[subject]); //запись среднего от каждого предмета в новый массив allMarks
}

let sum = 0; //вычисление общей средней
for (let i = 0; i < allMarks.length; i++) {
  sum += allMarks[i];
}
let allAverage = sum / allMarks.length; // общая средняя

outputData.average = allAverage; //добавление свойства average в объект outputData и присвоение ему общей средней
return outputData;
}