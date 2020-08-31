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
exports.ButtonGroup = void 0;
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
        var defaultValue = props.defaultValue, selectedValue = props.selectedValue;
        _this.state = { value: selectedValue ? selectedValue : defaultValue };
        return _this;
    }
    ButtonGroup.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, selectedValue = _a.selectedValue, defaultValue = _a.defaultValue;
        if (selectedValue !== prevProps.selectedValue || defaultValue !== prevProps.defaultValue) {
            this.setState({ value: selectedValue ? selectedValue : defaultValue });
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
