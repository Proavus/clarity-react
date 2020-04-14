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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var icon_1 = require("../../icon");
var utils_1 = require("../../utils");
var NavLink = /** @class */ (function (_super) {
    __extends(NavLink, _super);
    function NavLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavLink.prototype.render = function () {
        var _a = this.props, iconShape = _a.iconShape, className = _a.className, onClick = _a.onClick, children = _a.children;
        var navLinkClassNames = utils_1.classNames(["nav-link", className]);
        return iconShape ? (React.createElement("a", { href: "javascript:void(0)", className: navLinkClassNames, onClick: onClick },
            React.createElement(icon_1.Icon, { shape: iconShape, className: "nav-icon" }),
            React.createElement("span", { className: "nav-text" }, children))) : (React.createElement("a", { href: "javascript:void(0)", className: navLinkClassNames, onClick: onClick },
            React.createElement("div", { className: "nav-text" }, children)));
    };
    return NavLink;
}(React.PureComponent));
exports.NavLink = NavLink;
