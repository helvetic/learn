import isAllTrue from './modules/isAllTrue';
import isSomeTrue from './modules/isSomeTrue';
import calculator from './modules/calculator';



function isNumber(val) {
  return typeof val === 'number';
}

function checkIsAllNumbers(array){
  console.log(isAllTrue(array, isNumber), array);
}

function checkIsSomeNumbers(array){
  console.log(isSomeTrue(array, isNumber), array);
}



console.group('isAllTrue');
checkIsAllNumbers([1,2,3]);
checkIsAllNumbers([1,2,'string']);
checkIsAllNumbers(['not','a','numbers']);
//checkIsAllNumbers([]);
console.groupEnd();


console.group('isSomeTrue');
checkIsSomeNumbers([1,2,3]);
checkIsSomeNumbers([1,2,'string']);
checkIsSomeNumbers(['not','a','numbers']);
//checkIsSomeNumbers([]);
console.groupEnd();


var myCalculator = calculator(100);

console.group('calculator');
console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
//console.log(myCalculator.div(1, 0, 3)); //вернет предупреждение
console.log(myCalculator.mul(2, 2)); //вернет 400
console.groupEnd();
