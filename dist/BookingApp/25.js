(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm/amplify-nav_2.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-nav_2.entry.js ***!
  \*********************************************************************************/
/*! exports provided: amplify_nav, amplify_sign_out */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_nav", function() { return AmplifyNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_sign_out", function() { return AmplifySignOut; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm/constants-d1abe7de.js");
/* harmony import */ var _helpers_09e7c279_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-09e7c279.js */ "./node_modules/@aws-amplify/ui-components/dist/esm/helpers-09e7c279.js");








const amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

const AmplifyNav = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: "nav" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
AmplifyNav.style = amplifyNavCss;

const AmplifySignOut = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = _helpers_09e7c279_js__WEBPACK_IMPORTED_MODULE_6__["d"];
        /** Text inside of the Sign Out button */
        this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__["T"].SIGN_OUT;
    }
    async signOut(event) {
        if (event)
            event.preventDefault();
        // TODO: Federated Sign Out
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
        }
        try {
            await _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut();
            this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut);
        }
        catch (error) {
            Object(_helpers_09e7c279_js__WEBPACK_IMPORTED_MODULE_6__["a"])(error);
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { slot: "sign-out", onClick: event => this.signOut(event), "data-test": "sign-out-button" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.buttonText)));
    }
};




/***/ })

}]);
//# sourceMappingURL=25.js.map