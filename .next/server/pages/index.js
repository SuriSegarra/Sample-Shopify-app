module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // using useState to manage the opening and closing of the model for the resource picker\n\n\n\n\nfunction Index() {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  });\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    showVariants: false // este open es el que esta dentro del state\n    ,\n    open: modal.open // when somebody clicks that they dont want to take a products anymore, be able to close that\n    ,\n    onCancel: () => setModal({\n      open: false\n    })\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Manage your inventory transfers\",\n    action: {\n      content: \"Select Products\",\n      onAction: () => setModal({\n        open: true\n      })\n    },\n    image: \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\"\n  }, __jsx(\"p\", null, \"Select products\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImNvbnRlbnQiLCJvbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUFsQztBQUVBLFNBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsd0VBQUQ7QUFDRSxnQkFBWSxFQUFDLFNBRGY7QUFFRSxnQkFBWSxFQUFFLEtBRmhCLENBR0U7QUFIRjtBQUlFLFFBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUpkLENBS0U7QUFMRjtBQU1FLFlBQVEsRUFBRSxNQUFNRixRQUFRLENBQUM7QUFBRUUsVUFBSSxFQUFFO0FBQVIsS0FBRDtBQU4xQixJQURGLEVBU0UsTUFBQyx1REFBRCxRQUNFLE1BQUMsMkRBQUQ7QUFDRSxXQUFPLEVBQUMsaUNBRFY7QUFFRSxVQUFNLEVBQUU7QUFDTkMsYUFBTyxFQUFFLGlCQURIO0FBRU5DLGNBQVEsRUFBRSxNQUFNSixRQUFRLENBQUM7QUFBRUUsWUFBSSxFQUFFO0FBQVIsT0FBRDtBQUZsQixLQUZWO0FBTUUsU0FBSyxFQUFDO0FBTlIsS0FRRSxtQ0FSRixDQURGLENBVEYsQ0FERjtBQXdCRDs7QUFFY0osb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gdXNpbmcgdXNlU3RhdGUgdG8gbWFuYWdlIHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIG9mIHRoZSBtb2RlbCBmb3IgdGhlIHJlc291cmNlIHBpY2tlclxuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgTGF5b3V0LCBQYWdlIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCB7IFJlc291cmNlUGlja2VyIH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIjtcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxuICAgICAgICAvLyBlc3RlIG9wZW4gZXMgZWwgcXVlIGVzdGEgZGVudHJvIGRlbCBzdGF0ZVxuICAgICAgICBvcGVuPXttb2RhbC5vcGVufVxuICAgICAgICAvLyB3aGVuIHNvbWVib2R5IGNsaWNrcyB0aGF0IHRoZXkgZG9udCB3YW50IHRvIHRha2UgYSBwcm9kdWN0cyBhbnltb3JlLCBiZSBhYmxlIHRvIGNsb3NlIHRoYXRcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSl9XG4gICAgICAvPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICBoZWFkaW5nPVwiTWFuYWdlIHlvdXIgaW52ZW50b3J5IHRyYW5zZmVyc1wiXG4gICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBQcm9kdWN0c1wiLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldE1vZGFsKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzPC9wPlxuICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });