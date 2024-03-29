"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

console.log("Задание 4:");
const a = inputVariable("Введите цифру 1 для сложения");
const b = inputVariable("Введите цифру 2 для сложения");
const sum = (a, b) => a + b;

const c = inputVariable("Введите цифру 1 для вычисления разности");
const d = inputVariable("Введите цифру 2 для вычисления разности");
const difference = (c, d) => Math.max(c, d) - Math.min(c, d);

const e = inputVariable("Введите цифру 1 для умножения");
const f = inputVariable("Введите цифру 2 для умножения");
const multiply = (e, f) => e * f;

const g = inputVariable("Введите цифру 1 для деления");
const h = inputVariable("Введите цифру 2 для деления");
const divide = (g, h) => (h === 0 ? "Делилм на ноль." : g / h);

console.log(`Сложение: ${sum(a, b)}`);
console.log(`Разность: ${difference(c, d)}`);
console.log(`Умножение: ${multiply(e, f)}`);
console.log(`Деление: ${divide(g, h)}`);

console.log("-------------------------------------");