"use strict";
/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var utils = __importStar(require("../../utils"));
var react_uid_1 = require("react-uid");
var icon_1 = require("../../icon");
var initialState = { value: null };
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.handleChange = function (evt) {
            _this.setState({ value: evt.target.value });
            var onChange = _this.props.onChange;
            if (onChange)
                onChange(evt);
        };
        //prevents 'e' button click when input type is number
        _this.handleKeyDown = function (evt) {
            var type = _this.props.type;
            if (type === "number" && evt.key === "e") {
                evt.preventDefault();
            }
        };
        return _this;
    }
    Input.renderHelperText = function (helperText) {
        return React.createElement("span", { className: "clr-subtext" }, helperText);
    };
    Input.renderLabel = function (label) {
        return React.createElement("label", { className: "clr-control-label" }, label);
    };
    Input.prototype.buildInput = function (className, uid) {
        var _a = this.props, style = _a.style, disabled = _a.disabled, value = _a.value, defaultValue = _a.defaultValue, placeholder = _a.placeholder, size = _a.size, type = _a.type, children = _a.children, name = _a.name, id = _a.id, required = _a.required, onBlur = _a.onBlur, dataqa = _a.dataqa, min = _a.min, max = _a.max, error = _a.error, errorHelperText = _a.errorHelperText, helperText = _a.helperText;
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { type: type || "text", name: name, id: id || uid, value: value, defaultValue: defaultValue, size: size, disabled: disabled, className: className, placeholder: placeholder, "data-qa": dataqa, onChange: this.handleChange, onKeyDown: this.handleKeyDown, onBlur: onBlur, style: style, required: required, min: min, max: max }),
            children,
            React.createElement(icon_1.Icon, { className: "clr-validate-icon", shape: "exclamation-circle" }),
            error
                ? errorHelperText && Input.renderHelperText(errorHelperText)
                : helperText && Input.renderHelperText(helperText)));
    };
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, //prettier
        disabled = _a.disabled, label = _a.label, isBoxed = _a.isBoxed, error = _a.error;
        var classNames = ["clr-control-container", error && "clr-error"];
        if (disabled) {
            classNames.push("clr-form-control-disabled");
        }
        return isBoxed ? (React.createElement(react_uid_1.UID, null, function (uid) { return (React.createElement("div", { className: "form-group" },
            React.createElement("div", { className: utils.classNames(classNames), style: { width: "100%" } },
                React.createElement("label", null, label),
                _this.buildInput(className, uid)))); })) : (React.createElement(react_uid_1.UID, null, function (uid) { return (React.createElement("div", { className: "clr-form-control" },
            label && Input.renderLabel(label),
            React.createElement("div", { className: utils.classNames(classNames), style: { width: "100%" } },
                React.createElement("div", { className: "clr-input-wrapper" }, _this.buildInput(utils.classNames(["clr-input", className]), uid))))); }));
    };
    return Input;
}(React.PureComponent));
exports.Input = Input;
