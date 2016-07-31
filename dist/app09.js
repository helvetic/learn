var app09 =
webpackJsonp_name_([7],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _timer = __webpack_require__(85);

	var _timer2 = _interopRequireDefault(_timer);

	var _cities = __webpack_require__(103);

	var _cities2 = _interopRequireDefault(_cities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Создать модуль, который экспортирует функцию 'timer'.
	 * Функция 'timer' должна возвращать новый промис.
	 * Функция 'timer' принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состояние 'fulfilled'.
	 * Пример использования:
	 * timer(3000).then(() => console.log('я вывелась через 3 секунды'))
	 */

	/**
	 * Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
	 * Отсортировать города по алфавиту и вывести на странице.
	 * Использование промисов обязательно.
	 * Запрещено использование любых библиотек (включая jQuery) и фреймворков.
	 */

	/**
	 * Создать страничку с текстовым полем.
	 * После загрузки странички, загрузить список городов при помощи AJAX.
	 * При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых есть введенный текст.
	 * Использование промисов обязательно.
	 * Запрещено использование любых библиотек (включая jQuery) и фреймворков.
	 */

	(0, _cities2.default)();

	(0, _timer2.default)(3000).then(function () {
	  return console.log('я вывелась через 3 секунды');
		});

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lciBmcm9tICcuL21vZHVsZXMvdGltZXInO1xyXG5pbXBvcnQgY2l0aWVzIGZyb20gJy4vbW9kdWxlcy9jaXRpZXMnO1xyXG5cclxuLyoqXHJcbiAqINCh0L7Qt9C00LDRgtGMINC80L7QtNGD0LvRjCwg0LrQvtGC0L7RgNGL0Lkg0Y3QutGB0L/QvtGA0YLQuNGA0YPQtdGCINGE0YPQvdC60YbQuNGOICd0aW1lcicuXHJcbiAqINCk0YPQvdC60YbQuNGPICd0aW1lcicg0LTQvtC70LbQvdCwINCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINC90L7QstGL0Lkg0L/RgNC+0LzQuNGBLlxyXG4gKiDQpNGD0L3QutGG0LjRjyAndGltZXInINC/0YDQuNC90LjQvNCw0LXRgiAxINCw0YDQs9GD0LzQtdC90YIgLSDQutC+0LvQuNGH0LXRgdGC0LLQviDQvNC40LvQu9C40YHQtdC60YPQvdC0LCDRh9C10YDQtdC3INC60L7RgtC+0YDRi9C1INC/0YDQvtC80LjRgSDQtNC+0LvQttC10L0g0L/QtdGA0LXQudGC0Lgg0LIg0YHQvtGB0YLQvtGP0L3QuNC1ICdmdWxmaWxsZWQnLlxyXG4gKiDQn9GA0LjQvNC10YAg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y86XHJcbiAqIHRpbWVyKDMwMDApLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ9GPINCy0YvQstC10LvQsNGB0Ywg0YfQtdGA0LXQtyAzINGB0LXQutGD0L3QtNGLJykpXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqINCX0LDQs9GA0YPQt9C40YLRjCDQs9C+0YDQvtC00LAg0L/RgNC4INC/0L7QvNC+0YnQuCBBSkFYINC40LcgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NtZWx1a292L2NpdGllc1Rlc3QvbWFzdGVyL2NpdGllcy5qc29uICjRgdC10YDQstC10YAg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCIEFKQVggQ09SUylcclxuICog0J7RgtGB0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0LPQvtGA0L7QtNCwINC/0L4g0LDQu9GE0LDQstC40YLRgyDQuCDQstGL0LLQtdGB0YLQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LUuXHJcbiAqINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC/0YDQvtC80LjRgdC+0LIg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvi5cclxuICog0JfQsNC/0YDQtdGJ0LXQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC70Y7QsdGL0YUg0LHQuNCx0LvQuNC+0YLQtdC6ICjQstC60LvRjtGH0LDRjyBqUXVlcnkpINC4INGE0YDQtdC50LzQstC+0YDQutC+0LIuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqINCh0L7Qt9C00LDRgtGMINGB0YLRgNCw0L3QuNGH0LrRgyDRgSDRgtC10LrRgdGC0L7QstGL0Lwg0L/QvtC70LXQvC5cclxuICog0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGH0LrQuCwg0LfQsNCz0YDRg9C30LjRgtGMINGB0L/QuNGB0L7QuiDQs9C+0YDQvtC00L7QsiDQv9GA0Lgg0L/QvtC80L7RidC4IEFKQVguXHJcbiAqINCf0YDQuCDQstCy0L7QtNC1INGC0LXQutGB0YLQsCDQsiDRgtC10YHRgtC+0LLQvtC1INC/0L7Qu9C1LCDQstGL0LLQvtC00LjRgtGMINC/0L7QtCDRgtC10LrRgdGC0L7QstGL0Lwg0L/QvtC70LXQvCDRgdC/0LjRgdC+0Log0YLQtdGFINCz0L7RgNC+0LTQvtCyLCDQsiDQvdCw0LfQstCw0L3QuNGP0YUg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LLQstC10LTQtdC90L3Ri9C5INGC0LXQutGB0YIuXHJcbiAqINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC/0YDQvtC80LjRgdC+0LIg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvi5cclxuICog0JfQsNC/0YDQtdGJ0LXQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC70Y7QsdGL0YUg0LHQuNCx0LvQuNC+0YLQtdC6ICjQstC60LvRjtGH0LDRjyBqUXVlcnkpINC4INGE0YDQtdC50LzQstC+0YDQutC+0LIuXHJcbiAqL1xyXG5cclxuY2l0aWVzKCk7XHJcblxyXG50aW1lcigzMDAwKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCfRjyDQstGL0LLQtdC70LDRgdGMINGH0LXRgNC10LcgMyDRgdC10LrRg9C90LTRiycpKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FwcDA5LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7QUFRQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7OzsiLCJzb3VyY2VSb290IjoiIn0=