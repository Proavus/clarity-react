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
exports.VerticalNavCodes = exports.VerticalNav = void 0;
var React = __importStar(require("react"));
var icon_1 = require("../../icon");
var nav_1 = require("../nav");
var _1 = require(".");
var VerticalNav = /** @class */ (function (_super) {
    __extends(VerticalNav, _super);
    function VerticalNav(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.initializeState();
        return _this;
    }
    VerticalNav.prototype.initializeState = function () {
        var result = {
            hasNavGroups: false,
            hasIcons: false,
            isCollapsed: false,
        };
        var children = this.props.children;
        React.Children.map(children, function (child) {
            var childEl = child;
            if (childEl) {
                if (childEl.type === _1.VerticalNavGroup) {
                    result.hasNavGroups = true;
                    if (childEl.props.iconShape)
                        result.hasIcons = true;
                }
                else if (childEl.type === nav_1.NavLink) {
                    if (childEl.props.iconShape)
                        result.hasIcons = true;
                }
            }
        });
        return result;
    };
    VerticalNav.prototype.getClassList = function () {
        var classList = [VerticalNavCodes.CLR_VERTICAL_NAV];
        var collapseButtonOnBottom = this.props.collapseButtonOnBottom;
        var _a = this.state, isCollapsed = _a.isCollapsed, hasNavGroups = _a.hasNavGroups, hasIcons = _a.hasIcons;
        if (collapseButtonOnBottom) {
            classList.push(VerticalNavCodes.NAV_TRIGGER_BOTTOM);
        }
        if (hasNavGroups) {
            classList.push(VerticalNavCodes.HAS_NAV_GROUPS);
        }
        if (hasIcons) {
            classList.push(VerticalNavCodes.HAS_ICONS);
        }
        if (isCollapsed) {
            classList.push(VerticalNavCodes.IS_COLLAPSED);
        }
        if (this.props.className) {
            classList.push(this.props.className);
        }
        return classList;
    };
    VerticalNav.prototype.toggleVertical = function () {
        var isCollapsed = this.state.isCollapsed;
        this.setState({ isCollapsed: !isCollapsed });
    };
    VerticalNav.prototype.openVertical = function () {
        this.setState({ isCollapsed: false });
    };
    VerticalNav.prototype.renderChildren = function () {
        var _this = this;
        var isCollapsed = this.state.isCollapsed;
        var children = this.props.children;
        if (typeof children === "undefined" || children === null) {
            return [];
        }
        return React.Children.map(children, function (child, index) {
            var childEl = child;
            if (childEl) {
                if (childEl.type === _1.VerticalNavGroup) {
                    return React.cloneElement(childEl, {
                        verticalIsCollapsed: isCollapsed,
                        openVerticalNav: _this.openVertical.bind(_this),
                    });
                }
            }
            return child;
        });
    };
    VerticalNav.prototype.render = function () {
        var isCollapsed = this.state.isCollapsed;
        var _a = this.props, dataqa = _a.dataqa, style = _a.style;
        return (React.createElement("div", { className: this.getClassList().join(" "), style: style, "data-qa": dataqa },
            this.props.isCollapsible && (React.createElement("button", { type: "button", className: "nav-trigger", onClick: this.toggleVertical.bind(this) },
                React.createElement(icon_1.Icon, { shape: "angle-double", className: "nav-trigger-icon", dir: isCollapsed ? icon_1.Direction.RIGHT : icon_1.Direction.LEFT }))),
            React.createElement("div", { className: "nav-content" },
                this.renderChildren(),
                this.state.isCollapsed && React.createElement("button", { onClick: this.openVertical.bind(this), className: "nav-btn" }))));
    };
    return VerticalNav;
}(React.PureComponent));
exports.VerticalNav = VerticalNav;
var VerticalNavCodes = /** @class */ (function () {
    function VerticalNavCodes() {
    }
    VerticalNavCodes.CLR_VERTICAL_NAV = "clr-vertical-nav";
    VerticalNavCodes.HAS_ICONS = "has-icons";
    VerticalNavCodes.HAS_NAV_GROUPS = "has-nav-groups";
    VerticalNavCodes.IS_COLLAPSED = "is-collapsed";
    VerticalNavCodes.NAV_TRIGGER_BOTTOM = "nav-trigger--bottom";
    return VerticalNavCodes;
}());
exports.VerticalNavCodes = VerticalNavCodes;
