/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/axios.js":
/*!*******************************!*\
  !*** ./resources/js/axios.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Cannot find module 'C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\compat-data\\data\\corejs3-shipped-proposals'\n    at createEsmNotFoundErr (internal/modules/cjs/loader.js:912:15)\n    at finalizeEsmResolution (internal/modules/cjs/loader.js:905:15)\n    at resolveExports (internal/modules/cjs/loader.js:437:14)\n    at Function.Module._findPath (internal/modules/cjs/loader.js:477:31)\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:872:27)\n    at Function.Module._load (internal/modules/cjs/loader.js:730:27)\n    at Module.require (internal/modules/cjs/loader.js:957:19)\n    at require (C:\\laragon\\www\\BeautyPagent\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at Object.<anonymous> (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\preset-env\\lib\\polyfills\\corejs3\\usage-plugin.js:10:55)\n    at Module._compile (C:\\laragon\\www\\BeautyPagent\\node_modules\\v8-compile-cache\\v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)\n    at Module.load (internal/modules/cjs/loader.js:933:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:774:14)\n    at Module.require (internal/modules/cjs/loader.js:957:19)\n    at require (C:\\laragon\\www\\BeautyPagent\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at Object.<anonymous> (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\preset-env\\lib\\index.js:29:44)\n    at Module._compile (C:\\laragon\\www\\BeautyPagent\\node_modules\\v8-compile-cache\\v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)\n    at Module.load (internal/modules/cjs/loader.js:933:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:774:14)\n    at Module.require (internal/modules/cjs/loader.js:957:19)\n    at require (C:\\laragon\\www\\BeautyPagent\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at requireModule (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:165:12)\n    at loadPreset (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\files\\plugins.js:83:17)\n    at createDescriptor (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:154:9)\n    at C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:50\n    at Array.map (<anonymous>)\n    at createDescriptors (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:109:29)\n    at createPresetDescriptors (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:101:10)\n    at C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:58:104\n    at cachedFunction (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\caching.js:62:27)\n    at cachedFunction.next (<anonymous>)\n    at evaluateSync (C:\\laragon\\www\\BeautyPagent\\node_modules\\gensync\\index.js:244:28)\n    at sync (C:\\laragon\\www\\BeautyPagent\\node_modules\\gensync\\index.js:84:14)\n    at presets (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-descriptors.js:29:84)\n    at mergeChainOpts (C:\\laragon\\www\\BeautyPagent\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:320:26)");

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/axios.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\BeautyPagent\resources\js\axios.js */"./resources/js/axios.js");


/***/ })

/******/ });