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
exports.Toast = exports.MessageType = exports.Direction = void 0;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var icon_1 = require("../icon");
var utils_1 = require("../utils");
var ClassNames_1 = require("../modals/ClassNames");
var Direction;
(function (Direction) {
    Direction["TOP_RIGHT"] = "top-right";
    Direction["BOTTOM_LEFT"] = "bottom-left";
    Direction["BOTTOM_RIGHT"] = "bottom-right";
    Direction["TOP_LEFT"] = "top-left";
})(Direction = exports.Direction || (exports.Direction = {}));
var MessageType;
(function (MessageType) {
    MessageType["SUCCESS"] = "success";
    MessageType["WARNING"] = "warning";
    MessageType["DANGER"] = "danger";
    MessageType["INFO"] = "info";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var DEFAULT_HIDE_TIME = 3000;
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.divRef = null;
        // Remove the warning for setState on componentUnmount using isMounted
        _this._isMounted = false;
        _this.state = {
            showToast: _this.props.showToast !== undefined ? _this.props.showToast : false,
        };
        return _this;
    }
    Toast.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.showToast(nextProps, nextState)) {
            this.createElement();
            if (nextProps.showToast === true && nextProps.showToast !== nextState.showToast) {
                //set the timer for the toast
                this.setTimer(nextProps.duration);
            }
        }
        else {
            this.cleanup();
        }
    };
    Toast.prototype.componentWillMount = function () {
        this.createElement();
    };
    Toast.prototype.createElement = function () {
        if (this.divRef === null) {
            var el = document.createElement("div");
            document.body.appendChild(el);
            this.divRef = el;
            document.body.classList.add(ClassNames_1.ClassNames.NO_SCROLLING);
        }
    };
    Toast.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    Toast.prototype.setTimer = function (hideTime) {
        var _this = this;
        setTimeout(function () {
            _this.close();
        }, hideTime);
    };
    Toast.prototype.cleanup = function () {
        if (this.divRef !== null) {
            document.body.removeChild(this.divRef);
            this.divRef = null;
            document.body.classList.remove(ClassNames_1.ClassNames.NO_SCROLLING);
        }
    };
    Toast.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        this.cleanup();
    };
    Toast.prototype.buildToast = function () {
        var _a = this.props, text = _a.text, icon = _a.icon, position = _a.position, type = _a.type, duration = _a.duration, showToast = _a.showToast, style = _a.style, className = _a.className, dataqa = _a.dataqa;
        var styled = __assign(__assign({}, style), { padding: "20px 20px", zIndex: 2000, position: "fixed" });
        //create styles based on the position given
        var place = position.includes("bottom") ? "bottom" : "top";
        styled[place] = 0;
        place = position.includes("right") ? "right" : "left";
        styled[place] = 0;
        return (React.createElement("div", { className: utils_1.classNames(["alert", "alert-" + type, className]), style: styled, "data-qa": dataqa },
            icon && React.createElement("span", { style: { paddingRight: "5px" } }, React.createElement(icon_1.Icon, { shape: icon })),
            text));
    };
    Toast.prototype.close = function () {
        var onClose = this.props.onClose;
        if (this._isMounted) {
            this.setState({ showToast: false });
            onClose && onClose();
        }
    };
    Toast.prototype.showToast = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        if (props.showToast !== undefined) {
            return props.showToast;
        }
        return state.showToast;
    };
    Toast.prototype.render = function () {
        return this.showToast() ? ReactDOM.createPortal(this.buildToast(), this.divRef) : null;
    };
    // Default value for props if no value is given
    Toast.defaultProps = {
        showToast: false,
        type: MessageType.SUCCESS,
        position: Direction.TOP_RIGHT,
        duration: DEFAULT_HIDE_TIME,
    };
    return Toast;
}(React.PureComponent));
exports.Toast = Toast;
