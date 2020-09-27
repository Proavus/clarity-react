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
exports.Modal = exports.ModalFooter = exports.ModalBody = exports.ModalSize = void 0;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var icon_1 = require("../icon");
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var ModalSize;
(function (ModalSize) {
    ModalSize["SMALL"] = "modal-sm";
    ModalSize["LARGE"] = "modal-lg";
    ModalSize["XLARGE"] = "modal-xl";
    ModalSize["CUSTOM"] = "custom";
})(ModalSize = exports.ModalSize || (exports.ModalSize = {}));
exports.ModalBody = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_BODY }, children);
};
exports.ModalFooter = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_FOOTER }, children);
};
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.divRef = null;
        _this.state = {
            isOpen: _this.props.isOpen !== undefined ? _this.props.isOpen : false,
        };
        return _this;
    }
    Modal.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.isOpen(nextProps, nextState)) {
            this.createDivRef();
        }
        else {
            this.cleanup();
        }
    };
    Modal.prototype.componentWillMount = function () {
        this.createDivRef();
    };
    Modal.prototype.createDivRef = function () {
        if (this.divRef === null) {
            var el = document.createElement("div");
            document.body.appendChild(el);
            this.divRef = el;
        }
        document.body.classList.add(ClassNames_1.ClassNames.NO_SCROLLING);
    };
    Modal.prototype.cleanup = function () {
        if (this.divRef !== null) {
            document.body.removeChild(this.divRef);
            this.divRef = null;
        }
        document.body.classList.remove(ClassNames_1.ClassNames.NO_SCROLLING);
    };
    Modal.prototype.componentWillUnmount = function () {
        this.cleanup();
    };
    Modal.prototype.buildModal = function () {
        var _a = this.props, size = _a.size, closable = _a.closable, title = _a.title, children = _a.children, dataqa = _a.dataqa, width = _a.width, height = _a.height, className = _a.className;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: ClassNames_1.ClassNames.MODAL, "data-qa": dataqa },
                React.createElement("div", { className: utils_1.classNames([
                        ClassNames_1.ClassNames.MODAL_DIALOG,
                        size && size,
                        className && className,
                    ]), style: size === ModalSize.CUSTOM ? { width: width + "px", height: height + "px" } : {}, role: "dialog", "aria-hidden": "true" },
                    React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_CONTENT },
                        React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_HEADER },
                            closable && (React.createElement("button", { "aria-label": "Close", className: "close", type: "button", onClick: this.close.bind(this) },
                                React.createElement(icon_1.Icon, { "aria-hidden": true, shape: "close" }))),
                            React.createElement("h3", { className: ClassNames_1.ClassNames.MODAL_TITLE }, title)),
                        children))),
            React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_BACKDROP, "aria-hidden": "true" })));
    };
    Modal.prototype.close = function () {
        var onClose = this.props.onClose;
        this.setState({ isOpen: false });
        onClose && onClose();
    };
    Modal.prototype.open = function () {
        this.setState({ isOpen: true });
    };
    Modal.prototype.isOpen = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        if (props.isOpen !== undefined)
            return props.isOpen;
        return state.isOpen;
    };
    Modal.prototype.render = function () {
        return this.isOpen() ? ReactDOM.createPortal(this.buildModal(), this.divRef) : null;
    };
    return Modal;
}(React.PureComponent));
exports.Modal = Modal;
