//import {_forEach, _filter, _map, _slice, _reduce, _splice} from './modules/arraysMethods';
import _Array from './modules/arraysMethods';
import deepEqual from './modules/deepEqual';


let array = new _Array([1, 2, 3, 4, 5, 6]);
let arr = [1, 2, 3, 4, 5, 6];


function sliceCheck(begin, end){
  console.log(begin,end,array.slice(begin,end),arr.slice(begin,end));
}


console.group('forEach');
array.forEach(function(item){
  console.log(item);
});
console.groupEnd();

console.group('filter');
console.log(array.filter(function(item){
  return item > 4;
}));
console.groupEnd();

console.group('map');
console.log(array.map(function(item){
  return item*item;
}));
console.groupEnd();

console.group('slice');
sliceCheck(1,2);
sliceCheck(3);
sliceCheck();
sliceCheck(-2,2);
sliceCheck(-1,2);
console.groupEnd();

console.group('reduce');
console.log(array.reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}));
console.log(array.reduce(function(previousValue, currentValue, index, array) {
  return previousValue * currentValue;
}));
console.groupEnd();

console.group('splice');
console.log(1,4,array.splice(1,4,'яблоко', 'груша'),arr.splice(1,4,'яблоко', 'груша'));
console.log('return',array.array,arr);
console.log(1,0,array.splice(1,0,'яблоко'),arr.splice(1,0,'яблоко'));
console.log('return',array.array,arr);
console.log(3,0,array.splice(3,0),arr.splice(3,0));
console.log('return',array.array,arr);
console.log(2,10,array.splice(2,10),arr.splice(2,10));
console.log('return',array.array,arr);
console.log(-5,4,array.splice(-5,4,'апельсин'),arr.splice(-5,4,'апельсин'));
console.log('return',array.array,arr);
console.groupEnd();


/* speedtest */
console.time('mine');
array.splice(2,3,'апельсин','банан','манго');
console.timeEnd('mine');
console.time('splice');
arr.splice(2,3,'апельсин','банан','манго');
console.timeEnd('splice');


/*deepEqual*/

var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10)
};

var objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop6: new Date('2016/03/10'),
  prop4: {
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
    },
    subProp1: 'sub value1'
  }
};


console.group('deep equal');
console.log(deepEqual(objA, objB)); //объекты идентичны, вернет true
console.groupEnd();