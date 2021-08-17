(function() {
var exports = {};
exports.id = 352;
exports.ids = [352];
exports.modules = {

/***/ 956:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stripe = __webpack_require__(464)(process.env.STRIPE_SECRET_KEY);

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    items,
    email
  } = req.body;
  const transformedItems = items.map(item => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'INR',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image]
      }
    }
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ['shr_1JOKhTSHuLQV5EdNDMwIh4gL'],
    shipping_address_collection: {
      allowed_countries: ["IN", "GB", "US", "CA"]
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image))
    }
  });
  res.status(200).json({
    id: session.id
  });
});

/***/ }),

/***/ 464:
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
var __webpack_exports__ = (__webpack_exec__(956));
module.exports = __webpack_exports__;

})();