var app06 =
webpackJsonp_name_([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _accordeon = __webpack_require__(83);

	var _accordeon2 = _interopRequireDefault(_accordeon);

	var _dragNDrop = __webpack_require__(84);

	var _dragNDrop2 = _interopRequireDefault(_dragNDrop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _accordeon2.default)('.accordeon');
	(0, _dragNDrop2.default)('#create-square');

/***/ },

/***/ 83:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (accordeon) {

	  document.querySelector(accordeon).addEventListener('click', function (e) {

	    var target = e.target;

	    if (target.className == 'accordeon-title') {

	      var parent = target.parentNode;
	      var active = document.querySelector('.accordeon-item.active');

	      if (parent.classList.contains('active')) {
	        parent.classList.remove('active');
	      } else {
	        if (active) {
	          active.classList.remove('active');
	        }
	        parent.classList.add('active');
	      }
	    }
	  });
		};

/***/ },

/***/ 84:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (btn) {

	  var highestSize = 400,
	      lowestSize = 10,
	      bodyHeight = document.body.clientHeight,
	      bodyWidth = document.body.clientWidth;

	  document.querySelector(btn).addEventListener('click', function () {

	    var sq = document.createElement('div'),
	        height = randomNumber(highestSize, lowestSize),
	        width = randomNumber(highestSize, lowestSize);

	    sq.className = 'drag-square';
	    sq.style.backgroundColor = randomColor();
	    sq.style.width = width + "px";
	    sq.style.height = height + "px";
	    sq.style.top = randomNumber(0, bodyHeight - height) + "px";
	    sq.style.left = randomNumber(0, bodyWidth - width) + "px";

	    document.body.appendChild(sq);

	    var activeElement = void 0,
	        offsetX = 0,
	        offsetY = 0;

	    sq.addEventListener('mousedown', function (e) {
	      activeElement = e.target;
	      offsetX = e.offsetX;
	      offsetY = e.offsetY;
	    });

	    sq.addEventListener('mouseup', function (e) {
	      activeElement = null;
	    });

	    sq.addEventListener('mousemove', function (e) {
	      if (activeElement != null) {
	        activeElement.style.top = e.clientY - offsetY + 'px';
	        activeElement.style.left = e.clientX - offsetX + 'px';
	      }
	    });
	  });
	};

	function randomColor() {
	  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	}
	/**
	 * Создать страницу с кнопкой. При клике на кнопку, на странице должен создаваться div произвольных размеров, в произвольном месте.
	 * Цвет фона div'а должен быть каждый раз случайным.
	 * Созданные div'ы можно перетаскивать мышкой (drag & drop)
	 * @param  {string} btn - кнопка, на которую вешается событие click
	 */


	function randomNumber(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA2LmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9hY2NvcmRlb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL2RyYWdORHJvcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWNjb3JkZW9uIGZyb20gJy4vbW9kdWxlcy9hY2NvcmRlb24nO1xyXG5pbXBvcnQgZHJhZ05Ecm9wIGZyb20gJy4vbW9kdWxlcy9kcmFnTkRyb3AnO1xyXG5cclxuYWNjb3JkZW9uKCcuYWNjb3JkZW9uJyk7XHJcbmRyYWdORHJvcCgnI2NyZWF0ZS1zcXVhcmUnKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FwcDA2LmpzXG4gKiovIiwiLyoqXHJcbiAqINCf0LXRgNC10LTQtdC70LDRgtGMINGC0LXRgdGC0L7QstC+0LUg0LfQsNC00LDQvdC40LUgKNCw0LrQutC+0YDQtNC10L7QvSkg0YEg0L/RgNC40LzQtdC90LXQvdC40LXQvCDQtNC10LvQtdCz0LjRgNC+0LLQsNC90LjRjy5cclxuICogQHBhcmFtICB7c3RyaW5nfSBhY2NvcmRlb24gLSDRjdC70LXQvNC10L3Rgiwg0L3QsCDQutC+0YLQvtGA0YvQuSDQstC10YjQsNC10YLRgdGPINGB0L7QsdGL0YLQuNC1IGNsaWNrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYWNjb3JkZW9uKSB7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYWNjb3JkZW9uKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PSAnYWNjb3JkZW9uLXRpdGxlJykge1xyXG5cclxuICAgICAgbGV0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGVvbi1pdGVtLmFjdGl2ZScpO1xyXG5cclxuICAgICAgaWYocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgaWYoYWN0aXZlKXtcclxuICAgICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvYWNjb3JkZW9uLmpzXG4gKiovIiwiXHJcbi8qKlxyXG4gKiDQodC+0LfQtNCw0YLRjCDRgdGC0YDQsNC90LjRhtGDINGBINC60L3QvtC/0LrQvtC5LiDQn9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRgywg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC00L7Qu9C20LXQvSDRgdC+0LfQtNCw0LLQsNGC0YzRgdGPIGRpdiDQv9GA0L7QuNC30LLQvtC70YzQvdGL0YUg0YDQsNC30LzQtdGA0L7Qsiwg0LIg0L/RgNC+0LjQt9Cy0L7Qu9GM0L3QvtC8INC80LXRgdGC0LUuXHJcbiAqINCm0LLQtdGCINGE0L7QvdCwIGRpdifQsCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LrQsNC20LTRi9C5INGA0LDQtyDRgdC70YPRh9Cw0LnQvdGL0LwuXHJcbiAqINCh0L7Qt9C00LDQvdC90YvQtSBkaXYn0Ysg0LzQvtC20L3QviDQv9C10YDQtdGC0LDRgdC60LjQstCw0YLRjCDQvNGL0YjQutC+0LkgKGRyYWcgJiBkcm9wKVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJ0biAtINC60L3QvtC/0LrQsCwg0L3QsCDQutC+0YLQvtGA0YPRjiDQstC10YjQsNC10YLRgdGPINGB0L7QsdGL0YLQuNC1IGNsaWNrXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYnRuKSB7XHJcblxyXG4gIGxldCBoaWdoZXN0U2l6ZSA9IDQwMCxcclxuICAgICAgbG93ZXN0U2l6ZSA9IDEwLFxyXG4gICAgICBib2R5SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXHJcbiAgICAgIGJvZHlXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGxldCBzcSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgIGhlaWdodCA9IHJhbmRvbU51bWJlcihoaWdoZXN0U2l6ZSwgbG93ZXN0U2l6ZSksXHJcbiAgICAgICAgd2lkdGggPSByYW5kb21OdW1iZXIoaGlnaGVzdFNpemUsIGxvd2VzdFNpemUpO1xyXG5cclxuXHJcbiAgICBzcS5jbGFzc05hbWUgPSAnZHJhZy1zcXVhcmUnO1xyXG4gICAgc3Euc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFuZG9tQ29sb3IoKTtcclxuICAgIHNxLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICBzcS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XHJcbiAgICBzcS5zdHlsZS50b3AgPSByYW5kb21OdW1iZXIoMCwgYm9keUhlaWdodCAtIGhlaWdodCkgKyBcInB4XCI7XHJcbiAgICBzcS5zdHlsZS5sZWZ0ID0gcmFuZG9tTnVtYmVyKDAsIGJvZHlXaWR0aCAtIHdpZHRoKSArIFwicHhcIjtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNxKTtcclxuXHJcblxyXG4gICAgbGV0IGFjdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgb2Zmc2V0WCA9IDAsXHJcbiAgICAgICAgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgc3EuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGFjdGl2ZUVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgb2Zmc2V0WCA9IGUub2Zmc2V0WDtcclxuICAgICAgb2Zmc2V0WSA9IGUub2Zmc2V0WTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNxLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKXtcclxuICAgICAgYWN0aXZlRWxlbWVudCA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIG9mZnNldFkpICsgJ3B4JztcclxuICAgICAgICBhY3RpdmVFbGVtZW50LnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0gb2Zmc2V0WCkgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKXtcclxuICByZXR1cm4gJyMnKyhNYXRoLnJhbmRvbSgpKjB4RkZGRkZGPDwwKS50b1N0cmluZygxNik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbU51bWJlcihtaW4sIG1heCl7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvZHJhZ05Ecm9wLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBM0RBOzs7Ozs7OztBQTZEQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=