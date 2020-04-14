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
var radio_1 = require("../radio");
var utils_1 = require("../../utils");
var initialState = { value: null };
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.state = initialState;
        _this.handleChange = function (evt) {
            _this.setState({ value: evt.target.value });
            var onChange = _this.props.onChange;
            if (onChange)
                onChange(evt);
        };
        var defaultValue = props.defaultValue;
        if (defaultValue)
            _this.state = { value: defaultValue };
        return _this;
    }
    ButtonGroup.prototype.componentDidUpdate = function (prevProps) {
        var defaultValue = this.props.defaultValue;
        if (!(defaultValue === prevProps.defaultValue)) {
            this.setState({ value: defaultValue });
        }
    };
    ButtonGroup.prototype.renderChildren = function () {
        var _this = this;
        var value = this.state.value;
        var _a = this.props, children = _a.children, name = _a.name;
        if (typeof children === "undefined" || children === null) {
            return [];
        }
        return React.Children.map(children, function (child, index) {
            var childEl = child;
            if (childEl.type === radio_1.RadioButton) {
                return React.cloneElement(childEl, {
                    checked: value === childEl.props.value,
                    id: name + "-" + index,
                    name: name,
                    onChange: _this.handleChange,
                    inButtonGroup: true,
                });
            }
            return child;
        });
    };
    ButtonGroup.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, dataqa = _a.dataqa;
        return (React.createElement("div", { className: utils_1.classNames(["btn-group", className]), style: style, "data-qa": dataqa }, this.renderChildren()));
    };
    return ButtonGroup;
}(React.PureComponent));
exports.ButtonGroup = ButtonGroup;
