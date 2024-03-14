"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

console.log("Задание 1:");
const number = inputVariable("Введите число");
if (number != 0) {
    console.log(`${number} в квадрате = ${number ** 3}.`);
} else 
console.log("Введите число не равное '0'");

console.log("-------------------------------------");

function inputNumber(data) {
    return prompt(data, "").replace(",", ".");
}

function inputVariable(data) {
    while (true) {
        const number = inputNumber(data);
        if (!isNaN(number)) {
            return +number;
        }
        console.log("Ошибка, введите число!");
    }
}
