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
var _1 = require(".");
var Table_1 = require("../tables/Table");
react_1.storiesOf("Portlet", module).add("Basic Portlet", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Portlet, { header: "Header- Porlet Component" },
            React.createElement("div", null, "Portlet Component "),
            React.createElement(Table_1.Table, { className: "table" },
                React.createElement("thead", null,
                    React.createElement("th", null, "Decimal"),
                    React.createElement("th", null, "Hexadecimal"),
                    React.createElement("th", null, "Binary"),
                    React.createElement("th", null, "Roman Numeral")),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "1"),
                        React.createElement("td", null, "1"),
                        React.createElement("td", null, "1"),
                        React.createElement("td", null, "I")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "5"),
                        React.createElement("td", null, "5"),
                        React.createElement("td", null, "101"),
                        React.createElement("td", null, "V")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "10"),
                        React.createElement("td", null, "A"),
                        React.createElement("td", null, "1010"),
                        React.createElement("td", null, "X")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "15"),
                        React.createElement("td", null, "F"),
                        React.createElement("td", null, "1111"),
                        React.createElement("td", null, "XV")))))))); });
