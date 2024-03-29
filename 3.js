"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

console.log("Задание 3:");
const num1 = inputVariable("Введите число 1");
const num2 = inputVariable("Введите число 2");
const num3 = inputVariable("Введите число 3");

const numArray = [num1, num2, num3];
const maxNum = (a) =>
    console.log(
        `Максимальное значение среди чисел ${a} равно ${Math.max(...a)}.`
    );

maxNum(numArray);
console.log("-------------------------------------");
