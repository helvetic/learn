var app09 =
webpackJsonp_name_([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _citiesHandlebars = __webpack_require__(110);

	var _citiesHandlebars2 = _interopRequireDefault(_citiesHandlebars);

	var _friends = __webpack_require__(111);

	var _friends2 = _interopRequireDefault(_friends);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	После загрузки страницы, происходит загрузка городов через AJAX.
	Города сортируются по имени и выводятся на странице при помощи шаблонизатора Handlebars. При вводе значений в текстовое поле, должны скрываться те города, в названии которых нет подстроки, указанной в текстовом поле.
	 */

	/*
	Создать приложение для ВКонтакте, которое загружает список ваших друзей и выводит их на страницу в следующем формате: Фото, ФИО, Возраст, Дата рождения.
	Друзья должны быть отсортированы по дате рождения в порядке убывания. То есть на самом верху списка расположен друг с ближайший датой рождения.
	Использование шаблонизатора приветствуется.
	 */

	(0, _citiesHandlebars2.default)();

	console.info('app');
	var friends = new _friends2.default();

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(86);

	var _promise2 = _interopRequireDefault(_promise);

	exports.default = cities;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
	 * Отсортировать города по алфавиту и вывести на странице.
	 * Использование промисов обязательно.
	 * Запрещено использование любых библиотек (включая jQuery) и фреймворков.
	 *
	 * Создать страничку с текстовым полем.
	 * После загрузки странички, загрузить список городов при помощи AJAX.
	 * При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых есть введенный текст.
	 * Использование промисов обязательно.
	 * Запрещено использование любых библиотек (включая jQuery) и фреймворков.
	 *
	 * @return {[type]} [description]
	 */
	function cities() {
	  var url = arguments.length <= 0 || arguments[0] === undefined ? 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json' : arguments[0];


	  new _promise2.default(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url);
	    xhr.addEventListener('load', function () {
	      resolve(xhr.responseText);
	    });
	    xhr.addEventListener('error', function () {
	      reject();
	    });
	    xhr.send();
	  }).then(function (responseText) {
	    return new _promise2.default(function (resolve) {
	      var source = entry_template.innerHTML;
	      var template = Handlebars.compile(source);
	      var citiesList = JSON.parse(responseText);
	      var data = {
	        cities: citiesList
	      };
	      cities_container.innerHTML = template(data);

	      cities_filter.addEventListener('keyup', function () {
	        var _this = this;

	        var newCitiesList = citiesList.filter(function (city) {
	          return city.name.toLowerCase().includes(_this.value);
	        });
	        data.cities = newCitiesList;
	        cities_container.innerHTML = template(data);
	      });
	    });
	  });
	};

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(86);

	var _promise2 = _interopRequireDefault(_promise);

	var _classCallCheck2 = __webpack_require__(6);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	Создать приложение для ВКонтакте, которое загружает список ваших друзей и выводит их на страницу в следующем формате: Фото, ФИО, Возраст, Дата рождения.
	Друзья должны быть отсортированы по дате рождения в порядке убывания. То есть на самом верху списка расположен друг с ближайший датой рождения.
	Использование шаблонизатора приветствуется.
	 */

	var VKFriends = function VKFriends() {
	  (0, _classCallCheck3.default)(this, VKFriends);

	  console.info('VK FRIENDS');
	  new _promise2.default(function (resolve, reject) {
	    VK.init({ apiId: 5575450 });
	    VK.Auth.login(function (response) {
	      if (response.session) {
	        resolve(response);
	      } else {
	        reject('Не удалось авторизоваться');
	      }
	    }, 2);
	  }).then(function (responseObj) {
	    console.log('Статус', responseObj);
	    return new _promise2.default(function (resolve) {
	      VK.api('friends.get', {
	        fields: 'bdate, city, country, photo_100'
	      }, function (response) {
	        resolve(response);
	      });
	    });
	  }).then(function (friendsList) {
	    var nowDate = new Date();
	    var friends = friendsList.response;

	    console.log('Друзья', friends);

	    friendsList.current = {};
	    friendsList.current.day = nowDate.getDay();
	    friendsList.current.month = nowDate.getMonth();

	    friends.sort(sortJSON);
	    var startPos = friends.findIndex(function (el) {
	      var elDate = el.bdate.split('.', 2);
	      if (elDate[1] >= friendsList.current.month && elDate[0] >= friendsList.current.day) {
	        return true;
	      }
	    });
	    var undefinedPos = friends.findIndex(function (el) {
	      if (!el.bdate) {
	        return true;
	      }
	    });

	    var startFriends = friends.slice(startPos, undefinedPos);
	    var nextFriends = friends.slice(0, startPos);
	    var undefinedFriends = friends.slice(undefinedPos);

	    friendsList.sortedFriends = startFriends.concat(nextFriends, undefinedFriends);
	    console.log('Друзья отсортированные', friendsList.sortedFriends);

	    var source = friends_template.innerHTML;
	    var template = Handlebars.compile(source);
	    vk_friends.innerHTML = template(friendsList);
	  });
	};

	exports.default = VKFriends;


	function sortJSON(aObj, bObj) {
	  var a = getArrayFromDateStr(aObj.bdate);
	  var b = getArrayFromDateStr(bObj.bdate);

	  if (a[1] === b[1]) {
	    return a[0] - b[0];
	  } else {
	    return a[1] - b[1];
	  }
	}

	function getArrayFromDateStr() {
	  var str = arguments.length <= 0 || arguments[0] === undefined ? '0.13' : arguments[0];

	  return str.split('.');
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwMDkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcDA5LmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9jaXRpZXNIYW5kbGViYXJzLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9mcmllbmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaXRpZXMgZnJvbSAnLi9tb2R1bGVzL2NpdGllc0hhbmRsZWJhcnMnO1xyXG5pbXBvcnQgVktGcmllbmRzIGZyb20gJy4vbW9kdWxlcy9mcmllbmRzJztcclxuXHJcbi8qKlxyXG7Qn9C+0YHQu9C1INC30LDQs9GA0YPQt9C60Lgg0YHRgtGA0LDQvdC40YbRiywg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LfQsNCz0YDRg9C30LrQsCDQs9C+0YDQvtC00L7QsiDRh9C10YDQtdC3IEFKQVguXHJcbtCT0L7RgNC+0LTQsCDRgdC+0YDRgtC40YDRg9GO0YLRgdGPINC/0L4g0LjQvNC10L3QuCDQuCDQstGL0LLQvtC00Y/RgtGB0Y8g0L3QsCDRgdGC0YDQsNC90LjRhtC1INC/0YDQuCDQv9C+0LzQvtGJ0Lgg0YjQsNCx0LvQvtC90LjQt9Cw0YLQvtGA0LAgSGFuZGxlYmFycy4g0J/RgNC4INCy0LLQvtC00LUg0LfQvdCw0YfQtdC90LjQuSDQsiDRgtC10LrRgdGC0L7QstC+0LUg0L/QvtC70LUsINC00L7Qu9C20L3RiyDRgdC60YDRi9Cy0LDRgtGM0YHRjyDRgtC1INCz0L7RgNC+0LTQsCwg0LIg0L3QsNC30LLQsNC90LjQuCDQutC+0YLQvtGA0YvRhSDQvdC10YIg0L/QvtC00YHRgtGA0L7QutC4LCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LIg0YLQtdC60YHRgtC+0LLQvtC8INC/0L7Qu9C1LlxyXG4gKi9cclxuXHJcbi8qXHJcbtCh0L7Qt9C00LDRgtGMINC/0YDQuNC70L7QttC10L3QuNC1INC00LvRjyDQktCa0L7QvdGC0LDQutGC0LUsINC60L7RgtC+0YDQvtC1INC30LDQs9GA0YPQttCw0LXRgiDRgdC/0LjRgdC+0Log0LLQsNGI0LjRhSDQtNGA0YPQt9C10Lkg0Lgg0LLRi9Cy0L7QtNC40YIg0LjRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0LIg0YHQu9C10LTRg9GO0YnQtdC8INGE0L7RgNC80LDRgtC1OiDQpNC+0YLQviwg0KTQmNCeLCDQktC+0LfRgNCw0YHRgiwg0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRjy5cclxu0JTRgNGD0LfRjNGPINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQvtGC0YHQvtGA0YLQuNGA0L7QstCw0L3RiyDQv9C+INC00LDRgtC1INGA0L7QttC00LXQvdC40Y8g0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRjy4g0KLQviDQtdGB0YLRjCDQvdCwINGB0LDQvNC+0Lwg0LLQtdGA0YXRgyDRgdC/0LjRgdC60LAg0YDQsNGB0L/QvtC70L7QttC10L0g0LTRgNGD0LMg0YEg0LHQu9C40LbQsNC50YjQuNC5INC00LDRgtC+0Lkg0YDQvtC20LTQtdC90LjRjy5cclxu0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0YjQsNCx0LvQvtC90LjQt9Cw0YLQvtGA0LAg0L/RgNC40LLQtdGC0YHRgtCy0YPQtdGC0YHRjy5cclxuICovXHJcblxyXG5jaXRpZXMoKTtcclxuXHJcblxyXG5jb25zb2xlLmluZm8oJ2FwcCcpO1xyXG5sZXQgZnJpZW5kcyA9IG5ldyBWS0ZyaWVuZHMoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2FwcDA5LmpzXG4gKiovIiwiLyoqXHJcbiAqINCX0LDQs9GA0YPQt9C40YLRjCDQs9C+0YDQvtC00LAg0L/RgNC4INC/0L7QvNC+0YnQuCBBSkFYINC40LcgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NtZWx1a292L2NpdGllc1Rlc3QvbWFzdGVyL2NpdGllcy5qc29uICjRgdC10YDQstC10YAg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCIEFKQVggQ09SUylcclxuICog0J7RgtGB0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0LPQvtGA0L7QtNCwINC/0L4g0LDQu9GE0LDQstC40YLRgyDQuCDQstGL0LLQtdGB0YLQuCDQvdCwINGB0YLRgNCw0L3QuNGG0LUuXHJcbiAqINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC/0YDQvtC80LjRgdC+0LIg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvi5cclxuICog0JfQsNC/0YDQtdGJ0LXQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC70Y7QsdGL0YUg0LHQuNCx0LvQuNC+0YLQtdC6ICjQstC60LvRjtGH0LDRjyBqUXVlcnkpINC4INGE0YDQtdC50LzQstC+0YDQutC+0LIuXHJcbiAqXHJcbiAqINCh0L7Qt9C00LDRgtGMINGB0YLRgNCw0L3QuNGH0LrRgyDRgSDRgtC10LrRgdGC0L7QstGL0Lwg0L/QvtC70LXQvC5cclxuICog0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INGB0YLRgNCw0L3QuNGH0LrQuCwg0LfQsNCz0YDRg9C30LjRgtGMINGB0L/QuNGB0L7QuiDQs9C+0YDQvtC00L7QsiDQv9GA0Lgg0L/QvtC80L7RidC4IEFKQVguXHJcbiAqINCf0YDQuCDQstCy0L7QtNC1INGC0LXQutGB0YLQsCDQsiDRgtC10YHRgtC+0LLQvtC1INC/0L7Qu9C1LCDQstGL0LLQvtC00LjRgtGMINC/0L7QtCDRgtC10LrRgdGC0L7QstGL0Lwg0L/QvtC70LXQvCDRgdC/0LjRgdC+0Log0YLQtdGFINCz0L7RgNC+0LTQvtCyLCDQsiDQvdCw0LfQstCw0L3QuNGP0YUg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LLQstC10LTQtdC90L3Ri9C5INGC0LXQutGB0YIuXHJcbiAqINCY0YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC/0YDQvtC80LjRgdC+0LIg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qvi5cclxuICog0JfQsNC/0YDQtdGJ0LXQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC70Y7QsdGL0YUg0LHQuNCx0LvQuNC+0YLQtdC6ICjQstC60LvRjtGH0LDRjyBqUXVlcnkpINC4INGE0YDQtdC50LzQstC+0YDQutC+0LIuXHJcbiAqXHJcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2l0aWVzKHVybCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc21lbHVrb3YvY2l0aWVzVGVzdC9tYXN0ZXIvY2l0aWVzLmpzb24nKSB7XHJcblxyXG4gIG5ldyBQcm9taXNlICgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgfSk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XHJcbiAgICAgIHJlamVjdCgpO1xyXG4gICAgfSk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG5cclxuICB9KS50aGVuKChyZXNwb25zZVRleHQpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGxldCBzb3VyY2UgPSBlbnRyeV90ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xyXG4gICAgICBsZXQgY2l0aWVzTGlzdCA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgY2l0aWVzOiBjaXRpZXNMaXN0XHJcbiAgICAgIH07XHJcbiAgICAgIGNpdGllc19jb250YWluZXIuaW5uZXJIVE1MID0gdGVtcGxhdGUoZGF0YSk7XHJcblxyXG4gICAgICBjaXRpZXNfZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgbmV3Q2l0aWVzTGlzdCA9IGNpdGllc0xpc3QuZmlsdGVyKGNpdHkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGNpdHkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRhdGEuY2l0aWVzID0gbmV3Q2l0aWVzTGlzdDtcclxuICAgICAgICBjaXRpZXNfY29udGFpbmVyLmlubmVySFRNTCA9IHRlbXBsYXRlKGRhdGEpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvY2l0aWVzSGFuZGxlYmFycy5qc1xuICoqLyIsIi8qXHJcbtCh0L7Qt9C00LDRgtGMINC/0YDQuNC70L7QttC10L3QuNC1INC00LvRjyDQktCa0L7QvdGC0LDQutGC0LUsINC60L7RgtC+0YDQvtC1INC30LDQs9GA0YPQttCw0LXRgiDRgdC/0LjRgdC+0Log0LLQsNGI0LjRhSDQtNGA0YPQt9C10Lkg0Lgg0LLRi9Cy0L7QtNC40YIg0LjRhSDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0LIg0YHQu9C10LTRg9GO0YnQtdC8INGE0L7RgNC80LDRgtC1OiDQpNC+0YLQviwg0KTQmNCeLCDQktC+0LfRgNCw0YHRgiwg0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRjy5cclxu0JTRgNGD0LfRjNGPINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQvtGC0YHQvtGA0YLQuNGA0L7QstCw0L3RiyDQv9C+INC00LDRgtC1INGA0L7QttC00LXQvdC40Y8g0LIg0L/QvtGA0Y/QtNC60LUg0YPQsdGL0LLQsNC90LjRjy4g0KLQviDQtdGB0YLRjCDQvdCwINGB0LDQvNC+0Lwg0LLQtdGA0YXRgyDRgdC/0LjRgdC60LAg0YDQsNGB0L/QvtC70L7QttC10L0g0LTRgNGD0LMg0YEg0LHQu9C40LbQsNC50YjQuNC5INC00LDRgtC+0Lkg0YDQvtC20LTQtdC90LjRjy5cclxu0JjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0YjQsNCx0LvQvtC90LjQt9Cw0YLQvtGA0LAg0L/RgNC40LLQtdGC0YHRgtCy0YPQtdGC0YHRjy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZLRnJpZW5kc3tcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgY29uc29sZS5pbmZvKCdWSyBGUklFTkRTJyk7XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIFZLLmluaXQoe2FwaUlkOiA1NTc1NDUwfSk7XHJcbiAgICAgIFZLLkF1dGgubG9naW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgaWYgKHJlc3BvbnNlLnNlc3Npb24pIHtcclxuICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICByZWplY3QoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRjycpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9LCAyKTtcclxuXHJcblxyXG4gICAgfSkudGhlbihyZXNwb25zZU9iaiA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQodGC0LDRgtGD0YEnLHJlc3BvbnNlT2JqKTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIFZLLmFwaSgnZnJpZW5kcy5nZXQnLFxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgIGZpZWxkczogJ2JkYXRlLCBjaXR5LCBjb3VudHJ5LCBwaG90b18xMDAnXHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuXHJcblxyXG4gICAgfSkudGhlbihmcmllbmRzTGlzdCA9PiB7XHJcbiAgICAgIGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IGZyaWVuZHMgPSBmcmllbmRzTGlzdC5yZXNwb25zZTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCfQlNGA0YPQt9GM0Y8nLGZyaWVuZHMpO1xyXG5cclxuICAgICAgZnJpZW5kc0xpc3QuY3VycmVudCA9IHt9O1xyXG4gICAgICBmcmllbmRzTGlzdC5jdXJyZW50LmRheSA9IG5vd0RhdGUuZ2V0RGF5KCk7XHJcbiAgICAgIGZyaWVuZHNMaXN0LmN1cnJlbnQubW9udGggPSBub3dEYXRlLmdldE1vbnRoKCk7XHJcblxyXG4gICAgICBmcmllbmRzLnNvcnQoc29ydEpTT04pO1xyXG4gICAgICBsZXQgc3RhcnRQb3MgPSBmcmllbmRzLmZpbmRJbmRleChlbCA9PiB7XHJcbiAgICAgICAgbGV0IGVsRGF0ZSA9IGVsLmJkYXRlLnNwbGl0KCcuJywgMik7XHJcbiAgICAgICAgaWYoZWxEYXRlWzFdID49IGZyaWVuZHNMaXN0LmN1cnJlbnQubW9udGggJiYgZWxEYXRlWzBdID49IGZyaWVuZHNMaXN0LmN1cnJlbnQuZGF5KXtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGxldCB1bmRlZmluZWRQb3MgPSBmcmllbmRzLmZpbmRJbmRleChlbCA9PiB7XHJcbiAgICAgICAgaWYoIWVsLmJkYXRlKXtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRGcmllbmRzID0gZnJpZW5kcy5zbGljZShzdGFydFBvcyx1bmRlZmluZWRQb3MpO1xyXG4gICAgICBsZXQgbmV4dEZyaWVuZHMgPSBmcmllbmRzLnNsaWNlKDAsc3RhcnRQb3MpO1xyXG4gICAgICBsZXQgdW5kZWZpbmVkRnJpZW5kcyA9IGZyaWVuZHMuc2xpY2UodW5kZWZpbmVkUG9zKTtcclxuXHJcbiAgICAgIGZyaWVuZHNMaXN0LnNvcnRlZEZyaWVuZHMgPSBzdGFydEZyaWVuZHMuY29uY2F0KG5leHRGcmllbmRzLHVuZGVmaW5lZEZyaWVuZHMpO1xyXG4gICAgICBjb25zb2xlLmxvZygn0JTRgNGD0LfRjNGPINC+0YLRgdC+0YDRgtC40YDQvtCy0LDQvdC90YvQtScsZnJpZW5kc0xpc3Quc29ydGVkRnJpZW5kcyk7XHJcblxyXG4gICAgICBsZXQgc291cmNlID0gZnJpZW5kc190ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xyXG4gICAgICB2a19mcmllbmRzLmlubmVySFRNTCA9IHRlbXBsYXRlKGZyaWVuZHNMaXN0KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzb3J0SlNPTihhT2JqLCBiT2JqKXtcclxuICBsZXQgYSA9IGdldEFycmF5RnJvbURhdGVTdHIoYU9iai5iZGF0ZSk7XHJcbiAgbGV0IGIgPSBnZXRBcnJheUZyb21EYXRlU3RyKGJPYmouYmRhdGUpO1xyXG5cclxuICBpZihhWzFdID09PSBiWzFdKXtcclxuICAgIHJldHVybiBhWzBdIC0gYlswXTtcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiBhWzFdIC0gYlsxXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycmF5RnJvbURhdGVTdHIoc3RyID0gJzAuMTMnKXtcclxuICByZXR1cm4gc3RyLnNwbGl0KCcuJyk7XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL21vZHVsZXMvZnJpZW5kcy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBOzs7OztBQUtBOzs7Ozs7QUFNQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQWZBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFoRUE7QUFDQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9