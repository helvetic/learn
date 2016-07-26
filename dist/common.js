/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		6:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"app02","1":"app03","2":"app04","3":"app05","4":"app06","5":"app07"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ({

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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGE1MzA4YzNiMWFiODc5Y2Q5MTQwIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9wcmVwZW5kLmpzIiwid2VicGFjazovLy9zcmMvbW9kdWxlcy9kZWxldGVUZXh0Tm9kZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9tb2R1bGVzL3NjYW5ET00uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pXG4gXHRcdFx0XHRjYWxsYmFja3MucHVzaC5hcHBseShjYWxsYmFja3MsIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKGNhbGxiYWNrcy5sZW5ndGgpXG4gXHRcdFx0Y2FsbGJhY2tzLnNoaWZ0KCkuY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0aWYobW9yZU1vZHVsZXNbMF0pIHtcbiBcdFx0XHRpbnN0YWxsZWRNb2R1bGVzWzBdID0gMDtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0Ly8gQXJyYXkgbWVhbnMgXCJsb2FkaW5nXCIsIGFycmF5IGNvbnRhaW5zIGNhbGxiYWNrc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0NjowXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkLCBjYWxsYmFjaykge1xuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKVxuIFx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIGFuIGFycmF5IG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB1bmRlZmluZWQpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0ucHVzaChjYWxsYmFjayk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtjYWxsYmFja107XG4gXHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gXHRcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyAoe1wiMFwiOlwiYXBwMDJcIixcIjFcIjpcImFwcDAzXCIsXCIyXCI6XCJhcHAwNFwiLFwiM1wiOlwiYXBwMDVcIixcIjRcIjpcImFwcDA2XCIsXCI1XCI6XCJhcHAwN1wifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE1MzA4YzNiMWFiODc5Y2Q5MTQwXG4gKiovIiwiLy/QodC+0LfQtNCw0YLRjCDQvNC+0LTRg9C70YwsINC60L7RgtC+0YDRi9C5INGN0LrRgdC/0L7RgNGC0LjRgNGD0LXRgiDRhNGD0L3QutGG0LjRjiBgcHJlcGVuZGBcclxuLy9wcmVwZW5kINC40LzQtdC10YIg0LTQstCwINC/0LDRgNCw0LzQtdGC0YDQsCwg0LIg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQv9C10YDQtdC00LDRgtGMINGN0LvQtdC80LXQvdGC0YtcclxuLy/Ql9Cw0LTQsNGH0LAg0YTRg9C90LrRhtC40LggLSDQstGB0YLQsNCy0LjRgtGMINCy0YLQvtGA0L7QuSDRjdC70LXQvNC10L3RgiDQsiDQvdCw0YfQsNC70L4g0L/QtdGA0LLQvtCz0L4uINCd0LDQv9GA0LjQvNC10YA6XHJcbi8vYHByZXBlbmQoY29udGFpbmVyLCBuZXdFbGVtZW50KWAgLSBuZXdFbGVtZW50INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQtNC+0LHQsNCy0LvQtdC9INCyINC90LDRh9Cw0LvQviDRjdC70LXQvNC10L3RgtCwIGNvbnRhaW5lci5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBlbmQgKGNvbnRhaW5lciwgbmV3RWxlbWVudCkge1xyXG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobmV3RWxlbWVudCxjb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbW9kdWxlcy9wcmVwZW5kLmpzXG4gKiovIiwiXHJcbi8v0KHQvtC30LTQsNGC0Ywg0LzQvtC00YPQu9GMLCDQutC+0YLQvtGA0YvQuSDRjdC60YHQv9C+0YDRgtC40YDRg9C10YIg0YTRg9C90LrRhtC40Y4gYGRlbGV0ZVRleHROb2Rlc2BcclxuLy/QrdGC0LAg0YTRg9C90LrRhtC40Y8g0L/RgNC40L3QuNC80LDQtdGCINC90LAg0LLRhdC+0LQg0Y3Qu9C10LzQtdC90YIg0Lgg0LTQvtC70LbQvdCwINGD0LTQsNC70LjRgtGMINCy0YHQtSDRgtC10LrRgdGC0L7QstGL0LUg0YPQt9C70Ysg0LLQvdGD0YLRgNC4INGD0LrQsNC30LDQvdC90L7Qs9C+INGN0LvQtdC80LXQvdGC0LAuXHJcbi8v0KTRg9C90LrRhtC40Y8g0LzQvtC20LXRgiDRgNCw0LHQvtGC0LDRgtGMINC90LUg0YDQtdC60YPRgNGB0LjQstC90L4sINGC0L4g0LXRgdGC0Ywg0L3QtSDQt9Cw0YXQvtC00LjRgtGMINCy0L3Rg9GC0YDRjCDQtNC+0YfQtdGA0L3QuNGFINGN0LvQtdC80LXQvdGC0L7QsiDQutC+0L3RgtC10LnQvdC10YDQsC5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRleHROb2RlcyAoZWwpIHtcclxuICBsZXQgY2hpbGRzID0gZWwuY2hpbGROb2RlcztcclxuXHJcbiAgZm9yKGxldCBpPTA7IGk8Y2hpbGRzLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICBpZihjaGlsZHNbaV0ubm9kZVR5cGUgPT0gMyl7XHJcbiAgICAgIGNoaWxkc1tpXS5yZW1vdmUoKTtcclxuICAgICAgaS0tO1xyXG4gICAgfWVsc2UgaWYoY2hpbGRzW2ldLmhhc0NoaWxkTm9kZXMoKSl7XHJcbiAgICAgIGRlbGV0ZVRleHROb2RlcyhjaGlsZHNbaV0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL2RlbGV0ZVRleHROb2Rlcy5qc1xuICoqLyIsIi8q0KHQvtC30LTQsNGC0Ywg0LzQvtC00YPQu9GMLCDQutC+0YLQvtGA0YvQuSDRjdC60YHQv9C+0YDRgtC40YDRg9C10YIg0YTRg9C90LrRhtC40Y4gYHNjYW5ET01gLlxyXG5gc2NhbkRPTWAg0LTQvtC70LbQvdCwINC/0LXRgNC10LHQuNGA0LDRgtGMINCy0YHQtSDRg9C30LvRiyDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0Lgg0LLRi9Cy0L7QtNC40YLRjCDQsiDQutC+0L3RgdC+0LvRjCDRgdGC0LDRgtC40YHRgtC40LrRgyDQv9C+INGN0LvQtdC80LXQvdGC0LDQvCDQuCDQutC70LDRgdGB0LDQvCDQvdCwINGB0YLRgNCw0L3QuNGG0LUuINCd0LDQv9GA0LjQvNC10YA6XHJcbtCi0Y3Qs9C+0LIgZGl2OiAxMFxyXG7QotGN0LPQvtCyIGE6IDVcclxu0KLRjdCz0L7QsiBzcGFuOiAxMFxyXG7QotC10LrRgdGC0L7QstGL0YUg0YPQt9C70L7QsjogMTAwXHJcbtCt0LvQtdC80LXQvdGC0L7QsiDRgSDQutC70LDRgdGB0L7QvCBjMTogMTBcclxu0K3Qu9C10LzQtdC90YLQvtCyINGBINC60LvQsNGB0YHQvtC8IGMyOiAyMFxyXG5cclxu0JrQvtC70LjRh9C10YHRgtCyINC4INC90LDQt9Cy0LDQvdC40LUg0LrQu9Cw0YHRgdC+0LIv0YLQtdCz0L7QsiDQt9Cw0YDQsNC90LXQtSDQvdC10LjQt9Cy0LXRgdGC0L3Qvi4g0KTRg9C90LrRhtC40Y8g0YHQsNC80LAg0LTQvtC70LbQvdCwINC+0L/RgNC10LTQtdC70LjRgtGMINC60L7Qu9C40YfQtdGB0YLQstC+INC4INC90LDQt9Cy0LDQvdC40LUg0YLQtdCz0L7Qsi/QutC70LDRgdGB0L7Qsi4qL1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY2FuRE9NICgpIHtcclxuXHJcbiAgbGV0IHJvb3QgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGxldCBjaGlsZHMgPSByb290LmNoaWxkTm9kZXM7XHJcblxyXG4gIGxldCBkYXRhID0ge1xyXG4gICAgdGFnOiB7fSxcclxuICAgIHRleHQ6IDAsXHJcbiAgICBjbGFzc2VzOiB7fVxyXG4gIH07XHJcblxyXG4gIGRhdGEgPSBzY2FuZXIoY2hpbGRzLCBkYXRhKTtcclxuXHJcbiAgZGlzcGxheVNjYW4oZGF0YSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNjYW5lciAoY2hpbGRzLCBkYXRhKXtcclxuICBmb3IobGV0IGk9MDsgaTxjaGlsZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgc3dpdGNoKGNoaWxkc1tpXS5ub2RlVHlwZSkge1xyXG5cclxuICAgICAgY2FzZSAxOlxyXG5cclxuICAgICAgICBpZighZGF0YS50YWdbY2hpbGRzW2ldLmxvY2FsTmFtZV0rKyl7XHJcbiAgICAgICAgICBkYXRhLnRhZ1tjaGlsZHNbaV0ubG9jYWxOYW1lXSA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjaGlsZHNbaV0uY2xhc3NOYW1lICE9ICcnKXtcclxuICAgICAgICAgIGlmKCFkYXRhLmNsYXNzZXNbY2hpbGRzW2ldLmNsYXNzTmFtZV0rKyl7XHJcbiAgICAgICAgICAgIGRhdGEuY2xhc3Nlc1tjaGlsZHNbaV0uY2xhc3NOYW1lXSA9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjaGlsZHNbaV0uaGFzQ2hpbGROb2RlcygpKXtcclxuICAgICAgICAgIHNjYW5lcihjaGlsZHNbaV0sZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGRhdGEudGV4dCsrO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5U2NhbihkYXRhKXtcclxuICBmb3IgKGxldCB0YWcgaW4gZGF0YS50YWcpIHtcclxuICAgIGlmIChkYXRhLnRhZy5oYXNPd25Qcm9wZXJ0eSh0YWcpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGDQotGN0LPQvtCyICR7dGFnfTogJHtkYXRhLnRhZ1t0YWddfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYNCi0LXQutGB0YLQvtCy0YvRhSDRg9C30LvQvtCyOiAke2RhdGEudGV4dH1gKTtcclxuXHJcbiAgZm9yIChsZXQgY2xhc3NuYW1lIGluIGRhdGEuY2xhc3Nlcykge1xyXG4gICAgaWYgKGRhdGEuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eShjbGFzc25hbWUpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGDQrdC70LXQvNC10L3RgtC+0LIg0YEg0LrQu9Cw0YHRgdC+0LwgJyR7Y2xhc3NuYW1lfSc6ICR7ZGF0YS5jbGFzc2VzW2NsYXNzbmFtZV19YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9tb2R1bGVzL3NjYW5ET00uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNOQTtBQWJBOzs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=