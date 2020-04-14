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
var VerticalNavGroup = /** @class */ (function (_super) {
    __extends(VerticalNavGroup, _super);
    function VerticalNavGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            groupIsExpanded: false,
        };
        return _this;
    }
    VerticalNavGroup.prototype.handleClick = function () {
        var groupIsExpanded = this.state.groupIsExpanded;
        var _a = this.props, openVerticalNav = _a.openVerticalNav, verticalIsCollapsed = _a.verticalIsCollapsed;
        if (verticalIsCollapsed) {
            if (openVerticalNav)
                openVerticalNav();
            this.setState({ groupIsExpanded: true });
        }
        else {
            this.setState({ groupIsExpanded: !groupIsExpanded });
        }
    };
    VerticalNavGroup.prototype.render = function () {
        var groupIsExpanded = this.state.groupIsExpanded;
        var _a = this.props, iconShape = _a.iconShape, verticalIsCollapsed = _a.verticalIsCollapsed, className = _a.className;
        var expandClass = groupIsExpanded ? "nav-group is-expanded" : "nav-group";
        var navGroupContentClassNames = utils_1.classNames(["nav-group-content", className]);
        return (React.createElement("div", { className: expandClass },
            React.createElement("div", { className: navGroupContentClassNames },
                React.createElement("button", { className: "nav-group-trigger", type: "button", onClick: this.handleClick.bind(this) },
                    iconShape && React.createElement(icon_1.Icon, { className: "nav-icon", shape: iconShape }),
                    React.createElement("div", { className: "nav-group-text" }, this.props.groupName),
                    React.createElement(icon_1.Icon, { shape: "caret", className: "nav-group-trigger-icon", dir: groupIsExpanded ? icon_1.Direction.RIGHT : icon_1.Direction.DOWN }))),
            groupIsExpanded && verticalIsCollapsed === false && (React.createElement("div", { className: "nav-group-children" }, this.props.children))));
    };
    return VerticalNavGroup;
}(React.PureComponent));
exports.VerticalNavGroup = VerticalNavGroup;
