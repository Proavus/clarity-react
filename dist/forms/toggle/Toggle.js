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
exports.Toggle = void 0;
var React = __importStar(require("react"));
var react_uid_1 = require("react-uid");
var ClassNames_1 = require("./ClassNames");
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    function Toggle(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { checked: _this.getValue() };
        return _this;
    }
    Toggle.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, checked = _a.checked, defaultChecked = _a.defaultChecked;
        if (checked !== prevProps.checked || defaultChecked !== prevProps.defaultChecked) {
            this.setState({ checked: this.getValue() });
        }
    };
    Toggle.prototype.getValue = function () {
        var _a = this.props, checked = _a.checked, defaultChecked = _a.defaultChecked;
        var value = false;
        if (checked) {
            value = checked;
        }
        else if (defaultChecked) {
            value = defaultChecked;
        }
        return value;
    };
    Toggle.prototype.handleChange = function (evt) {
        var hardValue = this.props.checked !== undefined;
        var newValue = evt.target.checked;
        if (hardValue) {
            evt.preventDefault();
            if (this.props.onChange)
                this.props.onChange(newValue);
        }
        else {
            this.setState({ checked: newValue });
        }
    };
    Toggle.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, name = _a.name, ariaLabelledby = _a.ariaLabelledby, disabled = _a.disabled, onClick = _a.onClick;
        var checked = this.state.checked;
        var setId = this.props.id;
        return (React.createElement(react_uid_1.UID, null, function (id) { return (React.createElement("div", { className: ClassNames_1.ClassNames.CLR_TOGGLE_WRAPPER },
            React.createElement("input", { type: "checkbox" //prettier
                , id: setId ? setId : id, name: name, checked: checked !== false, onChange: _this.handleChange.bind(_this), className: ClassNames_1.ClassNames.CLR_TOGGLE, "aria-labelledby": ariaLabelledby, disabled: disabled, onClick: onClick }),
            React.createElement("label", { className: ClassNames_1.ClassNames.CLR_CONTROL_LABEL, htmlFor: setId ? setId : id }, label))); }));
    };
    return Toggle;
}(React.PureComponent));
exports.Toggle = Toggle;
