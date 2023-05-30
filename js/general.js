/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/general.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/accordion/accordion.js":
/*!*******************************************!*\
  !*** ./src/blocks/accordion/accordion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accordion; });
function accordion() {
  console.log('accordion');
  var accordions = document.querySelectorAll('.accordion__item');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.accordion__control');
      var content = self.querySelector('.accordion__content');
      self.classList.toggle('open');
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}

/***/ }),

/***/ "./src/blocks/direction/direction.js":
/*!*******************************************!*\
  !*** ./src/blocks/direction/direction.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return direction; });
function direction() {
  document.addEventListener('DOMContentLoaded', function () {
    var imgContainer = document.querySelector('.menu__submenu-img-elem');
    var src;
    var oldSrc;
    document.onmouseover = function (event) {
      // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
      // так что событие mouseover произойдёт сразу на дочернем элементе.

      var anchorElem = event.target.closest('[data-src]');
      if (!anchorElem) return;

      // показываем подсказку и запоминаем её
      src = 'img/' + anchorElem.getAttribute('data-src') + '.png';
      if (src == oldSrc) {
        return;
      }
      console.log(anchorElem);
      oldSrc = src;
      imgContainer.src = src;
    };
    document.onmouseout = function () {
      // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
      // (оно было где-то внутри и всплыло)
      // но в этом случае сразу же последует событие mouseover,
      // то есть подсказка исчезнет и потом снова покажется
      //
      // к счастью, этого не будет видно,
      // так как оба события происходят почти одновременно
    };
  });
}

/***/ }),

/***/ "./src/blocks/footer/footer.js":
/*!*************************************!*\
  !*** ./src/blocks/footer/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return footer; });
function footer() {
  var shellVisible = true;
  var shell = document.querySelector('.footer__shell');
  var map = document.querySelector('.footer__map');
  map.addEventListener('click', function (e) {
    if (shellVisible) {
      shell.style.display = 'none';
    } else {
      shell.style.display = 'block';
    }
    shellVisible = !shellVisible;
  });
}

/***/ }),

