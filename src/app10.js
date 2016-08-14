import {SqrCalc, Calculator} from './modules/calculatorOOP';
import {SqrCalcES6, CalculatorES6} from './modules/calculatorOOPES6';

/**
Взять калькулятор, который был сделан в контексте ДЗ от 9 июля.
Если ДЗ не сделано, то необходимо сделать.
Необходимо модифицировать калькулятор следующим образом:
Превратить калькулятор в Класс (конструктор + прототип)
Создать класс SqrCalc и унаследовать его от оригинального калькулятора.
SqrCalc должен расширять все методы оригинального калькулятора таким образом, чтобы возводить в квадрат результат всех расчетов. Например:

let myCalculator = new SqlCalc(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.div(2, 2)); //вернет 625
console.log(myCalculator.mul(2, 2)); //вернет 160 000


Обратите внимание, что не должно быть дублирования кода из методов оригинального калькулятора. Необходимо применить наследование.
Задачу необходимо выполнить в двух вариантах: ES5 и ES6
 */

let calculator = new SqrCalc(100);
let calculator6 = new SqrCalcES6(100);

console.group('ES5');
console.log(calculator.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(calculator.dif(10, 20)); //вернет 4 900
console.log(calculator.div(2, 2)); //вернет 625
console.log(calculator.mul(2, 2)); //вернет 160 000
console.groupEnd();

console.group('ES6');
console.log(calculator6.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(calculator6.dif(10, 20)); //вернет 4 900
console.log(calculator6.div(2, 2)); //вернет 625
console.log(calculator6.mul(2, 2)); //вернет 160 000
console.groupEnd();
