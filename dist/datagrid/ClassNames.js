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
Object.defineProperty(exports, "__esModule", { value: true });
var ClassNames = /** @class */ (function () {
    function ClassNames() {
    }
    ClassNames.DATAGRID = "datagrid";
    ClassNames.DATAGRID_TABLE_WRAPPER = "datagrid-table-wrapper";
    ClassNames.DATAGRID_TABLE = "datagrid-table";
    ClassNames.DATAGRID_HEADER = "datagrid-header";
    ClassNames.DATAGRID_ROW = "datagrid-row";
    ClassNames.DATAGRID_ROW_MASTER = "datagrid-row-master datagrid-row-flex";
    ClassNames.DATAGRID_ROW_STICKY = "datagrid-row-sticky";
    ClassNames.DATAGRID_ROW_SCROLLABLE = "datagrid-row-scrollable";
    ClassNames.DATAGRID_SELECT = "datagrid-select";
    ClassNames.DATAGRID_COLUMN = "datagrid-column";
    ClassNames.DATAGRID_COLUMN_FLEX = "datagrid-column-flex";
    ClassNames.DATAGRID_COLUMN_TITLE = "datagrid-column-title";
    ClassNames.DATAGRID_COLUMN_SEPARATOR = "datagrid-column-separator";
    ClassNames.DATAGRID_COLUMN_HANDLE = "datagrid-column-handle drag-handle draggable";
    ClassNames.DATAGRID_COLUMN_RESIZE = "datagrid-column-resize-tracker";
    ClassNames.DATAGRID_PLACEHOLDER_CONTAINER = "datagrid-placeholder-container";
    ClassNames.DATAGRID_PLACEHOLDER = "datagrid-placeholder";
    ClassNames.DATAGRID_SCROLLING_CELLS = "datagrid-scrolling-cells";
    ClassNames.DATAGRID_CELL = "datagrid-cell";
    ClassNames.DATAGRID_FOOTER = "datagrid-footer";
    ClassNames.DATAGRID_FOOTER_DESC = "datagrid-footer-description";
    ClassNames.DATAGRID_FIXED_COLUMN = "datagrid-fixed-column";
    ClassNames.DATAGRID_HOST = "datagrid-host";
    ClassNames.DATAGRID_CAL_TABLE = "datagrid-calculation-table";
    ClassNames.DATAGRID_CAL_HEADER = "datagrid-calculation-header";
    ClassNames.DATAGRID_ACTION_BAR = "datagrid-action-bar";
    ClassNames.DATAGRID_SELECTED = "datagrid-selected";
    ClassNames.DATAGRID_NG_STAR_INSERTED = "ng-star-inserted";
    ClassNames.DATAGRID_SORT_ICON = "sort-icon";
    ClassNames.CLR_FILTER = "clr-dg-filter";
    ClassNames.CLR_POPOVER_CONTENT = "clr-popover-content";
    ClassNames.DATARID_FILTER = "datagrid-filter";
    ClassNames.DATAGRID_FILTER_BUTTON = "datagrid-filter-toggle clr-anchor clr-smart-open-close";
    ClassNames.DATAGRID_FILTER_INPUT = "clr-input ng-pristine ng-valid ng-touched";
    ClassNames.DATAGRID_FILTER_WRAPPER = "data-grid-filter-close-wrapper";
    ClassNames.DATAGRID_FILTER_POPUP_CLOSE = "close clr-smart-close-button";
    ClassNames.DATAGRID_ROW_FLEX = "datagrid-row-flex datagrid-row-detail datagrid-container ng-star-inserted";
    ClassNames.DATAGRID_EXPANDABLE_CARET = "datagrid-expandable-caret datagrid-fixed-column datagrid-cell ng-star-inserted";
    ClassNames.DATAGRID_EXPANDABLE_CARET_BUTTON = "datagrid-expandable-caret-button ng-star-inserted";
    ClassNames.DATAGRID_EXPANDABLE_CARET_ICON = "datagrid-expandable-caret-icon";
    ClassNames.DATAGRID_EMPTY = "datagrid-empty";
    ClassNames.DATAGRID_PLACEHOLDER_IMG = "datagrid-placeholder-image";
    ClassNames.ICON_SOLID = "is-solid";
    ClassNames.OFFSCREEN_FOCUS_REBOUNDER = "offscreen-focus-rebounder";
    ClassNames.CLR_INPUT = "clr-input ng-pristine ng-valid ng-touched";
    ClassNames.DATAGRID_FILTERED = "datagrid-filtered datagrid-filter-open";
    ClassNames.DATAGRID_COMPACT = "datagrid-compact datagrid-host";
    ClassNames.DATAGRID_PAGINATION = "pagination";
    ClassNames.CLR_SELECT_WRAPPER = "clr-select-wrapper";
    ClassNames.CLR_PAGE_SIZE_SELECT = "clr-page-size-select ng-untouched ng-pristine ng-valid";
    ClassNames.PAGINATION_DESC = "pagination-description";
    ClassNames.PAGINATION_LIST = "pagination-list";
    ClassNames.PAGINATION_FIRST = "pagination-first";
    ClassNames.PAGINATION_PREVIOUS = "pagination-previous";
    ClassNames.PAGINATION_CURRENT = "pagination-current";
    ClassNames.PAGINATION_NEXT = "pagination-next";
    ClassNames.PAGINATION_LAST = "pagination-last";
    ClassNames.PAGINATION_SIZE = "pagination-size";
    ClassNames.COLUMN_SWITCH_WRAPPER = "column-switch-wrapper";
    ClassNames.COLUMN_TOGGLE = "btn btn-sm btn-link column-toggle--action clr-anchor clr-smart-open-close";
    ClassNames.SWITCH_BUTTON = "btn btn-sm btn-link switch-button";
    ClassNames.SWITCH_FOOTER = "switch-footer";
    ClassNames.DATAGRID_HIDDEN_COLUMN = "datagrid-hidden-column";
    ClassNames.COLUMN_SWITCH = "column-switch";
    ClassNames.SWITCH_HEADER = "switch-header";
    ClassNames.CLR_CHECKBOX_WRAPPER = "clr-checkbox-wrapper";
    ClassNames.SWITCH_CONTENT = "switch-content list-unstyled";
    ClassNames.DATAGRID_SPINNER = "datagrid-spinner";
    ClassNames.DATAGRID_OUTER_WRAPPER = "datagrid-outer-wrapper";
    ClassNames.DATAGRID_INNER_WRAPPER = "datagrid-inner-wrapper";
    return ClassNames;
}());
exports.ClassNames = ClassNames;
var Styles = /** @class */ (function () {
    function Styles() {
    }
    Styles.PAGINATION_DESCRIPTION_COMPACT = {
        textAlign: "left",
        webkitBoxFlex: 1,
        flex: 1,
    };
    return Styles;
}());
exports.Styles = Styles;