/***/ "./src/blocks/form/form.js":
/*!*********************************!*\
  !*** ./src/blocks/form/form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return form; });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import IMask from 'imask';

function form() {
  var inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(function (input) {
    var placeholder = '';
    input.addEventListener('focus', function (e) {
      placeholder = e.currentTarget.placeholder;
      e.currentTarget.placeholder = "";
    });
    input.addEventListener('blur', function (e) {
      e.currentTarget.placeholder = placeholder;
    });
  });
  var forms = document.querySelectorAll('.js-form');
  var message = {
    loading: 'Загрузка данных',
    success: 'Спасибо, ваша заявка принята! Наш менеджер свяжется с вами в ближайшее время',
    failure: "Что-то пошло не так, обратитесь к администратору сайта"
  };
  if (forms.length > 0) {
    var bindHandlerInputName = function bindHandlerInputName(form) {
      var nameInput = form.querySelector('.js-name-input');
      var errorHtml = nameInput.nextElementSibling;
      var formBlock = nameInput.closest('.form__block');
      nameInput.addEventListener('input', function (e) {
        if (nameInput.value == '' || /\d/.test(nameInput.value)) {
          errorHtml.classList.add('active');
          formBlock.classList.add('error');
        } else {
          errorHtml.classList.remove('active');
          formBlock.classList.remove('error');
        }
      });
    };
    var addMaskPhone = function addMaskPhone(form) {
      var phoneInput = form.querySelector('.js-phone-input');
      var im = new inputmask__WEBPACK_IMPORTED_MODULE_0___default.a("9 (999) – 999 – 99 – 99", {
        definitions: {
          '9': {
            validator: function validator(chrs, buffer, pos, strict, opts) {
              if (pos === 0) {
                return /[78]/.test(chrs);
              }
              if (pos === 3) {
                return /[9]/.test(chrs);
              }
              return /[0-9]/.test(chrs);
            }
          }
        }
      });
      im.mask(phoneInput);
      var errorHtml = phoneInput.nextElementSibling;
      var formBlock = phoneInput.closest('.form__block');

      // проверка
      phoneInput.addEventListener('input', function (e) {
        var isCompleted = phoneInput.inputmask.isComplete();
        if (isCompleted) {
          console.log('Input mask is completed.');
          errorHtml.classList.remove('active');
          formBlock.classList.remove('error');
          return true;
          //получить
        } else {
          console.log('Input mask is not completed.');
          errorHtml.classList.add('active');
          formBlock.classList.add('error');
          return false;
        }
      });
    };
    var bindHandlerInputEmail = function bindHandlerInputEmail(form) {
      var emailInput = form.querySelector('.js-email-input');
      var errorHtml = emailInput.nextElementSibling;
      var formBlock = emailInput.closest('.form__block');
      emailInput.addEventListener('input', function (e) {
        if (!isValidEmail(emailInput.value)) {
          errorHtml.classList.add('active');
          formBlock.classList.add('error');
        } else {
          errorHtml.classList.remove('active');
          formBlock.classList.remove('error');
        }
      });
    };
    var isValidEmail = function isValidEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    var bindPostData = function bindPostData(form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var checkName = checkValidateName(form);
        var checkPhone = checkValidatePhone(form);
        var checkEmail = checkValidateEmail(form);
        if (checkName && checkPhone && checkEmail) {
          var btn = form.querySelector('button.btn');
          var statusMessage = document.createElement('div');
          statusMessage.classList.add('form__message');
          statusMessage.innerText = message.loading;
          form.insertAdjacentElement("afterend", statusMessage);
          btn.disabled = true;
          var formData = new FormData(form);
          postData("vendor/mail.php", formData).then(function (data) {
            console.log(data);
            statusMessage.innerText = message.success;
          })["catch"](function (err) {
            console.log(err);
            statusMessage.innerText = message.failure;
          })["finally"](function () {
            btn.disabled = false;
            form.reset();
            setTimeout(function () {
              statusMessage.remove();
            }, 4000);
          });
        }
      });
    };
    var checkValidateName = function checkValidateName(form) {
      var nameInput = form.querySelector('.js-name-input');
      var errorHtml = nameInput.nextElementSibling;
      var formBlock = nameInput.closest('.form__block');
      if (nameInput.value == '' || /\d/.test(nameInput.value)) {
        errorHtml.classList.add('active');
        formBlock.classList.add('error');
        return false;
      } else {
        errorHtml.classList.remove('active');
        formBlock.classList.remove('error');
        return true;
      }
    };
    var checkValidatePhone = function checkValidatePhone(form) {
      var phoneInput = form.querySelector('.js-phone-input');
      var errorHtml = phoneInput.nextElementSibling;
      var formBlock = phoneInput.closest('.form__block');

      // проверка
      var isCompleted = phoneInput.inputmask.isComplete();
      if (isCompleted) {
        console.log('Input mask is completed.');
        errorHtml.classList.remove('active');
        formBlock.classList.remove('error');
        return true;
        //получить
      } else {
        console.log('Input mask is not completed.');
        errorHtml.classList.add('active');
        formBlock.classList.add('error');
        return false;
      }
    };
    var checkValidateEmail = function checkValidateEmail(form) {
      var emailInput = form.querySelector('.js-email-input');
      var errorHtml = emailInput.nextElementSibling;
      var formBlock = emailInput.closest('.form__block');
      if (!isValidEmail(emailInput.value)) {
        errorHtml.classList.add('active');
        formBlock.classList.add('error');
        return false;
      } else {
        errorHtml.classList.remove('active');
        formBlock.classList.remove('error');
        return true;
      }
    };
    forms.forEach(function (form) {
      bindHandlerInputName(form);
      addMaskPhone(form);
      bindHandlerInputEmail(form);
      bindPostData(form);
    });
    var postData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data) {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url, {
                method: "POST",
                body: data
              });
            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function postData(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}

/***/ }),

/***/ "./src/blocks/gallery-slider/gallery-slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/gallery-slider/gallery-slider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gallerySlider; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function gallerySlider() {
  //swiper
  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery-slider', {
    // Optional parameters
    // loop: false,
    grabCursor: true,
    spaceBetween: 20,
    // slidesPerView: 1.1, //сколкько видны
    slidesPerView: 'auto',
    // centeredSlides: true,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.gallery-slider-button-next',
      prevEl: '.gallery-slider-button-prev'
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 480px
      992: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 640px
      1200: {
        // slidesPerView: 2,
        // spaceBetween: 20
      }
    }
  });

  // Инициализация слайдера
  // const swiper = new Swiper('.swiper-container', {
  //   effect: 'fade',
  //   centeredSlides: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<div class="' + className + '"><span class="bullet" ></span><span>' + `${(index < 9) ? '0' : ''}`  + (index + 1) + '</span></div>';
  //     },
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
}

