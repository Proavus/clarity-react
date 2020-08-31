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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portlet = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var icon_1 = require("../icon");
var Portlet = /** @class */ (function (_super) {
    __extends(Portlet, _super);
    function Portlet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toggleContent: true,
            iconStyle: ClassNames_1.Styles.ICON_STYLE,
        };
        _this.handleClick = function () {
            var toggleContent = _this.state.toggleContent;
            _this.setState(function (prevState) { return ({ toggleContent: !prevState.toggleContent }); });
            if (toggleContent) {
                _this.setState({
                    iconStyle: __assign(__assign({}, ClassNames_1.Styles.ICON_STYLE), { transform: "rotate(180deg)" }),
                });
            }
            else {
                _this.setState({
                    iconStyle: ClassNames_1.Styles.ICON_STYLE,
                });
            }
        };
        return _this;
    }
    Portlet.prototype.render = function () {
        var _a = this.props, className = _a.className, header = _a.header, children = _a.children, dataqa = _a.dataqa;
        var _b = this.state, toggleContent = _b.toggleContent, iconStyle = _b.iconStyle;
        return (React.createElement("div", { style: ClassNames_1.Styles.MAIN_DIV, "data-qa": dataqa },
            React.createElement("div", { style: ClassNames_1.Styles.HEADER_DIV, "aria-expanded": toggleContent, onClick: this.handleClick },
                React.createElement("span", null,
                    React.createElement(icon_1.Icon, { dir: icon_1.Direction.UP, shape: "angle", style: iconStyle })),
                React.createElement("span", null, header)),
            React.createElement("div", { className: utils_1.classNames([className]), style: ClassNames_1.Styles.CONTENT_DIV }, toggleContent && children)));
    };
    return Portlet;
}(React.PureComponent));
exports.Portlet = Portlet;
