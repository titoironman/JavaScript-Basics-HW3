"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

console.log("Результат:");
const number = inputVariable("Введите число");
if (number != 0) {
    console.log(number ** 3);
} else 
console.log("Введите число не равное '0'");

function inputNumber(data) {
    return prompt(data);
}

function inputVariable(data) {
    while (true) {
        let number = inputNumber(data);
        if (!isNaN(number)) {
            return +number;
        }
        console.log("Ошибка, введите число!");
    }
}
