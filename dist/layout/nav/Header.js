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
exports.Header = exports.HeaderColor = void 0;
var React = __importStar(require("react"));
var _1 = require(".");
var utils_1 = require("../../utils");
var HeaderColor;
(function (HeaderColor) {
    HeaderColor["HEADER1"] = "header-1";
    HeaderColor["HEADER2"] = "header-2";
    HeaderColor["HEADER3"] = "header-3";
    HeaderColor["HEADER4"] = "header-4";
    HeaderColor["HEADER5"] = "header-5";
    HeaderColor["HEADER6"] = "header-6";
    HeaderColor["HEADER7"] = "header-7";
})(HeaderColor = exports.HeaderColor || (exports.HeaderColor = {}));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var _a = this.props, primaryShown = _a.primaryShown, secondaryShown = _a.secondaryShown, onCloseAll = _a.onCloseAll, onHamburgerToggle = _a.onHamburgerToggle, onRightSideToggle = _a.onRightSideToggle, className = _a.className, color = _a.color, style = _a.style;
        return (React.createElement("header", { className: utils_1.classNames([_1.ClassNames.Header, color, className]), style: style },
            primaryShown && (React.createElement("button", { className: _1.ClassNames.HamburgerTrigger, type: "button", onClick: onHamburgerToggle },
                React.createElement("span", null))),
            this.props.children,
            secondaryShown && (React.createElement("button", { className: _1.ClassNames.OverflowTrigger, type: "button", onClick: onRightSideToggle },
                React.createElement("span", null))),
            React.createElement("div", { className: "header-backdrop", onClick: onCloseAll })));
    };
    return Header;
}(React.PureComponent));
exports.Header = Header;
