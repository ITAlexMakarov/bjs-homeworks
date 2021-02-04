function getResult(a,b,c)   {
    "use strict";
    let D = (b ** 2) - (4 * a * c);
    let root = [];
    if (D < 0)  {
        return root;    //корней нет
    }   else if (D == 0) {
        let x_1 = ((-b) + (Math.sqrt(D))) / 2 * a;
        root.push(x_1);
        return root;    //один корень
    }   else if (D > 0) {
        let x_1 = ((-b) + (Math.sqrt(D))) / 2 * a;
        let x_2 = ((-b) - (Math.sqrt(D))) / 2 * a;
        root.push(x_1, x_2);    //два корня
        return root;
    }
}

function getAverageMark(marks){
    if (marks.length == 0)  {
        console.log(0);
    }   else if (marks.length > 5)  {
        marks.splice(5, 99999);
    }
    let count = marks.length;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = sum / count;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}