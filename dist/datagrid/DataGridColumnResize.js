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
exports.DataGridColumnResize = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
/**
 * General component description :
 * DataGridColumnResize :
 * component to manage dynamic chnages in datagrid width
 */
// Min column width in px
var MIN_COLUMN_WIDTH = 96;
var DataGridColumnResize = /** @class */ (function (_super) {
    __extends(DataGridColumnResize, _super);
    function DataGridColumnResize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Initial state for DataGridColumnResize
        _this.state = {
            startX: 0,
            moveX: 0,
            showTracker: false,
            isLessThanMinWidth: false,
        };
        // Function to calculate new width for datagrid column
        _this.calculateResizedBy = function (clientX) {
            return new Promise(function (resolve, reject) {
                var startX = _this.state.startX;
                var column = _this.props.column;
                var resizedBy = clientX - startX;
                var isLessThanMinWidth = false;
                // calculate new width
                if (column && column.width) {
                    var minWidth = column.width - MIN_COLUMN_WIDTH;
                    var newWidth = column.width + resizedBy;
                    if (minWidth !== undefined && resizedBy < -minWidth) {
                        resizedBy = -minWidth;
                        isLessThanMinWidth = true;
                    }
                    newWidth = column.width + resizedBy;
                    resolve({ resizedBy: resizedBy, isLessThanMinWidth: isLessThanMinWidth, newWidth: newWidth });
                }
            });
        };
        // onDrag event handler
        _this.moveTracker = function (event) {
            _this.calculateResizedBy(event.clientX).then(function (result) {
                _this.setState({
                    moveX: result.resizedBy,
                    isLessThanMinWidth: result.isLessThanMinWidth,
                });
            });
        };
        // Function to show width tracker on drag start
        _this.showTracker = function (event) {
            _this.setState({
                startX: event.clientX,
                moveX: 0,
                showTracker: true,
            });
        };
        // Function to hide width tracker on drag end
        _this.hideTracker = function (event) {
            var _a = _this.props, column = _a.column, updateColumn = _a.updateColumn;
            if (column) {
                _this.calculateResizedBy(event.clientX).then(function (result) {
                    column.width = Math.abs(result.newWidth);
                    column.className = ClassNames_1.ClassNames.STRICT_WIDTH_CLASS;
                    _this.setState({
                        showTracker: false,
                        moveX: 0,
                        startX: 0,
                    }, function () { return updateColumn && updateColumn(column); });
                });
            }
        };
        return _this;
    }
    DataGridColumnResize.prototype.render = function () {
        var _this = this;
        var height = this.props.height;
        var _a = this.state, moveX = _a.moveX, showTracker = _a.showTracker, isLessThanMinWidth = _a.isLessThanMinWidth;
        var transformVal = "translateX(" + moveX + "px)";
        return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_COLUMN_SEPARATOR, ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED]) },
            React.createElement("div", { "aria-hidden": "true", draggable: true, onDragStart: function (evt) { return _this.showTracker(evt); }, onDrag: function (evt) { return _this.moveTracker(evt); }, onDragEndCapture: function (evt) { return _this.hideTracker(evt); }, className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_COLUMN_HANDLE, showTracker && ClassNames_1.ClassNames.BEING_DRAGGED]) }),
            React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.NG_TNS_C81_13,
                    ClassNames_1.ClassNames.DRAGGABLE_GHOST,
                    ClassNames_1.ClassNames.NG_TRIGGER,
                    ClassNames_1.ClassNames.NG_TRIGGER_LEAVE_ANIMATION,
                    ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED,
                ]), style: ClassNames_1.Styles.DRAGGABLE_GHOST },
                React.createElement("div", { "aria-hidden": "true", draggable: true, className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_COLUMN_HANDLE, ClassNames_1.ClassNames.NG_TNS_C81_13]) })),
            React.createElement("span", { className: ClassNames_1.ClassNames.CLR_SR_ONLY }),
            React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.DATAGRID_COLUMN_RESIZE,
                    isLessThanMinWidth && ClassNames_1.ClassNames.DATAGRID_COL_WIDTH_EXCEEDED_MAX,
                ]), style: {
                    display: showTracker ? "block" : "none",
                    height: height ? height + "px" : "auto",
                    transform: transformVal,
                } })));
    };
    return DataGridColumnResize;
}(React.PureComponent));
exports.DataGridColumnResize = DataGridColumnResize;
