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

/***/ "./src/blocks/form/form.js":
/*!*********************************!*\
  !*** ./src/blocks/form/form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return form; });
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function form() {
  var forms = document.querySelectorAll('.js-form');
  var phoneMask;
  var errorsStatus = {
    nameNotDigit: 'Имя не должно содержать цифры',
    nameEmpty: 'Имя не должно быть пустым',
    phoneNotCorrect: 'Проверьте правильность номера',
    phoneFirstNotCorrect: 'Номер телефона должен начинаться с 7 или 8',
    phoneSecondNotCorrect: 'Вторая цифра должна быть 9',
    emailNotCorrect: 'Проверьте правильность почты'
  };
  var message = {
    loading: 'Загрузка данных',
    success: 'Спасибо, ваша заявка принята! Наш менеджер свяжется с вами в ближайшее время',
    failure: "Что-то пошло не так, обратитесь к администратору сайта"
  };
  if (forms.length > 0) {
    var bindPostData = function bindPostData(form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
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
          phoneMask.masked.reset();
          form.reset();
          setTimeout(function () {
            statusMessage.remove();
          }, 4000);
        });
      });
    };
    var addValidate = function addValidate(form) {
      var phoneInput = form.querySelector('.js-phone-input');
      var nameInput = form.querySelector('.js-name-input');
      var emailInput = form.querySelector('.js-email-input');
      var errorContainer = form.querySelector('.js-error-container');
      var btn = form.querySelector('button.btn');
      phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_0__["default"])(phoneInput, {
        mask: '0 (000) – 000 – 00 – 00',
        placeholderChar: '_',
        lazy: true
      });
      phoneInput.addEventListener("input", inputHandler);
      nameInput.addEventListener("input", inputHandler);
      emailInput.addEventListener("input", inputHandler);
      function inputHandler() {
        var errors = [];
        if (nameInput.value == '') {
          errors.push(errorsStatus.nameEmpty);
          nameInput.classList.add('error');
        } else {
          nameInput.classList.remove('error');
          if (/\d/.test(nameInput.value) && nameInput.value !== '') {
            errors.push(errorsStatus.nameNotDigit);
            nameInput.classList.add('error');
          } else {
            nameInput.classList.remove('error');
          }
        }
        if (!phoneMask.masked.isComplete) {
          var phoneVal = phoneMask.unmaskedValue;
          console.log(phoneVal[0]);
          if (!(phoneVal[0] == 7 || phoneVal[0] == 8)) {
            errors.push(errorsStatus.phoneFirstNotCorrect);
            phoneInput.classList.add('error');
          } else {
            phoneInput.classList.remove('error');
          }
          if (!(phoneVal[1] == 9)) {
            errors.push(errorsStatus.phoneSecondNotCorrect);
            phoneInput.classList.add('error');
          } else {
            phoneInput.classList.remove('error');
          }
          errors.push(errorsStatus.phoneNotCorrect);
          phoneInput.classList.add('error');
        } else {
          phoneInput.classList.remove('error');
        }
        if (!isValidEmail(emailInput.value)) {
          errors.push(errorsStatus.emailNotCorrect);
          emailInput.classList.add('error');
        } else {
          emailInput.classList.remove('error');
        }
        if (errors.length > 0) {
          errorContainer.innerText = errors[0];
          btn.disabled = true;
        } else {
          errorContainer.innerText = '';
          btn.disabled = false;
        }
        console.log(errors);
        console.log(errors[0]);

        //здесь как-то подумать чтобы при проверке если все ок, только тогда разблокировать кнопку и потом снова блокировать с текстом загрузка и в финале сброс
        //и продумать чтобы при успешной и не успещной отправки формы возвращался json mail.php
        //также попросить отрисовать модалку чтобы при ошибке или успехе оно открывалось
      }

      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    };
    forms.forEach(function (form) {
      var btn = form.querySelector('button.btn');
      btn.disabled = true;
      addValidate(form);
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

  // phones.forEach((item) => {
  //   =

  //   item.addEventListener("click", function() {
  //     phoneMask.updateOptions({
  //       lazy: false
  //     });
  //   });
  // });
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
      delay: 5000
    },
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
    console.log('dom');
    var mediaFiles = document.querySelectorAll('img');
    console.log(mediaFiles);
    var i = 0;
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
      }, 30);
    }
    mediaFiles.forEach(function (file, index) {
      if (file.complete) {
        simulateProgress();
        console.log('С КЭША');
      } else {
        file.onload = function () {
          i++;
          preloader__percent.innerHTML = (i * 100 / mediaFiles.length).toFixed();
          preloader__progress.style.width = (i * 100 / mediaFiles.length).toFixed() + "px";
          if (i === mediaFiles.length) {
            preloader.classList.add('hide');
            document.querySelector('body').classList.remove('lock');
            preloader__percent.innerHTML = 100;
            preloader__progress.style.width = 100 + "px";
          }
        };
      }
    });
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
/* harmony import */ var _youtube_youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../youtube/youtube */ "./src/blocks/youtube/youtube.js");


