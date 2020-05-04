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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/**
 * Enum for filter type :
 * @param {STR} to render string filter
 * @param {CUSTOM} to render custom filter
 */
var FilterType;
(function (FilterType) {
    FilterType["STR"] = "String";
    FilterType["CUSTOM"] = "Custom";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var DataGridFilter = /** @class */ (function (_super) {
    __extends(DataGridFilter, _super);
    function DataGridFilter(props) {
        var _this = _super.call(this, props) || this;
        _this.refParent = React.createRef();
        _this.refChild = React.createRef();
        // Initial state for filter
        _this.state = {
            isOpen: false,
            transformVal: "translateX(0px) translateY(0px)",
        };
        _this.getFilterValue = function () {
            return _this.filterValue;
        };
        _this.updateFilter = function (value) {
            var _a = _this.props, columnName = _a.columnName, datagridRef = _a.datagridRef, onFilter = _a.onFilter;
            datagridRef.current.showLoader();
            // get latest data from grid
            var rows = datagridRef.current.getAllRows();
            if (onFilter && datagridRef) {
                _this.filterValue = value;
                onFilter(rows, value, columnName).then(function (data) {
                    // Update datagrid rows
                    var rows = data.rows, totalItems = data.totalItems;
                    datagridRef.current.updateRows(rows, totalItems);
                    datagridRef.current.hideLoader();
                });
            }
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
        _this.filterValue = undefined;
        return _this;
    }
    DataGridFilter.prototype.componentWillMount = function () {
        window.addEventListener("resize", this.resize, true);
    };
    DataGridFilter.prototype.componentWillUnmount = function () {
        window.removeEventListener("resize", this.resize, true);
    };
    DataGridFilter.prototype.componentDidUpdate = function () {
        var isOpen = this.state.isOpen;
        if (isOpen) {
            // Calculate left and top for filter box
            var filterBoxTop = this.refParent.current.getClientRects()[0].top + 15;
            var filterBoxLeft = this.refParent.current.getClientRects()[0].left -
                this.refChild.current.getClientRects()[0].width +
                20;
            var transformVal = "translateX(" + filterBoxLeft + "px) " + "translateY(" + filterBoxTop + "px)";
            this.setState({ transformVal: transformVal });
        }
    };
    DataGridFilter.prototype.toggle = function () {
        this.setState(function (prevState) { return ({
            isOpen: !prevState.isOpen,
        }); }, this.afterToggle);
    };
    // Function to render filter box
    DataGridFilter.prototype.openFilter = function () {
        var _this = this;
        var filterValue = this.filterValue;
        var transformVal = this.state.transformVal;
        var _a = this.props, style = _a.style, className = _a.className, filterType = _a.filterType, customFilter = _a.customFilter, placeholder = _a.placeholder, columnName = _a.columnName;
        return (React.createElement("div", null,
            React.createElement("span", { className: ClassNames_1.ClassNames.OFFSCREEN_FOCUS_REBOUNDER }),
            React.createElement("span", { className: ClassNames_1.ClassNames.OFFSCREEN_FOCUS_REBOUNDER }),
            React.createElement("span", { className: ClassNames_1.ClassNames.OFFSCREEN_FOCUS_REBOUNDER }),
            React.createElement("span", { className: ClassNames_1.ClassNames.OFFSCREEN_FOCUS_REBOUNDER }),
            React.createElement("div", { ref: this.refChild, className: utils_1.classNames([ClassNames_1.ClassNames.DATARID_FILTER, ClassNames_1.ClassNames.CLR_POPOVER_CONTENT, className]), style: __assign({ top: 0, bottom: "auto", right: "auto", height: "90px", left: 0, transform: transformVal }, style) },
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_FILTER_WRAPPER },
                    React.createElement(button_1.Button, { className: ClassNames_1.ClassNames.DATAGRID_FILTER_POPUP_CLOSE, defaultBtn: false, onClick: this.handleButtonClick, icon: {
                            shape: "close",
                        } })),
                filterType === FilterType.STR ? (React.createElement("input", { className: ClassNames_1.ClassNames.CLR_INPUT, type: "search", name: "name-" + columnName, placeholder: placeholder, defaultValue: filterValue, onChange: function (evt) {
                        _this.updateFilter(evt.target.value);
                    } })) : (filterType === FilterType.CUSTOM && customFilter && customFilter)),
            React.createElement("span", { className: ClassNames_1.ClassNames.OFFSCREEN_FOCUS_REBOUNDER })));
    };
    DataGridFilter.prototype.render = function () {
        var isOpen = this.state.isOpen;
        var filterValue = this.filterValue;
        var FilterBtnClasses = utils_1.classNames([
            ClassNames_1.ClassNames.DATAGRID_FILTER_BUTTON,
            filterValue && ClassNames_1.ClassNames.DATAGRID_FILTERED,
        ]);
        return (React.createElement("div", { ref: this.refParent, className: utils_1.classNames([ClassNames_1.ClassNames.CLR_FILTER]), style: { position: "relative" } },
            React.createElement(button_1.Button, { defaultBtn: false, key: "filterBtn", className: FilterBtnClasses, onClick: this.handleButtonClick, icon: {
                    shape: filterValue ? "filter-grid-circle" : "filter-grid",
                    className: ClassNames_1.ClassNames.ICON_SOLID,
                } }),
            isOpen && this.openFilter()));
    };
    DataGridFilter.defaultProps = {
        filterType: FilterType.STR,
        className: "",
        style: {},
        customFilter: null,
    };
    return DataGridFilter;
}(React.PureComponent));
exports.DataGridFilter = DataGridFilter;
