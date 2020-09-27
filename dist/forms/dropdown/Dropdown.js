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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = exports.Direction = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../../utils");
var icon_1 = require("../../icon");
var ClassNames_1 = require("./ClassNames");
var _1 = require(".");
var button_1 = require("../button");
var _2 = require(".");
var initialState = {
    isOpen: false,
};
// Open the menu in the respective direction.
var Direction;
(function (Direction) {
    Direction["BOTTOM_LEFT"] = "bottom-left";
    Direction["BOTTOM_RIGHT"] = "bottom-right";
    Direction["TOP_LEFT"] = "top-left";
    Direction["TOP_RIGHT"] = "top-right";
    Direction["LEFT_BOTTOM"] = "left-bottom";
    Direction["LEFT_TOP"] = "left-top";
    Direction["RIGHT_TOP"] = "right-top";
    Direction["RIGHT_BOTTOM"] = "right-bottom";
})(Direction = exports.Direction || (exports.Direction = {}));
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ddRef = React.createRef();
        _this.state = initialState;
        _this.afterToggle = function () {
            if (_this.state.isOpen)
                _this.subscribeDocumentClick();
            else
                _this.unsubscribeDocumentClick();
        };
        _this.subscribeDocumentClick = function () {
            window.addEventListener("click", _this.handleDocumentClick, true);
        };
        _this.unsubscribeDocumentClick = function () {
            window.removeEventListener("click", _this.handleDocumentClick, true);
        };
        _this.handleDocumentClick = function (evt) {
            if (!_this.state.isOpen || !_this.props.closeOnBackdrop)
                return;
            var target = evt.target;
            var el = _this.ddRef.current;
            if (!el || typeof el === "string") {
                return;
            }
            if (!el.contains(target)) {
                _this.toggle(false);
            }
        };
        _this.handleItemClick = function (item, itemPath) {
            if (itemPath === void 0) { itemPath = ""; }
            return __awaiter(_this, void 0, void 0, function () {
                var r;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, _1.propogationChain(item, itemPath, [this.props.onItemClick])];
                        case 1:
                            r = _a.sent();
                            if (r === _2.STOP_PROPAGATION)
                                return [2 /*return*/];
                            if (this.props.closeOnItemClick) {
                                this.toggle(false);
                            }
                            return [2 /*return*/, undefined];
                    }
                });
            });
        };
        return _this;
    }
    Dropdown.prototype.handleButtonClick = function () {
        this.toggle();
    };
    Dropdown.prototype.toggle = function (isOpen) {
        if (isOpen === void 0) { isOpen = !this.state.isOpen; }
        this.setState({ isOpen: isOpen }, this.afterToggle);
    };
    Dropdown.prototype.getClassListMain = function () {
        var _a = this.props, className = _a.className, _level = _a._level, direction = _a.direction;
        var isOpen = this.state.isOpen;
        return [
            _level === 0 && className === "btn-group-overflow" ? undefined : ClassNames_1.ClassNames.DROPDOWN,
            isOpen ? ClassNames_1.ClassNames.OPEN : undefined,
            direction && direction,
            className ? className : undefined,
        ];
    };
    Dropdown.prototype.getClassListButton = function () {
        var isOpen = this.state.isOpen;
        return [ClassNames_1.ClassNames.BUTTON, ClassNames_1.ClassNames.BUTTON_OUTLINE_PRIMARY, isOpen ? ClassNames_1.ClassNames.ACTIVE : undefined];
    };
    Dropdown.prototype.renderChildren = function () {
        var _this = this;
        var _a = this.props, children = _a.children, itemsPath = _a.itemsPath, isNested = _a.isNested, _level = _a._level;
        if (typeof children === "undefined" || children === null) {
            return [];
        }
        return React.Children.map(children, function (child, index) {
            var childEl = child;
            if (childEl.type === _1.DropdownMenu) {
                return React.cloneElement(childEl, {
                    onItemClick: _this.handleItemClick,
                    itemsPath: isNested ? itemsPath + "/" + _this.props.label : undefined,
                    _level: _level + 1,
                });
            }
            return child;
        });
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, label = _a.label, isNested = _a.isNested, button = _a.button, showCaret = _a.showCaret, dataqa = _a.dataqa;
        var caretShape = showCaret && React.createElement(icon_1.Icon, { shape: this.state.isOpen ? "caret up" : "caret down" });
        var buttonProps = __assign({}, button);
        return (React.createElement("div", { ref: this.ddRef, className: utils_1.classNames(this.getClassListMain()), "data-qa": dataqa },
            isNested ? (React.createElement(_1.DropdownItem, { isExpandable: true, onClick: this.handleButtonClick.bind(this) }, label)) : button ? (React.createElement(button_1.Button, __assign({}, buttonProps, { onClick: this.handleButtonClick.bind(this) }),
                label,
                caretShape)) : (React.createElement(button_1.Button, { className: utils_1.classNames(this.getClassListButton()), onClick: this.handleButtonClick.bind(this) },
                label,
                caretShape)),
            this.renderChildren()));
    };
    Dropdown.defaultProps = {
        closeOnItemClick: true,
        closeOnBackdrop: true,
        itemsPath: "",
        _level: 0,
        isNested: false,
        showCaret: true,
    };
    return Dropdown;
}(React.PureComponent));
exports.Dropdown = Dropdown;
