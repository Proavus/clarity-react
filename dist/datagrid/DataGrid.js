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
var ClassNames_1 = require("./ClassNames");
var utils_1 = require("../utils");
var checkbox_1 = require("../forms/checkbox");
var radio_1 = require("../forms/radio");
var button_1 = require("../forms/button");
var icon_1 = require("../icon");
var Spinner_1 = require("../spinner/Spinner");
var HideShowColumns_1 = require("./HideShowColumns");
/**
 * Enum for GridSelectionType :
 * @param {MULTI} for enabling multi row select
 * @param {SINGLE} for enabling single row select
 */
var GridSelectionType;
(function (GridSelectionType) {
    GridSelectionType["MULTI"] = "multi";
    GridSelectionType["SINGLE"] = "single";
})(GridSelectionType = exports.GridSelectionType || (exports.GridSelectionType = {}));
/**
 * Enum for sorting order :
 * @param {DESC} to sort data in descending order
 * @param {ASC} to sort data in ascending order
 * @param {NONE} no sorting
 */
var SortOrder;
(function (SortOrder) {
    SortOrder["DESC"] = "descending";
    SortOrder["ASC"] = "ascending ";
    SortOrder["NONE"] = "none";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
/**
 * Enum for RowTpye :
 * @param {EXPANDABLE} for enabling expandable rows
 * @param {COMPACT} for enabling compact rows
 */
var GridRowType;
(function (GridRowType) {
    GridRowType["EXPANDABLE"] = "expandable";
    GridRowType["COMPACT"] = "compact";
})(GridRowType = exports.GridRowType || (exports.GridRowType = {}));
// Default width to datagrid column
var DEFAULT_COLUMN_WIDTH = "100px";
/**
 * DataGrid Componnet :
 * Displays data in grid format
 */
var DataGrid = /** @class */ (function (_super) {
    __extends(DataGrid, _super);
    function DataGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageIndexRef = React.createRef();
        // Initial state of datagrid
        _this.state = {
            isLoading: true,
            selectAll: false,
            allColumns: _this.props.columns,
            allRows: _this.props.rows !== undefined ? _this.props.rows : [],
            itemText: _this.props.itemText !== undefined ? _this.props.itemText : "items",
            pagination: _this.props.pagination !== undefined
                ? {
                    currentPage: _this.props.pagination.currentPage !== undefined ? _this.props.pagination.currentPage : 1,
                    pageSize: _this.props.pagination.pageSize !== undefined ? _this.props.pagination.pageSize : 10,
                    totalItems: _this.props.pagination.totalItems !== undefined ? _this.props.pagination.totalItems : 0,
                    pageSizes: _this.props.pagination.pageSizes !== undefined ? _this.props.pagination.pageSizes : undefined,
                    firstItem: 0,
                    lastItem: 0,
                    totalPages: 1,
                    compactFooter: _this.props.pagination.compactFooter !== undefined
                        ? _this.props.pagination.compactFooter
                        : false,
                }
                : undefined,
        };
        // Function to return all selected rows
        _this.getSelectedRows = function () {
            var allRows = _this.state.allRows;
            var selectedRows = new Array();
            if (_this.state.selectAll) {
                selectedRows = allRows;
            }
            else {
                selectedRows = allRows.filter(function (row) { return row["isSelected"] === true; });
            }
            return selectedRows;
        };
        // Function to update datagrid rows
        _this.updateRows = function (rows, totalItems) {
            var updatedRows = _this.updateRowIDs(rows);
            var pagination = _this.state.pagination;
            // update pagination footer
            if (pagination && totalItems !== undefined) {
                var pageSize = pagination.pageSize, compactFooter = pagination.compactFooter;
                pagination.totalPages = _this.getTotalPages(totalItems, pageSize);
                // Set current page to 1 if it is greater than total pages
                var currentPage = pagination.currentPage > pagination.totalPages ? 1 : pagination.currentPage;
                var firstItem = _this.getFirstItemIndex(currentPage, pageSize);
                var lastItem = _this.getLastItemIndex(pageSize, totalItems, firstItem);
                pagination.firstItem = firstItem;
                pagination.lastItem = lastItem;
                pagination.currentPage = currentPage;
                pagination.totalItems = totalItems;
                if (_this.pageIndexRef.current) {
                    _this.pageIndexRef.current.value = currentPage.toString();
                }
                pagination.compactFooter = compactFooter !== undefined ? compactFooter : false;
            }
            _this.setState({
                allRows: updatedRows.slice(),
                selectAll: rows.length == 0 ? false : utils_1.allTrueOnKey(updatedRows, "isSelected"),
                pagination: pagination ? pagination : undefined,
            });
        };
        // Function to update datagrid rows
        _this.updateColumns = function (cols) {
            // Update visibility and sorting details of columns
            var columnsWithVisibility = _this.setColumnVisibility(cols);
            var columnsWithSort = _this.setSortingState(columnsWithVisibility);
            var updatedCols = _this.updateColumnIDs(columnsWithSort);
            _this.setState({
                allColumns: updatedCols.slice(),
            });
        };
        // Function to get all rows
        _this.getAllRows = function () {
            return _this.state.allRows;
        };
        /* ############################# Pagination methods start ####################################*/
        _this.getTotalPages = function (totalItems, pageSize) {
            return Math.floor((totalItems + pageSize - 1) / pageSize);
        };
        // Get index of first item in page
        _this.getFirstItemIndex = function (page, pageSize) {
            return page * pageSize - (pageSize - 1);
        };
        // Get index of last item in page
        _this.getLastItemIndex = function (pageSize, totalItems, firstItem) {
            return Math.min(firstItem + pageSize - 1, totalItems);
        };
        // Function to handle change in page sizes
        _this.handleSelectPageSize = function (evt) {
            _this.getPage(_this.state.pagination.currentPage, parseInt(evt.target.value));
        };
        _this.gotoFirstPage = function () {
            var pageSize = _this.state.pagination.pageSize;
            _this.getPage(1, pageSize);
        };
        _this.gotoLastPage = function () {
            var _a = _this.state.pagination, pageSize = _a.pageSize, totalPages = _a.totalPages;
            _this.getPage(totalPages, pageSize);
        };
        _this.gotoNextPage = function () {
            var _a = _this.state.pagination, pageSize = _a.pageSize, currentPage = _a.currentPage, totalPages = _a.totalPages;
            var nextPage = currentPage + 1;
            if (nextPage > totalPages)
                nextPage = totalPages;
            _this.getPage(nextPage, pageSize);
        };
        _this.gotoPreviousPage = function () {
            var _a = _this.state.pagination, pageSize = _a.pageSize, currentPage = _a.currentPage, totalPages = _a.totalPages;
            var previousPage = currentPage - 1;
            if (previousPage < 1)
                previousPage = 1;
            _this.getPage(previousPage, pageSize);
        };
        // Function to handle pageIndex change in input box on blur event
        _this.handlePageChangeOnBlur = function (evt) {
            _this.handlePageChange();
        };
        // Function to handle pageIndex change in input box on Enter ot Tab key press event
        _this.handlePageChangeOnKeyDown = function (evt) {
            // Check for 'Enter' or 'tab' key
            var keyCode = evt.keyCode;
            if (keyCode == 13 || keyCode == 9) {
                _this.handlePageChange();
            }
        };
        // Function to handle pageIndex change in input box
        _this.handlePageChange = function () {
            var _a = _this.state.pagination, pageSize = _a.pageSize, currentPage = _a.currentPage;
            var pageIndex = _this.pageIndexRef.current && parseInt(_this.pageIndexRef.current.value);
            if (pageIndex) {
                if (isNaN(pageIndex)) {
                    _this.pageIndexRef.current.value = currentPage.toString();
                }
                else {
                    _this.getPage(pageIndex, pageSize);
                }
            }
        };
        // Function to handle select/deselect of all rows
        _this.handleSelectAll = function (evt) {
            var rows = _this.state.allRows;
            var value = _this.state.selectAll;
            var onSelectAll = _this.props.onSelectAll;
            rows.forEach(function (row) { return (row["isSelected"] = !value); });
            _this.setState({
                selectAll: !value,
                allRows: rows,
            }, function () { return onSelectAll && onSelectAll(); });
        };
        // Function to handle select/deselect of single row
        _this.handleSelectSingle = function (evt, rowID) {
            var rows = _this.state.allRows;
            var _a = _this.props, onRowSelect = _a.onRowSelect, selectionType = _a.selectionType;
            rows.forEach(function (row) {
                if (row["rowID"] === rowID) {
                    row["isSelected"] = !row["isSelected"];
                }
                else if (selectionType === GridSelectionType.SINGLE) {
                    row["isSelected"] = false;
                }
            });
            _this.setState({
                allRows: rows.slice(),
                selectAll: utils_1.allTrueOnKey(rows, "isSelected"),
            }, function () { return onRowSelect && onRowSelect(); });
        };
        // Function to handle sorting
        _this.handleSort = function (evt, columnName, columnID, sortFunction, defaultSortOrder) {
            _this.showLoader();
            var _a = _this.state, allRows = _a.allRows, allColumns = _a.allColumns;
            if (columnID != undefined) {
                // Set currentlySorted flag for all columns as false
                allColumns.forEach(function (col) {
                    if (col.sort) {
                        col.sort.isSorted = false;
                    }
                });
                var nextSortOrder_1 = defaultSortOrder === SortOrder.NONE || defaultSortOrder === SortOrder.DESC
                    ? SortOrder.ASC
                    : SortOrder.DESC;
                sortFunction(allRows, nextSortOrder_1, columnName).then(function (data) {
                    var rows = _this.updateRowIDs(data);
                    // update sort order
                    allColumns[columnID].sort.defaultSortOrder = nextSortOrder_1;
                    allColumns[columnID].sort.isSorted = true;
                    _this.setState({
                        allRows: rows.slice(),
                        allColumns: allColumns.slice(),
                    });
                    _this.hideLoader();
                });
            }
        };
        return _this;
    }
    DataGrid.prototype.componentWillMount = function () {
        this.setInitalState();
        if (this.props.pagination !== undefined)
            this.setInitalStateForPagination();
    };
    DataGrid.prototype.componentDidMount = function () {
        this.hideLoader();
    };
    DataGrid.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, rows = _a.rows, columns = _a.columns, pagination = _a.pagination;
        if (rows && rows !== prevProps.rows) {
            this.updateRows(rows, pagination && pagination.totalItems);
        }
        if (columns !== prevProps.columns) {
            this.updateColumns(columns);
        }
    };
    // Function to hide loading spinner on datagrid
    DataGrid.prototype.hideLoader = function () {
        this.setState({ isLoading: false });
    };
    // Function to show loading spinner on datagrid
    DataGrid.prototype.showLoader = function () {
        this.setState({ isLoading: true });
    };
    /* ##########  DataGrid private methods start  ############ */
    // Initialize state of grid
    DataGrid.prototype.setInitalState = function () {
        var _a = this.state, allRows = _a.allRows, allColumns = _a.allColumns;
        var rows = this.updateRowIDs(allRows);
        var columns = this.updateColumnIDs(this.setColumnVisibility(allColumns));
        rows.forEach(function (row) {
            row["isSelected"] = false;
            row["isExpanded"] = false;
        });
        this.setState({
            allRows: rows.slice(),
            allColumns: columns.slice(),
        });
    };
    // Initialize state of grid with pagination
    DataGrid.prototype.setInitalStateForPagination = function () {
        var pagination = this.state.pagination;
        if (pagination) {
            var currentPage = pagination.currentPage, pageSize = pagination.pageSize, totalItems = pagination.totalItems, compactFooter = pagination.compactFooter;
            var firstItem = this.getFirstItemIndex(currentPage, pageSize);
            var lastItem = this.getLastItemIndex(pageSize, totalItems, firstItem);
            pagination.totalPages = this.getTotalPages(totalItems, pageSize);
            pagination.firstItem = firstItem;
            pagination.lastItem = lastItem;
            pagination.compactFooter = compactFooter !== undefined ? compactFooter : false;
            this.setState({ pagination: pagination });
        }
    };
    // Function to get page data for given page number
    DataGrid.prototype.getPage = function (pageIndex, pageSize) {
        var _this = this;
        if (this.state.pagination && this.props.pagination) {
            this.showLoader();
            var totalItems = this.state.pagination.totalItems;
            var getPageData = this.props.pagination.getPageData;
            var totalPages = this.state.pagination.pageSize !== pageSize
                ? this.getTotalPages(totalItems, pageSize)
                : this.state.pagination.totalPages;
            // set pageIndex to last page if pageIndex is greater than total pages
            if (pageIndex > totalPages && totalPages) {
                pageIndex = totalPages;
            }
            // set pageIndex to first page if pageIndex is smaller than 1
            if (pageIndex < 1) {
                pageIndex = 1;
            }
            //Set page index in input box
            if (this.pageIndexRef.current) {
                this.pageIndexRef.current.value = pageIndex.toString();
            }
            if (getPageData) {
                var firstItem = this.getFirstItemIndex(pageIndex, pageSize);
                var lastItem = this.getLastItemIndex(pageSize, totalItems, firstItem);
                var paginationState_1 = this.state.pagination;
                if (paginationState_1) {
                    paginationState_1.pageSize =
                        this.state.pagination.pageSize !== pageSize ? pageSize : this.state.pagination.pageSize;
                    paginationState_1.currentPage = pageIndex;
                    paginationState_1.firstItem = firstItem;
                    paginationState_1.lastItem = lastItem;
                    paginationState_1.totalPages = this.getTotalPages(totalItems, pageSize);
                }
                getPageData(pageIndex, pageSize).then(function (data) {
                    var rows = _this.updateRowIDs(data);
                    _this.setState({
                        allRows: rows.slice(),
                        pagination: paginationState_1,
                        selectAll: utils_1.allTrueOnKey(rows, "isSelected"),
                    });
                    _this.hideLoader();
                });
            }
        }
    };
    /* ############################# Pagination methods end ####################################*/
    //toggle collapse of expandable row
    DataGrid.prototype.toggleExpand = function (rowID) {
        var allRows = this.state.allRows;
        allRows.forEach(function (row) {
            if (row["rowID"] === rowID)
                row["isExpanded"] = !row["isExpanded"];
        });
        this.setState({
            allRows: allRows.slice(),
        });
    };
    DataGrid.prototype.updateRowIDs = function (rows) {
        // set rowID = index in array
        rows.map(function (row, index) {
            row["rowID"] = index;
        });
        return rows;
    };
    DataGrid.prototype.updateColumnIDs = function (columns) {
        // set columnID = index in array
        columns.map(function (column, index) {
            column["columnID"] = index;
        });
        return columns;
    };
    DataGrid.prototype.setColumnVisibility = function (columns) {
        columns.map(function (column, index) {
            // if isVisible is not provided in props then set it to true
            column["isVisible"] = column.isVisible !== undefined ? column.isVisible : true;
        });
        return columns;
    };
    // Get width of column
    DataGrid.prototype.getColObject = function (columnName) {
        var allColumns = this.state.allColumns;
        var column = allColumns.find(function (col) { return col.columnName === columnName; });
        return column;
    };
    // Get width of column
    DataGrid.prototype.getColWidth = function (columnName) {
        var column = this.getColObject(columnName);
        return column && column.width ? column.width : DEFAULT_COLUMN_WIDTH;
    };
    // Check if column is visible
    DataGrid.prototype.isColVisible = function (columnName) {
        var column = this.getColObject(columnName);
        return column && column.isVisible;
    };
    // Update sorting state of columns
    DataGrid.prototype.setSortingState = function (columns) {
        var allColumns = this.state.allColumns;
        columns.map(function (column, index) {
            if (column.sort) {
                var col = allColumns.find(function (_a) {
                    var columnName = _a.columnName;
                    return columnName === column.columnName;
                });
                column.sort = col && col.sort;
            }
        });
        return columns;
    };
    /* ##########  DataGrid private methods end  ############ */
    /* ##########  DataGrid DOM methods start  ############ */
    //funtion to render expandable icon cell
    DataGrid.prototype.buildExpandableCell = function (rowID, isExpanded, expandableContent) {
        var _this = this;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_EXPANDABLE_CARET, role: "gridcell", key: rowID }, expandableContent && (React.createElement(button_1.Button, { key: "expand-" + " " + rowID, className: ClassNames_1.ClassNames.DATAGRID_EXPANDABLE_CARET_BUTTON, onClick: function () { return _this.toggleExpand(rowID); }, icon: {
                shape: "caret",
                className: ClassNames_1.ClassNames.DATAGRID_EXPANDABLE_CARET_ICON,
                dir: isExpanded ? icon_1.Direction.DOWN : icon_1.Direction.RIGHT,
            } }))));
    };
    // function to render selectAll column
    DataGrid.prototype.buildSelectColumn = function () {
        var _this = this;
        var selectionType = this.props.selectionType;
        var selectAll = this.state.selectAll;
        return (React.createElement("div", { role: "columnheader", className: utils_1.classNames([
                ClassNames_1.ClassNames.DATAGRID_COLUMN,
                ClassNames_1.ClassNames.DATAGRID_SELECT,
                ClassNames_1.ClassNames.DATAGRID_FIXED_COLUMN,
            ]) },
            React.createElement("span", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_TITLE }, selectionType === GridSelectionType.MULTI && (React.createElement(checkbox_1.CheckBox, { id: "select_all", onChange: function (evt) { return _this.handleSelectAll(evt); }, ariaLabel: "Select All", checked: selectAll !== undefined ? selectAll : undefined }))),
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_SEPARATOR })));
    };
    // Function to render empty column header
    DataGrid.prototype.buildEmptyColumn = function () {
        return (React.createElement("div", { role: "columnheader", className: utils_1.classNames([
                ClassNames_1.ClassNames.DATAGRID_COLUMN,
                ClassNames_1.ClassNames.DATAGRID_SELECT,
                ClassNames_1.ClassNames.DATAGRID_FIXED_COLUMN,
            ]) },
            React.createElement("span", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_TITLE }),
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_SEPARATOR })));
    };
    // function to render select cell
    DataGrid.prototype.buildSelectCell = function (rowID, isSelected) {
        var _this = this;
        var selectionType = this.props.selectionType;
        if (selectionType === GridSelectionType.MULTI) {
            return (React.createElement(checkbox_1.CheckBox, { id: rowID.toString(), ariaLabel: "Select", onChange: function (evt) { return _this.handleSelectSingle(evt, rowID); }, checked: isSelected !== undefined ? isSelected : undefined }));
        }
        return (React.createElement(radio_1.RadioButton, { value: rowID, id: rowID.toString(), onChange: function (evt) { return _this.handleSelectSingle(evt, rowID); }, checked: isSelected !== undefined ? isSelected : undefined }));
    };
    // function to build datagrid body
    DataGrid.prototype.buildDataGridBody = function () {
        var _this = this;
        var allRows = this.state.allRows;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID },
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_TABLE_WRAPPER },
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_TABLE, role: "grid" },
                    this.buildDataGridHeader(),
                    allRows.map(function (row, index) {
                        return _this.buildDataGridRow(row, index);
                    }),
                    this.buildPlaceHolderContainer()))));
    };
    // Function to build placeholder container
    DataGrid.prototype.buildPlaceHolderContainer = function () {
        var allRows = this.state.allRows;
        return (React.createElement("div", { className: utils_1.classNames([
                ClassNames_1.ClassNames.DATAGRID_PLACEHOLDER_CONTAINER,
                ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED,
            ]) },
            React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.DATAGRID_PLACEHOLDER,
                    allRows.length === 0 && ClassNames_1.ClassNames.DATAGRID_EMPTY,
                ]) }, allRows.length === 0 && this.buildEmptyPlaceholder())));
    };
    // Function to create placeholder for empty datagrid
    DataGrid.prototype.buildEmptyPlaceholder = function () {
        var itemText = this.state.itemText;
        var placeholderText = "We couldn't find any " + itemText + " !";
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_PLACEHOLDER_IMG, ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED]) }),
            placeholderText));
    };
    // Function to build datagrid header
    DataGrid.prototype.buildDataGridHeader = function () {
        var _this = this;
        var _a = this.props, selectionType = _a.selectionType, rowType = _a.rowType;
        var allColumns = this.state.allColumns;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_HEADER, role: "rowgroup" },
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW, role: "row" },
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW_MASTER },
                    React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW_STICKY }),
                    React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW_SCROLLABLE },
                        selectionType && this.buildSelectColumn(),
                        rowType && rowType === GridRowType.EXPANDABLE && this.buildEmptyColumn(),
                        allColumns &&
                            allColumns.map(function (column, index) {
                                return column.isVisible ? _this.buildDataGridColumn(column, index) : undefined;
                            }))))));
    };
    // Function to build datagrid colums
    DataGrid.prototype.buildDataGridColumn = function (column, index) {
        var _this = this;
        var columnName = column.columnName, columnID = column.columnID, className = column.className, style = column.style, sort = column.sort, filter = column.filter, width = column.width;
        return (React.createElement("div", { role: "columnheader", className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_COLUMN, className]), "aria-sort": "none", style: __assign({}, style, { width: width ? width : DEFAULT_COLUMN_WIDTH }), key: "col-" + index },
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_FLEX },
                sort != undefined ? (React.createElement(button_1.Button, { key: "sort", defaultBtn: false, className: utils_1.classNames([
                        ClassNames_1.ClassNames.DATAGRID_COLUMN_TITLE,
                        ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED,
                    ]), onClick: function (evt) {
                        return _this.handleSort(evt, columnName, columnID, sort.sortFunction, sort.defaultSortOrder);
                    } },
                    columnName,
                    sort.isSorted && sort.defaultSortOrder !== SortOrder.NONE && (React.createElement(icon_1.Icon, { shape: sort.defaultSortOrder == SortOrder.DESC ? "arrow down" : "arrow up", className: utils_1.classNames([
                            ClassNames_1.ClassNames.DATAGRID_SORT_ICON,
                            ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED,
                        ]) })))) : (React.createElement("span", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_TITLE }, columnName)),
                filter && filter,
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_SEPARATOR },
                    React.createElement("div", { "aria-hidden": "true", className: ClassNames_1.ClassNames.DATAGRID_COLUMN_HANDLE }),
                    React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_COLUMN_RESIZE })))));
    };
    // function to build datagrid rows
    DataGrid.prototype.buildDataGridRow = function (row, index) {
        var _this = this;
        var _a = this.props, selectionType = _a.selectionType, rowType = _a.rowType;
        var rowID = row.rowID, rowData = row.rowData, className = row.className, style = row.style, isSelected = row.isSelected, isExpanded = row.isExpanded, expandableContent = row.expandableContent;
        var rowStyle = style;
        if (index === 0) {
            rowStyle = __assign({}, style, { borderTop: "none" });
        }
        return (React.createElement("div", { role: "rowgroup", className: utils_1.classNames([
                ClassNames_1.ClassNames.DATAGRID_ROW,
                ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED,
                isSelected && ClassNames_1.ClassNames.DATAGRID_SELECTED,
                className,
            ]), "aria-owns": "clr-dg-row" + index, style: rowStyle, key: "row-" + index },
            React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_ROW_MASTER, ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED]), role: "row", id: "clr-dg-row1" },
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW_STICKY }),
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW_SCROLLABLE },
                    React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_SCROLLING_CELLS },
                        selectionType &&
                            this.buildDataGridCell(this.buildSelectCell(rowID, isSelected), index, "select", utils_1.classNames([
                                ClassNames_1.ClassNames.DATAGRID_SELECT,
                                ClassNames_1.ClassNames.DATAGRID_FIXED_COLUMN,
                            ])),
                        rowType &&
                            rowType === GridRowType.EXPANDABLE &&
                            this.buildExpandableCell(rowID, isExpanded, expandableContent),
                        rowData &&
                            rowData.map(function (cell, index) {
                                return _this.buildDataGridCell(cell.cellData, index, cell.columnName, cell.className, cell.style);
                            })),
                    rowType && rowType === GridRowType.EXPANDABLE && expandableContent && isExpanded && (React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_ROW_FLEX },
                        React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_EXPANDABLE_CARET }),
                        expandableContent))))));
    };
    // function to build datagrid cell
    DataGrid.prototype.buildDataGridCell = function (cellData, index, columnName, className, style) {
        var width = this.getColWidth(columnName);
        var isColVisible = this.isColVisible(columnName);
        return (React.createElement("div", { role: "gridcell", key: "cell-" + index, className: utils_1.classNames([
                ClassNames_1.ClassNames.DATAGRID_CELL,
                ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED,
                isColVisible !== undefined && !isColVisible && ClassNames_1.ClassNames.DATAGRID_HIDDEN_COLUMN,
                className,
            ]), style: __assign({}, style, { width: width }) }, cellData));
    };
    // Function to build pageSizes select
    DataGrid.prototype.buildPageSizesSelect = function () {
        var _this = this;
        var _a = this.state.pagination, pageSizes = _a.pageSizes, pageSize = _a.pageSize;
        var itemText = this.state.itemText;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.PAGINATION_SIZE },
            React.createElement("div", { "_ngcontent-clarity-c8": "" }, " " + itemText + "  " + " per page" + " ",
                React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.CLR_SELECT_WRAPPER]) },
                    React.createElement("select", { className: utils_1.classNames([ClassNames_1.ClassNames.CLR_PAGE_SIZE_SELECT]), onChange: function (evt) { return _this.handleSelectPageSize(evt); } }, pageSizes.map(function (size, index) {
                        var selected = size === pageSize ? true : false;
                        return (React.createElement("option", { key: index, value: size, selected: selected }, size));
                    }))))));
    };
    DataGrid.prototype.buildCompactPageButtons = function () {
        var _a = this.state.pagination, currentPage = _a.currentPage, totalPages = _a.totalPages;
        return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.PAGINATION_LIST]) },
            React.createElement(button_1.Button, { key: "left-compact", className: ClassNames_1.ClassNames.PAGINATION_PREVIOUS, icon: { shape: "angle left" }, disabled: currentPage == 1 ? true : false, onClick: this.gotoPreviousPage }),
            React.createElement("span", null, currentPage),
            React.createElement(button_1.Button, { key: "right-compact", className: ClassNames_1.ClassNames.PAGINATION_NEXT, icon: { shape: "angle right" }, disabled: currentPage === totalPages ? true : false, onClick: this.gotoNextPage })));
    };
    // Function to build Next, previous, last and first page buttons
    DataGrid.prototype.buildPageButtons = function () {
        var _this = this;
        var _a = this.state.pagination, currentPage = _a.currentPage, totalPages = _a.totalPages;
        return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.PAGINATION_LIST]) },
            React.createElement(button_1.Button, { key: "down", className: ClassNames_1.ClassNames.PAGINATION_FIRST, icon: { shape: "step-forward-2 down" }, disabled: currentPage == 1 ? true : false, onClick: this.gotoFirstPage }),
            React.createElement(button_1.Button, { key: "left", className: ClassNames_1.ClassNames.PAGINATION_PREVIOUS, icon: { shape: "angle left" }, disabled: currentPage == 1 ? true : false, onClick: this.gotoPreviousPage }),
            React.createElement("input", { className: ClassNames_1.ClassNames.PAGINATION_CURRENT, size: 2, defaultValue: currentPage.toString(), type: "text", ref: this.pageIndexRef, "aria-label": "Current Page", onBlur: function (evt) { return _this.handlePageChangeOnBlur(evt); }, onKeyDown: function (evt) { return _this.handlePageChangeOnKeyDown(evt); } }),
            "\u00A0/\u00A0",
            React.createElement("span", { "aria-label": "Total Pages" }, totalPages),
            React.createElement(button_1.Button, { key: "right", className: ClassNames_1.ClassNames.PAGINATION_NEXT, icon: { shape: "angle right" }, disabled: currentPage === totalPages ? true : false, onClick: this.gotoNextPage }),
            React.createElement(button_1.Button, { key: "up", className: ClassNames_1.ClassNames.PAGINATION_LAST, icon: { shape: "step-forward-2 up" }, disabled: currentPage == totalPages ? true : false, onClick: this.gotoLastPage })));
    };
    // function to build datagrid pagination footer
    DataGrid.prototype.buildDataGridPagination = function () {
        var _a = this.props.pagination, className = _a.className, style = _a.style, compactFooter = _a.compactFooter;
        var itemText = this.state.itemText;
        var _b = this.state.pagination, totalItems = _b.totalItems, firstItem = _b.firstItem, lastItem = _b.lastItem, pageSize = _b.pageSize, pageSizes = _b.pageSizes;
        if (totalItems === 0) {
            firstItem = lastItem = 0;
        }
        var paginationLabel = compactFooter
            ? firstItem + "-" + lastItem + " / " + totalItems
            : firstItem + "-" + lastItem + " of " + totalItems + " " + itemText;
        return (React.createElement("div", { "_ngcontent-clarity-c8": "", style: style, className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_PAGINATION, className]) },
            !compactFooter && pageSizes && totalItems >= pageSize && this.buildPageSizesSelect(),
            compactFooter ? (React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED, style: ClassNames_1.Styles.PAGINATION_DESCRIPTION_COMPACT }, paginationLabel)) : (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.PAGINATION_DESC]) }, paginationLabel)),
            compactFooter ? this.buildCompactPageButtons() : this.buildPageButtons()));
    };
    // function to build Hide and show columns menu
    DataGrid.prototype.buildHideShowColumnsBtn = function () {
        var allColumns = this.state.allColumns;
        return React.createElement(HideShowColumns_1.HideShowColumns, { columns: allColumns, updateColumns: this.updateColumns });
    };
    DataGrid.prototype.buildFooterContent = function () {
        var footer = this.props.footer;
        var _a = this.state, allRows = _a.allRows, itemText = _a.itemText;
        var footerDescription = allRows.length.toString() + " " + itemText;
        var content;
        if (footer !== undefined) {
            content = footer.footerData !== undefined ? footer.footerData : footerDescription;
        }
        return React.createElement("div", null,
            " ",
            content,
            " ");
    };
    // function to build datagrid footer
    DataGrid.prototype.buildDataGridFooter = function () {
        // Need to take this from state in future
        var footer = this.props.footer;
        var pagination = this.state.pagination;
        var renderPaginationFooter = false;
        if (pagination) {
            var totalItems = pagination.totalItems, pageSize = pagination.pageSize;
            if (totalItems && pageSize && totalItems >= pageSize) {
                renderPaginationFooter = true;
            }
        }
        return (React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_FOOTER + " " + (footer && footer.className && footer.className), style: footer && footer.style && footer.style },
            footer && footer.hideShowColBtn && this.buildHideShowColumnsBtn(),
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_FOOTER_DESC }, renderPaginationFooter ? this.buildDataGridPagination() : this.buildFooterContent())));
    };
    DataGrid.prototype.buildDataGridSpinner = function () {
        return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.DATAGRID_SPINNER, ClassNames_1.ClassNames.DATAGRID_NG_STAR_INSERTED]) },
            React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.MEDIUM })));
    };
    // render datagrid
    DataGrid.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, rowType = _a.rowType, footer = _a.footer, dataqa = _a.dataqa;
        var isLoading = this.state.isLoading;
        return (React.createElement("div", { className: utils_1.classNames([
                ClassNames_1.ClassNames.DATAGRID_HOST,
                rowType === GridRowType.COMPACT && ClassNames_1.ClassNames.DATAGRID_COMPACT,
                className,
            ]), style: style, "data-qa": dataqa },
            React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_OUTER_WRAPPER },
                React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_INNER_WRAPPER },
                    this.buildDataGridBody(),
                    footer && footer.showFooter && this.buildDataGridFooter(),
                    React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_CAL_TABLE },
                        React.createElement("div", { className: ClassNames_1.ClassNames.DATAGRID_CAL_HEADER })),
                    isLoading && this.buildDataGridSpinner()))));
    };
    return DataGrid;
}(React.PureComponent));
exports.DataGrid = DataGrid;
