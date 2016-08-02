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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cookie = cookie;
	exports.setCookie = setCookie;
	exports.getCookie = getCookie;
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

	    // this.childNodes.forEach(input => {
	    //   if(input.localName == 'input'){
	    //     if(input.value === ''){
	    //       alert('Заполните все поля');
	    //       return;
	    //     }else{
	    //       obj[input.name] = input.value;
	    //     }
	    //   }
	    // });

	    this.childNodes.every(function (input) {
	      console.log(input);
	    });

	    addCookie(obj['cookie-name'], obj['cookie-value'], obj['cookie-expires']);
	  });
	}

	function setCookie(name, value) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

	  var optionsSeparator = options ? '; ' : '';
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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA4LmpzIiwid2VicGFjazovLy8uLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL2Nvb2tpZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvb2tpZSwgc2V0Q29va2llLCBnZXRDb29raWV9IGZyb20gJy4vbW9kdWxlcy9jb29raWUnO1xyXG5pbXBvcnQgZHJhZ05Ecm9wLCB7RG5kfSBmcm9tICcuL21vZHVsZXMvZHJhZ05Ecm9wJztcclxuXHJcbi8qKlxyXG7QlNCXIDE6XHJcbtCh0L7Qt9C00LDRgtGMINGB0YLRgNCw0L3QuNGG0YMsINC60L7RgtC+0YDQsNGPINCy0YvQstC+0LTQuNGCINCy0YHQtSDQuNC80LXRjtGJ0LjQtdGB0Y8gY29va2llINCyINCy0LjQtNC1INGC0LDQsdC70LjRhtGLICjQuNC80Y8sINC30L3QsNGH0LXQvdC40LUpLlxyXG7QlNC70Y8g0LrQsNC20LTQvtC5IGNvb2tpZSDQsiDRgtCw0LHQu9C40YbQtSwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtCx0LDQstC40YLRjCDQutC90L7Qv9C60YMgXCLRg9C00LDQu9C40YLRjFwiLCDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcItGD0LTQsNC70LjRgtGMXCIsINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gY29uZmlybSDRgSDRgtC10LrRgdGC0L7QvCBcItCj0LTQsNC70LjRgtGMIGNvb2tpZSDRgSDQuNC80LXQvdC10Lwg4oCmP1wiLiDQktC80LXRgdGC0L4g4oCmINC90LXQvtCx0YXQvtC00LjQvNC+INC/0L7QtNGB0YLQsNCy0LjRgtGMINC40LzRjyDRg9C00LDQu9GP0LXQvNC+0LkgY29va2llLiDQldGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L7RgtCy0LXRgtC40Lsg0L/QvtC70L7QttC40YLQtdC70YzQvdC+LCDRgtC+INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LDRjyBjb29raWUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGD0LTQsNC70LXQvdCwLlxyXG5cclxu0JTQlyAyOlxyXG7QmiDRgdGC0YDQsNC90LjRh9C60LUg0LjQtyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7QsdCw0LLQuNGC0Ywg0YTQvtGA0LzRgyDRgSDRgtC10LrRgdGC0L7QstGL0LzQuCDQv9C+0LvRj9C80Lgg0Lgg0LrQvdC+0L/QutC+0LkgXCLQtNC+0LHQsNCy0LjRgtGMXCIuXHJcbtCh0L/QuNGB0L7QuiDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuTpcclxuLSDQuNC80Y9cclxuLSDQt9C90LDRh9C10L3QuNC1XHJcbi0g0YHRgNC+0Log0LPQvtC00L3QvtGB0YLQuCAo0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LkpXHJcblxyXG7Qn9C+0YHQu9C1INC90LDQttCw0YLQuNGPINC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiINC00L7Qu9C20L3QsCDQsdGL0YLRjCDRgdC+0LfQtNCw0L3QsCAo0Lgg0LTQvtCx0LDQstC70LXQvdCwINCyINGC0LDQsdC70LjRhtGDKSDQvdC+0LLQsNGPIGNvb2tpZSDRgSDRg9C60LDQt9Cw0L3QvdGL0LzQuCDQv9Cw0YDQsNC80LXRgtGA0LDQvNC4LiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINGH0YLQviDQsiDQv9C+0LvQtSBcItGB0YDQvtC6INCz0L7QtNC90L7RgdGC0LhcIiDRg9C60LDQt9GL0LLQsNC10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INC00L3QtdC5ICjQvdCw0YfQuNC90LDRjyDRgSDRgtC10LrRg9GJ0LXQs9C+KSwg0L3QsCDQv9GA0L7RgtGP0LbQtdC90LjQuCDQutC+0YLQvtGA0YvRhSDQsdGD0LTQtdGCINC00L7RgdGC0YPQv9C90LAgY29va2llLlxyXG5cclxu0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjQtSBjb29raWUsINC30L3QsNGH0LXQvdC40Y8g0YLQtdC60YHRgtC+0LLRi9GFINC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0L7Rh9C40YnQtdC90YsuXHJcbtCV0YHQu9C4INC60LDQutC+0LUt0YLQviDQuNC3INC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQvdC1INC30LDQv9C+0LvQvdC10L3Qviwg0YLQviwg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIFwi0LTQvtCx0LDQstC40YLRjFwiLCBjb29raWUg0L3QtSDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0YHQvtC30LTQsNC90LAsINCwINC90LAg0Y3QutGA0LDQvSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRi9Cy0LXQtNC10L0gYWxlcnQg0YEg0L/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtdC8IFwi0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyDRhNC+0YDQvNGLXCIuXHJcbtCi0LDQuiDQttC1INC30LDQvNC10YLRjNGC0LUsINGH0YLQviDQv9GA0Lgg0YDQsNCx0L7RgtC1INGBINGE0L7RgNC80L7QuSDQuCDRgtCw0LHQu9C40YbQtdC5LCDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQv9C10YDQtdC30LDQs9GA0YPQt9C+0Log0YHRgtGA0LDQvdC40YbRi1xyXG5cclxu0JTQlyAzICjRgdC+INC30LLQtdC30LTQvtGH0LrQvtC5KTpcclxu0JLQt9GP0YLRjCDRgNC10LfRg9C70YzRgtCw0YIg0JTQlyDQv9C+INGC0LXQvNC1IERPTSBFdmVudHMgKNGB0YLRgNCw0L3QuNGG0LAg0YEg0LrQvdC+0L/QutC+0Lkg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8gZGl2J9C+0LIsINC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0L/QtdGA0LXRgtCw0YHQutC40LLQsNGC0Ywg0L/RgNC4INC/0L7QvNC+0YnQuCBEJkQpXHJcbtCU0L7QsdCw0LLQuNGC0Ywg0L3QsCDRgdGC0YDQsNC90LjRhtGDINC60L3QvtC/0LrRgyBcItGB0L7RhdGA0LDQvdC40YLRjFwiLiDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQtNCw0L3QvdGD0Y4g0LrQvdC+0L/QutGDLCDQutC+0LvQuNGH0LXRgdGC0LLQviwg0YbQstC10YIg0Lgg0L/QvtC30LjRhtC40Y8g0LLRgdC10YUgZGl2J9C+0LIg0LTQvtC70LbQvdGLINCx0YvRgtGMINGB0L7RhdGA0LDQvdC10L3RiyDQsiDQvtC00L3RgyBjb29raWUuXHJcbtCf0L7RgdC70LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGG0YssINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7RgdGC0LDRgtGMINGN0YLRgyDQuNC90YTQvtGA0LzQsNGG0LjRjiDQuNC3IGNvb2tpZSDQuCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LLRgdC1IGRpdifRiyAo0YEg0LjRhSDRgNCw0LfQvNC10YDQsNC80LgsINC/0L7Qt9C40YbQuNC10Lkg0Lgg0YbQstC10YLQsNC80LgpXHJcbiAqL1xyXG5cclxuXHJcbi8vIGRvY3VtZW50LmNvb2tpZSA9IFwibmFtZT1OWUFOXCI7XHJcbi8vIGRvY3VtZW50LmNvb2tpZSA9IFwidHlwZT1DQVRcIjtcclxuXHJcbmNvb2tpZSgpO1xyXG5cclxubGV0IGRuZCA9IG5ldyBEbmQoJyNjcmVhdGVfc3F1YXJlJyk7XHJcbmxldCBzcXVhcmVzID0gZ2V0Q29va2llKCdzcXVhcmVzJyksIHNxdWFyZXNKU09OO1xyXG5pZihzcXVhcmVzKXtcclxuICBzcXVhcmVzSlNPTiA9IEpTT04ucGFyc2UoZ2V0Q29va2llKCdzcXVhcmVzJykpO1xyXG4gIHNxdWFyZXNKU09OLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZG5kLmNyZWF0ZVNxdWFyZShlbClcclxuICB9KTtcclxufVxyXG5cclxuc2F2ZV9zcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICBjb25zb2xlLmxvZyhkbmQuc3F1YXJlc0RhdGEpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnLXNxdWFyZScpO1xyXG4gIHNldENvb2tpZSgnc3F1YXJlcycsSlNPTi5zdHJpbmdpZnkoZG5kLnNxdWFyZXNEYXRhKSk7XHJcbn0pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYXBwMDguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDZcbiAqKi8iLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4gKiogbW9kdWxlIGlkID0gMTA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDZcbiAqKi8iLCIvKipcclxuICpcclxuINCh0L7Qt9C00LDRgtGMINGB0YLRgNCw0L3QuNGG0YMsINC60L7RgtC+0YDQsNGPINCy0YvQstC+0LTQuNGCINCy0YHQtSDQuNC80LXRjtGJ0LjQtdGB0Y8gY29va2llINCyINCy0LjQtNC1INGC0LDQsdC70LjRhtGLICjQuNC80Y8sINC30L3QsNGH0LXQvdC40LUpLlxyXG4g0JTQu9GPINC60LDQttC00L7QuSBjb29raWUg0LIg0YLQsNCx0LvQuNGG0LUsINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7QsdCw0LLQuNGC0Ywg0LrQvdC+0L/QutGDIFwi0YPQtNCw0LvQuNGC0YxcIiwg0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAgXCLRg9C00LDQu9C40YLRjFwiLCDQvdCwINGN0LrRgNCw0L0g0LTQvtC70LbQtdC9INCx0YvRgtGMINCy0YvQstC10LTQtdC9IGNvbmZpcm0g0YEg0YLQtdC60YHRgtC+0LwgXCLQo9C00LDQu9C40YLRjCBjb29raWUg0YEg0LjQvNC10L3QtdC8IOKApj9cIi4g0JLQvNC10YHRgtC+IOKApiDQvdC10L7QsdGF0L7QtNC40LzQviDQv9C+0LTRgdGC0LDQstC40YLRjCDQuNC80Y8g0YPQtNCw0LvRj9C10LzQvtC5IGNvb2tpZS4g0JXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC+0YLQstC10YLQuNC7INC/0L7Qu9C+0LbQuNGC0LXQu9GM0L3Qviwg0YLQviDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidCw0Y8gY29va2llINC00L7Qu9C20L3QsCDQsdGL0YLRjCDRg9C00LDQu9C10L3QsC5cclxuXHJcbiDQmiDRgdGC0YDQsNC90LjRh9C60LUg0LjQtyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPINC90LXQvtCx0YXQvtC00LjQvNC+INC00L7QsdCw0LLQuNGC0Ywg0YTQvtGA0LzRgyDRgSDRgtC10LrRgdGC0L7QstGL0LzQuCDQv9C+0LvRj9C80Lgg0Lgg0LrQvdC+0L/QutC+0LkgXCLQtNC+0LHQsNCy0LjRgtGMXCIuXHJcbiDQodC/0LjRgdC+0Log0YLQtdC60YHRgtC+0LLRi9GFINC/0L7Qu9C10Lk6XHJcbiAtINC40LzRj1xyXG4gLSDQt9C90LDRh9C10L3QuNC1XHJcbiAtINGB0YDQvtC6INCz0L7QtNC90L7RgdGC0LggKNC60L7Qu9C40YfQtdGB0YLQstC+INC00L3QtdC5KVxyXG5cclxuINCf0L7RgdC70LUg0L3QsNC20LDRgtC40Y8g0L3QsCDQutC90L7Qv9C60YMgXCLQtNC+0LHQsNCy0LjRgtGMXCIg0LTQvtC70LbQvdCwINCx0YvRgtGMINGB0L7Qt9C00LDQvdCwICjQuCDQtNC+0LHQsNCy0LvQtdC90LAg0LIg0YLQsNCx0LvQuNGG0YMpINC90L7QstCw0Y8gY29va2llINGBINGD0LrQsNC30LDQvdC90YvQvNC4INC/0LDRgNCw0LzQtdGC0YDQsNC80LguINCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INCyINC/0L7Qu9C1IFwi0YHRgNC+0Log0LPQvtC00L3QvtGB0YLQuFwiINGD0LrQsNC30YvQstCw0LXRgtGB0Y8g0LrQvtC70LjRh9C10YHRgtCy0L4g0LTQvdC10LkgKNC90LDRh9C40L3QsNGPINGBINGC0LXQutGD0YnQtdCz0L4pLCDQvdCwINC/0YDQvtGC0Y/QttC10L3QuNC4INC60L7RgtC+0YDRi9GFINCx0YPQtNC10YIg0LTQvtGB0YLRg9C/0L3QsCBjb29raWUuXHJcblxyXG4g0J/QvtGB0LvQtSDQtNC+0LHQsNCy0LvQtdC90LjQtSBjb29raWUsINC30L3QsNGH0LXQvdC40Y8g0YLQtdC60YHRgtC+0LLRi9GFINC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0L7Rh9C40YnQtdC90YsuXHJcbiDQldGB0LvQuCDQutCw0LrQvtC1LdGC0L4g0LjQtyDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0L3QtSDQt9Cw0L/QvtC70L3QtdC90L4sINGC0L4sINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyBcItC00L7QsdCw0LLQuNGC0YxcIiwgY29va2llINC90LUg0LTQvtC70LbQvdCwINCx0YvRgtGMINGB0L7Qt9C00LDQvdCwLCDQsCDQvdCwINGN0LrRgNCw0L0g0LTQvtC70LbQtdC9INCx0YvRgtGMINCy0YvQstC10LTQtdC9IGFsZXJ0INGBINC/0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LXQvCBcItCX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8g0YTQvtGA0LzRi1wiLlxyXG4g0KLQsNC6INC20LUg0LfQsNC80LXRgtGM0YLQtSwg0YfRgtC+INC/0YDQuCDRgNCw0LHQvtGC0LUg0YEg0YTQvtGA0LzQvtC5INC4INGC0LDQsdC70LjRhtC10LksINC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC/0LXRgNC10LfQsNCz0YDRg9C30L7QuiDRgdGC0YDQsNC90LjRhtGLXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29va2llKCkge1xyXG5cclxuICBsZXQgY29va2llVGFibGUgPSBkcmF3Q29va2llVGFibGUoKTtcclxuXHJcbiAgY29va2llVGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGlmKGUudGFyZ2V0LmRhdGFzZXQuYWN0aW9uID09ICdkZWxldGUnKXtcclxuICAgICAgaWYoZGVsZXRlQ29va2llKGUudGFyZ2V0LmRhdGFzZXQuY29va2llKSl7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFkZF9jb29raWVfZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgb2JqID0ge307XHJcblxyXG4gICAgLy8gdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgLy8gICBpZihpbnB1dC5sb2NhbE5hbWUgPT0gJ2lucHV0Jyl7XHJcbiAgICAvLyAgICAgaWYoaW5wdXQudmFsdWUgPT09ICcnKXtcclxuICAgIC8vICAgICAgIGFsZXJ0KCfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPJyk7XHJcbiAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICBvYmpbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHRoaXMuY2hpbGROb2Rlcy5ldmVyeShpbnB1dCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlucHV0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZENvb2tpZShvYmpbJ2Nvb2tpZS1uYW1lJ10sb2JqWydjb29raWUtdmFsdWUnXSxvYmpbJ2Nvb2tpZS1leHBpcmVzJ10pO1xyXG5cclxuICB9KTtcclxufVxyXG5cclxuXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9ICcnKXtcclxuICBsZXQgb3B0aW9uc1NlcGFyYXRvciA9IChvcHRpb25zKSA/ICc7ICcgOiAnJztcclxuICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTtwYXRoPS8ke29wdGlvbnNTZXBhcmF0b3J9JHtvcHRpb25zfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKS5maW5kKChjb29raWVSb3cpID0+IHtcclxuICAgIGxldCBjb29raWVSb3dBcnJheSA9IGNvb2tpZVJvdy5zcGxpdCgnPScpO1xyXG4gICAgaWYoY29va2llUm93QXJyYXlbMF0gPT0gbmFtZSl7XHJcbiAgICAgIHJldHVybiBjb29raWVSb3dBcnJheVsxXTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZihyZXN1bHQpe1xyXG4gICAgcmV0dXJuIHJlc3VsdC5zcGxpdCgnPScpWzFdO1xyXG4gIH1cclxufVxuXG5cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb29raWVUYWJsZSgpIHtcclxuICBsZXQgY29va2llQXJyYXkgPSBjb29raWVTcGxpdCgpO1xyXG4gIGxldCBjb29raWVSb3dzID0gY29va2llVG9UYWJsZShjb29raWVBcnJheSk7XHJcbiAgbGV0IGNvb2tpZVRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuXHJcbiAgY29va2llVGFibGUuaW5uZXJIVE1MID0gY29va2llUm93cztcclxuICBjb29raWVUYWJsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvb2tpZV90YWJsZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvb2tpZVRhYmxlKTtcclxuXHJcbiAgcmV0dXJuIGNvb2tpZVRhYmxlO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvb2tpZVNwbGl0KCkge1xyXG4gIGxldCBjb29raWVBcnJheSA9IFtdO1xyXG5cclxuICBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykuZm9yRWFjaCgoY29va2llUm93KSA9PiB7XHJcbiAgICBsZXQgY29va2llUm93QXJyYXkgPSBjb29raWVSb3cuc3BsaXQoJz0nKTtcclxuICAgIGxldCBvYmogPSB7XHJcbiAgICAgICdrZXknOiBjb29raWVSb3dBcnJheVswXSxcclxuICAgICAgJ3ZhbCc6IGNvb2tpZVJvd0FycmF5WzFdXHJcbiAgICB9O1xyXG4gICAgaWYgKG9iai5rZXkgIT0gJycpIGNvb2tpZUFycmF5LnB1c2gob2JqKTtcclxuICB9KTtcclxuICByZXR1cm4gY29va2llQXJyYXk7XHJcbn1cclxuXG5cclxuXHJcbmZ1bmN0aW9uIGNvb2tpZVRvVGFibGUoY29va2llQXJyYXkpe1xyXG4gIGxldCBjb29raWVSb3dzID0gJyc7XHJcblxyXG4gIGNvb2tpZUFycmF5LmZvckVhY2goKGNvb2tpZVJvdykgPT4ge1xyXG4gICAgY29va2llUm93cyArPSAnPHRyPic7XHJcbiAgICBjb29raWVSb3dzICs9IGA8dGQ+JHtjb29raWVSb3cua2V5fTwvdGQ+YDtcclxuICAgIGNvb2tpZVJvd3MgKz0gYDx0ZD4ke2Nvb2tpZVJvdy52YWx9PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSBgPHRkPjxidXR0b24gZGF0YS1hY3Rpb249XCJkZWxldGVcIiBkYXRhLWNvb2tpZT1cIiR7Y29va2llUm93LmtleX1cIj5YPC9idXR0b24+PC90ZD5gO1xyXG4gICAgY29va2llUm93cyArPSAnPC90cj4nO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29va2llUm93cztcclxufVxyXG5cclxuXG5cclxuZnVuY3Rpb24gYWRkQ29va2llKG5hbWUsIHZhbHVlLCBleHBpcmVzKXtcclxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlO1xyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIE51bWJlcihleHBpcmVzKSk7XHJcbiAgc2V0Q29va2llKG5hbWUsIHZhbHVlLCBgZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gKTtcclxuICBjb29raWVfdGFibGUucmVtb3ZlKCk7XHJcbiAgZHJhd0Nvb2tpZVRhYmxlKCk7XHJcbn1cclxuXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lKXtcclxuICBpZihjb25maXJtKGDQo9C00LDQu9C40YLRjCAke25hbWV9P2ApKXtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoMCk7XHJcbiAgICBkYXRlID0gZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gICAgbGV0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PTsgcGF0aD0vOyBleHBpcmVzPSR7ZGF0ZX1gO1xyXG4gICAgY29uc29sZS5sb2coYCR7bmFtZX09OyBwYXRoPSR7cGF0aH07IGV4cGlyZXM9JHtkYXRlfWApO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL2Nvb2tpZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3Q0E7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNhQTtBQXVDQTtBQU9BO0FBL0RBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=