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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonSize = exports.ButtonState = void 0;
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
        return __spreadArrays([
            props.defaultBtn && "btn",
            props.defaultBtn && props.icon && "btn-icon"
        ], ["block", "flat", "inverse", "link", "primary"].map(function (field) {
            var value = props[field];
            if (typeof value === "boolean" && value)
                return "btn-" + field;
            return undefined;
        }), ["size", "state"].map(function (field) {
            var value = props[field];
            if (typeof value !== "undefined" && value !== null)
                return "btn-" + value;
            return undefined;
        }), [
            props.className,
        ]);
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
