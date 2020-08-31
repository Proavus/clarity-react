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
exports.DropdownMenu = exports.propogationChain = exports.STOP_PROPAGATION = void 0;
var React = __importStar(require("react"));
var _1 = require(".");
var DropdownItem_1 = require("./DropdownItem");
var utils_1 = require("../../utils");
exports.STOP_PROPAGATION = "stopPropagation";
function propogationChain(item, itemPath, funcs) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, funcs_1, func, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, funcs_1 = funcs;
                    _a.label = 1;
                case 1:
                    if (!(_i < funcs_1.length)) return [3 /*break*/, 4];
                    func = funcs_1[_i];
                    if (!func) return [3 /*break*/, 3];
                    r = void 0;
                    return [4 /*yield*/, func(item, itemPath)];
                case 2:
                    r = _a.sent();
                    if (r === exports.STOP_PROPAGATION)
                        return [2 /*return*/, exports.STOP_PROPAGATION];
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, undefined];
            }
        });
    });
}
exports.propogationChain = propogationChain;
var DropdownMenu = /** @class */ (function (_super) {
    __extends(DropdownMenu, _super);
    function DropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownMenu.prototype.renderChildren = function () {
        var _this = this;
        var _a = this.props, children = _a.children, //prettier hack
        itemsPath = _a.itemsPath, onItemClick = _a.onItemClick, _level = _a._level;
        if (typeof children === "undefined" || children === null) {
            return [];
        }
        return React.Children.map(children, function (child, index) {
            var childEl = child;
            if (childEl.type === _1.DropdownItem) {
                if (childEl.props.menuItemType === DropdownItem_1.MenuItemType.ITEM) {
                    var onClick_1 = childEl.props.onClick;
                    var key = childEl.props.label || childEl.props.key || index;
                    var itemPath_1 = itemsPath + "/" + key;
                    return React.cloneElement(childEl, {
                        onClick: function (evt) {
                            return propogationChain(childEl, itemPath_1, [
                                onClick_1 && onClick_1(evt),
                                _this.props.onItemClick,
                            ]);
                        },
                        key: key.toString(),
                    });
                }
            }
            else if (childEl.type === _1.Dropdown) {
                return React.cloneElement(childEl, {
                    onItemClick: function (clickedItem, itemPath) {
                        return propogationChain(clickedItem, itemPath, [clickedItem.props.onClick, onItemClick]);
                    },
                    itemsPath: itemsPath,
                    className: _level % 2 === 0 ? "left-top" : "right-bottom",
                    _level: _level,
                });
            }
            console.log(child);
            return child;
        });
    };
    DropdownMenu.prototype.render = function () {
        return (React.createElement("div", { className: utils_1.classNames([
                "dropdown-menu",
                this.props.className,
            ]), style: this.props.style }, this.renderChildren()));
    };
    DropdownMenu.defaultProps = {
        closeOnItemClick: true,
        closeOnBackdrop: true,
        itemsPath: "",
        _level: 0,
        style: {},
        className: "",
    };
    return DropdownMenu;
}(React.PureComponent));
exports.DropdownMenu = DropdownMenu;
