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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_uid_1 = require("react-uid");
var icon_1 = require("../../icon");
var utils_1 = require("../../utils");
exports.SelectOption = function (_a) {
    var value = _a.value, selected = _a.selected, children = _a.children;
    return (React.createElement("option", { value: value, selected: selected }, children));
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        return _super.call(this, props) || this;
    }
    Select.prototype.buildSelect = function (className, setId) {
        var _a = this.props, value = _a.value, // prettier
        onBlur = _a.onBlur, onChange = _a.onChange, children = _a.children, showDefaultSelect = _a.showDefaultSelect, name = _a.name, required = _a.required, id = _a.id, disabled = _a.disabled;
        return (React.createElement("select", { value: value, id: setId || id, name: name, required: required, onChange: onChange, onBlur: onBlur, className: utils_1.classNames([className]), style: { width: this.getSelectWidth() }, disabled: disabled },
            !showDefaultSelect && (React.createElement("option", { selected: true, disabled: true, hidden: true, className: "hideOption", value: "", style: { display: "none" } })),
            children));
    };
    // Function to calulate width of select tag
    Select.prototype.getSelectWidth = function () {
        var _a = this.props, width = _a.width, error = _a.error;
        var customWidth = "auto";
        if (width && error) {
            // if both user defined width and error prop is present
            customWidth = "95%";
        }
        else if (width) {
            // if only user defined width is present
            customWidth = "100%";
        }
        return customWidth;
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, // prettier
        defaultHelperText = _a.defaultHelperText, errorHelperText = _a.errorHelperText, isBoxed = _a.isBoxed, error = _a.error, className = _a.className, style = _a.style, width = _a.width, id = _a.id, dataqa = _a.dataqa;
        return (React.createElement(react_uid_1.UID, null, function (setId) {
            return isBoxed ? (React.createElement("div", { className: "form-group", style: { width: width }, "data-qa": dataqa },
                React.createElement("label", null, label),
                React.createElement("div", { className: utils_1.classNames(["select", className]), style: __assign({ width: width }, style) }, _this.buildSelect(className, setId)))) : (React.createElement("div", { className: "clr-form-control", "data-qa": dataqa },
                label && (React.createElement("label", { htmlFor: setId || id, className: "clr-control-label" }, label)),
                React.createElement("div", { style: { width: "100%" }, className: utils_1.classNames([
                        "clr-control-container",
                        error && "clr-error",
                    ]) },
                    React.createElement("div", { className: utils_1.classNames(["clr-select-wrapper", className]), style: __assign({ width: width }, style) },
                        _this.buildSelect(utils_1.classNames(["clr-select", className]), setId),
                        React.createElement(icon_1.Icon, { className: "clr-validate-icon", shape: "exclamation-circle" })),
                    error ? (React.createElement("span", { className: "clr-subtext" }, errorHelperText)) : (defaultHelperText && React.createElement("span", { className: "clr-subtext" }, defaultHelperText)))));
        }));
    };
    return Select;
}(React.PureComponent));
exports.Select = Select;
