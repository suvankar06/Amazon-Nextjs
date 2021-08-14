/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basketSlice\": function() { return /* binding */ basketSlice; },\n/* harmony export */   \"addToBasket\": function() { return /* binding */ addToBasket; },\n/* harmony export */   \"removeFromBasket\": function() { return /* binding */ removeFromBasket; },\n/* harmony export */   \"selectItems\": function() { return /* binding */ selectItems; },\n/* harmony export */   \"selectTotal\": function() { return /* binding */ selectTotal; }\n/* harmony export */ });\n/* harmony import */ var _home_suvankar_Desktop_Amazon_Nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar initialState = {\n  items: []\n};\nvar basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n  name: \"basket\",\n  initialState: initialState,\n  reducers: {\n    addToBasket: function addToBasket(state, action) {\n      state.items = [].concat((0,_home_suvankar_Desktop_Amazon_Nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items), [action.payload]);\n    },\n    removeFromBasket: function removeFromBasket(state, action) {\n      var index = state.items.findIndex(function (basketItem) {\n        return basketItem.id === action.payload.id;\n      });\n\n      var newBasket = (0,_home_suvankar_Desktop_Amazon_Nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(state.items);\n\n      if (index >= 0) {\n        //\n        newBasket.splice(index, 1);\n      } else {\n        console.warn(\"Can't remove Product ( id: \".concat(action.payload.id, \") as it's not in the basket\"));\n      }\n\n      state.items = newBasket;\n    }\n  }\n});\nvar _basketSlice$actions = basketSlice.actions,\n    addToBasket = _basketSlice$actions.addToBasket,\n    removeFromBasket = _basketSlice$actions.removeFromBasket; // Selectors - This is how we pull information from the Global store slice\n\n\nvar selectItems = function selectItems(state) {\n  return state.basket.items;\n};\nvar selectTotal = function selectTotal(state) {\n  return state.basket.items.reduce(function (total, item) {\n    return total + item.price;\n  }, 0);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (basketSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcz80NWM5Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiYmFza2V0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFRvQmFza2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsImlkIiwibmV3QmFza2V0Iiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiLCJiYXNrZXQiLCJzZWxlY3RUb3RhbCIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInByaWNlIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sSUFBTUMsV0FBVyxHQUFHQyw2REFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsUUFEK0I7QUFFckNKLGNBQVksRUFBWkEsWUFGcUM7QUFHckNLLFVBQVEsRUFBRTtBQUNSQyxlQUFXLEVBQUUscUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM5QkQsV0FBSyxDQUFDTixLQUFOLHNLQUFrQk0sS0FBSyxDQUFDTixLQUF4QixJQUErQk8sTUFBTSxDQUFDQyxPQUF0QztBQUNELEtBSE87QUFJUkMsb0JBQWdCLEVBQUUsMEJBQUNILEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQyxVQUFNRyxLQUFLLEdBQUdKLEtBQUssQ0FBQ04sS0FBTixDQUFZVyxTQUFaLENBQ1osVUFBQ0MsVUFBRDtBQUFBLGVBQWdCQSxVQUFVLENBQUNDLEVBQVgsS0FBa0JOLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxFQUFqRDtBQUFBLE9BRFksQ0FBZDs7QUFJQSxVQUFJQyxTQUFTLEdBQUcseUpBQUlSLEtBQUssQ0FBQ04sS0FBYixDQUFiOztBQUVBLFVBQUlVLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2Q7QUFDQUksaUJBQVMsQ0FBQ0MsTUFBVixDQUFpQkwsS0FBakIsRUFBd0IsQ0FBeEI7QUFDRCxPQUhELE1BR087QUFDTE0sZUFBTyxDQUFDQyxJQUFSLHNDQUEyQ1YsTUFBTSxDQUFDQyxPQUFQLENBQWVLLEVBQTFEO0FBQ0Q7O0FBQ0RQLFdBQUssQ0FBQ04sS0FBTixHQUFjYyxTQUFkO0FBQ0Q7QUFsQk87QUFIMkIsQ0FBRCxDQUEvQjsyQkF5QjBDYixXQUFXLENBQUNpQixPO0lBQTlDYixXLHdCQUFBQSxXO0lBQWFJLGdCLHdCQUFBQSxnQixFQUU1Qjs7O0FBQ08sSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2MsTUFBTixDQUFhcEIsS0FBeEI7QUFBQSxDQUFwQjtBQUVBLElBQU1xQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDZixLQUFEO0FBQUEsU0FDekJBLEtBQUssQ0FBQ2MsTUFBTixDQUFhcEIsS0FBYixDQUFtQnNCLE1BQW5CLENBQTBCLFVBQUNDLEtBQUQsRUFBUUMsSUFBUjtBQUFBLFdBQWlCRCxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBOUI7QUFBQSxHQUExQixFQUErRCxDQUEvRCxDQUR5QjtBQUFBLENBQXBCO0FBR1AsK0RBQWV4QixXQUFXLENBQUN5QixPQUEzQiIsImZpbGUiOiIuL3NyYy9zbGljZXMvYmFza2V0U2xpY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXRlbXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGJhc2tldFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImJhc2tldFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdXG4gICAgfSxcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgIChiYXNrZXRJdGVtKSA9PiBiYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgKTtcblxuICAgICAgbGV0IG5ld0Jhc2tldCA9IFsuLi5zdGF0ZS5pdGVtc107XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIC8vXG4gICAgICAgIG5ld0Jhc2tldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oYENhbid0IHJlbW92ZSBQcm9kdWN0ICggaWQ6ICR7YWN0aW9uLnBheWxvYWQuaWR9KSBhcyBpdCdzIG5vdCBpbiB0aGUgYmFza2V0YClcbiAgICAgIH1cbiAgICAgIHN0YXRlLml0ZW1zID0gbmV3QmFza2V0O1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkVG9CYXNrZXQsIHJlbW92ZUZyb21CYXNrZXQgfSA9IGJhc2tldFNsaWNlLmFjdGlvbnM7XG5cbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbXMgPSAoc3RhdGUpID0+IHN0YXRlLmJhc2tldC5pdGVtcztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PlxuICBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlLCAwKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slices/basketSlice.js\n");

/***/ })

});