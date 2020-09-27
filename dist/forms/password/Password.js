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
exports.Password = void 0;
var React = __importStar(require("react"));
var utils = __importStar(require("../../utils"));
var icon_1 = require("../../icon");
var button_1 = require("../button");
var Password = /** @class */ (function (_super) {
    __extends(Password, _super);
    function Password() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: false,
            type: "password",
            value: null,
        };
        _this.showHidePassword = function () {
            _this.setState(function (prevState) { return ({
                show: !prevState.show,
                type: !prevState.show ? "text" : "password",
            }); });
        };
        _this.handleChange = function (evt) {
            var onChange = _this.props.onChange;
            _this.setState({ value: evt.target.value });
            onChange && onChange(evt);
        };
        return _this;
    }
    Password.renderHelperText = function (helperText) {
        return React.createElement("span", { className: "clr-subtext ng-star-inserted" }, helperText);
    };
    Password.renderLabel = function (label) {
        return React.createElement("label", { className: "clr-control-label clr-col-12 clr-col-md-2" }, label);
    };
    Password.prototype.render = function () {
        var _a = this.props, className = _a.className, //prettier
        disabled = _a.disabled, helperText = _a.helperText, label = _a.label, value = _a.value, defaultValue = _a.defaultValue, errorHelperText = _a.errorHelperText, error = _a.error, style = _a.style, name = _a.name, required = _a.required, id = _a.id, maxPasswordLength = _a.maxPasswordLength, minPasswordLength = _a.minPasswordLength, placeholder = _a.placeholder, unmask = _a.unmask, pattern = _a.pattern, dataqa = _a.dataqa;
        var _b = this.state, show = _b.show, type = _b.type;
        var classNames = ["clr-control-container", error && "clr-error", label && "clr-col-md-10 clr-col-12"];
        if (disabled)
            classNames.push("clr-form-control-disabled");
        return (React.createElement("div", { className: "clr-form clr-form-horizontal ng-pristine ng-valid ng-touched" },
            React.createElement("div", { className: utils.classNames(["clr-form-control", label && "clr-row"]) },
                label && Password.renderLabel(label),
                React.createElement("div", { className: utils.classNames(classNames), style: { width: "100%" } },
                    React.createElement("div", { className: "clr-input-wrapper" },
                        React.createElement("div", { className: utils.classNames(["clr-input-group", className]), style: style },
                            React.createElement("input", { maxLength: maxPasswordLength, minLength: minPasswordLength, name: name, defaultValue: defaultValue, value: value, placeholder: placeholder, required: required, type: type, disabled: disabled, style: { width: "95%" }, className: "clr-input ng-pristine ng-invalid ng-touched", id: id, pattern: pattern, "data-qa": dataqa, onChange: this.handleChange }),
                            unmask && (React.createElement(button_1.Button, { defaultBtn: false, className: "clr-input-group-icon-action ng-star-inserted", onClick: this.showHidePassword, icon: { shape: show ? "eye" : "eye-hide" } },
                                React.createElement("span", { className: "is-off-screen" }, "Show"))),
                            React.createElement(icon_1.Icon, { className: "clr-validate-icon ng-star-inserted", shape: "exclamation-circle" })),
                        error
                            ? errorHelperText && Password.renderHelperText(errorHelperText)
                            : helperText && Password.renderHelperText(helperText))))));
    };
    Password.defaultProps = {
        unmask: true,
    };
    return Password;
}(React.PureComponent));
exports.Password = Password;