// https://youtu.be/
// <!-- 1. <iframe> (и видеопроигрыватель) заменит этот тег <div>. -->
function video() {
  //     "use strict";
  //     document.addEventListener('DOMContentLoaded', function() {
  //    // 2. Этот код асинхронно загружает код API IFrame Player.
  //       var tag = document.createElement('script');

  //       tag.src = "https://www.youtube.com/iframe_api";
  //       var firstScriptTag = document.getElementsByTagName('script')[0];
  //       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // // 3. Эта функция создает <iframe> (и проигрыватель YouTube) //    после загрузки кода API.
  //       function onYouTubeIframeAPIReady() {
  //         console.log('апи загрузилось')

  //         for (let video of document.querySelectorAll(".video")) {
  //           let player;

  //           const btn = video.querySelector('.video__btn');
  //           const playerFrame = video.querySelector('.video__elem iframe')

  //           player = new YT.Player(playerFrame, {
  //             events: {
  //               'onStateChange': onPlayerStateChange,
  //             }
  //           });

  //           let onPlayerStateChange = function(event) {
  //             if (event.data == YT.PlayerState.ENDED) {
  //                 video.classList.add("ended");
  //             } else if (event.data == YT.PlayerState.PAUSED) {
  //                 video.classList.add("paused");
  //             } else if (event.data == YT.PlayerState.PLAYING) {
  //                 video.classList.remove("ended");
  //                 video.classList.remove("paused");
  //             }
  //         };

  //         btn.addEventListener("click", function() {
  //             console.log({player})
  //                 let playerState = player.getPlayerState();

  //             console.log({playerState})
  //                 if (playerState == YT.PlayerState.ENDED) {
  //                     player.seekTo(0);
  //                 } else if (playerState == YT.PlayerState.PAUSED) {
  //                     player.playVideo();
  //                 }
  //             });

  //           }

  //           // function stopVideo() {
  //           //   player.stopVideo();
  //           // }

  //           // function playVideo() {
  //           //   player.playVideo();
  //           // }

  //         }

  // }

  // // Activate only if not already activated
  //     if (window.hideYTActivated) return;
  //     // Load API
  //     if (typeof YT === 'undefined') {
  //         let tag = document.createElement('script');
  //         tag.src = "https://www.youtube.com/iframe_api";
  //         let firstScriptTag = document.getElementsByTagName('script')[0];
  //         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //     }
  //     // Activate on all players

  //      window.onYouTubeIframeAPIReady = function() {
  //           for (let video of document.querySelectorAll(".video")) {

  //         const btn = video.querySelector('.video__btn');

  //         const playerFrame = video.querySelector('.video__elem iframe')

  //         // let playerFrame = playerWrap.querySelector("iframe");
  //         console.log({
  //           playerFrame
  //         })

  //         let onPlayerStateChange = function(event) {
  //             if (event.data == YT.PlayerState.ENDED) {
  //                 video.classList.add("ended");
  //             } else if (event.data == YT.PlayerState.PAUSED) {
  //                 video.classList.add("paused");
  //             } else if (event.data == YT.PlayerState.PLAYING) {
  //                 video.classList.remove("ended");
  //                 video.classList.remove("paused");
  //             }
  //         };

  //         let player;
  //         onYouTubeIframeAPIReadyCallbacks.push(function() {
  //             player = new YT.Player(playerFrame, {
  //                 events: {
  //                     'onStateChange': onPlayerStateChange
  //                 }
  //             });
  //         });

  //         // function stopVideo() {
  //         //      event.target.stopVideo();
  //         // }

  //         //   function playVideo() {
  //         //      event.target.playVideo();
  //         //   }

  //         btn.addEventListener("click", function() {
  //           let playerState = player.getPlayerState();

  //           // if (!video.classList.contains('play')) {
  //           //   video.classList.add('play')
  //           //   playVideo
  //           // } else {
  //           //   video.classList.remove('play')
  //           // }

  //             if (playerState == YT.PlayerState.ENDED) {
  //                 player.seekTo(0);
  //             } else if (playerState == YT.PlayerState.PAUSED) {
  //                 player.playVideo();
  //             }
  //         });
  //     }

  //     };

  //     window.hideYTActivated = true;

  // });
}

