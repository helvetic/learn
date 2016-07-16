var app03 =
webpackJsonp_name_([1,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _isAllTrue = __webpack_require__(2);

	var _isAllTrue2 = _interopRequireDefault(_isAllTrue);

	var _isSomeTrue = __webpack_require__(3);

	var _isSomeTrue2 = _interopRequireDefault(_isSomeTrue);

	var _calculator = __webpack_require__(4);

	var _calculator2 = _interopRequireDefault(_calculator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isNumber(val) {
	  return typeof val === 'number';
	}

	function checkIsAllNumbers(array) {
	  console.log((0, _isAllTrue2.default)(array, isNumber), array);
	}

	function checkIsSomeNumbers(array) {
	  console.log((0, _isSomeTrue2.default)(array, isNumber), array);
	}

	console.group('isAllTrue');
	checkIsAllNumbers([1, 2, 3]);
	checkIsAllNumbers([1, 2, 'string']);
	checkIsAllNumbers(['not', 'a', 'numbers']);
	//checkIsAllNumbers([]);
	console.groupEnd();

	console.group('isSomeTrue');
	checkIsSomeNumbers([1, 2, 3]);
	checkIsSomeNumbers([1, 2, 'string']);
	checkIsSomeNumbers(['not', 'a', 'numbers']);
	//checkIsSomeNumbers([]);
	console.groupEnd();

	var myCalculator = (0, _calculator2.default)(100);

	console.group('calculator');
	console.log(myCalculator.sum(1, 2, 3)); //вернет 106
	console.log(myCalculator.dif(10, 20)); //вернет 70
	console.log(myCalculator.div(2, 2)); //вернет 25
	//console.log(myCalculator.div(1, 0, 3)); //вернет предупреждение
	console.log(myCalculator.mul(2, 2)); //вернет 400
	console.groupEnd();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAllTrue;
	function isAllTrue(source, filterFn) {

	  var length = source.length;

	  if (length == 0) {
	    throw new SyntaxError("Пустой массив");
	  }

	  for (var i = 0; i < length; i++) {
	    if (!filterFn(source[i])) {
	      return false;
	    }
	  }

	  return true;
		}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAllTrue;
	function isAllTrue(source, filterFn) {

	  var length = source.length;

	  if (length == 0) {
	    throw new SyntaxError("Пустой массив");
	  }

	  for (var i = 0; i < length; i++) {
	    if (filterFn(source[i])) {
	      return true;
	    }
	  }

	  return false;
		}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculator;
	function calculator(firstNumber) {
	  return {

	    sum: function sum() {
	      var result = 0;
	      for (var i = 0; i < arguments.length; i++) {
	        result += arguments[i];
	      }
	      return firstNumber + result;
	    },

	    dif: function dif() {
	      var result = 0;
	      for (var i = 0; i < arguments.length; i++) {
	        result += arguments[i];
	      }
	      return firstNumber - result;
	    },
	    div: function div() {
	      var result = firstNumber;
	      for (var i = 0; i < arguments.length; i++) {
	        if (arguments[i] == 0) {
	          throw new SyntaxError("Деление на ноль не предусмотрено");
	        }
	        result /= arguments[i];
	      }
	      return result;
	    },
	    mul: function mul() {
	      var result = firstNumber;
	      for (var i = 0; i < arguments.length; i++) {
	        result *= arguments[i];
	      }
	      return result;
	    }
	  };
		}

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDAzLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9pc0FsbFRydWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL2lzU29tZVRydWUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL2NhbGN1bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzQWxsVHJ1ZSBmcm9tICcuL21vZHVsZXMvaXNBbGxUcnVlJztcclxuaW1wb3J0IGlzU29tZVRydWUgZnJvbSAnLi9tb2R1bGVzL2lzU29tZVRydWUnO1xyXG5pbXBvcnQgY2FsY3VsYXRvciBmcm9tICcuL21vZHVsZXMvY2FsY3VsYXRvcic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJc0FsbE51bWJlcnMoYXJyYXkpe1xyXG4gIGNvbnNvbGUubG9nKGlzQWxsVHJ1ZShhcnJheSwgaXNOdW1iZXIpLCBhcnJheSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSXNTb21lTnVtYmVycyhhcnJheSl7XHJcbiAgY29uc29sZS5sb2coaXNTb21lVHJ1ZShhcnJheSwgaXNOdW1iZXIpLCBhcnJheSk7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc29sZS5ncm91cCgnaXNBbGxUcnVlJyk7XHJcbmNoZWNrSXNBbGxOdW1iZXJzKFsxLDIsM10pO1xyXG5jaGVja0lzQWxsTnVtYmVycyhbMSwyLCdzdHJpbmcnXSk7XHJcbmNoZWNrSXNBbGxOdW1iZXJzKFsnbm90JywnYScsJ251bWJlcnMnXSk7XHJcbi8vY2hlY2tJc0FsbE51bWJlcnMoW10pO1xyXG5jb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG5cclxuY29uc29sZS5ncm91cCgnaXNTb21lVHJ1ZScpO1xyXG5jaGVja0lzU29tZU51bWJlcnMoWzEsMiwzXSk7XHJcbmNoZWNrSXNTb21lTnVtYmVycyhbMSwyLCdzdHJpbmcnXSk7XHJcbmNoZWNrSXNTb21lTnVtYmVycyhbJ25vdCcsJ2EnLCdudW1iZXJzJ10pO1xyXG4vL2NoZWNrSXNTb21lTnVtYmVycyhbXSk7XHJcbmNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcblxyXG52YXIgbXlDYWxjdWxhdG9yID0gY2FsY3VsYXRvcigxMDApO1xyXG5cclxuY29uc29sZS5ncm91cCgnY2FsY3VsYXRvcicpO1xyXG5jb25zb2xlLmxvZyhteUNhbGN1bGF0b3Iuc3VtKDEsIDIsIDMpKTsgLy/QstC10YDQvdC10YIgMTA2XHJcbmNvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5kaWYoMTAsIDIwKSk7IC8v0LLQtdGA0L3QtdGCIDcwXHJcbmNvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5kaXYoMiwgMikpOyAvL9Cy0LXRgNC90LXRgiAyNVxyXG4vL2NvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5kaXYoMSwgMCwgMykpOyAvL9Cy0LXRgNC90LXRgiDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC1XHJcbmNvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5tdWwoMiwgMikpOyAvL9Cy0LXRgNC90LXRgiA0MDBcclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYXBwMDMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FsbFRydWUgKHNvdXJjZSwgZmlsdGVyRm4pe1xyXG5cclxuICBsZXQgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcclxuXHJcbiAgaWYobGVuZ3RoID09IDApe1xyXG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwi0J/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslwiKTtcclxuICB9XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcclxuICAgIGlmKCFmaWx0ZXJGbihzb3VyY2VbaV0pKXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcblxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9pc0FsbFRydWUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FsbFRydWUgKHNvdXJjZSwgZmlsdGVyRm4pe1xyXG5cclxuICBsZXQgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcclxuXHJcbiAgaWYobGVuZ3RoID09IDApe1xyXG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwi0J/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslwiKTtcclxuICB9XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKXtcclxuICAgIGlmKGZpbHRlckZuKHNvdXJjZVtpXSkpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxuXHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL2lzU29tZVRydWUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjdWxhdG9yIChmaXJzdE51bWJlcil7XHJcbiAgcmV0dXJuIHtcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgc3VtOiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgcmVzdWx0ICs9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmlyc3ROdW1iZXIgKyByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBkaWYoKXtcclxuICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHJlc3VsdCArPSBhcmd1bWVudHNbaV07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZpcnN0TnVtYmVyIC0gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgZGl2KCl7XHJcbiAgICAgIGxldCByZXN1bHQgPSBmaXJzdE51bWJlcjtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYoYXJndW1lbnRzW2ldID09IDApe1xyXG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwi0JTQtdC70LXQvdC40LUg0L3QsCDQvdC+0LvRjCDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgLz0gYXJndW1lbnRzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBtdWwoKXtcclxuICAgICAgbGV0IHJlc3VsdCA9IGZpcnN0TnVtYmVyO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICByZXN1bHQgKj0gYXJndW1lbnRzW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICB9O1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvY2FsY3VsYXRvci5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0NBO0FBZ0RBOzs7Iiwic291cmNlUm9vdCI6IiJ9