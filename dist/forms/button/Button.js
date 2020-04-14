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
var utils_1 = require("../../utils");
var icon_1 = require("../../icon");
var ButtonState;
(function (ButtonState) {
    ButtonState["INFO"] = "info";
    ButtonState["SUCCESS"] = "success";
    ButtonState["WARNING"] = "warning";
    ButtonState["DANGER"] = "danger";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["SMALL"] = "sm";
})(ButtonSize = exports.ButtonSize || (exports.ButtonSize = {}));
// TODO: add loading support
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.getClassNames = function (props) {
        return [
            props.defaultBtn && "btn",
            props.defaultBtn && props.icon && "btn-icon",
            props.className
        ].concat(["block", "flat", "inverse", "link", "primary"].map(function (field) {
            var value = props[field];
            if (typeof value === "boolean" && value)
                return "btn-" + field;
            return undefined;
        }), ["size", "state"].map(function (field) {
            var value = props[field];
            if (typeof value !== "undefined" && value !== null)
                return "btn-" + value;
            return undefined;
        }));
    };
    Button.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, children = _a.children, onClick = _a.onClick, onSubmit = _a.onSubmit, icon = _a.icon, show = _a.show, type = _a.type, value = _a.value, dataqa = _a.dataqa;
        return show ? (React.createElement("button", { disabled: disabled, className: utils_1.classNames(Button.getClassNames(this.props)), "data-qa": dataqa, onClick: onClick, onSubmit: onSubmit, type: type, value: value },
            icon && React.createElement(icon_1.Icon, __assign({}, icon)),
            children)) : null;
    };
    Button.defaultProps = {
        defaultBtn: true,
        show: true,
    };
    return Button;
}(React.PureComponent));
exports.Button = Button;