/***/ }),

/***/ "./src/blocks/youtube/youtube.js":
/*!***************************************!*\
  !*** ./src/blocks/youtube/youtube.js ***!
  \***************************************/
/*! exports provided: YT, YTCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YT", function() { return YT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YTCollection", function() { return YTCollection; });
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// https://github.com/alexsaranin/ege-oge/blob/all-correcting/src/js/libs/sliders/index.js

var PLAYER_STATE = {
  ENDED: 0,
  PLAY: 1,
  PAUSE: 2
};
var target = 'https://www.youtube.com';
var currentId = 0;
var YT = /*#__PURE__*/function () {
  function YT(link) {
    _classCallCheck(this, YT);
    this.src = link.split('?v=')[1];
    this.el = this.createElement();
    this.id = currentId.toString(); // обязательно строка
    currentId = currentId + 1;
    return this;
  }
  _createClass(YT, [{
    key: "createElement",
    value: function createElement() {
      var iframe = document.createElement('iframe');
      iframe.width = '560';
      iframe.height = '315';
      iframe.src = "https://www.youtube.com/embed/".concat(this.src, "?rel=0&enablejsapi=1");
      iframe.frameborder = '0';
      return iframe;
    }
  }, {
    key: "postMessage",
    value: function postMessage(msg) {
      console.log(this.el);
      return this.el.contentWindow.postMessage(JSON.stringify(msg), target);
    }
  }, {
    key: "listening",
    value: function listening() {
      var msg = {
        event: 'listening',
        id: this.id,
        channel: 'widget'
      };
      this.postMessage(msg);
    }
  }, {
    key: "onStateChange",
    value: function onStateChange() {
      var msg = {
        event: 'command',
        func: 'addEventListener',
        args: ['onStateChange'],
        id: this.id,
        channel: 'widget'
      };
      this.postMessage(msg);
    }
  }, {
    key: "stop",
    value: function stop() {
      var msg = {
        event: 'command',
        func: 'stopVideo',
        args: ''
      };
      this.postMessage(msg);
    }
  }, {
    key: "pause",
    value: function pause() {
      var msg = {
        event: 'command',
        func: 'pauseVideo',
        args: ''
      };
      this.postMessage(msg);
    }
  }, {
    key: "play",
    value: function play() {
      var msg = {
        event: 'command',
        func: 'playVideo',
        args: ''
      };
      this.postMessage(msg);
    }
  }, {
    key: "unmute",
    value: function unmute() {
      //
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;
      this.el.addEventListener('load', function () {
        _this.onStateChange();
        _this.listening();
        _this.play();
      });
    }
  }]);
  return YT;
}();
var YTCollection = /*#__PURE__*/function () {
  function YTCollection() {
    _classCallCheck(this, YTCollection);
    _defineProperty(this, "items", []);
    this.messageListener();
  }
  _createClass(YTCollection, [{
    key: "create",
    value: function create(link) {
      var yT = new YT(link);
      yT.load();
      this.items.push(yT);
      return yT;
    }
  }, {
    key: "findById",
    value: function findById(id) {
      return this.items.find(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: "pauseAll",
    value: function pauseAll() {
      this.items.forEach(function (item) {
        item.pause();
      });
    }
  }, {
    key: "subscribePause",
    value: function subscribePause(cb) {
      this.pauseCallback = cb;
    }
  }, {
    key: "subscribePlay",
    value: function subscribePlay(cb) {
      this.playCallback = cb;
    }
  }, {
    key: "messageListener",
    value: function messageListener() {
      var _this2 = this;
      window.addEventListener('message', function (e) {
        if (e.origin !== target || e.data === undefined) return;
        var data = JSON.parse(e.data);
        if (data.event !== 'onStateChange') return;
        var yT = _this2.findById(data.id);
        try {
          switch (data.info) {
            case PLAYER_STATE.PAUSE:
            case PLAYER_STATE.ENDED:
              _this2.pauseCallback(yT);
              break;
            case PLAYER_STATE.PLAY:
              _this2.playCallback(yT);
              break;
          }
        } catch (e) {
          //
        }
      });
    }
  }]);
  return YTCollection;
}();


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
//preloader

//toggle

//menu

//form

//accordion

//gallerySlider

//video


//heroSlider

//opinionSlider

Object(_modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_toggle_toggle__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_form_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_video_video__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_hero_slider_hero_slider__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_opinion_slider_opinion_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=general.js.map