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
exports.MainContainer = void 0;
var React = __importStar(require("react"));
var utils = __importStar(require("../../utils"));
var nav_1 = require("../nav");
var _1 = require(".");
var initialState = {
    leftNavOpen: false,
    rightNavOpen: false,
};
var MainContainer = /** @class */ (function (_super) {
    __extends(MainContainer, _super);
    function MainContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.handleHamburgerToggle = function () {
            var leftNavOpen = _this.state.leftNavOpen;
            _this.setState({ leftNavOpen: !leftNavOpen });
        };
        _this.handleRightSideToggle = function () {
            var rightNavOpen = _this.state.rightNavOpen;
            _this.setState({ rightNavOpen: !rightNavOpen });
        };
        _this.closeAll = function () {
            _this.setState({ leftNavOpen: false, rightNavOpen: false });
        };
        return _this;
    }
    MainContainer.prototype.getClassList = function () {
        var _a = this.state, leftNavOpen = _a.leftNavOpen, rightNavOpen = _a.rightNavOpen;
        return [
            _1.ClassNames.CONTAINER_CLASS,
            leftNavOpen ? nav_1.ClassNames.HamburgerMenu : undefined,
            rightNavOpen ? nav_1.ClassNames.OverflowMenu : undefined,
        ];
    };
    MainContainer.prototype.render = function () {
        var _a = this.props, actions = _a.actions, children = _a.children, headerNav = _a.headerNav, sideNav = _a.sideNav, subNav = _a.subNav, title = _a.title, dataqa = _a.dataqa;
        var _b = MainContainer.detectNavs(headerNav, sideNav, subNav), primary = _b.primary, secondary = _b.secondary;
        return (React.createElement("div", { className: utils.classNames(this.getClassList()), "data-qa": dataqa },
            React.createElement(nav_1.Header, { primaryShown: primary, secondaryShown: secondary, onHamburgerToggle: this.handleHamburgerToggle, onRightSideToggle: this.handleRightSideToggle, onCloseAll: this.closeAll },
                React.createElement("div", { className: "branding" },
                    React.createElement("a", { href: "#", className: "nav-link" },
                        React.createElement("span", { className: "logo dell-emc-logo" }),
                        React.createElement("span", { className: "title" }, title))),
                headerNav && headerNav,
                React.createElement("div", { className: "header-actions" }, actions)),
            subNav && subNav,
            React.createElement("div", { className: "content-container" },
                React.createElement("div", { className: "content-area" }, children),
                sideNav && sideNav)));
    };
    MainContainer.detectNavs = function () {
        var navs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            navs[_i] = arguments[_i];
        }
        return navs.reduce(function (acc, nav) {
            if (typeof nav === "undefined")
                return acc;
            if (nav.props.navLevel === nav_1.NavLevel.PRIMARY)
                return Object.assign({}, acc, { primary: true });
            if (nav.props.navLevel === nav_1.NavLevel.SECONDARY)
                return Object.assign({}, acc, { secondary: true });
            return acc;
        }, { primary: false, secondary: false });
    };
    return MainContainer;
}(React.PureComponent));
exports.MainContainer = MainContainer;
