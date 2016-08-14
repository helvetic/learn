var app10 =
webpackJsonp_name_([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _calculatorOOP = __webpack_require__(112);

	var _calculatorOOPES = __webpack_require__(116);

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

	var calculator = new _calculatorOOP.SqrCalc(100);
	var calculator6 = new _calculatorOOPES.SqrCalcES6(100);

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

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _create = __webpack_require__(113);

	var _create2 = _interopRequireDefault(_create);

	exports.Calculator = Calculator;
	exports.SqrCalc = SqrCalc;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Calculator(firstNumber) {
	  this.firstNumber = firstNumber;
	}

	Calculator.prototype.sum = function () {
	  var result = 0;
	  for (var i = 0; i < arguments.length; i++) {
	    result += arguments[i];
	  }
	  return this.firstNumber + result;
	}, Calculator.prototype.dif = function () {
	  var result = 0;
	  for (var i = 0; i < arguments.length; i++) {
	    result += arguments[i];
	  }
	  return this.firstNumber - result;
	}, Calculator.prototype.div = function () {
	  var result = this.firstNumber;
	  for (var i = 0; i < arguments.length; i++) {
	    if (arguments[i] == 0) {
	      throw new SyntaxError("Деление на ноль не предусмотрено");
	    }
	    result /= arguments[i];
	  }
	  return result;
	}, Calculator.prototype.mul = function () {
	  var result = this.firstNumber;
	  for (var i = 0; i < arguments.length; i++) {
	    result *= arguments[i];
	  }
	  return result;
	};

	function SqrCalc() {
	  Calculator.apply(this, arguments);
	}

	SqrCalc.prototype = (0, _create2.default)(Calculator.prototype);

	SqrCalc.prototype.sum = function () {
	  var result = Calculator.prototype.sum.apply(this, arguments);
	  return result * result;
	};
	SqrCalc.prototype.dif = function () {
	  var result = Calculator.prototype.dif.apply(this, arguments);
	  return result * result;
	};
	SqrCalc.prototype.div = function () {
	  var result = Calculator.prototype.div.apply(this, arguments);
	  return result * result;
	};
	SqrCalc.prototype.mul = function () {
	  var result = Calculator.prototype.mul.apply(this, arguments);
	  return result * result;
	};

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	var $Object = __webpack_require__(13).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(11)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(40)});

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SqrCalcES6 = exports.CalculatorES6 = undefined;

	var _getPrototypeOf = __webpack_require__(117);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _possibleConstructorReturn2 = __webpack_require__(121);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _get2 = __webpack_require__(122);

	var _get3 = _interopRequireDefault(_get2);

	var _inherits2 = __webpack_require__(126);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(7);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CalculatorES6 = exports.CalculatorES6 = function () {
	  function CalculatorES6(firstNumber) {
	    (0, _classCallCheck3.default)(this, CalculatorES6);

	    this.firstNumber = firstNumber;
	  }

	  (0, _createClass3.default)(CalculatorES6, [{
	    key: "sum",
	    value: function sum() {
	      var result = 0;
	      for (var i = 0; i < arguments.length; i++) {
	        result += arguments[i];
	      }
	      return this.firstNumber + result;
	    }
	  }, {
	    key: "dif",
	    value: function dif() {
	      var result = 0;
	      for (var i = 0; i < arguments.length; i++) {
	        result += arguments[i];
	      }
	      return this.firstNumber - result;
	    }
	  }, {
	    key: "div",
	    value: function div() {
	      var result = this.firstNumber;
	      for (var i = 0; i < arguments.length; i++) {
	        if (arguments[i] == 0) {
	          throw new SyntaxError("Деление на ноль не предусмотрено");
	        }
	        result /= arguments[i];
	      }
	      return result;
	    }
	  }, {
	    key: "mul",
	    value: function mul() {
	      var result = this.firstNumber;
	      for (var i = 0; i < arguments.length; i++) {
	        result *= arguments[i];
	      }
	      return result;
	    }
	  }]);
	  return CalculatorES6;
	}();

	var SqrCalcES6 = exports.SqrCalcES6 = function (_CalculatorES) {
	  (0, _inherits3.default)(SqrCalcES6, _CalculatorES);

	  function SqrCalcES6(firstNumber) {
	    (0, _classCallCheck3.default)(this, SqrCalcES6);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SqrCalcES6).call(this, firstNumber));
	  }

	  (0, _createClass3.default)(SqrCalcES6, [{
	    key: "sum",
	    value: function sum() {
	      var result = (0, _get3.default)((0, _getPrototypeOf2.default)(SqrCalcES6.prototype), "sum", this).apply(this, arguments);
	      return result * result;
	    }
	  }, {
	    key: "dif",
	    value: function dif() {
	      var result = (0, _get3.default)((0, _getPrototypeOf2.default)(SqrCalcES6.prototype), "dif", this).apply(this, arguments);
	      return result * result;
	    }
	  }, {
	    key: "div",
	    value: function div() {
	      var result = (0, _get3.default)((0, _getPrototypeOf2.default)(SqrCalcES6.prototype), "div", this).apply(this, arguments);
	      return result * result;
	    }
	  }, {
	    key: "mul",
	    value: function mul() {
	      var result = (0, _get3.default)((0, _getPrototypeOf2.default)(SqrCalcES6.prototype), "mul", this).apply(this, arguments);
	      return result * result;
	    }
	  }]);
	  return SqrCalcES6;
		}(CalculatorES6);

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	module.exports = __webpack_require__(13).Object.getPrototypeOf;

