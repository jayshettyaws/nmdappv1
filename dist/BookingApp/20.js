(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm/amplify-form-field_4.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-form-field_4.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_form_field, amplify_hint, amplify_input, amplify_label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_form_field", function() { return AmplifyFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_hint", function() { return AmplifyHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_input", function() { return AmplifyInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_label", function() { return AmplifyLabel; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm/index-3fb5c139.js");


const amplifyFormFieldCss = ":host{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";

const AmplifyFormField = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-field" }, this.label && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "form-field-label" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-label", { htmlFor: this.fieldId }, this.label))), this.description && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: `${this.fieldId}-description`, class: "form-field-description", "data-test": "form-field-description" }, this.description)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "input" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { fieldId: this.fieldId, description: this.description, type: this.type, handleInputChange: this.handleInputChange, placeholder: this.placeholder, name: this.name, value: this.value, inputProps: this.inputProps, disabled: this.disabled }))), this.hint && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-hint", { id: `${this.fieldId}-hint` }, this.hint)));
    }
};
AmplifyFormField.style = amplifyFormFieldCss;

const amplifyHintCss = ":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";

const AmplifyHint = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "hint" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
AmplifyHint.style = amplifyHintCss;

const amplifyInputCss = ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";

const AmplifyInput = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = 'text';
        /** The callback, called when the input is modified by the user. */
        this.handleInputChange = () => void 0;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = '';
        this.formSubmit = Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "formSubmit", 7);
    }
    // eslint-disable-next-line
    handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            this.formSubmit.emit(ev);
        }
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "input-host" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", Object.assign({ id: this.fieldId, "aria-describedby": this.fieldId && this.description ? `${this.fieldId}-description` : null, type: this.type, onInput: event => this.handleInputChange(event), placeholder: this.placeholder, name: this.name, class: "input", value: this.value, disabled: this.disabled }, this.inputProps))));
    }
};
AmplifyInput.style = amplifyInputCss;

const amplifyLabelCss = ":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}";

const AmplifyLabel = class {
    constructor(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "label", htmlFor: this.htmlFor }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    }
};
AmplifyLabel.style = amplifyLabelCss;




/***/ })

}]);
//# sourceMappingURL=20.js.map