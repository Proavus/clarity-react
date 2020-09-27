"use strict";
/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = exports.TextWrapType = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../../utils");
var ClassNames_1 = require("./ClassNames");
var icon_1 = require("../../icon");
/**
 * Enum for TextWrapType in textarea :
 * Specifies how the text in a text area is to be wrapped
 * @param {HARD} for enabling hard wrap
 * @param {SOFT} for enabling soft wrap
 */
var TextWrapType;
(function (TextWrapType) {
    TextWrapType["HARD"] = "hard";
    TextWrapType["SOFT"] = "soft";
})(TextWrapType = exports.TextWrapType || (exports.TextWrapType = {}));
/**
 * TextArea Componnet :
 *  Component for long text input
 */
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Function to render helper or error text
        _this.renderHelperText = function (helperText) {
            return React.createElement("span", { className: ClassNames_1.ClassNames.CLR_SUBTEXT }, helperText);
        };
        // Function to render textarea label
        _this.renderLabel = function (label) {
            return React.createElement("label", { className: ClassNames_1.ClassNames.CLR_CONTROL_LABEL }, label);
        };
        return _this;
    }
    // Function to render textarea
    TextArea.prototype.buildTextArea = function () {
        var _a = this.props, style = _a.style, className = _a.className, disabled = _a.disabled, value = _a.value, defaultValue = _a.defaultValue, placeholder = _a.placeholder, children = _a.children, name = _a.name, id = _a.id, required = _a.required, onBlur = _a.onBlur, onKeyPress = _a.onKeyPress, onChange = _a.onChange, onKeyDown = _a.onKeyDown, dataqa = _a.dataqa, readonly = _a.readonly, rows = _a.rows, cols = _a.cols, wrap = _a.wrap, spellcheck = _a.spellcheck, maxLength = _a.maxLength, draggable = _a.draggable;
        return (React.createElement(React.Fragment, null,
            React.createElement("textarea", { name: name, id: id, value: value, defaultValue: defaultValue, disabled: disabled, className: utils_1.classNames([
                    ClassNames_1.ClassNames.CLR_TEXTAREA,
                    ClassNames_1.ClassNames.NG_PRISTINE,
                    ClassNames_1.ClassNames.NG_VALID,
                    ClassNames_1.ClassNames.NG_TOUCHED,
                    className,
                ]), placeholder: placeholder, "data-qa": dataqa, onChange: onChange, onKeyPress: onKeyPress, onKeyDown: onKeyDown, onBlur: onBlur, style: style, required: required, readOnly: readonly, rows: rows, cols: cols, wrap: wrap, spellCheck: spellcheck, maxLength: maxLength, draggable: draggable }),
            children,
            React.createElement(icon_1.Icon, { className: ClassNames_1.ClassNames.CLR_VALIDATE_ICON, shape: "exclamation-circle" })));
    };
    TextArea.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, label = _a.label, error = _a.error, errorHelperText = _a.errorHelperText, helperText = _a.helperText;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.CLR_FORM_CONTROL },
            label && this.renderLabel(label),
            React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.CLR_CONTROL_CONTAINER,
                    error && ClassNames_1.ClassNames.CLR_ERROR,
                    disabled && ClassNames_1.ClassNames.CLR_FORM_DISABLED,
                ]), style: { width: "100%" } },
                React.createElement("div", { className: ClassNames_1.ClassNames.CLR_TEXTAREA_WRAPPER }, this.buildTextArea()),
                error
                    ? errorHelperText && this.renderHelperText(errorHelperText)
                    : helperText && this.renderHelperText(helperText))));
    };
    return TextArea;
}(React.PureComponent));
exports.TextArea = TextArea;
