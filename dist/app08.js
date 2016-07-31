var app08 =
webpackJsonp_name_([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _cookie = __webpack_require__(107);

	var _cookie2 = _interopRequireDefault(_cookie);

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

	document.cookie = "name=NYAN";
	document.cookie = "type=CAT";

	(0, _cookie2.default)();

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(104);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.default = cookie;

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
	      deleteCookie(e.target.dataset.cookie);
	      e.target.parentNode.parentNode.remove();
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
	        var _step$value = _step.value;
	        var localName = _step$value.localName;
	        var name = _step$value.name;
	        var value = _step$value.value;

	        if (localName == 'input') {

	          if (value === '') {
	            alert('Заполните все поля');
	            return;
	          } else {
	            obj[name] = value;
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

	    addCookie(obj['cookie-name'], obj['cookie-value'], obj['cookie-expires']);
	  });
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
	    cookieArray.push(obj);
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

	function setCookie(name, value) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

	  var optionsSeparator = options ? '; ' : '';
	  document.cookie = name + '=' + value + optionsSeparator + options;
	}

	function deleteCookie(name) {
	  if (confirm('Удалить ' + name + '?')) {
	    var date = new Date(0);
	    date = date.toUTCString();
	    document.cookie = name + '=; path=/; expires=' + date;
	    console.log(name + '=; path=/; expires=' + date);
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA4LmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9jb29raWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICcuL21vZHVsZXMvY29va2llJztcclxuXHJcbi8qKlxyXG7QlNCXIDE6XHJcbtCh0L7Qt9C00LDRgtGMINGB0YLRgNCw0L3QuNGG0YMsINC60L7RgtC+0YDQsNGPINCy0YvQstC+0LTQuNGCINCy0YHQtSDQuNC80LXRjtGJ0LjQtdGB0Y8gY29va2llINCyINCy0LjQtNC1INGC0LDQsdC70LjRhtGLICjQuNC80Y8sINC30L3QsNGH0LXQvdC40LUpLlxyXG7QlNC70Y8g0LrQsNC20LTQvtC5IGNvb2tpZSDQsiDRgtCw0LHQu9C40YbQtSwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDQutC90L7Qv9C60YMgXCLRg9C00LDQu9C40YLRjFwiLCDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcItGD0LTQsNC70LjRgtGMXCIsINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gY29uZmlybSDRgSDRgtC10LrRgdGC0L7QvCBcItCj0LTQsNC70LjRgtGMIGNvb2tpZSDRgSDQuNC80LXQvdC10Lwg4oCmP1wiLiDQktC80LXRgdGC0L4g4oCmINC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QtNGB0YLQsNCy0LjRgtGMINC40LzRjyDRg9C00LDQu9GP0LXQvNC+0LkgY29va2llLiDQldGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L7RgtCy0LXRgtC40Lsg0L/QvtC70L7QttC40YLQtdC70YzQvdC+LCDRgtC+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LDRjyBjb29raWUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGD0LTQsNC70LXQvdCwLlxyXG5cclxu0JTQlyAyOlxyXG7QmiDRgdGC0YDQsNC90LjRh9C60LUg0LjQtyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7QsdCw0LLQuNGC0Ywg0YTQvtGA0LzRgyDRgSDRgtC10LrRgdGC0L7QstGL0LzQuCDQv9C+0LvRj9C80Lgg0Lgg0LrQvdC+0L/QutC+0LkgXCLQtNC+0LHQsNCy0LjRgtGMXCIuXHJcbtCh0L/QuNGB0L7QuiDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuTpcclxuLSDQuNC80Y9cclxuLSDQt9C90LDRh9C10L3QuNC1XHJcbi0g0YHRgNC+0Log0LPQvtC00L3QvtGB0YLQuCAo0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LkpXHJcblxyXG7Qn9C+0YHQu9C1INC90LDQttCw0YLQuNGPINC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiINC00L7Qu9C20L3QsCDQsdGL0YLRjCDRgdC+0LfQtNCw0L3QsCAo0Lgg0LTQvtCx0LDQstC70LXQvdCwINCyINGC0LDQsdC70LjRhtGDKSDQvdC+0LLQsNGPIGNvb2tpZSDRgSDRg9C60LDQt9Cw0L3QvdGL0LzQuCDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4LiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDQsiDQv9C+0LvQtSBcItGB0YDQvtC6INCz0L7QtNC90L7RgdGC0LhcIiDRg9C60LDQt9GL0LLQsNC10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INC00L3QtdC5ICjQvdCw0YfQuNC90LDRjyDRgSDRgtC10LrRg9GJ0LXQs9C+KSwg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQutC+0YLQvtGA0YvRhSDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C90LAgY29va2llLlxyXG5cclxu0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjQtSBjb29raWUsINC30L3QsNGH0LXQvdC40Y8g0YLQtdC60YHRgtC+0LLRi9GFINC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0L7Rh9C40YnQtdC90YsuXHJcbtCV0YHQu9C4INC60LDQutC+0LUt0YLQviDQuNC3INC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQvdC1INC30LDQv9C+0LvQvdC10L3Qviwg0YLQviwg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiLCBjb29raWUg0L3QtSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAsINCwINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gYWxlcnQg0YEg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtdC8IFwi0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyDRhNC+0YDQvNGLXCIuXHJcbtCi0LDQuiDQttC1INC30LDQvNC10YLRjNGC0LUsINGH0YLQviDQv9GA0Lgg0YDQsNCx0L7RgtC1INGBINGE0L7RgNC80L7QuSDQuCDRgtCw0LHQu9C40YbQtdC5LCDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9C10YDQtdC30LDQs9GA0YPQt9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG5cclxu0JTQlyAzICjRgdC+INC30LLQtdC30LTQvtGH0LrQvtC5KTpcclxu0JLQt9GP0YLRjCDRgNC10LfRg9C70YzRgtCw0YIg0JTQlyDQv9C+INGC0LXQvNC1IERPTSBFdmVudHMgKNGB0YLRgNCw0L3QuNGG0LAg0YEg0LrQvdC+0L/QutC+0Lkg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8gZGl2J9C+0LIsINC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0L/QtdGA0LXRgtCw0YHQutC40LLQsNGC0Ywg0L/RgNC4INC/0L7QvNC+0YnQuCBEJkQpXHJcbtCU0L7QsdCw0LLQuNGC0Ywg0L3QsCDRgdGC0YDQsNC90LjRhtGDINC60L3QvtC/0LrRgyBcItGB0L7RhdGA0LDQvdC40YLRjFwiLiDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQtNCw0L3QvdGD0Y4g0LrQvdC+0L/QutGDLCDQutC+0LvQuNGH0LXRgdGC0LLQviwg0YbQstC10YIg0Lgg0L/QvtC30LjRhtC40Y8g0LLRgdC10YUgZGl2J9C+0LIg0LTQvtC70LbQvdGLINCx0YvRgtGMINGB0L7RhdGA0LDQvdC10L3RiyDQsiDQvtC00L3RgyBjb29raWUuXHJcbtCf0L7RgdC70LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGG0YssINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7RgdGC0LDRgtGMINGN0YLRgyDQuNC90YTQvtGA0LzQsNGG0LjRjiDQuNC3IGNvb2tpZSDQuCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LLRgdC1IGRpdifRiyAo0YEg0LjRhSDRgNCw0LfQvNC10YDQsNC80LgsINC/0L7Qt9C40YbQuNC10Lkg0Lgg0YbQstC10YLQsNC80LgpXHJcbiAqL1xyXG5cclxuZG9jdW1lbnQuY29va2llID0gXCJuYW1lPU5ZQU5cIjtcclxuZG9jdW1lbnQuY29va2llID0gXCJ0eXBlPUNBVFwiO1xyXG5cclxuY29va2llKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hcHAwOC5qc1xuICoqLyIsIi8qKlxyXG4gKlxyXG4g0KHQvtC30LTQsNGC0Ywg0YHRgtGA0LDQvdC40YbRgywg0LrQvtGC0L7RgNCw0Y8g0LLRi9Cy0L7QtNC40YIg0LLRgdC1INC40LzQtdGO0YnQuNC10YHRjyBjb29raWUg0LIg0LLQuNC00LUg0YLQsNCx0LvQuNGG0YsgKNC40LzRjywg0LfQvdCw0YfQtdC90LjQtSkuXHJcbiDQlNC70Y8g0LrQsNC20LTQvtC5IGNvb2tpZSDQsiDRgtCw0LHQu9C40YbQtSwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDQutC90L7Qv9C60YMgXCLRg9C00LDQu9C40YLRjFwiLCDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcItGD0LTQsNC70LjRgtGMXCIsINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gY29uZmlybSDRgSDRgtC10LrRgdGC0L7QvCBcItCj0LTQsNC70LjRgtGMIGNvb2tpZSDRgSDQuNC80LXQvdC10Lwg4oCmP1wiLiDQktC80LXRgdGC0L4g4oCmINC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QtNGB0YLQsNCy0LjRgtGMINC40LzRjyDRg9C00LDQu9GP0LXQvNC+0LkgY29va2llLiDQldGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L7RgtCy0LXRgtC40Lsg0L/QvtC70L7QttC40YLQtdC70YzQvdC+LCDRgtC+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LDRjyBjb29raWUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGD0LTQsNC70LXQvdCwLlxyXG5cclxuINCaINGB0YLRgNCw0L3QuNGH0LrQtSDQuNC3INC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y8g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDRhNC+0YDQvNGDINGBINGC0LXQutGB0YLQvtCy0YvQvNC4INC/0L7Qu9GP0LzQuCDQuCDQutC90L7Qv9C60L7QuSBcItC00L7QsdCw0LLQuNGC0YxcIi5cclxuINCh0L/QuNGB0L7QuiDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuTpcclxuIC0g0LjQvNGPXHJcbiAtINC30L3QsNGH0LXQvdC40LVcclxuIC0g0YHRgNC+0Log0LPQvtC00L3QvtGB0YLQuCAo0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LkpXHJcblxyXG4g0J/QvtGB0LvQtSDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L3QvtC/0LrRgyBcItC00L7QsdCw0LLQuNGC0YxcIiDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAgKNC4INC00L7QsdCw0LLQu9C10L3QsCDQsiDRgtCw0LHQu9C40YbRgykg0L3QvtCy0LDRjyBjb29raWUg0YEg0YPQutCw0LfQsNC90L3Ri9C80Lgg0L/QsNGA0LDQvNC10YLRgNCw0LzQuC4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LIg0L/QvtC70LUgXCLRgdGA0L7QuiDQs9C+0LTQvdC+0YHRgtC4XCIg0YPQutCw0LfRi9Cy0LDQtdGC0YHRjyDQutC+0LvQuNGH0LXRgdGC0LLQviDQtNC90LXQuSAo0L3QsNGH0LjQvdCw0Y8g0YEg0YLQtdC60YPRidC10LPQviksINC90LAg0L/RgNC+0YLRj9C20LXQvdC40Lgg0LrQvtGC0L7RgNGL0YUg0LHRg9C00LXRgiDQtNC+0YHRgtGD0L/QvdCwIGNvb2tpZS5cclxuXHJcbiDQn9C+0YHQu9C1INC00L7QsdCw0LLQu9C10L3QuNC1IGNvb2tpZSwg0LfQvdCw0YfQtdC90LjRjyDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQvtGH0LjRidC10L3Riy5cclxuINCV0YHQu9C4INC60LDQutC+0LUt0YLQviDQuNC3INC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQvdC1INC30LDQv9C+0LvQvdC10L3Qviwg0YLQviwg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiLCBjb29raWUg0L3QtSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAsINCwINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gYWxlcnQg0YEg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtdC8IFwi0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyDRhNC+0YDQvNGLXCIuXHJcbiDQotCw0Log0LbQtSDQt9Cw0LzQtdGC0YzRgtC1LCDRh9GC0L4g0L/RgNC4INGA0LDQsdC+0YLQtSDRgSDRhNC+0YDQvNC+0Lkg0Lgg0YLQsNCx0LvQuNGG0LXQuSwg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQvtC6INGB0YLRgNCw0L3QuNGG0YtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvb2tpZSgpIHtcclxuXHJcbiAgbGV0IGNvb2tpZVRhYmxlID0gZHJhd0Nvb2tpZVRhYmxlKCk7XHJcblxyXG4gIGNvb2tpZVRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBpZihlLnRhcmdldC5kYXRhc2V0LmFjdGlvbiA9PSAnZGVsZXRlJyl7XHJcbiAgICAgIGRlbGV0ZUNvb2tpZShlLnRhcmdldC5kYXRhc2V0LmNvb2tpZSk7XHJcbiAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYWRkX2Nvb2tpZV9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCBvYmogPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCB7bG9jYWxOYW1lLCBuYW1lLCB2YWx1ZX0gb2YgdGhpcykge1xyXG4gICAgICBpZihsb2NhbE5hbWUgPT0gJ2lucHV0Jyl7XHJcblxyXG4gICAgICAgIGlmKHZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICBhbGVydCgn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjycpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgb2JqW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENvb2tpZShvYmpbJ2Nvb2tpZS1uYW1lJ10sb2JqWydjb29raWUtdmFsdWUnXSxvYmpbJ2Nvb2tpZS1leHBpcmVzJ10pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb29raWVUYWJsZSgpIHtcclxuICBsZXQgY29va2llQXJyYXkgPSBjb29raWVTcGxpdCgpO1xyXG4gIGxldCBjb29raWVSb3dzID0gY29va2llVG9UYWJsZShjb29raWVBcnJheSk7XHJcbiAgbGV0IGNvb2tpZVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuXHJcbiAgY29va2llVGFibGUuaW5uZXJIVE1MID0gY29va2llUm93cztcclxuICBjb29raWVUYWJsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvb2tpZV90YWJsZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvb2tpZVRhYmxlKTtcclxuXHJcbiAgcmV0dXJuIGNvb2tpZVRhYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvb2tpZVNwbGl0KCkge1xyXG5cclxuICBsZXQgY29va2llQXJyYXkgPSBbXTtcclxuXHJcbiAgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpLmZvckVhY2goKGNvb2tpZVJvdykgPT4ge1xyXG4gICAgbGV0IGNvb2tpZVJvd0FycmF5ID0gY29va2llUm93LnNwbGl0KCc9Jyk7XHJcbiAgICBsZXQgb2JqID0ge1xyXG4gICAgICAna2V5JzogY29va2llUm93QXJyYXlbMF0sXHJcbiAgICAgICd2YWwnOiBjb29raWVSb3dBcnJheVsxXVxyXG4gICAgfTtcclxuICAgIGNvb2tpZUFycmF5LnB1c2gob2JqKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvb2tpZUFycmF5O1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvb2tpZVRvVGFibGUoY29va2llQXJyYXkpe1xyXG4gIGxldCBjb29raWVSb3dzID0gJyc7XHJcblxyXG4gIGNvb2tpZUFycmF5LmZvckVhY2goKGNvb2tpZVJvdykgPT4ge1xyXG4gICAgY29va2llUm93cyArPSAnPHRyPic7XHJcbiAgICBjb29raWVSb3dzICs9IGA8dGQ+JHtjb29raWVSb3cua2V5fTwvdGQ+YDtcclxuICAgIGNvb2tpZVJvd3MgKz0gYDx0ZD4ke2Nvb2tpZVJvdy52YWx9PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSBgPHRkPjxidXR0b24gZGF0YS1hY3Rpb249XCJkZWxldGVcIiBkYXRhLWNvb2tpZT1cIiR7Y29va2llUm93LmtleX1cIj5YPC9idXR0b24+PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSAnPC90cj4nO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29va2llUm93cztcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkQ29va2llKG5hbWUsIHZhbHVlLCBleHBpcmVzKXtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlO1xyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIE51bWJlcihleHBpcmVzKSk7XHJcbiAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gKTtcclxuICBjb29raWVfdGFibGUucmVtb3ZlKCk7XHJcbiAgZHJhd0Nvb2tpZVRhYmxlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBvcHRpb25zID0gJycpe1xyXG4gIGxldCBvcHRpb25zU2VwYXJhdG9yID0gKG9wdGlvbnMpID8gJzsgJyA6ICcnO1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9JHtvcHRpb25zU2VwYXJhdG9yfSR7b3B0aW9uc31gO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKXtcclxuICBpZihjb25maXJtKGDQo9C00LDQu9C40YLRjCAke25hbWV9P2ApKXtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoMCk7XHJcbiAgICBkYXRlID0gZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09OyBwYXRoPS87IGV4cGlyZXM9JHtkYXRlfWA7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuYW1lfT07IHBhdGg9LzsgZXhwaXJlcz0ke2RhdGV9YCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL2Nvb2tpZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7QUFsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=