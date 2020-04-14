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
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        var _this = _super.call(this, props) || this;
        _this.key = props.id;
        return _this;
    }
    RadioButton.getClassNames = function (props) {
        return [
            props.className,
            props.inButtonGroup ? "radio btn" : "clr-radio-wrapper",
            props.disabled ? "clr-form-control-disabled" : undefined,
        ];
    };
    RadioButton.prototype.render = function () {
        var _a = this.props, checked = _a.checked, //prettier hack
        children = _a.children, disabled = _a.disabled, label = _a.label, labelClass = _a.labelClass, onChange = _a.onChange, name = _a.name, id = _a.id, value = _a.value, inButtonGroup = _a.inButtonGroup, style = _a.style, dataqa = _a.dataqa;
        var labelClassNames = utils.classNames([
            !inButtonGroup && "clr-control-label",
            labelClass,
        ]);
        return (React.createElement("div", { className: utils.classNames(RadioButton.getClassNames(this.props)), "data-qa": dataqa },
            React.createElement("input", { className: "radio", name: name, id: id, value: value, disabled: disabled, type: "radio", onChange: onChange, style: style, checked: checked }),
            React.createElement("label", { className: labelClassNames, htmlFor: id }, label && label),
            children));
    };
    RadioButton.defaultProps = {
        inButtonGroup: false,
        disabled: false,
    };
    return RadioButton;
}(React.PureComponent));
exports.RadioButton = RadioButton;
