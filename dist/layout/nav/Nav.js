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
var utils = __importStar(require("../../utils"));
var NavLink_1 = require("./NavLink");
var NavLevel;
(function (NavLevel) {
    NavLevel["PRIMARY"] = "1";
    NavLevel["SECONDARY"] = "2";
})(NavLevel = exports.NavLevel || (exports.NavLevel = {}));
var NavType;
(function (NavType) {
    NavType["HEADER"] = "NAV_TYPE_HEADER";
    NavType["SIDE"] = "NAV_TYPE_SIDE";
    NavType["SUB"] = "NAV_TYPE_SUB";
})(NavType = exports.NavType || (exports.NavType = {}));
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.classForNavType = function (navType) {
        switch (navType) {
            case NavType.HEADER:
                return "header-nav";
            case NavType.SIDE:
                return "sidenav";
            case NavType.SUB:
                return "subnav";
            default:
                return "header-nav";
        }
    };
    Nav.classForNavLevel = function (navLevel) {
        return "clr-nav-level-" + navLevel;
    };
    Nav.maybeWrapInList = function (navType, children) {
        if (navType === NavType.SUB) {
            var wrappedChildren = React.Children.map(children, function (child) {
                var childEl = child;
                if (childEl.type === NavLink_1.NavLink)
                    return React.createElement("li", { className: "nav-item" }, child);
                return child;
            });
            return React.createElement("ul", { className: "nav" }, wrappedChildren);
        }
        return children;
    };
    Nav.prototype.render = function () {
        var _a = this.props, children = _a.children, navLevel = _a.navLevel, navType = _a.navType, dataqa = _a.dataqa;
        var classList = [Nav.classForNavType(navType), Nav.classForNavLevel(navLevel)];
        return (React.createElement("nav", { className: utils.classNames(classList), "data-qa": dataqa }, Nav.maybeWrapInList(navType, children)));
    };
    return Nav;
}(React.PureComponent));
exports.Nav = Nav;
