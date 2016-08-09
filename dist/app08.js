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
	    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	    console.log(name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA4LmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29va2llLCBzZXRDb29raWUsIGdldENvb2tpZX0gZnJvbSAnLi9tb2R1bGVzL2Nvb2tpZSc7XHJcbmltcG9ydCBkcmFnTkRyb3AsIHtEbmR9IGZyb20gJy4vbW9kdWxlcy9kcmFnTkRyb3AnO1xyXG5cclxuLyoqXHJcbtCU0JcgMTpcclxu0KHQvtC30LTQsNGC0Ywg0YHRgtGA0LDQvdC40YbRgywg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0LLRgdC1INC40LzQtdGO0YnQuNC10YHRjyBjb29raWUg0LIg0LLQuNC00LUg0YLQsNCx0LvQuNGG0YsgKNC40LzRjywg0LfQvdCw0YfQtdC90LjQtSkuXHJcbtCU0LvRjyDQutCw0LbQtNC+0LkgY29va2llINCyINGC0LDQsdC70LjRhtC1LCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LHQsNCy0LjRgtGMINC60L3QvtC/0LrRgyBcItGD0LTQsNC70LjRgtGMXCIsINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwi0YPQtNCw0LvQuNGC0YxcIiwg0L3QsCDRjdC60YDQsNC9INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstGL0LLQtdC00LXQvSBjb25maXJtINGBINGC0LXQutGB0YLQvtC8IFwi0KPQtNCw0LvQuNGC0YwgY29va2llINGBINC40LzQtdC90LXQvCDigKY/XCIuINCS0LzQtdGB0YLQviDigKYg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L/QvtC00YHRgtCw0LLQuNGC0Ywg0LjQvNGPINGD0LTQsNC70Y/QtdC80L7QuSBjb29raWUuINCV0YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQvtGC0LLQtdGC0LjQuyDQv9C+0LvQvtC20LjRgtC10LvRjNC90L4sINGC0L4g0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQsNGPIGNvb2tpZSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YPQtNCw0LvQtdC90LAuXHJcblxyXG7QlNCXIDI6XHJcbtCaINGB0YLRgNCw0L3QuNGH0LrQtSDQuNC3INC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y8g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDRhNC+0YDQvNGDINGBINGC0LXQutGB0YLQvtCy0YvQvNC4INC/0L7Qu9GP0LzQuCDQuCDQutC90L7Qv9C60L7QuSBcItC00L7QsdCw0LLQuNGC0YxcIi5cclxu0KHQv9C40YHQvtC6INGC0LXQutGB0YLQvtCy0YvRhSDQv9C+0LvQtdC5OlxyXG4tINC40LzRj1xyXG4tINC30L3QsNGH0LXQvdC40LVcclxuLSDRgdGA0L7QuiDQs9C+0LTQvdC+0YHRgtC4ICjQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuSlcclxuXHJcbtCf0L7RgdC70LUg0L3QsNC20LDRgtC40Y8g0L3QsCDQutC90L7Qv9C60YMgXCLQtNC+0LHQsNCy0LjRgtGMXCIg0LTQvtC70LbQvdCwINCx0YvRgtGMINGB0L7Qt9C00LDQvdCwICjQuCDQtNC+0LHQsNCy0LvQtdC90LAg0LIg0YLQsNCx0LvQuNGG0YMpINC90L7QstCw0Y8gY29va2llINGBINGD0LrQsNC30LDQvdC90YvQvNC4INC/0LDRgNCw0LzQtdGC0YDQsNC80LguINCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INCyINC/0L7Qu9C1IFwi0YHRgNC+0Log0LPQvtC00L3QvtGB0YLQuFwiINGD0LrQsNC30YvQstCw0LXRgtGB0Y8g0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LkgKNC90LDRh9C40L3QsNGPINGBINGC0LXQutGD0YnQtdCz0L4pLCDQvdCwINC/0YDQvtGC0Y/QttC10L3QuNC4INC60L7RgtC+0YDRi9GFINCx0YPQtNC10YIg0LTQvtGB0YLRg9C/0L3QsCBjb29raWUuXHJcblxyXG7Qn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNC1IGNvb2tpZSwg0LfQvdCw0YfQtdC90LjRjyDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQvtGH0LjRidC10L3Riy5cclxu0JXRgdC70Lgg0LrQsNC60L7QtS3RgtC+INC40Lcg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC90LUg0LfQsNC/0L7Qu9C90LXQvdC+LCDRgtC+LCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgXCLQtNC+0LHQsNCy0LjRgtGMXCIsIGNvb2tpZSDQvdC1INC00L7Qu9C20L3QsCDQsdGL0YLRjCDRgdC+0LfQtNCw0L3QsCwg0LAg0L3QsCDRjdC60YDQsNC9INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstGL0LLQtdC00LXQvSBhbGVydCDRgSDQv9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC10LwgXCLQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPINGE0L7RgNC80YtcIi5cclxu0KLQsNC6INC20LUg0LfQsNC80LXRgtGM0YLQtSwg0YfRgtC+INC/0YDQuCDRgNCw0LHQvtGC0LUg0YEg0YTQvtGA0LzQvtC5INC4INGC0LDQsdC70LjRhtC10LksINC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC/0LXRgNC10LfQsNCz0YDRg9C30L7QuiDRgdGC0YDQsNC90LjRhtGLXHJcblxyXG7QlNCXIDMgKNGB0L4g0LfQstC10LfQtNC+0YfQutC+0LkpOlxyXG7QktC30Y/RgtGMINGA0LXQt9GD0LvRjNGC0LDRgiDQlNCXINC/0L4g0YLQtdC80LUgRE9NIEV2ZW50cyAo0YHRgtGA0LDQvdC40YbQsCDRgSDQutC90L7Qv9C60L7QuSDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyBkaXYn0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDQv9C10YDQtdGC0LDRgdC60LjQstCw0YLRjCDQv9GA0Lgg0L/QvtC80L7RidC4IEQmRClcclxu0JTQvtCx0LDQstC40YLRjCDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0LrQvdC+0L/QutGDIFwi0YHQvtGF0YDQsNC90LjRgtGMXCIuINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC00LDQvdC90YPRjiDQutC90L7Qv9C60YMsINC60L7Qu9C40YfQtdGB0YLQstC+LCDRhtCy0LXRgiDQuCDQv9C+0LfQuNGG0LjRjyDQstGB0LXRhSBkaXYn0L7QsiDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0YHQvtGF0YDQsNC90LXQvdGLINCyINC+0LTQvdGDIGNvb2tpZS5cclxu0J/QvtGB0LvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60Lgg0YHRgtGA0LDQvdC40YbRiywg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtGB0YLQsNGC0Ywg0Y3RgtGDINC40L3RhNC+0YDQvNCw0YbQuNGOINC40LcgY29va2llINC4INCy0L7RgdGB0YLQsNC90L7QstC40YLRjCDQstGB0LUgZGl2J9GLICjRgSDQuNGFINGA0LDQt9C80LXRgNCw0LzQuCwg0L/QvtC30LjRhtC40LXQuSDQuCDRhtCy0LXRgtCw0LzQuClcclxuICovXHJcblxyXG5cclxuLy8gZG9jdW1lbnQuY29va2llID0gXCJuYW1lPU5ZQU5cIjtcclxuLy8gZG9jdW1lbnQuY29va2llID0gXCJ0eXBlPUNBVFwiO1xyXG5cclxuY29va2llKCk7XHJcblxyXG5sZXQgZG5kID0gbmV3IERuZCgnI2NyZWF0ZV9zcXVhcmUnKTtcclxubGV0IHNxdWFyZXMgPSBnZXRDb29raWUoJ3NxdWFyZXMnKSwgc3F1YXJlc0pTT047XHJcbmlmKHNxdWFyZXMpe1xyXG4gIHNxdWFyZXNKU09OID0gSlNPTi5wYXJzZShnZXRDb29raWUoJ3NxdWFyZXMnKSk7XHJcbiAgc3F1YXJlc0pTT04uZm9yRWFjaChlbCA9PiB7XHJcbiAgICBkbmQuY3JlYXRlU3F1YXJlKGVsKVxyXG4gIH0pO1xyXG59XHJcblxyXG5zYXZlX3NxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRuZC5zcXVhcmVzRGF0YSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWctc3F1YXJlJyk7XHJcbiAgc2V0Q29va2llKCdzcXVhcmVzJyxKU09OLnN0cmluZ2lmeShkbmQuc3F1YXJlc0RhdGEpKTtcclxufSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hcHAwOC5qc1xuICoqLyIsIi8qKlxyXG4gKlxyXG4g0KHQvtC30LTQsNGC0Ywg0YHRgtGA0LDQvdC40YbRgywg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0LLRgdC1INC40LzQtdGO0YnQuNC10YHRjyBjb29raWUg0LIg0LLQuNC00LUg0YLQsNCx0LvQuNGG0YsgKNC40LzRjywg0LfQvdCw0YfQtdC90LjQtSkuXHJcbiDQlNC70Y8g0LrQsNC20LTQvtC5IGNvb2tpZSDQsiDRgtCw0LHQu9C40YbQtSwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDQutC90L7Qv9C60YMgXCLRg9C00LDQu9C40YLRjFwiLCDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcItGD0LTQsNC70LjRgtGMXCIsINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gY29uZmlybSDRgSDRgtC10LrRgdGC0L7QvCBcItCj0LTQsNC70LjRgtGMIGNvb2tpZSDRgSDQuNC80LXQvdC10Lwg4oCmP1wiLiDQktC80LXRgdGC0L4g4oCmINC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QtNGB0YLQsNCy0LjRgtGMINC40LzRjyDRg9C00LDQu9GP0LXQvNC+0LkgY29va2llLiDQldGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L7RgtCy0LXRgtC40Lsg0L/QvtC70L7QttC40YLQtdC70YzQvdC+LCDRgtC+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LDRjyBjb29raWUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGD0LTQsNC70LXQvdCwLlxyXG5cclxuINCaINGB0YLRgNCw0L3QuNGH0LrQtSDQuNC3INC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y8g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDRhNC+0YDQvNGDINGBINGC0LXQutGB0YLQvtCy0YvQvNC4INC/0L7Qu9GP0LzQuCDQuCDQutC90L7Qv9C60L7QuSBcItC00L7QsdCw0LLQuNGC0YxcIi5cclxuINCh0L/QuNGB0L7QuiDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuTpcclxuIC0g0LjQvNGPXHJcbiAtINC30L3QsNGH0LXQvdC40LVcclxuIC0g0YHRgNC+0Log0LPQvtC00L3QvtGB0YLQuCAo0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LkpXHJcblxyXG4g0J/QvtGB0LvQtSDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L3QvtC/0LrRgyBcItC00L7QsdCw0LLQuNGC0YxcIiDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAgKNC4INC00L7QsdCw0LLQu9C10L3QsCDQsiDRgtCw0LHQu9C40YbRgykg0L3QvtCy0LDRjyBjb29raWUg0YEg0YPQutCw0LfQsNC90L3Ri9C80Lgg0L/QsNGA0LDQvNC10YLRgNCw0LzQuC4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LIg0L/QvtC70LUgXCLRgdGA0L7QuiDQs9C+0LTQvdC+0YHRgtC4XCIg0YPQutCw0LfRi9Cy0LDQtdGC0YHRjyDQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuSAo0L3QsNGH0LjQvdCw0Y8g0YEg0YLQtdC60YPRidC10LPQviksINC90LAg0L/RgNC+0YLRj9C20LXQvdC40Lgg0LrQvtGC0L7RgNGL0YUg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QvdCwIGNvb2tpZS5cclxuXHJcbiDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNC1IGNvb2tpZSwg0LfQvdCw0YfQtdC90LjRjyDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQvtGH0LjRidC10L3Riy5cclxuINCV0YHQu9C4INC60LDQutC+0LUt0YLQviDQuNC3INC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQvdC1INC30LDQv9C+0LvQvdC10L3Qviwg0YLQviwg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiLCBjb29raWUg0L3QtSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAsINCwINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gYWxlcnQg0YEg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtdC8IFwi0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyDRhNC+0YDQvNGLXCIuXHJcbiDQotCw0Log0LbQtSDQt9Cw0LzQtdGC0YzRgtC1LCDRh9GC0L4g0L/RgNC4INGA0LDQsdC+0YLQtSDRgSDRhNC+0YDQvNC+0Lkg0Lgg0YLQsNCx0LvQuNGG0LXQuSwg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQvtC6INGB0YLRgNCw0L3QuNGG0YtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb29raWUoKSB7XHJcblxyXG4gIGxldCBjb29raWVUYWJsZSA9IGRyYXdDb29raWVUYWJsZSgpO1xyXG5cclxuICBjb29raWVUYWJsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYoZS50YXJnZXQuZGF0YXNldC5hY3Rpb24gPT0gJ2RlbGV0ZScpe1xyXG4gICAgICBpZihkZWxldGVDb29raWUoZS50YXJnZXQuZGF0YXNldC5jb29raWUpKXtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYWRkX2Nvb2tpZV9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCBvYmogPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzKSB7XHJcbiAgICAgIGlmKGlucHV0LmxvY2FsTmFtZSA9PSAnaW5wdXQnKXtcclxuICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgICAgYWxlcnQoJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8nKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIG9ialtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMpIHtcclxuICAgICAgaWYoaW5wdXQubG9jYWxOYW1lID09ICdpbnB1dCcpe1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRDb29raWUob2JqWydjb29raWUtbmFtZSddLG9ialsnY29va2llLXZhbHVlJ10sb2JqWydjb29raWUtZXhwaXJlcyddKTtcclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcblxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSAnJyl7XHJcbiAgbGV0IG9wdGlvbnNTZXBhcmF0b3IgPSAob3B0aW9ucykgPyAnOyAnIDogJyc7XHJcbiAgY29uc29sZS5sb2coJ3NldENvb2tpZScsYCR7bmFtZX09JHt2YWx1ZX07cGF0aD0vJHtvcHRpb25zU2VwYXJhdG9yfSR7b3B0aW9uc31gKTtcclxuICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTtwYXRoPS8ke29wdGlvbnNTZXBhcmF0b3J9JHtvcHRpb25zfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5maW5kKChjb29raWVSb3cpID0+IHtcclxuICAgIGxldCBjb29raWVSb3dBcnJheSA9IGNvb2tpZVJvdy5zcGxpdCgnPScpO1xyXG4gICAgaWYoY29va2llUm93QXJyYXlbMF0gPT0gbmFtZSl7XHJcbiAgICAgIHJldHVybiBjb29raWVSb3dBcnJheVsxXTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZihyZXN1bHQpe1xyXG4gICAgcmV0dXJuIHJlc3VsdC5zcGxpdCgnPScpWzFdO1xyXG4gIH1cclxufVxuXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb29raWVUYWJsZSgpIHtcclxuICBsZXQgY29va2llQXJyYXkgPSBjb29raWVTcGxpdCgpO1xyXG4gIGxldCBjb29raWVSb3dzID0gY29va2llVG9UYWJsZShjb29raWVBcnJheSk7XHJcbiAgbGV0IGNvb2tpZVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuXHJcbiAgY29va2llVGFibGUuaW5uZXJIVE1MID0gY29va2llUm93cztcclxuICBjb29raWVUYWJsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvb2tpZV90YWJsZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvb2tpZVRhYmxlKTtcclxuXHJcbiAgcmV0dXJuIGNvb2tpZVRhYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvb2tpZVNwbGl0KCkge1xyXG4gIGxldCBjb29raWVBcnJheSA9IFtdO1xyXG5cclxuICBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykuZm9yRWFjaCgoY29va2llUm93KSA9PiB7XHJcbiAgICBsZXQgY29va2llUm93QXJyYXkgPSBjb29raWVSb3cuc3BsaXQoJz0nKTtcclxuICAgIGxldCBvYmogPSB7XHJcbiAgICAgICdrZXknOiBjb29raWVSb3dBcnJheVswXSxcclxuICAgICAgJ3ZhbCc6IGNvb2tpZVJvd0FycmF5WzFdXHJcbiAgICB9O1xyXG4gICAgaWYgKG9iai5rZXkgIT0gJycpIGNvb2tpZUFycmF5LnB1c2gob2JqKTtcclxuICB9KTtcclxuICByZXR1cm4gY29va2llQXJyYXk7XHJcbn1cclxuXG5cclxuXHJcbmZ1bmN0aW9uIGNvb2tpZVRvVGFibGUoY29va2llQXJyYXkpe1xyXG4gIGxldCBjb29raWVSb3dzID0gJyc7XHJcblxyXG4gIGNvb2tpZUFycmF5LmZvckVhY2goKGNvb2tpZVJvdykgPT4ge1xyXG4gICAgY29va2llUm93cyArPSAnPHRyPic7XHJcbiAgICBjb29raWVSb3dzICs9IGA8dGQ+JHtjb29raWVSb3cua2V5fTwvdGQ+YDtcclxuICAgIGNvb2tpZVJvd3MgKz0gYDx0ZD4ke2Nvb2tpZVJvdy52YWx9PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSBgPHRkPjxidXR0b24gZGF0YS1hY3Rpb249XCJkZWxldGVcIiBkYXRhLWNvb2tpZT1cIiR7Y29va2llUm93LmtleX1cIj5YPC9idXR0b24+PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSAnPC90cj4nO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29va2llUm93cztcclxufVxyXG5cclxuXG5cclxuZnVuY3Rpb24gYWRkQ29va2llKG5hbWUsIHZhbHVlLCBleHBpcmVzKXtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlO1xyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIE51bWJlcihleHBpcmVzKSk7XHJcbiAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gKTtcclxuICBjb29raWVfdGFibGUucmVtb3ZlKCk7XHJcbiAgZHJhd0Nvb2tpZVRhYmxlKCk7XHJcbn1cclxuXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKXtcclxuICBpZihjb25maXJtKGDQo9C00LDQu9C40YLRjCAke25hbWV9P2ApKXtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PTsgcGF0aD0vOyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UO2A7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuYW1lfT07IHBhdGg9LzsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDtgKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9jb29raWUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNlxuICoqLyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOFxuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOVxuICoqIG1vZHVsZSBjaHVua3MgPSA2XG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUF5Q0E7QUFRQTtBQUNBOzs7QUFuRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdJQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==