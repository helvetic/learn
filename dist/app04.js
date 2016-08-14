var app04 =
webpackJsonp_name_([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _arraysMethods = __webpack_require__(5);

	var _arraysMethods2 = _interopRequireDefault(_arraysMethods);

	var _deepEqual = __webpack_require__(26);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {_forEach, _filter, _map, _slice, _reduce, _splice} from './modules/arraysMethods';


	var array = new _arraysMethods2.default([1, 2, 3, 4, 5, 6]);
	var arr = [1, 2, 3, 4, 5, 6];

	function sliceCheck(begin, end) {
	  console.log(begin, end, array.slice(begin, end), arr.slice(begin, end));
	}

	console.group('forEach');
	array.forEach(function (item) {
	  console.log(item);
	});
	console.groupEnd();

	console.group('filter');
	console.log(array.filter(function (item) {
	  return item > 4;
	}));
	console.groupEnd();

	console.group('map');
	console.log(array.map(function (item) {
	  return item * item;
	}));
	console.groupEnd();

	console.group('slice');
	sliceCheck(1, 2);
	sliceCheck(3);
	sliceCheck();
	sliceCheck(-2, 2);
	sliceCheck(-1, 2);
	console.groupEnd();

	console.group('reduce');
	console.log(array.reduce(function (previousValue, currentValue, index, array) {
	  return previousValue + currentValue;
	}));
	console.log(array.reduce(function (previousValue, currentValue, index, array) {
	  return previousValue * currentValue;
	}));
	console.groupEnd();

	console.group('splice');
	console.log(1, 4, array.splice(1, 4, 'яблоко', 'груша'), arr.splice(1, 4, 'яблоко', 'груша'));
	console.log('return', array.array, arr);
	console.log(1, 0, array.splice(1, 0, 'яблоко'), arr.splice(1, 0, 'яблоко'));
	console.log('return', array.array, arr);
	console.log(3, 0, array.splice(3, 0), arr.splice(3, 0));
	console.log('return', array.array, arr);
	console.log(2, 10, array.splice(2, 10), arr.splice(2, 10));
	console.log('return', array.array, arr);
	console.log(-5, 4, array.splice(-5, 4, 'апельсин'), arr.splice(-5, 4, 'апельсин'));
	console.log('return', array.array, arr);
	console.groupEnd();

	/* speedtest */
	console.time('mine');
	array.splice(2, 3, 'апельсин', 'банан', 'манго');
	console.timeEnd('mine');
	console.time('splice');
	arr.splice(2, 3, 'апельсин', 'банан', 'манго');
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
	      subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5]
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
	      subSubProp2: [1, 2, { prop2: 1, prop: 2 }, 4, 5]
	    },
	    subProp1: 'sub value1'
	  }
	};

	console.group('deep equal');
	console.log((0, _deepEqual2.default)(objA, objB)); //объекты идентичны, вернет true
	console.groupEnd();

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _Array = function () {
	  function _Array(array) {
	    (0, _classCallCheck3.default)(this, _Array);

	    this.array = array;
	  }

	  (0, _createClass3.default)(_Array, [{
	    key: 'forEach',
	    value: function forEach(callback, thisArg) {
	      var array = thisArg || this.array;
	      for (var i = 0; i < array.length; i++) {
	        callback(array[i], i, array);
	      }
	    }
	  }, {
	    key: 'filter',
	    value: function filter(callback, thisArg) {
	      var array = thisArg || this.array;
	      var newArray = [];
	      for (var i = 0; i < array.length; i++) {
	        if (callback(array[i], i, array)) {
	          newArray[newArray.length] = array[i];
	        }
	      }
	      return newArray;
	    }
	  }, {
	    key: 'map',
	    value: function map(callback, thisArg) {
	      var array = thisArg || this.array;
	      var newArray = [];
	      for (var i = 0; i < array.length; i++) {
	        newArray[newArray.length] = callback(array[i], i, array);
	      }
	      return newArray;
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      var begin = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var end = arguments.length <= 1 || arguments[1] === undefined ? this.array.length : arguments[1];

	      var array = this.array;
	      var newArray = [];

	      if (begin < 0) {
	        begin = array.length + begin;
	      }

	      if (end > array.length) {
	        end = array.length;
	      }

	      for (var i = begin; i < end; i++) {
	        newArray[newArray.length] = array[i];
	      }

	      return newArray;
	    }
	  }, {
	    key: 'reduce',
	    value: function reduce(callback, initialValue) {
	      var array = this.array,
	          previousValue = void 0,
	          i = void 0;

	      if (arguments.length == 1) {
	        if (array.length == 0) {
	          throw new TypeError('Reduce of empty array with no initial value');
	        }
	        previousValue = array[0];
	        i = 1;
	      } else if (arguments.length == 2) {
	        previousValue = initialValue;
	        i = 0;
	      }

	      while (i < array.length) {
	        previousValue = callback(previousValue, array[i], i, array);
	        i++;
	      }

	      return previousValue;
	    }
	  }, {
	    key: 'splice',
	    value: function splice(start, deleteCount) {
	      var array = this.array;

	      var newArray = [],
	          cuttedArray = [],
	          arrayLength = array.length;

	      if (start > arrayLength) {
	        start = arrayLength;
	      } else if (start < -arrayLength) {
	        start = 0;
	      } else if (start < 0) {
	        start = arrayLength + start;
	      }

	      if (deleteCount + start > arrayLength) {
	        deleteCount = arrayLength - start;
	      }

	      for (var i = 0; i < start; i++) {
	        newArray[newArray.length] = array[i];
	      }

	      for (var _i = 2; _i < arguments.length; _i++) {
	        newArray[newArray.length] = arguments[_i];
	      }

	      for (var _i2 = start + deleteCount; _i2 < arrayLength; _i2++) {
	        newArray[newArray.length] = array[_i2];
	      }

	      for (var _i3 = start; _i3 < start + deleteCount; _i3++) {
	        cuttedArray[cuttedArray.length] = array[_i3];
	      }

	      this.array = newArray;
	      return cuttedArray;
	    }
	  }]);
	  return _Array;
	}();

		exports.default = _Array;

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.default = deepEqual;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function deepEqual(objA, objB) {
	  for (var key in objA) {

	    var type = (0, _typeof3.default)(objA[key]);

	    if (type === 'function') {
	      if (objA[key].toString() !== objB[key].toString()) return false;
	    } else if (type === 'object') {
	      if (objA[key] instanceof Date) {
	        if (objA[key].getTime() !== objB[key].getTime()) return false;
	      } else if (!deepEqual(objA[key], objB[key])) {
	        return false;
	      }
	    } else {
	      if (objA[key] !== objB[key] && objA[key] === objA[key]) return false;
	    }
	  }

	  return true;
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA0LmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9hcnJheXNNZXRob2RzLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9kZWVwRXF1YWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge19mb3JFYWNoLCBfZmlsdGVyLCBfbWFwLCBfc2xpY2UsIF9yZWR1Y2UsIF9zcGxpY2V9IGZyb20gJy4vbW9kdWxlcy9hcnJheXNNZXRob2RzJztcclxuaW1wb3J0IF9BcnJheSBmcm9tICcuL21vZHVsZXMvYXJyYXlzTWV0aG9kcyc7XHJcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAnLi9tb2R1bGVzL2RlZXBFcXVhbCc7XHJcblxyXG5cclxubGV0IGFycmF5ID0gbmV3IF9BcnJheShbMSwgMiwgMywgNCwgNSwgNl0pO1xyXG5sZXQgYXJyID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNsaWNlQ2hlY2soYmVnaW4sIGVuZCl7XHJcbiAgY29uc29sZS5sb2coYmVnaW4sZW5kLGFycmF5LnNsaWNlKGJlZ2luLGVuZCksYXJyLnNsaWNlKGJlZ2luLGVuZCkpO1xyXG59XHJcblxyXG5cclxuY29uc29sZS5ncm91cCgnZm9yRWFjaCcpO1xyXG5hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG59KTtcclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuY29uc29sZS5ncm91cCgnZmlsdGVyJyk7XHJcbmNvbnNvbGUubG9nKGFycmF5LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcclxuICByZXR1cm4gaXRlbSA+IDQ7XHJcbn0pKTtcclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuY29uc29sZS5ncm91cCgnbWFwJyk7XHJcbmNvbnNvbGUubG9nKGFycmF5Lm1hcChmdW5jdGlvbihpdGVtKXtcclxuICByZXR1cm4gaXRlbSppdGVtO1xyXG59KSk7XHJcbmNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbmNvbnNvbGUuZ3JvdXAoJ3NsaWNlJyk7XHJcbnNsaWNlQ2hlY2soMSwyKTtcclxuc2xpY2VDaGVjaygzKTtcclxuc2xpY2VDaGVjaygpO1xyXG5zbGljZUNoZWNrKC0yLDIpO1xyXG5zbGljZUNoZWNrKC0xLDIpO1xyXG5jb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG5jb25zb2xlLmdyb3VwKCdyZWR1Y2UnKTtcclxuY29uc29sZS5sb2coYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWU7XHJcbn0pKTtcclxuY29uc29sZS5sb2coYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKiBjdXJyZW50VmFsdWU7XHJcbn0pKTtcclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuY29uc29sZS5ncm91cCgnc3BsaWNlJyk7XHJcbmNvbnNvbGUubG9nKDEsNCxhcnJheS5zcGxpY2UoMSw0LCfRj9Cx0LvQvtC60L4nLCAn0LPRgNGD0YjQsCcpLGFyci5zcGxpY2UoMSw0LCfRj9Cx0LvQvtC60L4nLCAn0LPRgNGD0YjQsCcpKTtcclxuY29uc29sZS5sb2coJ3JldHVybicsYXJyYXkuYXJyYXksYXJyKTtcclxuY29uc29sZS5sb2coMSwwLGFycmF5LnNwbGljZSgxLDAsJ9GP0LHQu9C+0LrQvicpLGFyci5zcGxpY2UoMSwwLCfRj9Cx0LvQvtC60L4nKSk7XHJcbmNvbnNvbGUubG9nKCdyZXR1cm4nLGFycmF5LmFycmF5LGFycik7XHJcbmNvbnNvbGUubG9nKDMsMCxhcnJheS5zcGxpY2UoMywwKSxhcnIuc3BsaWNlKDMsMCkpO1xyXG5jb25zb2xlLmxvZygncmV0dXJuJyxhcnJheS5hcnJheSxhcnIpO1xyXG5jb25zb2xlLmxvZygyLDEwLGFycmF5LnNwbGljZSgyLDEwKSxhcnIuc3BsaWNlKDIsMTApKTtcclxuY29uc29sZS5sb2coJ3JldHVybicsYXJyYXkuYXJyYXksYXJyKTtcclxuY29uc29sZS5sb2coLTUsNCxhcnJheS5zcGxpY2UoLTUsNCwn0LDQv9C10LvRjNGB0LjQvScpLGFyci5zcGxpY2UoLTUsNCwn0LDQv9C10LvRjNGB0LjQvScpKTtcclxuY29uc29sZS5sb2coJ3JldHVybicsYXJyYXkuYXJyYXksYXJyKTtcclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuXHJcbi8qIHNwZWVkdGVzdCAqL1xyXG5jb25zb2xlLnRpbWUoJ21pbmUnKTtcclxuYXJyYXkuc3BsaWNlKDIsMywn0LDQv9C10LvRjNGB0LjQvScsJ9Cx0LDQvdCw0L0nLCfQvNCw0L3Qs9C+Jyk7XHJcbmNvbnNvbGUudGltZUVuZCgnbWluZScpO1xyXG5jb25zb2xlLnRpbWUoJ3NwbGljZScpO1xyXG5hcnIuc3BsaWNlKDIsMywn0LDQv9C10LvRjNGB0LjQvScsJ9Cx0LDQvdCw0L0nLCfQvNCw0L3Qs9C+Jyk7XHJcbmNvbnNvbGUudGltZUVuZCgnc3BsaWNlJyk7XHJcblxyXG5cclxuLypkZWVwRXF1YWwqL1xyXG5cclxudmFyIG9iakEgPSB7XHJcbiAgcHJvcDE6ICd2YWx1ZTEnLFxyXG4gIHByb3AyOiAndmFsdWUyJyxcclxuICBwcm9wMzogJ3ZhbHVlMycsXHJcbiAgcHJvcDQ6IHtcclxuICAgIHN1YlByb3AxOiAnc3ViIHZhbHVlMScsXHJcbiAgICBzdWJQcm9wMjoge1xyXG4gICAgICBzdWJTdWJQcm9wMTogJ3N1YiBzdWIgdmFsdWUxJyxcclxuICAgICAgc3ViU3ViUHJvcDI6IFsxLCAyLCB7cHJvcDI6IDEsIHByb3A6IDJ9LCA0LCA1XVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcDU6IDEwMDAsXHJcbiAgcHJvcDY6IG5ldyBEYXRlKDIwMTYsIDIsIDEwKVxyXG59O1xyXG5cclxudmFyIG9iakIgPSB7XHJcbiAgcHJvcDU6IDEwMDAsXHJcbiAgcHJvcDM6ICd2YWx1ZTMnLFxyXG4gIHByb3AxOiAndmFsdWUxJyxcclxuICBwcm9wMjogJ3ZhbHVlMicsXHJcbiAgcHJvcDY6IG5ldyBEYXRlKCcyMDE2LzAzLzEwJyksXHJcbiAgcHJvcDQ6IHtcclxuICAgIHN1YlByb3AyOiB7XHJcbiAgICAgIHN1YlN1YlByb3AxOiAnc3ViIHN1YiB2YWx1ZTEnLFxyXG4gICAgICBzdWJTdWJQcm9wMjogWzEsIDIsIHtwcm9wMjogMSwgcHJvcDogMn0sIDQsIDVdXHJcbiAgICB9LFxyXG4gICAgc3ViUHJvcDE6ICdzdWIgdmFsdWUxJ1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5jb25zb2xlLmdyb3VwKCdkZWVwIGVxdWFsJyk7XHJcbmNvbnNvbGUubG9nKGRlZXBFcXVhbChvYmpBLCBvYmpCKSk7IC8v0L7QsdGK0LXQutGC0Ysg0LjQtNC10L3RgtC40YfQvdGLLCDQstC10YDQvdC10YIgdHJ1ZVxyXG5jb25zb2xlLmdyb3VwRW5kKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FwcDA0LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0FycmF5IHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yIChhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IGFycmF5XHJcbiAgfVxyXG5cclxuXHJcbiAgZm9yRWFjaCAoY2FsbGJhY2ssIHRoaXNBcmcpe1xyXG4gICAgbGV0IGFycmF5ID0gdGhpc0FyZyB8fCB0aGlzLmFycmF5O1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgY2FsbGJhY2soYXJyYXlbaV0sIGksIGFycmF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmaWx0ZXIgKGNhbGxiYWNrLCB0aGlzQXJnKXtcclxuICAgIGxldCBhcnJheSA9IHRoaXNBcmcgfHwgdGhpcy5hcnJheTtcclxuICAgIGxldCBuZXdBcnJheSA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgaWYoY2FsbGJhY2soYXJyYXlbaV0sIGksIGFycmF5KSl7XHJcbiAgICAgICAgbmV3QXJyYXlbbmV3QXJyYXkubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbWFwIChjYWxsYmFjaywgdGhpc0FyZyl7XHJcbiAgICBsZXQgYXJyYXkgPSB0aGlzQXJnIHx8IHRoaXMuYXJyYXk7XHJcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIG5ld0FycmF5W25ld0FycmF5Lmxlbmd0aF0gPSBjYWxsYmFjayhhcnJheVtpXSwgaSwgYXJyYXkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gIH1cclxuXHJcblxyXG4gIHNsaWNlIChiZWdpbiA9IDAsIGVuZCA9IHRoaXMuYXJyYXkubGVuZ3RoKXtcclxuICAgIGxldCBhcnJheSA9IHRoaXMuYXJyYXk7XHJcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcclxuXHJcbiAgICBpZihiZWdpbiA8IDApe1xyXG4gICAgICBiZWdpbiA9IGFycmF5Lmxlbmd0aCArIGJlZ2luO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGVuZCA+IGFycmF5Lmxlbmd0aCl7XHJcbiAgICAgIGVuZCA9IGFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGkgPSBiZWdpbjsgaSA8IGVuZDsgaSsrKXtcclxuICAgICAgbmV3QXJyYXlbbmV3QXJyYXkubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXdBcnJheTtcclxuICB9XHJcblxyXG5cclxuICByZWR1Y2UgKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpe1xyXG4gICAgbGV0IGFycmF5ID0gdGhpcy5hcnJheSwgcHJldmlvdXNWYWx1ZSwgaTtcclxuXHJcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG4gICAgICBpZihhcnJheS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIHByZXZpb3VzVmFsdWUgPSBhcnJheVswXTtcclxuICAgICAgaSA9IDE7XHJcbiAgICB9ZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKXtcclxuICAgICAgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgaSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUoaSA8IGFycmF5Lmxlbmd0aCl7XHJcbiAgICAgIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhwcmV2aW91c1ZhbHVlLCBhcnJheVtpXSwgaSwgYXJyYXkpO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3BsaWNlIChzdGFydCwgZGVsZXRlQ291bnQpe1xyXG4gICAgbGV0IGFycmF5ID0gdGhpcy5hcnJheTtcclxuXHJcbiAgICBsZXQgbmV3QXJyYXkgPSBbXSxcclxuICAgICAgICBjdXR0ZWRBcnJheSA9IFtdLFxyXG4gICAgICAgIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICAgIGlmKHN0YXJ0ID4gYXJyYXlMZW5ndGgpe1xyXG4gICAgICBzdGFydCA9IGFycmF5TGVuZ3RoO1xyXG4gICAgfWVsc2UgaWYoc3RhcnQgPCAtYXJyYXlMZW5ndGgpe1xyXG4gICAgICBzdGFydCA9IDA7XHJcbiAgICB9ZWxzZSBpZihzdGFydCA8IDApIHtcclxuICAgICAgc3RhcnQgPSBhcnJheUxlbmd0aCArIHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKChkZWxldGVDb3VudCArIHN0YXJ0KSA+IGFycmF5TGVuZ3RoKXtcclxuICAgICAgZGVsZXRlQ291bnQgPSBhcnJheUxlbmd0aCAtIHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGFydDsgaSsrKXtcclxuICAgICAgbmV3QXJyYXlbbmV3QXJyYXkubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBuZXdBcnJheVtuZXdBcnJheS5sZW5ndGhdID0gYXJndW1lbnRzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7IGkgPCBhcnJheUxlbmd0aDsgaSsrKXtcclxuICAgICAgbmV3QXJyYXlbbmV3QXJyYXkubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IHN0YXJ0OyBpIDwgc3RhcnQgKyBkZWxldGVDb3VudDsgaSsrKXtcclxuICAgICAgY3V0dGVkQXJyYXlbY3V0dGVkQXJyYXkubGVuZ3RoXSA9IGFycmF5W2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXJyYXkgPSBuZXdBcnJheTtcclxuICAgIHJldHVybiBjdXR0ZWRBcnJheTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL2FycmF5c01ldGhvZHMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWVwRXF1YWwob2JqQSwgb2JqQil7XHJcbiAgZm9yKGxldCBrZXkgaW4gb2JqQSl7XHJcblxyXG4gICAgbGV0IHR5cGUgPSB0eXBlb2Ygb2JqQVtrZXldO1xyXG5cclxuICAgIGlmKHR5cGUgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICBpZihvYmpBW2tleV0udG9TdHJpbmcoKSAhPT0gb2JqQltrZXldLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1lbHNlIGlmKHR5cGUgPT09ICdvYmplY3QnKXtcclxuICAgICAgaWYob2JqQVtrZXldIGluc3RhbmNlb2YgRGF0ZSl7XHJcbiAgICAgICAgaWYob2JqQVtrZXldLmdldFRpbWUoKSAhPT0gb2JqQltrZXldLmdldFRpbWUoKSlcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfWVsc2UgaWYoIWRlZXBFcXVhbChvYmpBW2tleV0sb2JqQltrZXldKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGlmKG9iakFba2V5XSAhPT0gb2JqQltrZXldICYmIG9iakFba2V5XSA9PT0gb2JqQVtrZXldKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9kZWVwRXF1YWwuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQ0E7QUFaQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFOQTtBQUNBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBdEhBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=