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
var react_uid_1 = require("react-uid");
var ClassNames_1 = require("./ClassNames");
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        var _this = _super.call(this, props) || this;
        _this.myRef = React.createRef();
        _this.state = { value: false };
        return _this;
    }
    CheckBox.prototype.handleChange = function (evt) {
        var newValue = !this.state.value;
        this.setState({
            value: newValue,
        });
    };
    CheckBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, //prettier
        name = _a.name, ariaLabelledby = _a.ariaLabelledby, ariaLabel = _a.ariaLabel, disabled = _a.disabled, onClick = _a.onClick, checked = _a.checked, onChange = _a.onChange, className = _a.className, dataqa = _a.dataqa;
        var setId = this.props.id;
        var value = this.state.value;
        return (React.createElement(react_uid_1.UID, null, function (id) { return (React.createElement("div", { className: ClassNames_1.ClassNames.CLR_CHECKBOX_WRAPPER },
            React.createElement("input", { type: "checkbox" // prettier
                , id: setId ? setId : id, name: name, ref: _this.myRef, checked: checked !== undefined ? checked : value, onChange: onChange !== undefined ? onChange : _this.handleChange.bind(_this), className: ClassNames_1.ClassNames.CLR_CHECKBOX, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, disabled: disabled, "data-qa": dataqa, onClick: onClick }),
            React.createElement("label", { className: ClassNames_1.ClassNames.CLR_CONTROL_LABEL, htmlFor: setId ? setId : id }, label))); }));
    };
    return CheckBox;
}(React.PureComponent));
exports.CheckBox = CheckBox;
