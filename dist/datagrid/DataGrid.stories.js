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
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var storybook_state_1 = require("@sambego/storybook-state");
var _1 = require(".");
var DataGridValues_1 = require("./DataGridValues");
var CustomFilter_1 = require("./CustomFilter");
var store = new storybook_state_1.Store({
    selectedRows: DataGridValues_1.selectedRows,
    rows: DataGridValues_1.paginationRows.slice(0, 5),
    selectRowCallback: function (row) {
        var rowID = row && row.rowData[0].cellData;
        var index = DataGridValues_1.selectedRows.indexOf(rowID);
        if (row && row.isSelected) {
            // add element
            DataGridValues_1.selectedRows.push(rowID);
        }
        else {
            //remove element
            DataGridValues_1.selectedRows.splice(index, 1);
        }
        store.set({
            selectedRows: DataGridValues_1.selectedRows,
        });
    },
    selectAllCallback: function (allSelected) {
        var selectedRows;
        if (allSelected) {
            selectedRows = [41512, 16166, 30574, 2459, 14262];
        }
        store.set({
            selectedRows: allSelected ? selectedRows : [],
        });
    },
});
// Refrence to call dataGrid methods
var datagridRef = React.createRef();
var datagridActionsRef = React.createRef();
var datagridFilterRef = React.createRef();
var datagridFilterSortRef = React.createRef();
var datagridCustomFilterRef = React.createRef();
var datagridFullDemoRef = React.createRef();
var filterRef = React.createRef();
react_1.storiesOf("DataGrid", module)
    .add("Basic grid", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with custom cells and footer", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.customRows, footer: DataGridValues_1.customFooter }))); })
    .add("Grid with multi select option and no footer", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.normalRows, selectionType: _1.GridSelectionType.MULTI, footer: DataGridValues_1.noFooter }))); })
    .add("Grid with single select option", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.normalRows, selectionType: _1.GridSelectionType.SINGLE, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with batch action", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(DataGridValues_1.GridActions, { ref: datagridActionsRef }),
    React.createElement(_1.DataGrid, { ref: datagridRef, columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.normalRows, selectionType: _1.GridSelectionType.MULTI, onRowSelect: function () {
            var rows = datagridRef.current.getSelectedRows();
            datagridActionsRef.current.updateActions(rows);
        }, onSelectAll: function () {
            var rows = datagridRef.current.getSelectedRows();
            datagridActionsRef.current.updateActions(rows);
        }, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with sorting", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.sortColumns, rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with filter", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { ref: datagridFilterRef, columns: [
            {
                columnName: "User ID",
                style: { width: "96px" },
                filter: (React.createElement(_1.DataGridFilter, { placeholder: "Enter user ID", onFilter: DataGridValues_1.filterFunction, columnName: "User ID", datagridRef: datagridFilterRef })),
            },
            {
                columnName: "Name",
                style: { width: "96px" },
                filter: (React.createElement(_1.DataGridFilter, { onFilter: DataGridValues_1.filterFunction, columnName: "Name", datagridRef: datagridFilterRef })),
            },
            { columnName: "Creation Date", style: { width: "96px" } },
            { columnName: "Favorite color", style: { width: "96px" } },
        ], rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with sorting and filter", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { ref: datagridFilterSortRef, columns: [
            {
                columnName: "User ID",
                style: { width: "96px" },
                sort: { defaultSortOrder: _1.SortOrder.ASC, sortFunction: DataGridValues_1.sortFunction },
                filter: (React.createElement(_1.DataGridFilter, { onFilter: DataGridValues_1.filterFunction, columnName: "User ID", datagridRef: datagridFilterSortRef })),
            },
            {
                columnName: "Name",
                style: { width: "96px" },
                sort: { defaultSortOrder: _1.SortOrder.NONE, sortFunction: DataGridValues_1.sortFunction },
                filter: (React.createElement(_1.DataGridFilter, { onFilter: DataGridValues_1.filterFunction, columnName: "Name", datagridRef: datagridFilterSortRef })),
            },
            { columnName: "Creation Date", style: { width: "96px" } },
            { columnName: "Favorite color", style: { width: "96px" } },
        ], rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter, selectionType: _1.GridSelectionType.MULTI }))); })
    .add("Grid with Custom filter", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { ref: datagridCustomFilterRef, columns: [
            {
                columnName: "User ID",
                style: { width: "96px" },
            },
            {
                columnName: "Name",
                style: { width: "96px" },
                filter: (React.createElement(_1.DataGridFilter, { ref: filterRef, onFilter: DataGridValues_1.filterFunction, columnName: "Name", datagridRef: datagridCustomFilterRef, filterType: _1.FilterType.CUSTOM, customFilter: React.createElement(CustomFilter_1.CustomFilter, { datagridFilterRef: filterRef }) })),
            },
            { columnName: "Creation Date", style: { width: "96px" } },
            { columnName: "Favorite color", style: { width: "96px" } },
        ], rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with expandable row", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.expandableRows, footer: DataGridValues_1.defaultFooter, rowType: _1.GridRowType.EXPANDABLE }))); })
    .add("Empty data grid", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, footer: DataGridValues_1.defaultFooter }))); })
    .add("Grid with compact row", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter, rowType: _1.GridRowType.COMPACT }))); })
    .add("Grid with fixed height", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.normalRows, footer: DataGridValues_1.defaultFooter, 
        //Give fixed height here
        style: { height: "185px" } }))); })
    .add("Grid with pagination", function () { return (React.createElement("div", { style: { width: "80%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.paginationRows.slice(0, 5), pagination: DataGridValues_1.paginationDetails, itemText: "Users", footer: { showFooter: true } }))); })
    .add("Grid with pagination and compact footer", function () { return (React.createElement("div", { style: { width: "40%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.paginationRows.slice(0, 5), pagination: DataGridValues_1.paginationDetailsWithCompactFooter, itemText: "Users", footer: { showFooter: true } }))); })
    .add("Grid with HIde and Show Column", function () { return (React.createElement("div", { style: { width: "80%", paddingTop: "5%" } },
    React.createElement(_1.DataGrid, { columns: DataGridValues_1.hideableColumns, rows: DataGridValues_1.normalRows, footer: DataGridValues_1.hideShowColFooter }))); })
    .add("Grid show selected row count", function () { return (React.createElement(storybook_state_1.State, { store: store }, function (state) { return (React.createElement("div", { style: { width: "80%", paddingTop: "5%" } },
    React.createElement(_1.DataGrid, { itemText: "Users", columns: DataGridValues_1.normalColumns, rows: DataGridValues_1.paginationRows.slice(0, 5), pagination: DataGridValues_1.paginationDetails, selectionType: _1.GridSelectionType.MULTI, selectedRowCount: state.selectedRows.length, onRowSelect: state.selectRowCallback, onSelectAll: state.selectAllCallback, footer: { showFooter: true } }))); })); })
    .add("Grid full demo", function () { return (React.createElement("div", { style: { width: "80%", paddingTop: "5%" } },
    React.createElement(_1.DataGrid, { ref: datagridFullDemoRef, itemText: "Users", columns: [
            {
                columnName: "User ID",
                style: { width: "20%" },
                isVisible: false,
                sort: { defaultSortOrder: _1.SortOrder.ASC, sortFunction: DataGridValues_1.sortFunction },
                filter: (React.createElement(_1.DataGridFilter, { onFilter: DataGridValues_1.pageFilterFunction, columnName: "User ID", datagridRef: datagridFullDemoRef })),
            },
            {
                columnName: "Name",
                style: { width: "20%" },
                sort: { defaultSortOrder: _1.SortOrder.NONE, sortFunction: DataGridValues_1.sortFunction },
                filter: (React.createElement(_1.DataGridFilter, { onFilter: DataGridValues_1.pageFilterFunction, columnName: "Name", datagridRef: datagridFullDemoRef })),
            },
            { columnName: "Creation Date", style: { width: "20%" } },
            { columnName: "Favorite color", style: { width: "20%" } },
        ], rows: DataGridValues_1.paginationRows.slice(0, 5), pagination: DataGridValues_1.paginationDetails, selectionType: _1.GridSelectionType.MULTI, footer: DataGridValues_1.hideShowColFooter }))); });
