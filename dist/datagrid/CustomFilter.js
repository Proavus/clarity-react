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
var select_1 = require("../forms/select");
var CustomFilter = /** @class */ (function (_super) {
    __extends(CustomFilter, _super);
    function CustomFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            customFilterValue: undefined,
        };
        _this.handleFilterChnage = function (evt) {
            var datagridFilterRef = _this.props.datagridFilterRef;
            var value = evt.target.value;
            if (datagridFilterRef) {
                _this.setState({ customFilterValue: value }, function () { return datagridFilterRef.current.updateFilter(value); });
            }
        };
        return _this;
    }
    CustomFilter.prototype.render = function () {
        var _this = this;
        var customFilterValue = this.state.customFilterValue;
        return (React.createElement("div", { style: { width: "166px" } },
            React.createElement(select_1.Select, { onChange: function (evt) { return _this.handleFilterChnage(evt); }, value: customFilterValue },
                React.createElement(select_1.SelectOption, { value: "" }),
                React.createElement(select_1.SelectOption, { value: "Brad" }, "Brad"),
                React.createElement(select_1.SelectOption, { value: "Georgia" }, "Georgia"),
                React.createElement(select_1.SelectOption, { value: "Brynn" }, "Brynn"))));
    };
    return CustomFilter;
}(React.PureComponent));
exports.CustomFilter = CustomFilter;
