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
var icon_1 = require("../icon");
var button_1 = require("../forms/button");
var _1 = require(".");
/**
 * General file description :
 * Data to render diffrent datagrids in storybook
 */
/**
 * Data for Columns
 */
exports.normalColumns = [
    { columnName: "User ID" },
    { columnName: "Name" },
    { columnName: "Creation Date" },
    { columnName: "Favorite color" },
];
/**
 * Data for Rows
 */
exports.normalRows = [
    {
        rowData: [
            { columnName: "User ID", cellData: 41512 },
            { columnName: "Name", cellData: "Georgia" },
            { columnName: "Creation Date", cellData: "Sep 11, 2008" },
            { columnName: "Favorite color", cellData: "Blue" },
        ],
    },
    {
        rowData: [
            { columnName: "User ID", cellData: 16166 },
            { columnName: "Name", cellData: "Brynn" },
            { columnName: "Creation Date", cellData: "Aug 2, 2014" },
            { columnName: "Favorite color", cellData: "Orange" },
        ],
    },
    {
        rowData: [
            { columnName: "User ID", cellData: 30574 },
            { columnName: "Name", cellData: "Brad" },
            { columnName: "Creation Date", cellData: "Jan 4, 2019" },
            { columnName: "Favorite color", cellData: "Yellow" },
        ],
    },
];
/**
 * Data for Footer
 */
exports.customFooter = {
    footerData: "Total 2 users",
    showFooter: true,
};
exports.defaultFooter = {
    showFooter: true,
};
exports.noFooter = {
    showFooter: false,
};
/**
 * Data for Custom content rendering
 */
exports.customRows = [
    {
        rowData: [
            { columnName: "User ID", cellData: 41512 },
            { columnName: "Name", cellData: "Georgia" },
            { columnName: "Creation Date", cellData: "Sep 11, 2008" },
            {
                columnName: "Favorite color",
                cellData: (React.createElement("div", null,
                    React.createElement(icon_1.Icon, { shape: "time" }),
                    "Critical")),
            },
        ],
    },
    {
        rowData: [
            { columnName: "User ID", cellData: 16166 },
            { columnName: "Name", cellData: "Brynn" },
            { columnName: "Creation Date", cellData: "Aug 2, 2014" },
            {
                columnName: "Favorite color",
                cellData: (React.createElement("div", null,
                    React.createElement(icon_1.Icon, { shape: "time" }),
                    "Critical")),
            },
        ],
    },
];
/**
 * Data for Filtering
 */
function filterRows(rows, columnValue) {
    var newRows = rows.filter(function (row) {
        var matchFound = false;
        for (var index in row.rowData) {
            var content = String(row.rowData[index].cellData);
            if (content.indexOf(columnValue) !== -1) {
                matchFound = true;
            }
        }
        if (matchFound) {
            return row;
        }
    });
    return newRows;
}
//Custom function to filter data
exports.filterFunction = function (rows, columnValue, columnName) {
    return new Promise(function (resolve, reject) {
        var result = {
            rows: [],
            totalItems: 0,
        };
        if (columnValue === "" || columnValue === undefined) {
            result = {
                rows: exports.normalRows,
                totalItems: exports.normalRows.length,
            };
        }
        else {
            var newRows = filterRows(rows, columnValue);
            result = {
                rows: newRows,
                totalItems: newRows.length,
            };
        }
        resolve(result);
    });
};
/**
 * Data for Sorting
 */
