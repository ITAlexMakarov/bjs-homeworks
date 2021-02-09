"use strict";
function getResult(a,b,c)   {
    let D = (b ** 2) - (4 * a * c);
    let root = [];
    if (D == 0) {
        let x_1 = ((-b) + (Math.sqrt(D))) / 2 * a;
        root.push(x_1);    //один корень
    }   else if (D > 0) {
        let x_1 = ((-b) + (Math.sqrt(D))) / 2 * a;
        let x_2 = ((-b) - (Math.sqrt(D))) / 2 * a;
        root.push(x_1, x_2);    //два корня
    }
    return root;
}

function getAverageMark(marks){
    if (marks.length == 0)  {
        return 0;
    }   else if (marks.length > 5)  {
        marks.splice(5);
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}