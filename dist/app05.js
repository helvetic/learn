var app05 =
webpackJsonp_name_([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _prepend = __webpack_require__(80);

	var _prepend2 = _interopRequireDefault(_prepend);

	var _deleteTextNodes = __webpack_require__(81);

	var _deleteTextNodes2 = _interopRequireDefault(_deleteTextNodes);

	var _scanDOM = __webpack_require__(82);

	var _scanDOM2 = _interopRequireDefault(_scanDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var container = document.querySelector('.container');
	var newElement = document.querySelector('.newElement');
	var textNodes = document.querySelector('.textNodes');

	(0, _scanDOM2.default)();

	(0, _prepend2.default)(container, newElement);

	(0, _deleteTextNodes2.default)(textNodes);

/***/ },

/***/ 80:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prepend;
	//Создать модуль, который экспортирует функцию `prepend`
	//prepend имеет два параметра, в которые нужно передать элементы
	//Задача функции - вставить второй элемент в начало первого. Например:
	//`prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.

	function prepend(container, newElement) {
	  container.insertBefore(newElement, container.firstChild);
	}

/***/ },

/***/ 81:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteTextNodes;

	//Создать модуль, который экспортирует функцию `deleteTextNodes`
	//Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
	//Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.

	function deleteTextNodes(el) {
	  var childs = el.childNodes;

	  for (var i = 0; i < childs.length; i++) {

	    if (childs[i].nodeType == 3) {
	      childs[i].remove();
	      i--;
	    } else if (childs[i].hasChildNodes()) {
	      deleteTextNodes(childs[i]);
	    }
	  }
		}

/***/ },