// Custom sorting function for number and string type
exports.sortFunction = function (rows, sortOrder, columnName) {
    return new Promise(function (resolve, reject) {
        rows.sort(function (first, second) {
            var result = 0;
            var firstRecord = first.rowData.find(function (element) {
                if (element.columnName === columnName)
                    return element;
            });
            var secondRecord = second.rowData.find(function (element) {
                if (element.columnName === columnName)
                    return element;
            });
            if (firstRecord && secondRecord) {
                var contentType = typeof firstRecord.cellData;
                if (sortOrder === _1.SortOrder.ASC) {
                    if (contentType === "number") {
                        result = firstRecord.cellData - secondRecord.cellData;
                    }
                    else if (contentType === "string") {
                        if (firstRecord.cellData > secondRecord.cellData)
                            result = -1;
                        else if (firstRecord.cellData < secondRecord.cellData)
                            result = 1;
                    }
                }
                else if (sortOrder == _1.SortOrder.DESC) {
                    if (contentType === "number") {
                        result = secondRecord.cellData - firstRecord.cellData;
                    }
                    else if (contentType === "string") {
                        if (secondRecord.cellData > firstRecord.cellData)
                            result = -1;
                        else if (secondRecord.cellData < firstRecord.cellData)
                            result = 1;
                    }
                }
            }
            return result;
        });
        // Purposefully added dealy here to see loading spinner
        setTimeout(function () {
            resolve(rows);
        }, 2000);
    });
};
// Column Data with sort option
exports.sortColumns = [
    {
        columnName: "User ID",
        sort: { defaultSortOrder: _1.SortOrder.ASC, sortFunction: exports.sortFunction },
    },
    {
        columnName: "Name",
        sort: { defaultSortOrder: _1.SortOrder.NONE, sortFunction: exports.sortFunction },
    },
    { columnName: "Creation Date" },
    {
        columnName: "Favorite color",
        sort: { defaultSortOrder: _1.SortOrder.ASC, sortFunction: exports.sortFunction, isSorted: true },
    },
];
var GridActions = /** @class */ (function (_super) {
    __extends(GridActions, _super);
    function GridActions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedRows: [],
            showEdit: false,
        };
        return _this;
    }
    GridActions.prototype.updateActions = function (rows) {
        this.setState({
            selectedRows: rows,
            showEdit: rows.length === 1 ? true : false,
        });
    };
    GridActions.prototype.render = function () {
        var _a = this.state, selectedRows = _a.selectedRows, showEdit = _a.showEdit;
        return (React.createElement("div", null,
            React.createElement(button_1.Button, { key: "new" }, "NEW"),
            React.createElement(button_1.Button, { key: "edit", show: showEdit }, "EDIT"),
            React.createElement(button_1.Button, { key: "delete", onClick: function () {
                    alert("Deleted" + selectedRows.length);
                } }, "DELETE")));
    };
    return GridActions;
}(React.PureComponent));
exports.GridActions = GridActions;
/**
 * Data for Expandable Rows
 */
var expandableContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque in ante placerat mattis id sed quam. Proin rhoncus lacus et tempor dignissim. Vivamus sem quam, pellentesque aliquet suscipit eget, pellentesque sed arcu. Vivamus in dui lectus. Suspendisse cursus est ac nisl imperdiet viverra. Aenean sagittis nibh lacus, in eleifend urna ultrices et. Mauris porttitor nisi nec velit pharetra porttitor. Vestibulum vulputate sollicitudin dolor ut tincidunt. Phasellus vitae blandit felis. Nullam posuere ipsum tincidunt velit pellentesque rhoncus. Morbi faucibus ut ipsum at malesuada. Nam vestibulum felis sit amet metus finibus hendrerit. Fusce faucibus odio eget ex vulputate rhoncus. Fusce nec aliquam leo, at suscipit diam.";
exports.expandableRows = [
    {
        rowData: [
            { columnName: "User ID", cellData: 41512 },
            { columnName: "Name", cellData: "Georgia" },
            { columnName: "Creation Date", cellData: "Sep 11, 2008" },
            { columnName: "Favorite color", cellData: "Blue" },
        ],
        expandableContent: expandableContent,
    },
    {
        rowData: [
            { columnName: "User ID", cellData: 16166 },
            { columnName: "Name", cellData: "Brynn" },
            { columnName: "Creation Date", cellData: "Aug 2, 2014" },
            { columnName: "Favorite color", cellData: "Orange" },
        ],
        expandableContent: expandableContent,
    },
    {
        rowData: [
            { columnName: "User ID", cellData: 30574 },
            { columnName: "Name", cellData: "Brad" },
            { columnName: "Creation Date", cellData: "Jan 4, 2019" },
            { columnName: "Favorite color", cellData: "Yellow" },
        ],
        expandableContent: expandableContent,
    },
    {
        rowData: [
            { columnName: "User ID", cellData: 345574 },
            { columnName: "Name", cellData: "Harry" },
            { columnName: "Creation Date", cellData: "Jan 8, 2009" },
            { columnName: "Favorite color", cellData: "Pink" },
        ],
        expandableContent: null,
    },
];
/**
 * Data for Pagination
 */
