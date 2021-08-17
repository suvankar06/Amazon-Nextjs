(function() {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 791:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": function() { return /* binding */ config; },
  "default": function() { return /* binding */ webhook; }
});

;// CONCATENATED MODULE: external "micro"
var external_micro_namespaceObject = require("micro");;
;// CONCATENATED MODULE: external "firebase-admin"
var external_firebase_admin_namespaceObject = require("firebase-admin");;
;// CONCATENATED MODULE: external "regenerator-runtime"
var external_regenerator_runtime_namespaceObject = require("regenerator-runtime");;
;// CONCATENATED MODULE: ./src/pages/api/webhook.js




const serviceAccunt = __webpack_require__(202); //connection to firebase


const app = !external_firebase_admin_namespaceObject.apps.length ? external_firebase_admin_namespaceObject.initializeApp({
  credential: external_firebase_admin_namespaceObject.credential.cert(serviceAccunt)
}) : external_firebase_admin_namespaceObject.app(); //connection to stripe

const stripe = __webpack_require__(464)(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNIN_SECRET;

const fulfillOrder = async session => {
  return app.firestore().collection("users").doc(session.metadata.email).collection("orders").doc(session.id).set({
    amount: session.amount_total / 100,
    amount_shipping: session.total_details.amount_shipping / 100,
    images: JSON.parse(session.metadata.images),
    timeStamp: external_firebase_admin_namespaceObject.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
  });
};

/* harmony default export */ var webhook = (async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await (0,external_micro_namespaceObject.buffer)(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];
    let event; //varifying the event posted from stripe

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log('ERROR', err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    } //handle checkout.session.completed event


    if (event.type === 'checkout.session.completed') {
      const session = event.data.object; //fulfill the order

      return fulfillOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
});
const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

/***/ }),

/***/ 202:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"type":"service_account","project_id":"clone-269d9","private_key_id":"1f6fbf95d005fc79933d55eeb918bc319403dd30","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCcONYjej1XySAR\\nWyG1ZiFDzRDxliOUu/etvvr8LxZ1ujuBG50o8lUvNOzXZjzb1eggz+W5O0wj5fqe\\nwtH5FTTYBH92c3ie/jrEGAmtQ9sJDBY8eokHT4iWHz+KbcIg0RgVEW86q3V1bqOh\\n3BDSE33AHDFT7EchNdcSplSHkN0qRO4klYeDfru6N9FvmwnpBK9r0viZmeTQjRvr\\nJ9B5O2sdqSHdOJlqV/EYIVnaf54YrrKzeui++bq4I3V3utf2NpFr3hw9rhlMFrDn\\nucPO0Jlb6FVyMbkm/CZx1RdrXRROnR0M++HtJuSYyx/JT2KM6kyEpJSZoSYzglgY\\ncKTuYgLpAgMBAAECggEAALDgjNZJDFq3Stn8/1zoMq63gBjYyMXEDPXuA7m9JPND\\nBP/5vzm5q5y93e/LFF9Ooo2gifSFG/wg7HJi8zQuXML19fMK3XRpWwOhrwdOw0i9\\ncCPtQ9BrfuT/ARhSb7LeOtfYrK8DOcGDSpJqhRK+LjqEp7PrvrBNKOpAmEULrRGV\\nR/iGT+1PCcXjuhmNlCuXHeIgQk4AeGNAHue9vfHHB2ep4+vbrsK7bGJfgFwStRak\\neIw4zjiLEj0BJE800QjN7xLfsfXfWFHFYJ1bxtMHTEWoChpmx1/PXiyOVbdOybXQ\\nYrwJpBItjXd7I5yOWI573muf9b9XlqyreWIXXUXU2QKBgQDMjIeZygQCp2rVoo39\\nAcbKZfSzxdRUgJGQiaHTCPctMSKl4piKAjxNd1ucKISOUyKyuZfday/iKls9MAIv\\nVjli+XNLuP8x/qXCo7NeK2QctJUtxkQpLk+aTyq/gYTvvFZ217Rd+84eR/jIXgu1\\nkk2wgIlJGojXESpIniKd+t7AkwKBgQDDhGccoF1YmbvkUtKVnrOyZHwCPSJNoShN\\ne/IFPWZArJWQsS5gtElWjhxEBAEelAHSw7GRHmPB0OeU3u7yVx2PpGgbec/3fSFR\\nK/QgIOncMzTqhGplQIMAqvF3d/82lFx7MuCZw3Ly/H6Wokro57D5CKzq5dYqBk+e\\n1ordUKpoEwKBgQCvxBYFbZUSnr/rwZoXDX6/juq9y8HPtwbeV5YJnIuhdrZaKyN+\\ne7tLqcO7pQl6ry+Cun4n0qI7yr/KDUXjXUlEpiuPpvELCdFwNnC7+7cz/2ys/9C0\\nPkpCw8Js+yO7SXBXALXJiMWuOZQqwL15EbXWdC0D91wcynA2JESE0fy1JwKBgFr2\\nz+5eoe9l3ygUbItWAe7el1+HR91sPE8Ieop7jYZLhW6DMLunRXOyvG3cmxS58bs4\\ndvW4eNsksYnuyqcPZt58tD8MRnizy/tzAqqsBYIAhP8TSlj/UbPO1Hcr6h5fmkNr\\nYVnIuENavB6jNUz09r52jdTfx+tXclXJJWRgclfnAoGBAKbJ357IeQQ8zJHutOzg\\nnaTrb0hUkeYqXJS1zIhTeIwbJI1f1zyX86YQyrj1XVcGvTBjH9sfE5aCXTcE0D8m\\nPmhWDlYk7GrvuOnzl3I29HKXIbT3KND6jZYZZjMGWqCvrQmEV7TYHcMwaFUknAS3\\ncMy6GIowrUPMtP0EYbD/lf8b\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-z3tom@clone-269d9.iam.gserviceaccount.com","client_id":"108780452967523292110","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-z3tom%40clone-269d9.iam.gserviceaccount.com"}');

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
var __webpack_exports__ = (__webpack_exec__(791));
module.exports = __webpack_exports__;

})();