var app08 =
webpackJsonp_name_([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(104);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _cookie = __webpack_require__(106);

	var _dragNDrop = __webpack_require__(84);

	var _dragNDrop2 = _interopRequireDefault(_dragNDrop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	ДЗ 1:
	Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
	Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

	ДЗ 2:
	К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
	Список текстовых полей:
	- имя
	- значение
	- срок годности (количество дней)

	После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.

	После добавление cookie, значения текстовых полей формы должны быть очищены.
	Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
	Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы

	ДЗ 3 (со звездочкой):
	Взять результат ДЗ по теме DOM Events (страница с кнопкой для создания div'ов, которые можно перетаскивать при помощи D&D)
	Добавить на страницу кнопку "сохранить". При нажатии на данную кнопку, количество, цвет и позиция всех div'ов должны быть сохранены в одну cookie.
	После перезагрузки страницы, необходимо достать эту информацию из cookie и восстановить все div'ы (с их размерами, позицией и цветами)
	 */

	// document.cookie = "name=NYAN";
	// document.cookie = "type=CAT";

	(0, _cookie.cookie)();

	var dnd = new _dragNDrop.Dnd('#create_square');
	var squares = (0, _cookie.getCookie)('squares'),
	    squaresJSON = void 0;
	if (squares) {
	  squaresJSON = JSON.parse((0, _cookie.getCookie)('squares'));
	  squaresJSON.forEach(function (el) {
	    dnd.createSquare(el);
	  });
	}

	save_square.addEventListener('click', function () {
	  console.log(dnd.squaresData);
	  document.querySelectorAll('.drag-square');
	  (0, _cookie.setCookie)('squares', (0, _stringify2.default)(dnd.squaresData));
	});

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(13)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(107);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.cookie = cookie;
	exports.setCookie = setCookie;
	exports.getCookie = getCookie;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 *
	 Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
	 Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.

	 К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
	 Список текстовых полей:
	 - имя
	 - значение
	 - срок годности (количество дней)

	 После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.

	 После добавление cookie, значения текстовых полей формы должны быть очищены.
	 Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
	 Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы
	 */
	function cookie() {

	  var cookieTable = drawCookieTable();

	  cookieTable.addEventListener('click', function (e) {
	    if (e.target.dataset.action == 'delete') {
	      if (deleteCookie(e.target.dataset.cookie)) {
	        e.target.parentNode.parentNode.remove();
	      }
	    }
	  });

	  add_cookie_form.addEventListener('submit', function (e) {
	    e.preventDefault();

	    var obj = {};

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = (0, _getIterator3.default)(this), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var input = _step.value;

	        if (input.localName == 'input') {
	          if (input.value === '') {
	            alert('Заполните все поля');
	            return;
	          } else {
	            obj[input.name] = input.value;
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = (0, _getIterator3.default)(this), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _input = _step2.value;

	        if (_input.localName == 'input') {
	          _input.value = '';
	        }
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    addCookie(obj['cookie-name'], obj['cookie-value'], obj['cookie-expires']);
	  });
	}

	function setCookie(name, value) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

	  var optionsSeparator = options ? '; ' : '';
	  console.log('setCookie', name + '=' + value + ';path=/' + optionsSeparator + options);
	  document.cookie = name + '=' + value + ';path=/' + optionsSeparator + options;
	}

	function getCookie(name) {
	  var result = document.cookie.split('; ').find(function (cookieRow) {
	    var cookieRowArray = cookieRow.split('=');
	    if (cookieRowArray[0] == name) {
	      return cookieRowArray[1];
	    }
	  });
	  if (result) {
	    return result.split('=')[1];
	  }
	}

	function drawCookieTable() {
	  var cookieArray = cookieSplit();
	  var cookieRows = cookieToTable(cookieArray);
	  var cookieTable = document.createElement('table');

	  cookieTable.innerHTML = cookieRows;
	  cookieTable.setAttribute("id", "cookie_table");
	  document.body.appendChild(cookieTable);

	  return cookieTable;
	}

	function cookieSplit() {
	  var cookieArray = [];

	  document.cookie.split('; ').forEach(function (cookieRow) {
	    var cookieRowArray = cookieRow.split('=');
	    var obj = {
	      'key': cookieRowArray[0],
	      'val': cookieRowArray[1]
	    };
	    if (obj.key != '') cookieArray.push(obj);
	  });
	  return cookieArray;
	}

	function cookieToTable(cookieArray) {
	  var cookieRows = '';

	  cookieArray.forEach(function (cookieRow) {
	    cookieRows += '<tr>';
	    cookieRows += '<td>' + cookieRow.key + '</td>';
	    cookieRows += '<td>' + cookieRow.val + '</td>';
	    cookieRows += '<td><button data-action="delete" data-cookie="' + cookieRow.key + '">X</button></td>';
	    cookieRows += '</tr>';
	  });

	  return cookieRows;
	}

	function addCookie(name, value, expires) {
	  var date = new Date();
	  date.setDate(date.getDate() + Number(expires));
	  setCookie(name, value, 'expires=' + date.toUTCString());
	  cookie_table.remove();
	  drawCookieTable();
	}

	function deleteCookie(name) {
	  if (confirm('Удалить ' + name + '?')) {
	    var date = new Date(0);
	    date = date.toUTCString();
	    var path = window.location.pathname;
	    console.log(path);
	    document.cookie = name + '=; path=/; expires=' + date;
	    console.log(name + '=; path=' + path + '; expires=' + date);
	    return true;
	  }
	}

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(30);
	module.exports = __webpack_require__(109);

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(18)
	  , get      = __webpack_require__(94);
	module.exports = __webpack_require__(13).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA4LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb29raWUsIHNldENvb2tpZSwgZ2V0Q29va2llfSBmcm9tICcuL21vZHVsZXMvY29va2llJztcclxuaW1wb3J0IGRyYWdORHJvcCwge0RuZH0gZnJvbSAnLi9tb2R1bGVzL2RyYWdORHJvcCc7XHJcblxyXG4vKipcclxu0JTQlyAxOlxyXG7QodC+0LfQtNCw0YLRjCDRgdGC0YDQsNC90LjRhtGDLCDQutC+0YLQvtGA0LDRjyDQstGL0LLQvtC00LjRgiDQstGB0LUg0LjQvNC10Y7RidC40LXRgdGPIGNvb2tpZSDQsiDQstC40LTQtSDRgtCw0LHQu9C40YbRiyAo0LjQvNGPLCDQt9C90LDRh9C10L3QuNC1KS5cclxu0JTQu9GPINC60LDQttC00L7QuSBjb29raWUg0LIg0YLQsNCx0LvQuNGG0LUsINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7QsdCw0LLQuNGC0Ywg0LrQvdC+0L/QutGDIFwi0YPQtNCw0LvQuNGC0YxcIiwg0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAgXCLRg9C00LDQu9C40YLRjFwiLCDQvdCwINGN0LrRgNCw0L0g0LTQvtC70LbQtdC9INCx0YvRgtGMINCy0YvQstC10LTQtdC9IGNvbmZpcm0g0YEg0YLQtdC60YHRgtC+0LwgXCLQo9C00LDQu9C40YLRjCBjb29raWUg0YEg0LjQvNC10L3QtdC8IOKApj9cIi4g0JLQvNC10YHRgtC+IOKApiDQvdC10L7QsdGF0L7QtNC40LzQviDQv9C+0LTRgdGC0LDQstC40YLRjCDQuNC80Y8g0YPQtNCw0LvRj9C10LzQvtC5IGNvb2tpZS4g0JXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC+0YLQstC10YLQuNC7INC/0L7Qu9C+0LbQuNGC0LXQu9GM0L3Qviwg0YLQviDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidCw0Y8gY29va2llINC00L7Qu9C20L3QsCDQsdGL0YLRjCDRg9C00LDQu9C10L3QsC5cclxuXHJcbtCU0JcgMjpcclxu0Jog0YHRgtGA0LDQvdC40YfQutC1INC40Lcg0L/RgNC10LTRi9C00YPRidC10LPQviDQt9Cw0LTQsNC90LjRjyDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LHQsNCy0LjRgtGMINGE0L7RgNC80YMg0YEg0YLQtdC60YHRgtC+0LLRi9C80Lgg0L/QvtC70Y/QvNC4INC4INC60L3QvtC/0LrQvtC5IFwi0LTQvtCx0LDQstC40YLRjFwiLlxyXG7QodC/0LjRgdC+0Log0YLQtdC60YHRgtC+0LLRi9GFINC/0L7Qu9C10Lk6XHJcbi0g0LjQvNGPXHJcbi0g0LfQvdCw0YfQtdC90LjQtVxyXG4tINGB0YDQvtC6INCz0L7QtNC90L7RgdGC0LggKNC60L7Qu9C40YfQtdGB0YLQstC+INC00L3QtdC5KVxyXG5cclxu0J/QvtGB0LvQtSDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L3QvtC/0LrRgyBcItC00L7QsdCw0LLQuNGC0YxcIiDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAgKNC4INC00L7QsdCw0LLQu9C10L3QsCDQsiDRgtCw0LHQu9C40YbRgykg0L3QvtCy0LDRjyBjb29raWUg0YEg0YPQutCw0LfQsNC90L3Ri9C80Lgg0L/QsNGA0LDQvNC10YLRgNCw0LzQuC4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LIg0L/QvtC70LUgXCLRgdGA0L7QuiDQs9C+0LTQvdC+0YHRgtC4XCIg0YPQutCw0LfRi9Cy0LDQtdGC0YHRjyDQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuSAo0L3QsNGH0LjQvdCw0Y8g0YEg0YLQtdC60YPRidC10LPQviksINC90LAg0L/RgNC+0YLRj9C20LXQvdC40Lgg0LrQvtGC0L7RgNGL0YUg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QvdCwIGNvb2tpZS5cclxuXHJcbtCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40LUgY29va2llLCDQt9C90LDRh9C10L3QuNGPINGC0LXQutGB0YLQvtCy0YvRhSDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0LTQvtC70LbQvdGLINCx0YvRgtGMINC+0YfQuNGJ0LXQvdGLLlxyXG7QldGB0LvQuCDQutCw0LrQvtC1LdGC0L4g0LjQtyDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0L3QtSDQt9Cw0L/QvtC70L3QtdC90L4sINGC0L4sINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyBcItC00L7QsdCw0LLQuNGC0YxcIiwgY29va2llINC90LUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGB0L7Qt9C00LDQvdCwLCDQsCDQvdCwINGN0LrRgNCw0L0g0LTQvtC70LbQtdC9INCx0YvRgtGMINCy0YvQstC10LTQtdC9IGFsZXJ0INGBINC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LXQvCBcItCX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8g0YTQvtGA0LzRi1wiLlxyXG7QotCw0Log0LbQtSDQt9Cw0LzQtdGC0YzRgtC1LCDRh9GC0L4g0L/RgNC4INGA0LDQsdC+0YLQtSDRgSDRhNC+0YDQvNC+0Lkg0Lgg0YLQsNCx0LvQuNGG0LXQuSwg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQvtC6INGB0YLRgNCw0L3QuNGG0YtcclxuXHJcbtCU0JcgMyAo0YHQviDQt9Cy0LXQt9C00L7Rh9C60L7QuSk6XHJcbtCS0LfRj9GC0Ywg0YDQtdC30YPQu9GM0YLQsNGCINCU0Jcg0L/QviDRgtC10LzQtSBET00gRXZlbnRzICjRgdGC0YDQsNC90LjRhtCwINGBINC60L3QvtC/0LrQvtC5INC00LvRjyDRgdC+0LfQtNCw0L3QuNGPIGRpdifQvtCyLCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INC/0LXRgNC10YLQsNGB0LrQuNCy0LDRgtGMINC/0YDQuCDQv9C+0LzQvtGJ0LggRCZEKVxyXG7QlNC+0LHQsNCy0LjRgtGMINC90LAg0YHRgtGA0LDQvdC40YbRgyDQutC90L7Qv9C60YMgXCLRgdC+0YXRgNCw0L3QuNGC0YxcIi4g0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LTQsNC90L3Rg9GOINC60L3QvtC/0LrRgywg0LrQvtC70LjRh9C10YHRgtCy0L4sINGG0LLQtdGCINC4INC/0L7Qt9C40YbQuNGPINCy0YHQtdGFIGRpdifQvtCyINC00L7Qu9C20L3RiyDQsdGL0YLRjCDRgdC+0YXRgNCw0L3QtdC90Ysg0LIg0L7QtNC90YMgY29va2llLlxyXG7Qn9C+0YHQu9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLLCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0YHRgtCw0YLRjCDRjdGC0YMg0LjQvdGE0L7RgNC80LDRhtC40Y4g0LjQtyBjb29raWUg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINCy0YHQtSBkaXYn0YsgKNGBINC40YUg0YDQsNC30LzQtdGA0LDQvNC4LCDQv9C+0LfQuNGG0LjQtdC5INC4INGG0LLQtdGC0LDQvNC4KVxyXG4gKi9cclxuXHJcblxyXG4vLyBkb2N1bWVudC5jb29raWUgPSBcIm5hbWU9TllBTlwiO1xyXG4vLyBkb2N1bWVudC5jb29raWUgPSBcInR5cGU9Q0FUXCI7XHJcblxyXG5jb29raWUoKTtcclxuXHJcbmxldCBkbmQgPSBuZXcgRG5kKCcjY3JlYXRlX3NxdWFyZScpO1xyXG5sZXQgc3F1YXJlcyA9IGdldENvb2tpZSgnc3F1YXJlcycpLCBzcXVhcmVzSlNPTjtcclxuaWYoc3F1YXJlcyl7XHJcbiAgc3F1YXJlc0pTT04gPSBKU09OLnBhcnNlKGdldENvb2tpZSgnc3F1YXJlcycpKTtcclxuICBzcXVhcmVzSlNPTi5mb3JFYWNoKGVsID0+IHtcclxuICAgIGRuZC5jcmVhdGVTcXVhcmUoZWwpXHJcbiAgfSk7XHJcbn1cclxuXHJcbnNhdmVfc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coZG5kLnNxdWFyZXNEYXRhKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZy1zcXVhcmUnKTtcclxuICBzZXRDb29raWUoJ3NxdWFyZXMnLEpTT04uc3RyaW5naWZ5KGRuZC5zcXVhcmVzRGF0YSkpO1xyXG59KTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FwcDA4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIiwidmFyIGNvcmUgID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpXG4gICwgJEpTT04gPSBjb3JlLkpTT04gfHwgKGNvcmUuSlNPTiA9IHtzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgcmV0dXJuICRKU09OLnN0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJndW1lbnRzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIiwiLyoqXHJcbiAqXHJcbiDQodC+0LfQtNCw0YLRjCDRgdGC0YDQsNC90LjRhtGDLCDQutC+0YLQvtGA0LDRjyDQstGL0LLQvtC00LjRgiDQstGB0LUg0LjQvNC10Y7RidC40LXRgdGPIGNvb2tpZSDQsiDQstC40LTQtSDRgtCw0LHQu9C40YbRiyAo0LjQvNGPLCDQt9C90LDRh9C10L3QuNC1KS5cclxuINCU0LvRjyDQutCw0LbQtNC+0LkgY29va2llINCyINGC0LDQsdC70LjRhtC1LCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LHQsNCy0LjRgtGMINC60L3QvtC/0LrRgyBcItGD0LTQsNC70LjRgtGMXCIsINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwi0YPQtNCw0LvQuNGC0YxcIiwg0L3QsCDRjdC60YDQsNC9INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstGL0LLQtdC00LXQvSBjb25maXJtINGBINGC0LXQutGB0YLQvtC8IFwi0KPQtNCw0LvQuNGC0YwgY29va2llINGBINC40LzQtdC90LXQvCDigKY/XCIuINCS0LzQtdGB0YLQviDigKYg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L/QvtC00YHRgtCw0LLQuNGC0Ywg0LjQvNGPINGD0LTQsNC70Y/QtdC80L7QuSBjb29raWUuINCV0YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvtGC0LLQtdGC0LjQuyDQv9C+0LvQvtC20LjRgtC10LvRjNC90L4sINGC0L4g0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQsNGPIGNvb2tpZSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YPQtNCw0LvQtdC90LAuXHJcblxyXG4g0Jog0YHRgtGA0LDQvdC40YfQutC1INC40Lcg0L/RgNC10LTRi9C00YPRidC10LPQviDQt9Cw0LTQsNC90LjRjyDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LHQsNCy0LjRgtGMINGE0L7RgNC80YMg0YEg0YLQtdC60YHRgtC+0LLRi9C80Lgg0L/QvtC70Y/QvNC4INC4INC60L3QvtC/0LrQvtC5IFwi0LTQvtCx0LDQstC40YLRjFwiLlxyXG4g0KHQv9C40YHQvtC6INGC0LXQutGB0YLQvtCy0YvRhSDQv9C+0LvQtdC5OlxyXG4gLSDQuNC80Y9cclxuIC0g0LfQvdCw0YfQtdC90LjQtVxyXG4gLSDRgdGA0L7QuiDQs9C+0LTQvdC+0YHRgtC4ICjQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuSlcclxuXHJcbiDQn9C+0YHQu9C1INC90LDQttCw0YLQuNGPINC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiINC00L7Qu9C20L3QsCDQsdGL0YLRjCDRgdC+0LfQtNCw0L3QsCAo0Lgg0LTQvtCx0LDQstC70LXQvdCwINCyINGC0LDQsdC70LjRhtGDKSDQvdC+0LLQsNGPIGNvb2tpZSDRgSDRg9C60LDQt9Cw0L3QvdGL0LzQuCDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4LiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDQsiDQv9C+0LvQtSBcItGB0YDQvtC6INCz0L7QtNC90L7RgdGC0LhcIiDRg9C60LDQt9GL0LLQsNC10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INC00L3QtdC5ICjQvdCw0YfQuNC90LDRjyDRgSDRgtC10LrRg9GJ0LXQs9C+KSwg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQutC+0YLQvtGA0YvRhSDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C90LAgY29va2llLlxyXG5cclxuINCf0L7RgdC70LUg0LTQvtCx0LDQstC70LXQvdC40LUgY29va2llLCDQt9C90LDRh9C10L3QuNGPINGC0LXQutGB0YLQvtCy0YvRhSDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0LTQvtC70LbQvdGLINCx0YvRgtGMINC+0YfQuNGJ0LXQvdGLLlxyXG4g0JXRgdC70Lgg0LrQsNC60L7QtS3RgtC+INC40Lcg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC90LUg0LfQsNC/0L7Qu9C90LXQvdC+LCDRgtC+LCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgXCLQtNC+0LHQsNCy0LjRgtGMXCIsIGNvb2tpZSDQvdC1INC00L7Qu9C20L3QsCDQsdGL0YLRjCDRgdC+0LfQtNCw0L3QsCwg0LAg0L3QsCDRjdC60YDQsNC9INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstGL0LLQtdC00LXQvSBhbGVydCDRgSDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC10LwgXCLQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPINGE0L7RgNC80YtcIi5cclxuINCi0LDQuiDQttC1INC30LDQvNC10YLRjNGC0LUsINGH0YLQviDQv9GA0Lgg0YDQsNCx0L7RgtC1INGBINGE0L7RgNC80L7QuSDQuCDRgtCw0LHQu9C40YbQtdC5LCDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9C10YDQtdC30LDQs9GA0YPQt9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvb2tpZSgpIHtcclxuXHJcbiAgbGV0IGNvb2tpZVRhYmxlID0gZHJhd0Nvb2tpZVRhYmxlKCk7XHJcblxyXG4gIGNvb2tpZVRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBpZihlLnRhcmdldC5kYXRhc2V0LmFjdGlvbiA9PSAnZGVsZXRlJyl7XHJcbiAgICAgIGlmKGRlbGV0ZUNvb2tpZShlLnRhcmdldC5kYXRhc2V0LmNvb2tpZSkpe1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBhZGRfY29va2llX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IG9iaiA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMpIHtcclxuICAgICAgaWYoaW5wdXQubG9jYWxOYW1lID09ICdpbnB1dCcpe1xyXG4gICAgICAgIGlmKGlucHV0LnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICBhbGVydCgn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjycpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgb2JqW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcykge1xyXG4gICAgICBpZihpbnB1dC5sb2NhbE5hbWUgPT0gJ2lucHV0Jyl7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENvb2tpZShvYmpbJ2Nvb2tpZS1uYW1lJ10sb2JqWydjb29raWUtdmFsdWUnXSxvYmpbJ2Nvb2tpZS1leHBpcmVzJ10pO1xyXG5cclxuICB9KTtcclxufVxyXG5cclxuXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9ICcnKXtcclxuICBsZXQgb3B0aW9uc1NlcGFyYXRvciA9IChvcHRpb25zKSA/ICc7ICcgOiAnJztcclxuICBjb25zb2xlLmxvZygnc2V0Q29va2llJyxgJHtuYW1lfT0ke3ZhbHVlfTtwYXRoPS8ke29wdGlvbnNTZXBhcmF0b3J9JHtvcHRpb25zfWApO1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9O3BhdGg9LyR7b3B0aW9uc1NlcGFyYXRvcn0ke29wdGlvbnN9YDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpLmZpbmQoKGNvb2tpZVJvdykgPT4ge1xyXG4gICAgbGV0IGNvb2tpZVJvd0FycmF5ID0gY29va2llUm93LnNwbGl0KCc9Jyk7XHJcbiAgICBpZihjb29raWVSb3dBcnJheVswXSA9PSBuYW1lKXtcclxuICAgICAgcmV0dXJuIGNvb2tpZVJvd0FycmF5WzFdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGlmKHJlc3VsdCl7XHJcbiAgICByZXR1cm4gcmVzdWx0LnNwbGl0KCc9JylbMV07XHJcbiAgfVxyXG59XG5cblxyXG5cclxuZnVuY3Rpb24gZHJhd0Nvb2tpZVRhYmxlKCkge1xyXG4gIGxldCBjb29raWVBcnJheSA9IGNvb2tpZVNwbGl0KCk7XHJcbiAgbGV0IGNvb2tpZVJvd3MgPSBjb29raWVUb1RhYmxlKGNvb2tpZUFycmF5KTtcclxuICBsZXQgY29va2llVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG5cclxuICBjb29raWVUYWJsZS5pbm5lckhUTUwgPSBjb29raWVSb3dzO1xyXG4gIGNvb2tpZVRhYmxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29va2llX3RhYmxlXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29va2llVGFibGUpO1xyXG5cclxuICByZXR1cm4gY29va2llVGFibGU7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29va2llU3BsaXQoKSB7XHJcbiAgbGV0IGNvb2tpZUFycmF5ID0gW107XHJcblxyXG4gIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5mb3JFYWNoKChjb29raWVSb3cpID0+IHtcclxuICAgIGxldCBjb29raWVSb3dBcnJheSA9IGNvb2tpZVJvdy5zcGxpdCgnPScpO1xyXG4gICAgbGV0IG9iaiA9IHtcclxuICAgICAgJ2tleSc6IGNvb2tpZVJvd0FycmF5WzBdLFxyXG4gICAgICAndmFsJzogY29va2llUm93QXJyYXlbMV1cclxuICAgIH07XHJcbiAgICBpZiAob2JqLmtleSAhPSAnJykgY29va2llQXJyYXkucHVzaChvYmopO1xyXG4gIH0pO1xyXG4gIHJldHVybiBjb29raWVBcnJheTtcclxufVxyXG5cblxyXG5cclxuZnVuY3Rpb24gY29va2llVG9UYWJsZShjb29raWVBcnJheSl7XHJcbiAgbGV0IGNvb2tpZVJvd3MgPSAnJztcclxuXHJcbiAgY29va2llQXJyYXkuZm9yRWFjaCgoY29va2llUm93KSA9PiB7XHJcbiAgICBjb29raWVSb3dzICs9ICc8dHI+JztcclxuICAgIGNvb2tpZVJvd3MgKz0gYDx0ZD4ke2Nvb2tpZVJvdy5rZXl9PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSBgPHRkPiR7Y29va2llUm93LnZhbH08L3RkPmA7XHJcbiAgICBjb29raWVSb3dzICs9IGA8dGQ+PGJ1dHRvbiBkYXRhLWFjdGlvbj1cImRlbGV0ZVwiIGRhdGEtY29va2llPVwiJHtjb29raWVSb3cua2V5fVwiPlg8L2J1dHRvbj48L3RkPmA7XHJcbiAgICBjb29raWVSb3dzICs9ICc8L3RyPic7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb29raWVSb3dzO1xyXG59XHJcblxyXG5cblxyXG5mdW5jdGlvbiBhZGRDb29raWUobmFtZSwgdmFsdWUsIGV4cGlyZXMpe1xyXG4gIGxldCBkYXRlID0gbmV3IERhdGU7XHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgTnVtYmVyKGV4cGlyZXMpKTtcclxuICBzZXRDb29raWUobmFtZSwgdmFsdWUsIGBleHBpcmVzPSR7ZGF0ZS50b1VUQ1N0cmluZygpfWApO1xyXG4gIGNvb2tpZV90YWJsZS5yZW1vdmUoKTtcclxuICBkcmF3Q29va2llVGFibGUoKTtcclxufVxyXG5cblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWUpe1xyXG4gIGlmKGNvbmZpcm0oYNCj0LTQsNC70LjRgtGMICR7bmFtZX0/YCkpe1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgwKTtcclxuICAgIGRhdGUgPSBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09OyBwYXRoPS87IGV4cGlyZXM9JHtkYXRlfWA7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuYW1lfT07IHBhdGg9JHtwYXRofTsgZXhwaXJlcz0ke2RhdGV9YCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvY29va2llLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDZcbiAqKi8iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gNlxuICoqLyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gNlxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3Q0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2FBO0FBeUNBO0FBUUE7QUFDQTs7O0FBbkVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUJBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pKQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==