function getRowData() {
    var data = [
        [41512, "Georgia", "Sep 11, 2008", "Blue"],
        [16166, "Brynn", "Aug 2, 2014", "Orange"],
        [30574, "Brad", "Jan 4, 2019", "Yellow"],
        [2459, "Beverly", "Mar 2, 2019", "Pink"],
        [14262, "Johnson", "Jun 23, 2019", "Blue"],
        [59729, "Sibyl", "Feb 27, 2016", "Red"],
        [92422, "Roslyn", "Apr 26, 2016", "Blue"],
        [83943, "Lottie", "Mar 2, 2019", "Yellow"],
        [83943, "Lottie", "Mar 2, 2019", "Yellow"],
        [83943, "Lottie", "Mar 2, 2019", "Yellow"],
    ];
    var rowValues = [];
    data.forEach(function (element) {
        var row = {
            rowData: [
                {
                    columnName: "User ID",
                    cellData: element[0],
                },
                {
                    columnName: "Name",
                    cellData: element[1],
                },
                {
                    columnName: "Creation Date",
                    cellData: element[2],
                },
                {
                    columnName: "Favorite color",
                    cellData: element[3],
                },
            ],
        };
        rowValues.push(row);
    });
    return rowValues;
}
exports.getRowData = getRowData;
exports.paginationRows = getRowData();
// Function to get data for page based on pagenumber
exports.getPageData = function (pageIndex, pageSize) {
    return new Promise(function (resolve, reject) {
        var rows = [];
        if (pageSize == 5) {
            if (pageIndex == 2) {
                rows = exports.paginationRows.slice(5, 10);
            }
            if (pageIndex == 1) {
                rows = exports.paginationRows.slice(0, 5);
            }
        }
        else if (pageSize == 10) {
            rows = exports.paginationRows;
        }
        // Purposefully added dealy here to see loading spinner
        setTimeout(function () {
            resolve(rows);
        }, 2000);
    });
};
exports.paginationDetails = {
    totalItems: exports.paginationRows.length,
    getPageData: exports.getPageData,
    pageSize: 5,
    pageSizes: [5, 10],
};
exports.paginationDetailsWithCompactFooter = {
    totalItems: exports.paginationRows.length,
    getPageData: exports.getPageData,
    pageSize: 5,
    pageSizes: [5, 10],
    compactFooter: true,
};
exports.pageFilterFunction = function (rows, columnValue, columnName) {
    return new Promise(function (resolve, reject) {
        var result = {
            rows: [],
            totalItems: 0,
        };
        if (columnValue === "" || columnValue === undefined) {
            result = {
                rows: exports.paginationRows.slice(0, 5),
                totalItems: exports.paginationRows.length,
            };
        }
        else {
            var newRows = filterRows(rows, columnValue);
            result = {
                rows: newRows,
                totalItems: newRows.length,
            };
        }
        // Purposefully added dealy here to see loading spinner
        setTimeout(function () {
            resolve(result);
        }, 2000);
    });
};
// Data for Hide/show columns
exports.hideableColumns = [
    { columnName: "User ID" },
    { columnName: "Name" },
    { columnName: "Creation Date", isVisible: false },
    { columnName: "Favorite color", isVisible: false },
];