/***/ 82:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scanDOM;
	/*Создать модуль, который экспортирует функцию `scanDOM`.
	`scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
	Тэгов div: 10
	Тэгов a: 5
	Тэгов span: 10
	Текстовых узлов: 100
	Элементов с классом c1: 10
	Элементов с классом c2: 20

	Количеств и название классов/тегов заранее неизвестно. Функция сама должна определить количество и название тегов/классов.*/

	function scanDOM() {

	  var root = document.body;
	  var childs = root.childNodes;

	  var data = {
	    tag: {},
	    text: 0,
	    classes: {}
	  };

	  data = scaner(childs, data);

	  displayScan(data);
	}

	function scaner(childs, data) {
	  for (var i = 0; i < childs.length; i++) {
	    switch (childs[i].nodeType) {

	      case 1:

	        if (!data.tag[childs[i].localName]++) {
	          data.tag[childs[i].localName] = 1;
	        }

	        if (childs[i].className != '') {
	          if (!data.classes[childs[i].className]++) {
	            data.classes[childs[i].className] = 1;
	          }
	        }

	        if (childs[i].hasChildNodes()) {
	          scaner(childs[i], data);
	        }
	        break;

	      case 3:
	        data.text++;
	        break;
	    }
	  }

	  return data;
	}

	function displayScan(data) {
	  for (var tag in data.tag) {
	    if (data.tag.hasOwnProperty(tag)) {
	      console.log('Тэгов ' + tag + ': ' + data.tag[tag]);
	    }
	  }

	  console.log('Текстовых узлов: ' + data.text);

	  for (var classname in data.classes) {
	    if (data.classes.hasOwnProperty(classname)) {
	      console.log('Элементов с классом \'' + classname + '\': ' + data.classes[classname]);
	    }
	  }
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA1LmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9wcmVwZW5kLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9kZWxldGVUZXh0Tm9kZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL3NjYW5ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByZXBlbmQgZnJvbSAnLi9tb2R1bGVzL3ByZXBlbmQnO1xyXG5pbXBvcnQgZGVsZXRlVGV4dE5vZGVzIGZyb20gJy4vbW9kdWxlcy9kZWxldGVUZXh0Tm9kZXMnO1xyXG5pbXBvcnQgc2NhbkRPTSBmcm9tICcuL21vZHVsZXMvc2NhbkRPTSc7XHJcblxyXG5cclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxubGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlbWVudCcpO1xyXG5sZXQgdGV4dE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHROb2RlcycpO1xyXG5cclxuc2NhbkRPTSgpO1xyXG5cclxucHJlcGVuZCAoY29udGFpbmVyLG5ld0VsZW1lbnQpO1xyXG5cclxuZGVsZXRlVGV4dE5vZGVzKHRleHROb2Rlcyk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hcHAwNS5qc1xuICoqLyIsIi8v0KHQvtC30LTQsNGC0Ywg0LzQvtC00YPQu9GMLCDQutC+0YLQvtGA0YvQuSDRjdC60YHQv9C+0YDRgtC40YDRg9C10YIg0YTRg9C90LrRhtC40Y4gYHByZXBlbmRgXHJcbi8vcHJlcGVuZCDQuNC80LXQtdGCINC00LLQsCDQv9Cw0YDQsNC80LXRgtGA0LAsINCyINC60L7RgtC+0YDRi9C1INC90YPQttC90L4g0L/QtdGA0LXQtNCw0YLRjCDRjdC70LXQvNC10L3RgtGLXHJcbi8v0JfQsNC00LDRh9CwINGE0YPQvdC60YbQuNC4IC0g0LLRgdGC0LDQstC40YLRjCDQstGC0L7RgNC+0Lkg0Y3Qu9C10LzQtdC90YIg0LIg0L3QsNGH0LDQu9C+INC/0LXRgNCy0L7Qs9C+LiDQndCw0L/RgNC40LzQtdGAOlxyXG4vL2BwcmVwZW5kKGNvbnRhaW5lciwgbmV3RWxlbWVudClgIC0gbmV3RWxlbWVudCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LTQvtCx0LDQstC70LXQvSDQsiDQvdCw0YfQsNC70L4g0Y3Qu9C10LzQtdC90YLQsCBjb250YWluZXIuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwZW5kIChjb250YWluZXIsIG5ld0VsZW1lbnQpIHtcclxuICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvcHJlcGVuZC5qc1xuICoqLyIsIlxyXG4vL9Ch0L7Qt9C00LDRgtGMINC80L7QtNGD0LvRjCwg0LrQvtGC0L7RgNGL0Lkg0Y3QutGB0L/QvtGA0YLQuNGA0YPQtdGCINGE0YPQvdC60YbQuNGOIGBkZWxldGVUZXh0Tm9kZXNgXHJcbi8v0K3RgtCwINGE0YPQvdC60YbQuNGPINC/0YDQuNC90LjQvNCw0LXRgiDQvdCwINCy0YXQvtC0INGN0LvQtdC80LXQvdGCINC4INC00L7Qu9C20L3QsCDRg9C00LDQu9C40YLRjCDQstGB0LUg0YLQtdC60YHRgtC+0LLRi9C1INGD0LfQu9GLINCy0L3Rg9GC0YDQuCDRg9C60LDQt9Cw0L3QvdC+0LPQviDRjdC70LXQvNC10L3RgtCwLlxyXG4vL9Ck0YPQvdC60YbQuNGPINC80L7QttC10YIg0YDQsNCx0L7RgtCw0YLRjCDQvdC1INGA0LXQutGD0YDRgdC40LLQvdC+LCDRgtC+INC10YHRgtGMINC90LUg0LfQsNGF0L7QtNC40YLRjCDQstC90YPRgtGA0Ywg0LTQvtGH0LXRgNC90LjRhSDRjdC70LXQvNC10L3RgtC+0LIg0LrQvtC90YLQtdC50L3QtdGA0LAuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUZXh0Tm9kZXMgKGVsKSB7XHJcbiAgbGV0IGNoaWxkcyA9IGVsLmNoaWxkTm9kZXM7XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPGNoaWxkcy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgaWYoY2hpbGRzW2ldLm5vZGVUeXBlID09IDMpe1xyXG4gICAgICBjaGlsZHNbaV0ucmVtb3ZlKCk7XHJcbiAgICAgIGktLTtcclxuICAgIH1lbHNlIGlmKGNoaWxkc1tpXS5oYXNDaGlsZE5vZGVzKCkpe1xyXG4gICAgICBkZWxldGVUZXh0Tm9kZXMoY2hpbGRzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9kZWxldGVUZXh0Tm9kZXMuanNcbiAqKi8iLCIvKtCh0L7Qt9C00LDRgtGMINC80L7QtNGD0LvRjCwg0LrQvtGC0L7RgNGL0Lkg0Y3QutGB0L/QvtGA0YLQuNGA0YPQtdGCINGE0YPQvdC60YbQuNGOIGBzY2FuRE9NYC5cclxuYHNjYW5ET01gINC00L7Qu9C20L3QsCDQv9C10YDQtdCx0LjRgNCw0YLRjCDQstGB0LUg0YPQt9C70Ysg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC4INCy0YvQstC+0LTQuNGC0Ywg0LIg0LrQvtC90YHQvtC70Ywg0YHRgtCw0YLQuNGB0YLQuNC60YMg0L/QviDRjdC70LXQvNC10L3RgtCw0Lwg0Lgg0LrQu9Cw0YHRgdCw0Lwg0L3QsCDRgdGC0YDQsNC90LjRhtC1LiDQndCw0L/RgNC40LzQtdGAOlxyXG7QotGN0LPQvtCyIGRpdjogMTBcclxu0KLRjdCz0L7QsiBhOiA1XHJcbtCi0Y3Qs9C+0LIgc3BhbjogMTBcclxu0KLQtdC60YHRgtC+0LLRi9GFINGD0LfQu9C+0LI6IDEwMFxyXG7QrdC70LXQvNC10L3RgtC+0LIg0YEg0LrQu9Cw0YHRgdC+0LwgYzE6IDEwXHJcbtCt0LvQtdC80LXQvdGC0L7QsiDRgSDQutC70LDRgdGB0L7QvCBjMjogMjBcclxuXHJcbtCa0L7Qu9C40YfQtdGB0YLQsiDQuCDQvdCw0LfQstCw0L3QuNC1INC60LvQsNGB0YHQvtCyL9GC0LXQs9C+0LIg0LfQsNGA0LDQvdC10LUg0L3QtdC40LfQstC10YHRgtC90L4uINCk0YPQvdC60YbQuNGPINGB0LDQvNCwINC00L7Qu9C20L3QsCDQvtC/0YDQtdC00LXQu9C40YLRjCDQutC+0LvQuNGH0LXRgdGC0LLQviDQuCDQvdCw0LfQstCw0L3QuNC1INGC0LXQs9C+0LIv0LrQu9Cw0YHRgdC+0LIuKi9cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2NhbkRPTSAoKSB7XHJcblxyXG4gIGxldCByb290ID0gZG9jdW1lbnQuYm9keTtcclxuICBsZXQgY2hpbGRzID0gcm9vdC5jaGlsZE5vZGVzO1xyXG5cclxuICBsZXQgZGF0YSA9IHtcclxuICAgIHRhZzoge30sXHJcbiAgICB0ZXh0OiAwLFxyXG4gICAgY2xhc3Nlczoge31cclxuICB9O1xyXG5cclxuICBkYXRhID0gc2NhbmVyKGNoaWxkcywgZGF0YSk7XHJcblxyXG4gIGRpc3BsYXlTY2FuKGRhdGEpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzY2FuZXIgKGNoaWxkcywgZGF0YSl7XHJcbiAgZm9yKGxldCBpPTA7IGk8Y2hpbGRzLmxlbmd0aDsgaSsrKXtcclxuICAgIHN3aXRjaChjaGlsZHNbaV0ubm9kZVR5cGUpIHtcclxuXHJcbiAgICAgIGNhc2UgMTpcclxuXHJcbiAgICAgICAgaWYoIWRhdGEudGFnW2NoaWxkc1tpXS5sb2NhbE5hbWVdKyspe1xyXG4gICAgICAgICAgZGF0YS50YWdbY2hpbGRzW2ldLmxvY2FsTmFtZV0gPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY2hpbGRzW2ldLmNsYXNzTmFtZSAhPSAnJyl7XHJcbiAgICAgICAgICBpZighZGF0YS5jbGFzc2VzW2NoaWxkc1tpXS5jbGFzc05hbWVdKyspe1xyXG4gICAgICAgICAgICBkYXRhLmNsYXNzZXNbY2hpbGRzW2ldLmNsYXNzTmFtZV0gPSAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY2hpbGRzW2ldLmhhc0NoaWxkTm9kZXMoKSl7XHJcbiAgICAgICAgICBzY2FuZXIoY2hpbGRzW2ldLGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgMzpcclxuICAgICAgICBkYXRhLnRleHQrKztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVNjYW4oZGF0YSl7XHJcbiAgZm9yIChsZXQgdGFnIGluIGRhdGEudGFnKSB7XHJcbiAgICBpZiAoZGF0YS50YWcuaGFzT3duUHJvcGVydHkodGFnKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhg0KLRjdCz0L7QsiAke3RhZ306ICR7ZGF0YS50YWdbdGFnXX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGDQotC10LrRgdGC0L7QstGL0YUg0YPQt9C70L7QsjogJHtkYXRhLnRleHR9YCk7XHJcblxyXG4gIGZvciAobGV0IGNsYXNzbmFtZSBpbiBkYXRhLmNsYXNzZXMpIHtcclxuICAgIGlmIChkYXRhLmNsYXNzZXMuaGFzT3duUHJvcGVydHkoY2xhc3NuYW1lKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhg0K3Qu9C10LzQtdC90YLQvtCyINGBINC60LvQsNGB0YHQvtC8ICcke2NsYXNzbmFtZX0nOiAke2RhdGEuY2xhc3Nlc1tjbGFzc25hbWVdfWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9zY2FuRE9NLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFiQTs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9