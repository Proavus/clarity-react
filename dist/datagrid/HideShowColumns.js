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
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var button_1 = require("../forms/button");
var checkbox_1 = require("../forms/checkbox");
var HideShowColumns = /** @class */ (function (_super) {
    __extends(HideShowColumns, _super);
    function HideShowColumns() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refParent = React.createRef();
        _this.refChild = React.createRef();
        // Initial state for HideShowColumns
        _this.state = {
            isOpen: false,
            columns: _this.props.columns,
            transformVal: "translateX(0px) translateY(0px)",
            SelectAll: utils_1.allTrueOnKey(_this.props.columns, "isVisible"),
        };
        _this.handleButtonClick = function () {
            _this.toggle();
        };
        _this.afterToggle = function () {
            if (_this.state.isOpen) {
                window.addEventListener("click", _this.handleDocumentClick, true);
            }
            else {
                window.removeEventListener("click", _this.handleDocumentClick, true);
            }
        };
        _this.resize = function () {
            if (_this.state.isOpen) {
                _this.toggle();
            }
        };
        _this.handleDocumentClick = function (evt) {
            if (_this.state.isOpen) {
                var target = evt.target;
                var el = _this.refChild.current;
                if (el && typeof el !== "string" && !el.contains(target)) {
                    _this.toggle();
                }
            }
        };
        // Handle for select All button
        _this.handleSelectAll = function () {
            _this.updateDatagridColumns("All");
        };
        // Handle for select single column
        _this.handleSingleSelect = function (columnName) {
            _this.updateDatagridColumns(columnName);
        };
        _this.updateDatagridColumns = function (columnName) {
            var columns = _this.state.columns;
            var updateColumns = _this.props.updateColumns;
            columns.forEach(function (column) {
                if (columnName === column.columnName) {
                    column.isVisible = !column.isVisible;
                }
                else if (columnName === "All") {
                    column.isVisible = true;
                }
            });
            if (!utils_1.allFalseOnKey(columns, "isVisible")) {
                _this.setState({
                    columns: columns.slice(),
                    SelectAll: utils_1.allTrueOnKey(columns, "isVisible"),
                }, function () { return updateColumns && updateColumns(columns); });
            }
        };
        return _this;
    }
    HideShowColumns.prototype.componentWillMount = function () {
        window.addEventListener("resize", this.resize, true);
    };
    HideShowColumns.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.resize, true);
    };
    HideShowColumns.prototype.componentDidUpdate = function () {
        var isOpen = this.state.isOpen;
        if (isOpen) {
            // Calculate left and top for hide and show columns menu
            var HideShowColumnsMenuTop = this.refParent.current.getClientRects()[0].top - this.refChild.current.getClientRects()[0].width + 50;
            var HideShowColumnsMenuLeft = this.refParent.current.getClientRects()[0].left;
            var transformVal = "translateX(" + HideShowColumnsMenuLeft + "px) " + "translateY(" + HideShowColumnsMenuTop + "px)";
            this.setState({ transformVal: transformVal });
        }
    };
    HideShowColumns.prototype.toggle = function () {
        this.setState(function (prevState) { return ({
            isOpen: !prevState.isOpen,
        }); }, this.afterToggle);
    };
    // function to build column list
    HideShowColumns.prototype.buildColumnList = function (column, index) {
        var _this = this;
        return (React.createElement("li", null,
            React.createElement("div", { className: ClassNames_1.ClassNames.CLR_CHECKBOX_WRAPPER, key: "selectCol_" + index },
                React.createElement(checkbox_1.CheckBox, { id: column.columnName, ariaLabel: "Select", label: column.columnName, onChange: function (evt) { return _this.handleSingleSelect(column.columnName); }, checked: column.isVisible !== undefined ? column.isVisible : undefined }))));
    };
    HideShowColumns.prototype.render = function () {
        var _this = this;
        var _a = this.state, isOpen = _a.isOpen, columns = _a.columns, transformVal = _a.transformVal, SelectAll = _a.SelectAll;
        var className = this.props.className;
        return (React.createElement("div", null,
            React.createElement("div", { ref: this.refParent, className: utils_1.classNames([ClassNames_1.ClassNames.COLUMN_SWITCH_WRAPPER]) },
                React.createElement(button_1.Button, { className: ClassNames_1.ClassNames.COLUMN_TOGGLE, onClick: this.handleButtonClick, icon: {
                        shape: "view-columns",
                    } })),
            isOpen && (React.createElement("div", null,
                React.createElement("span", { className: ClassNames_1.ClassNames.OFFSCREEN_FOCUS_REBOUNDER }),
                React.createElement("div", { ref: this.refChild, className: utils_1.classNames([
                        ClassNames_1.ClassNames.COLUMN_SWITCH,
                        ClassNames_1.ClassNames.CLR_POPOVER_CONTENT,
                        className,
                    ]), role: "dialog", style: {
                        top: 0,
                        bottom: "auto",
                        right: "auto",
                        left: 0,
                        transform: transformVal,
                    } },
                    React.createElement("div", { className: ClassNames_1.ClassNames.SWITCH_HEADER },
                        "Select Columns",
                        React.createElement(button_1.Button, { className: ClassNames_1.ClassNames.SWITCH_BUTTON, onClick: this.handleButtonClick, icon: {
                                shape: "close",
                            } })),
                    React.createElement("ul", { className: ClassNames_1.ClassNames.SWITCH_CONTENT }, columns &&
                        columns.map(function (column, index) {
                            return _this.buildColumnList(column, index);
                        })),
                    React.createElement("div", { className: ClassNames_1.ClassNames.SWITCH_FOOTER },
                        React.createElement(button_1.Button, { className: ClassNames_1.ClassNames.SWITCH_BUTTON, link: true, disabled: SelectAll, onClick: this.handleSelectAll }, "Select All")))))));
    };
    return HideShowColumns;
}(React.PureComponent));
exports.HideShowColumns = HideShowColumns;