/***/ }),

/***/ "./src/blocks/hero-slider/hero-slider.js":
/*!***********************************************!*\
  !*** ./src/blocks/hero-slider/hero-slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return heroSlider; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function heroSlider() {
  //swiper
  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.hero-slider', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 3000
    },
    speed: 2000,
    grabCursor: true,
    spaceBetween: 20,
    // slidesPerView: 1.1, //сколкько видны
    slidesPerView: 1,
    // centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      clickable: true
    },
    // Navigation arrows
    // navigation: {
    //   nextEl: '.gallery-slider-button-next',
    //   prevEl: '.gallery-slider-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 480px
      992: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 640px
      1200: {
        // slidesPerView: 2,
        // spaceBetween: 20
      }
    }
  });

  // Инициализация слайдера
  // const swiper = new Swiper('.swiper-container', {
  //   effect: 'fade',
  //   centeredSlides: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<div class="' + className + '"><span class="bullet" ></span><span>' + `${(index < 9) ? '0' : ''}`  + (index + 1) + '</span></div>';
  //     },
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
}

/***/ }),

/***/ "./src/blocks/menu/menu.js":
/*!*********************************!*\
  !*** ./src/blocks/menu/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
function menu() {
  var links = document.querySelectorAll('.menu__item a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      if (e.target.getAttribute('href') == '#') {
        e.preventDefault();
        var parent = e.target.closest('.menu__item');
        var subMenu = parent === null || parent === void 0 ? void 0 : parent.querySelector('.menu__submenu');
        if (subMenu) {
          subMenu.classList.add('active');
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
      }
    });
  }
  var closes = document.querySelectorAll('.menu__submenu-close');
  if (closes) {
    for (var _i = 0; _i < closes.length; _i++) {
      var close = closes[_i];
      close.addEventListener('click', function (e) {
        var subMenu = e.target.closest('.menu__submenu');
        if (subMenu) {
          if (subMenu.classList.contains('active')) {
            subMenu.classList.remove('active');
            subMenu.style.maxHeight = null;
          }
        }
      });
    }
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('.menu')) return;
    var openEl = document.querySelector('.menu__submenu.active');
    if (openEl) {
      openEl.classList.remove('active');
      openEl.style.maxHeight = null;
    }
  });
}

/***/ }),

/***/ "./src/blocks/opinion-slider/opinion-slider.js":
/*!*****************************************************!*\
  !*** ./src/blocks/opinion-slider/opinion-slider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return opinionSlider; });
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

function opinionSlider() {
  //swiper
  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.opinion-slider', {
    // Optional parameters
    // loop: false,
    grabCursor: true,
    spaceBetween: 20,
    autoHeight: true,
    // slidesPerView: 1.1, //сколкько видны
    slidesPerView: 'auto',
    // centeredSlides: true,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.opinion-slider-button-next',
      prevEl: '.opinion-slider-button-prev'
    },
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 480px
      992: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 640px
      1200: {
        // slidesPerView: 2,
        // spaceBetween: 20
      }
    }
  });

  // Инициализация слайдера
  // const swiper = new Swiper('.swiper-container', {
  //   effect: 'fade',
  //   centeredSlides: true,
  //   loop: true,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<div class="' + className + '"><span class="bullet" ></span><span>' + `${(index < 9) ? '0' : ''}`  + (index + 1) + '</span></div>';
  //     },
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
}

/***/ }),

/***/ "./src/blocks/preloader/preloader.js":
/*!*******************************************!*\
  !*** ./src/blocks/preloader/preloader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloader; });
function preloader() {
  console.log('preload');
  document.addEventListener('DOMContentLoaded', function () {
    var preloader = document.querySelector('#preloader');
    // console.log('dom')
    // const mediaFiles = document.querySelectorAll('img');
    // console.log(mediaFiles);

    // let i = 0;

    function simulateProgress() {
      var progress = 0;
      var interval = setInterval(function () {
        progress++;
        preloader__percent.innerHTML = progress;
        preloader__progress.style.width = progress + "%";
        if (progress === 100) {
          clearInterval(interval);
          preloader.classList.add('hide');
          document.querySelector('body').classList.remove('lock');
        }
      }, 10);
    }
    simulateProgress();

    // mediaFiles.forEach((file, index) => {

    //   if(file.complete){
    //     simulateProgress();
    //     console.log('С КЭША');
    //   } else {
    //     file.onload = function() {
    //     i++;

    //     preloader__percent.innerHTML = ((i *100) / mediaFiles.length).toFixed();
    //     preloader__progress.style.width = ((i *100) / mediaFiles.length).toFixed() + `px`;

    //    if (i === mediaFiles.length) {
    //       preloader.classList.add('hide');
    //       document.querySelector('body').classList.remove('lock');      preloader__percent.innerHTML = 100;
    //       preloader__progress.style.width = 100 + `px`;
    //    }
    //   }
    //   }

    // })
  });
}

/***/ }),

