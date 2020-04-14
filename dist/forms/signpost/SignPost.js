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
var button_1 = require("../button");
var icon_1 = require("../../icon");
var AxisPosition_1 = require("./AxisPosition");
var SignPostDirection;
(function (SignPostDirection) {
    SignPostDirection["TOP_LEFT"] = "top-left";
    SignPostDirection["TOP_MIDDLE"] = "top-middle";
    SignPostDirection["TOP_RIGHT"] = "top-right";
    SignPostDirection["RIGHT_TOP"] = "right-top";
    SignPostDirection["RIGHT_MIDDLE"] = "right-middle";
    SignPostDirection["RIGHT_BOTTOM"] = "right-bottom";
    SignPostDirection["BOTTOM_LEFT"] = "bottom-left";
    SignPostDirection["BOTTOM_MIDDLE"] = "bottom-middle";
    SignPostDirection["BOTTOM_RIGHT"] = "bottom-right";
    SignPostDirection["LEFT_TOP"] = "left-top";
    SignPostDirection["LEFT_MIDDLE"] = "left-middle";
    SignPostDirection["LEFT_BOTTOM"] = "left-bottom";
})(SignPostDirection = exports.SignPostDirection || (exports.SignPostDirection = {}));
var SignPost = /** @class */ (function (_super) {
    __extends(SignPost, _super);
    function SignPost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refParent = React.createRef();
        _this.refChild = React.createRef();
        _this.state = {
            isOpen: false,
            transformVal: "translateX(0px) translateY(0px)",
        };
        _this.handleButtonClick = function () {
            _this.toggle();
        };
        _this.afterToggle = function () {
            if (_this.state.isOpen) {
                _this.subscribeDocumentClick();
            }
            else {
                _this.unsubscribeDocumentClick();
            }
        };
        _this.subscribeDocumentClick = function () {
            window.addEventListener("click", _this.handleDocumentClick, true);
        };
        _this.unsubscribeDocumentClick = function () {
            window.removeEventListener("click", _this.handleDocumentClick, true);
        };
        _this.handleDocumentClick = function (evt) {
            if (!_this.state.isOpen)
                return;
            var target = evt.target;
            var el = _this.refChild.current;
            if (!el || typeof el === "string") {
                console.warn("wrong element type");
                return;
            }
            if (!el.contains(target)) {
                _this.toggle(false);
            }
        };
        return _this;
    }
    SignPost.prototype.toggle = function (isOpen) {
        if (isOpen === void 0) { isOpen = !this.state.isOpen; }
        this.setState({ isOpen: isOpen }, this.afterToggle);
    };
    SignPost.prototype.componentDidUpdate = function () {
        var isOpen = this.state.isOpen;
        if (!isOpen)
            return;
        var childWidth = this.refChild.current.clientWidth;
        var childHeight = this.refChild.current.clientHeight;
        var parentWidth = this.refParent.current.clientWidth;
        var parentHeight = this.refParent.current.clientHeight;
        var direction = this.props.direction;
        var transformVal = direction && AxisPosition_1.calculateAxisPosition(parentHeight, parentWidth, childHeight, childWidth, direction);
        this.setState({ transformVal: transformVal });
    };
    SignPost.prototype.render = function () {
        var _a = this.state, isOpen = _a.isOpen, transformVal = _a.transformVal;
        var _b = this.props, direction = _b.direction, //prettier
        style = _b.style, children = _b.children, icon = _b.icon, showCloseButton = _b.showCloseButton, dataqa = _b.dataqa;
        return (React.createElement("div", { ref: this.refParent, className: "signpost", style: { position: "relative" }, "data-qa": dataqa },
            React.createElement(button_1.Button, { className: utils_1.classNames([
                    "signpost-action",
                    "btn-small",
                    "btn-link",
                    "signpost-trigger",
                    isOpen && "active",
                ]), onClick: this.handleButtonClick }, icon && React.createElement(icon_1.Icon, __assign({}, icon))),
            isOpen && (React.createElement("div", { ref: this.refChild, className: utils_1.classNames([
                    "signpost-content",
                    direction,
                ]), style: __assign({}, style, { position: "absolute", top: "0px", bottom: "auto", left: "0px", right: "auto", transform: transformVal }) },
                React.createElement("div", { className: "signpost-flex-wrap" },
                    React.createElement("div", { className: "popover-pointer" }),
                    showCloseButton && (React.createElement("div", { className: "signpost-content-header" },
                        React.createElement(button_1.Button, { className: "signpost-action close", defaultBtn: false, onClick: this.handleButtonClick },
                            React.createElement(icon_1.Icon, { shape: "close" })))),
                    React.createElement("div", { className: "signpost-content-body" }, children))))));
    };
    SignPost.defaultProps = {
        direction: SignPostDirection.TOP_LEFT,
        style: {},
        icon: { shape: "dell-alert-info", size: 26 },
        showCloseButton: true,
    };
    return SignPost;
}(React.PureComponent));
exports.SignPost = SignPost;
