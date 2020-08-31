"use strict";
/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
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
exports.DataList = exports.DataListAutoComplete = exports.DataListOption = void 0;
var React = __importStar(require("react"));
var react_uid_1 = require("react-uid");
var utils_1 = require("../../utils");
var icon_1 = require("../../icon");
var ClassNames_1 = require("./ClassNames");
// Datalist option component
exports.DataListOption = function (_a) {
    var value = _a.value, selected = _a.selected, children = _a.children, className = _a.className, style = _a.style;
    return (React.createElement("option", { value: value, selected: selected, className: utils_1.classNames([ClassNames_1.ClassNames.NG_STAR_INSERTED, className]), style: style }, children));
};
/**
 * Enum for datalist autocomplete status
 */
var DataListAutoComplete;
(function (DataListAutoComplete) {
    DataListAutoComplete["ON"] = "on";
    DataListAutoComplete["OFF"] = "off";
})(DataListAutoComplete = exports.DataListAutoComplete || (exports.DataListAutoComplete = {}));
// DataList component
var DataList = /** @class */ (function (_super) {
    __extends(DataList, _super);
    function DataList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function (evt) {
            _this.setState({ hasFocus: true });
        };
        _this.handleBlur = function (evt) {
            var onBlur = _this.props.onBlur;
            _this.setState({ hasFocus: false }, function () {
                onBlur && onBlur(evt);
            });
        };
        _this.state = {
            hasFocus: false,
        };
        return _this;
    }
    DataList.prototype.renderHelperText = function (helperText) {
        return React.createElement("span", { className: utils_1.classNames([ClassNames_1.ClassNames.CLR_SUBTEXT, ClassNames_1.ClassNames.NG_STAR_INSERTED]) }, helperText);
    };
    DataList.prototype.renderLabel = function (labelString) {
        return (React.createElement("label", { className: utils_1.classNames([
                ClassNames_1.ClassNames.CLR_CONTROL_LABEL,
                ClassNames_1.ClassNames.DATALIST_LABEL_COL,
                ClassNames_1.ClassNames.NG_STAR_INSERTED,
            ]) }, labelString));
    };
    DataList.prototype.renderDataList = function () {
        var _this = this;
        var _a = this.props, placeHolder = _a.placeHolder, name = _a.name, isError = _a.isError, errorText = _a.errorText, helperText = _a.helperText, required = _a.required, className = _a.className, style = _a.style, children = _a.children, onChange = _a.onChange, autoComplete = _a.autoComplete;
        var hasFocus = this.state.hasFocus;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.CLR_INPUT_WRAPPER },
            React.createElement(react_uid_1.UID, null, function (listId) { return (React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.CLR_INPUT_GROUP,
                    hasFocus && ClassNames_1.ClassNames.CLR_FOCUS,
                    className,
                ]), style: style },
                React.createElement("input", { onFocus: _this.handleFocus, onBlur: _this.handleBlur, onChange: onChange, placeholder: placeHolder, name: name, required: required, list: listId, style: { width: "100%" }, className: utils_1.classNames([
                        ClassNames_1.ClassNames.CLR_INPUT,
                        ClassNames_1.ClassNames.NG_VALID,
                        ClassNames_1.ClassNames.NG_TOUCHED,
                        ClassNames_1.ClassNames.NG_DIRTY,
                    ]), "aria-describedby": "clr-form-control-3-helper", type: "text", autoComplete: autoComplete ? autoComplete : DataListAutoComplete.OFF }),
                React.createElement("datalist", { id: listId }, children))); }),
            React.createElement(icon_1.Icon, { className: ClassNames_1.ClassNames.CLR_VALIDATE_ICON, shape: "exclamation-circle" }),
            isError
                ? errorText && this.renderHelperText(errorText)
                : helperText && this.renderHelperText(helperText)));
    };
    DataList.prototype.render = function () {
        var _a = this.props, label = _a.label, isError = _a.isError, dataqa = _a.dataqa;
        return (React.createElement("div", { "data-qa": dataqa, className: utils_1.classNames([
                ClassNames_1.ClassNames.NG_VALID,
                ClassNames_1.ClassNames.CLR_FORM,
                ClassNames_1.ClassNames.CLR_FORM_HORIZONTAL,
                ClassNames_1.ClassNames.NG_TOUCHED,
                ClassNames_1.ClassNames.NG_DIRTY,
            ]) },
            React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.CLR_DATALIST_CONTAINER,
                    ClassNames_1.ClassNames.CLR_FORM_CONTROL,
                    ClassNames_1.ClassNames.CLR_ROW,
                ]) },
                label && this.renderLabel(label),
                React.createElement("div", { className: utils_1.classNames([
                        ClassNames_1.ClassNames.CLR_CONTROL_CONTAINER,
                        isError && ClassNames_1.ClassNames.CLR_ERROR,
                        ClassNames_1.ClassNames.DATALIST_COL,
                    ]) }, this.renderDataList()))));
    };
    return DataList;
}(React.PureComponent));
exports.DataList = DataList;