/***/ "./src/blocks/toggle/toggle.js":
/*!*************************************!*\
  !*** ./src/blocks/toggle/toggle.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggle; });
function toggle() {
  var toggleBtn = document.querySelector('.js-toggle');
  var body = document.querySelector('body');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      console.log(e.target);
      var header = e.target.closest('.header');
      if (header) {
        header.classList.toggle('active');
        if (header.classList.contains('active')) {
          body.classList.add('lock');
        } else {
          body.classList.remove('lock');
        }
      }
    });
  }
}

/***/ }),

/***/ "./src/blocks/video/video.js":
/*!***********************************!*\
  !*** ./src/blocks/video/video.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return video; });
function video() {
  console.log('video');

  // 2. Этот код асинхронно загружает код API IFrame Player.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  console.log(firstScriptTag);

  // Глобальная переменная для хранения состояния загрузки API
  var apiLoaded = false;

  // Функция, которая будет вызвана после загрузки API
  window.onYouTubeIframeAPIReady = function () {
    apiLoaded = true;
    init();
  };
  function init() {
    var videos = document.querySelectorAll('.video');
    videos.forEach(function (video) {
      var player;
      var videoElem = video.querySelector('.video__elem');
      var videoId = video.getAttribute('data-id');
      if (apiLoaded) {
        console.log('YouTube API загружено.');
        if (!player) {
          console.log('player создание');
          // Создаем объект плеера YouTube
          player = new YT.Player(videoElem, {
            height: '360',
            width: '640',
            playerVars: {
              'controls': 0
            },
            videoId: videoId,
            // Замените VIDEO_ID на идентификатор YouTube видео
            events: {
              'onStateChange': onPlayerStateChange
            }
          });
        } else {
          console.log('player существует');
        }
      } else {
        console.error('YouTube API не загружено.');
      }
      function playVideo() {
        player.playVideo();
      }
      function stopVideo() {
        player.pauseVideo();
      }
      function onPlayerStateChange(event) {
        //-1 = не начато , 0 = завершено, 2 = пауза
        if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
          stopVideo();
          video.classList.add('pause');
        }
      }
      var btn = video.querySelector('.video__btn');
      // Добавляем обработчик события клика на video__btn
      btn.addEventListener('click', function (e) {
        video.classList.toggle('pause');
        if (!video.classList.contains('pause')) {
          playVideo();
        } else {
          console.log('есть pause');
          console.log(player);
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/preloader/preloader */ "./src/blocks/preloader/preloader.js");
/* harmony import */ var _modules_toggle_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/toggle/toggle */ "./src/blocks/toggle/toggle.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/menu/menu.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/form/form.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/accordion/accordion.js");
/* harmony import */ var _modules_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/gallery-slider/gallery-slider */ "./src/blocks/gallery-slider/gallery-slider.js");
/* harmony import */ var _modules_video_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/video/video */ "./src/blocks/video/video.js");
/* harmony import */ var _modules_hero_slider_hero_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/hero-slider/hero-slider */ "./src/blocks/hero-slider/hero-slider.js");
/* harmony import */ var _modules_opinion_slider_opinion_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/opinion-slider/opinion-slider */ "./src/blocks/opinion-slider/opinion-slider.js");
/* harmony import */ var _modules_direction_direction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/direction/direction */ "./src/blocks/direction/direction.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/footer/footer.js");
//preloader

//toggle

//menu

//form

//accordion

//gallerySlider

//video


//heroSlider

//opinionSlider

//direction

//footer

Object(_modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_toggle_toggle__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_form_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_video_video__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_hero_slider_hero_slider__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_opinion_slider_opinion_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_modules_direction_direction__WEBPACK_IMPORTED_MODULE_9__["default"])();
Object(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_10__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=general.js.map