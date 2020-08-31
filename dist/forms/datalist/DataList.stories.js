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
react_1.storiesOf("DataList", module)
    .add("Basic DataList", function () { return (React.createElement("div", null,
    React.createElement(_1.DataList, null,
        React.createElement(_1.DataListOption, { value: "Item1" }),
        React.createElement(_1.DataListOption, { value: "Item2" }),
        React.createElement(_1.DataListOption, { value: "Item3" })))); })
    .add("With place holder text", function () { return (React.createElement("div", null,
    React.createElement(_1.DataList, { placeHolder: "No label" },
        React.createElement(_1.DataListOption, { value: "Item1" }),
        React.createElement(_1.DataListOption, { value: "Item2" }),
        React.createElement(_1.DataListOption, { value: "Item3" })))); })
    .add("With Error", function () { return (React.createElement("div", null,
    React.createElement(_1.DataList, { placeHolder: "No label", required: true, isError: true, errorText: "This field is reuired" },
        React.createElement(_1.DataListOption, { value: "Item1" }),
        React.createElement(_1.DataListOption, { value: "Item2" }),
        React.createElement(_1.DataListOption, { value: "Item3" })))); })
    .add("With helper text", function () { return (React.createElement("div", null,
    React.createElement(_1.DataList, { placeHolder: "No label", helperText: "Select any option or create one" },
        React.createElement(_1.DataListOption, { value: "Item1" }),
        React.createElement(_1.DataListOption, { value: "Item2" }),
        React.createElement(_1.DataListOption, { value: "Item3" })))); })
    .add("With custom width and label", function () { return (React.createElement("div", null,
    React.createElement(_1.DataList, { placeHolder: "No label", helperText: "Select any option or create one", label: "Select Item", style: { width: "50%" } },
        React.createElement(_1.DataListOption, { value: "Item1" }),
        React.createElement(_1.DataListOption, { value: "Item2" }),
        React.createElement(_1.DataListOption, { value: "Item3" })))); });
