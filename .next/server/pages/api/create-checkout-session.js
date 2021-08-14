/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    items,\n    email\n  } = req.body;\n  const transformedItems = items.map(item => ({\n    description: item.description,\n    quantity: 1,\n    price_data: {\n      currency: 'INR',\n      unit_amount: item.price * 100,\n      product_data: {\n        name: item.title,\n        images: [item.image]\n      }\n    }\n  }));\n  const session = await stripe.checkout.sessions.create({\n    payment_method_types: [\"card\"],\n    shipping_rates: ['shr_1JOKhTSHuLQV5EdNDMwIh4gL'],\n    shipping_address_collection: {\n      allowed_countries: [\"IN\", \"GB\", \"US\", \"CA\"]\n    },\n    line_items: transformedItems,\n    mode: 'payment',\n    success_url: `${process.env.HOST}/success`,\n    cancel_url: `${process.env.HOST}/checkout`,\n    metadata: {\n      email,\n      images: JSON.stringify(items.map(item => item.image))\n    }\n  });\n  res.status(200).json({\n    id: session.id\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzPzg3M2IiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwidHJhbnNmb3JtZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwidW5pdF9hbW91bnQiLCJwcmljZSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltYWdlIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsInNoaXBwaW5nX3JhdGVzIiwic2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwiYWxsb3dlZF9jb3VudHJpZXMiLCJsaW5lX2l0ZW1zIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiSE9TVCIsImNhbmNlbF91cmwiLCJtZXRhZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE5QixDQUFmOztBQUtBLCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFtQkgsR0FBRyxDQUFDSSxJQUE3QjtBQUNBLFFBQU1DLGdCQUFnQixHQUFHSCxLQUFLLENBQUNJLEdBQU4sQ0FBVUMsSUFBSSxLQUFLO0FBQ3hDQyxlQUFXLEVBQUVELElBQUksQ0FBQ0MsV0FEc0I7QUFFeENDLFlBQVEsRUFBRSxDQUY4QjtBQUd4Q0MsY0FBVSxFQUFFO0FBQ1JDLGNBQVEsRUFBRSxLQURGO0FBRVJDLGlCQUFXLEVBQUVMLElBQUksQ0FBQ00sS0FBTCxHQUFhLEdBRmxCO0FBR1JDLGtCQUFZLEVBQUU7QUFDVkMsWUFBSSxFQUFFUixJQUFJLENBQUNTLEtBREQ7QUFFVkMsY0FBTSxFQUFFLENBQUNWLElBQUksQ0FBQ1csS0FBTjtBQUZFO0FBSE47QUFINEIsR0FBTCxDQUFkLENBQXpCO0FBYUEsUUFBTUMsT0FBTyxHQUFHLE1BQU14QixNQUFNLENBQUN5QixRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0M7QUFDbERDLHdCQUFvQixFQUFFLENBQUMsTUFBRCxDQUQ0QjtBQUVsREMsa0JBQWMsRUFBRSxDQUFDLDhCQUFELENBRmtDO0FBR2xEQywrQkFBMkIsRUFBRTtBQUN6QkMsdUJBQWlCLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFETSxLQUhxQjtBQU1sREMsY0FBVSxFQUFFdEIsZ0JBTnNDO0FBT2xEdUIsUUFBSSxFQUFFLFNBUDRDO0FBUWxEQyxlQUFXLEVBQUcsR0FBRWhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsSUFBSyxVQVJpQjtBQVNsREMsY0FBVSxFQUFHLEdBQUVsQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQUssV0FUa0I7QUFVbERFLFlBQVEsRUFBRTtBQUNON0IsV0FETTtBQUVOYyxZQUFNLEVBQUVnQixJQUFJLENBQUNDLFNBQUwsQ0FBZWhDLEtBQUssQ0FBQ0ksR0FBTixDQUFVQyxJQUFJLElBQUlBLElBQUksQ0FBQ1csS0FBdkIsQ0FBZjtBQUZGO0FBVndDLEdBQWhDLENBQXRCO0FBZUFqQixLQUFHLENBQUNrQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBRSxFQUFFbEIsT0FBTyxDQUFDa0I7QUFBZCxHQUFyQjtBQUNILENBL0JEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcywgZW1haWwgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIHByaWNlX2RhdGE6IHtcbiAgICAgICAgICAgIGN1cnJlbmN5OiAnSU5SJyxcbiAgICAgICAgICAgIHVuaXRfYW1vdW50OiBpdGVtLnByaWNlICogMTAwLFxuICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0pKTtcblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgICAgIHNoaXBwaW5nX3JhdGVzOiBbJ3Nocl8xSk9LaFRTSHVMUVY1RWRORE13SWg0Z0wnXSxcbiAgICAgICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiB7XG4gICAgICAgICAgICBhbGxvd2VkX2NvdW50cmllczogW1wiSU5cIiwgXCJHQlwiLCBcIlVTXCIsIFwiQ0FcIl1cbiAgICAgICAgfSxcbiAgICAgICAgbGluZV9pdGVtczogdHJhbnNmb3JtZWRJdGVtcyxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3VjY2Vzc2AsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3Byb2Nlc3MuZW52LkhPU1R9L2NoZWNrb3V0YCxcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgaW1hZ2VzOiBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmltYWdlKSlcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaWQ6IHNlc3Npb24uaWQgfSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();