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
var Input_1 = require("../forms/input/Input");
var button_1 = require("../forms/button");
var CustomStepComponent = /** @class */ (function (_super) {
    __extends(CustomStepComponent, _super);
    function CustomStepComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: " ",
        };
        _this.handleChange = function (evt) {
            var value = evt.target.value;
            _this.setState({ value: value });
        };
        return _this;
    }
    CustomStepComponent.prototype.resetComponent = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.setState({ value: " " });
            resolve();
        });
    };
    CustomStepComponent.prototype.render = function () {
        var value = this.state.value;
        var _a = this.props, wizardRef = _a.wizardRef, stepId = _a.stepId;
        return (React.createElement("div", { style: { width: "166px" } },
            "Enter something :",
            React.createElement(Input_1.Input, { name: "somevalue", value: value, onChange: this.handleChange }),
            React.createElement("br", null),
            React.createElement(button_1.Button, { onClick: function () {
                    wizardRef.current.checkStepValidity(stepId);
                } },
                " ",
                "Finish Step",
                " ")));
    };
    return CustomStepComponent;
}(React.PureComponent));
exports.CustomStepComponent = CustomStepComponent;