/***/ },

/***/ 119:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(57);

	__webpack_require__(120)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(11)
	  , core    = __webpack_require__(13)
	  , fails   = __webpack_require__(22);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getPrototypeOf = __webpack_require__(117);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _getOwnPropertyDescriptor = __webpack_require__(123);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

	  if (desc === undefined) {
	    var parent = (0, _getPrototypeOf2.default)(object);

	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;

	    if (getter === undefined) {
	      return undefined;
	    }

	    return getter.call(receiver);
	  }
	};

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125);
	var $Object = __webpack_require__(13).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(44)
	  , $getOwnPropertyDescriptor = __webpack_require__(76).f;

	__webpack_require__(120)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(127);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(113);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(27);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(129);
	module.exports = __webpack_require__(13).Object.setPrototypeOf;

/***/ },

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(11);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(95).set});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDEwLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9jYWxjdWxhdG9yT09QLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9jYWxjdWxhdG9yT09QRVM2LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3FyQ2FsYywgQ2FsY3VsYXRvcn0gZnJvbSAnLi9tb2R1bGVzL2NhbGN1bGF0b3JPT1AnO1xyXG5pbXBvcnQge1NxckNhbGNFUzYsIENhbGN1bGF0b3JFUzZ9IGZyb20gJy4vbW9kdWxlcy9jYWxjdWxhdG9yT09QRVM2JztcclxuXHJcbi8qKlxyXG7QktC30Y/RgtGMINC60LDQu9GM0LrRg9C70Y/RgtC+0YAsINC60L7RgtC+0YDRi9C5INCx0YvQuyDRgdC00LXQu9Cw0L0g0LIg0LrQvtC90YLQtdC60YHRgtC1INCU0Jcg0L7RgiA5INC40Y7Qu9GPLlxyXG7QldGB0LvQuCDQlNCXINC90LUg0YHQtNC10LvQsNC90L4sINGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L4g0YHQtNC10LvQsNGC0YwuXHJcbtCd0LXQvtCx0YXQvtC00LjQvNC+INC80L7QtNC40YTQuNGG0LjRgNC+0LLQsNGC0Ywg0LrQsNC70YzQutGD0LvRj9GC0L7RgCDRgdC70LXQtNGD0Y7RidC40Lwg0L7QsdGA0LDQt9C+0Lw6XHJcbtCf0YDQtdCy0YDQsNGC0LjRgtGMINC60LDQu9GM0LrRg9C70Y/RgtC+0YAg0LIg0JrQu9Cw0YHRgSAo0LrQvtC90YHRgtGA0YPQutGC0L7RgCArINC/0YDQvtGC0L7RgtC40L8pXHJcbtCh0L7Qt9C00LDRgtGMINC60LvQsNGB0YEgU3FyQ2FsYyDQuCDRg9C90LDRgdC70LXQtNC+0LLQsNGC0Ywg0LXQs9C+INC+0YIg0L7RgNC40LPQuNC90LDQu9GM0L3QvtCz0L4g0LrQsNC70YzQutGD0LvRj9GC0L7RgNCwLlxyXG5TcXJDYWxjINC00L7Qu9C20LXQvSDRgNCw0YHRiNC40YDRj9GC0Ywg0LLRgdC1INC80LXRgtC+0LTRiyDQvtGA0LjQs9C40L3QsNC70YzQvdC+0LPQviDQutCw0LvRjNC60YPQu9GP0YLQvtGA0LAg0YLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCwg0YfRgtC+0LHRiyDQstC+0LfQstC+0LTQuNGC0Ywg0LIg0LrQstCw0LTRgNCw0YIg0YDQtdC30YPQu9GM0YLQsNGCINCy0YHQtdGFINGA0LDRgdGH0LXRgtC+0LIuINCd0LDQv9GA0LjQvNC10YA6XHJcblxyXG5sZXQgbXlDYWxjdWxhdG9yID0gbmV3IFNxbENhbGMoMTAwKTtcclxuXHJcbmNvbnNvbGUubG9nKG15Q2FsY3VsYXRvci5zdW0oMSwgMiwgMykpOyAvL9Cy0LXRgNC90LXRgiAxMSAyMzYgKDEwMCArIDEgKyAyICsgMyA9IDEwNiAqIDEwNilcclxuY29uc29sZS5sb2cobXlDYWxjdWxhdG9yLmRpZigxMCwgMjApKTsgLy/QstC10YDQvdC10YIgNCA5MDBcclxuY29uc29sZS5sb2cobXlDYWxjdWxhdG9yLmRpdigyLCAyKSk7IC8v0LLQtdGA0L3QtdGCIDYyNVxyXG5jb25zb2xlLmxvZyhteUNhbGN1bGF0b3IubXVsKDIsIDIpKTsgLy/QstC10YDQvdC10YIgMTYwIDAwMFxyXG5cclxuXHJcbtCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC00YPQsdC70LjRgNC+0LLQsNC90LjRjyDQutC+0LTQsCDQuNC3INC80LXRgtC+0LTQvtCyINC+0YDQuNCz0LjQvdCw0LvRjNC90L7Qs9C+INC60LDQu9GM0LrRg9C70Y/RgtC+0YDQsC4g0J3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC40LzQtdC90LjRgtGMINC90LDRgdC70LXQtNC+0LLQsNC90LjQtS5cclxu0JfQsNC00LDRh9GDINC90LXQvtCx0YXQvtC00LjQvNC+INCy0YvQv9C+0LvQvdC40YLRjCDQsiDQtNCy0YPRhSDQstCw0YDQuNCw0L3RgtCw0YU6IEVTNSDQuCBFUzZcclxuICovXHJcblxyXG5sZXQgY2FsY3VsYXRvciA9IG5ldyBTcXJDYWxjKDEwMCk7XHJcbmxldCBjYWxjdWxhdG9yNiA9IG5ldyBTcXJDYWxjRVM2KDEwMCk7XHJcblxyXG5jb25zb2xlLmdyb3VwKCdFUzUnKTtcclxuY29uc29sZS5sb2coY2FsY3VsYXRvci5zdW0oMSwgMiwgMykpOyAvL9Cy0LXRgNC90LXRgiAxMSAyMzYgKDEwMCArIDEgKyAyICsgMyA9IDEwNiAqIDEwNilcclxuY29uc29sZS5sb2coY2FsY3VsYXRvci5kaWYoMTAsIDIwKSk7IC8v0LLQtdGA0L3QtdGCIDQgOTAwXHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0b3IuZGl2KDIsIDIpKTsgLy/QstC10YDQvdC10YIgNjI1XHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0b3IubXVsKDIsIDIpKTsgLy/QstC10YDQvdC10YIgMTYwIDAwMFxyXG5jb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG5jb25zb2xlLmdyb3VwKCdFUzYnKTtcclxuY29uc29sZS5sb2coY2FsY3VsYXRvcjYuc3VtKDEsIDIsIDMpKTsgLy/QstC10YDQvdC10YIgMTEgMjM2ICgxMDAgKyAxICsgMiArIDMgPSAxMDYgKiAxMDYpXHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0b3I2LmRpZigxMCwgMjApKTsgLy/QstC10YDQvdC10YIgNCA5MDBcclxuY29uc29sZS5sb2coY2FsY3VsYXRvcjYuZGl2KDIsIDIpKTsgLy/QstC10YDQvdC10YIgNjI1XHJcbmNvbnNvbGUubG9nKGNhbGN1bGF0b3I2Lm11bCgyLCAyKSk7IC8v0LLQtdGA0L3QtdGCIDE2MCAwMDBcclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYXBwMTAuanNcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gQ2FsY3VsYXRvcihmaXJzdE51bWJlcil7XHJcbiAgdGhpcy5maXJzdE51bWJlciA9IGZpcnN0TnVtYmVyO1xyXG59XHJcblxyXG5cclxuQ2FsY3VsYXRvci5wcm90b3R5cGUuc3VtID0gZnVuY3Rpb24oKXtcclxuICB2YXIgcmVzdWx0ID0gMDtcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgIHJlc3VsdCArPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmZpcnN0TnVtYmVyICsgcmVzdWx0O1xyXG59LFxyXG5cclxuQ2FsY3VsYXRvci5wcm90b3R5cGUuZGlmID0gZnVuY3Rpb24oKXtcclxuICB2YXIgcmVzdWx0ID0gMDtcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgIHJlc3VsdCArPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzLmZpcnN0TnVtYmVyIC0gcmVzdWx0O1xyXG59LFxyXG5cclxuQ2FsY3VsYXRvci5wcm90b3R5cGUuZGl2ID0gZnVuY3Rpb24oKXtcclxuICB2YXIgcmVzdWx0ID0gdGhpcy5maXJzdE51bWJlcjtcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgIGlmKGFyZ3VtZW50c1tpXSA9PSAwKXtcclxuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwi0JTQtdC70LXQvdC40LUg0L3QsCDQvdC+0LvRjCDQvdC1INC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC+XCIpO1xyXG4gICAgfVxyXG4gICAgcmVzdWx0IC89IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufSxcclxuXHJcbkNhbGN1bGF0b3IucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uKCl7XHJcbiAgdmFyIHJlc3VsdCA9IHRoaXMuZmlyc3ROdW1iZXI7XHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICByZXN1bHQgKj0gYXJndW1lbnRzW2ldO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNxckNhbGMoKXtcclxuICBDYWxjdWxhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcblNxckNhbGMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDYWxjdWxhdG9yLnByb3RvdHlwZSk7XHJcblxyXG5TcXJDYWxjLnByb3RvdHlwZS5zdW0gPSBmdW5jdGlvbigpe1xyXG4gIHZhciByZXN1bHQgPSBDYWxjdWxhdG9yLnByb3RvdHlwZS5zdW0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICByZXR1cm4gcmVzdWx0ICogcmVzdWx0O1xyXG59XHJcblNxckNhbGMucHJvdG90eXBlLmRpZiA9IGZ1bmN0aW9uKCl7XHJcbiAgdmFyIHJlc3VsdCA9IENhbGN1bGF0b3IucHJvdG90eXBlLmRpZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIHJldHVybiByZXN1bHQgKiByZXN1bHQ7XHJcbn1cclxuU3FyQ2FsYy5wcm90b3R5cGUuZGl2ID0gZnVuY3Rpb24oKXtcclxuICB2YXIgcmVzdWx0ID0gQ2FsY3VsYXRvci5wcm90b3R5cGUuZGl2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgcmV0dXJuIHJlc3VsdCAqIHJlc3VsdDtcclxufVxyXG5TcXJDYWxjLnByb3RvdHlwZS5tdWwgPSBmdW5jdGlvbigpe1xyXG4gIHZhciByZXN1bHQgPSBDYWxjdWxhdG9yLnByb3RvdHlwZS5tdWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICByZXR1cm4gcmVzdWx0ICogcmVzdWx0O1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL2NhbGN1bGF0b3JPT1AuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExM1xuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDhcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXHJcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwiZXhwb3J0IGNsYXNzIENhbGN1bGF0b3JFUzZ7XHJcbiAgY29uc3RydWN0b3IoZmlyc3ROdW1iZXIpe1xyXG4gICAgdGhpcy5maXJzdE51bWJlciA9IGZpcnN0TnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgc3VtKCl7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICByZXN1bHQgKz0gYXJndW1lbnRzW2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROdW1iZXIgKyByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBkaWYoKXtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHJlc3VsdCArPSBhcmd1bWVudHNbaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5maXJzdE51bWJlciAtIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGRpdigpe1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZmlyc3ROdW1iZXI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgaWYoYXJndW1lbnRzW2ldID09IDApe1xyXG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcItCU0LXQu9C10L3QuNC1INC90LAg0L3QvtC70Ywg0L3QtSDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvlwiKTtcclxuICAgICAgfVxyXG4gICAgICByZXN1bHQgLz0gYXJndW1lbnRzW2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIG11bCgpe1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZmlyc3ROdW1iZXI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgcmVzdWx0ICo9IGFyZ3VtZW50c1tpXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNxckNhbGNFUzYgZXh0ZW5kcyBDYWxjdWxhdG9yRVM2e1xyXG4gIGNvbnN0cnVjdG9yKGZpcnN0TnVtYmVyKXtcclxuICAgIHN1cGVyKGZpcnN0TnVtYmVyKTtcclxuICB9XHJcbiAgc3VtKCl7XHJcbiAgICBsZXQgcmVzdWx0ID0gc3VwZXIuc3VtKC4uLmFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gcmVzdWx0ICogcmVzdWx0O1xyXG4gIH1cclxuICBkaWYoKXtcclxuICAgIGxldCByZXN1bHQgPSBzdXBlci5kaWYoLi4uYXJndW1lbnRzKTtcclxuICAgIHJldHVybiByZXN1bHQgKiByZXN1bHQ7XHJcbiAgfVxyXG4gIGRpdigpe1xyXG4gICAgbGV0IHJlc3VsdCA9IHN1cGVyLmRpdiguLi5hcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdCAqIHJlc3VsdDtcclxuICB9XHJcbiAgbXVsKCl7XHJcbiAgICBsZXQgcmVzdWx0ID0gc3VwZXIubXVsKC4uLmFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gcmVzdWx0ICogcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9jYWxjdWxhdG9yT09QRVM2LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDhcbiAqKi8iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDExOVxuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gOFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDhcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMlxuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gOFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNVxuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNlxuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSA4XG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDhcbiAqKi8iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDhcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUF5Q0E7QUFDQTs7O0FBMUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBOzs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbkJBOzs7Ozs7O0FDMUNBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckNBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9