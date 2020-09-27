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
react_1.storiesOf("Textarea", module)
    .add("Basic textarea", function () { return (React.createElement("div", null,
    React.createElement(_1.TextArea, { name: "basic-textarea" }))); })
    .add("Textarea with label", function () { return (React.createElement("div", null,
    React.createElement(_1.TextArea, { name: "basic-textarea", label: "Description" }))); })
    .add("Textarea with placeholder", function () { return (React.createElement("div", null,
    React.createElement(_1.TextArea, { name: "basic-textarea", placeholder: "Enter here" }))); })
    .add("Textarea with helper Text", function () { return (React.createElement("div", null,
    React.createElement(_1.TextArea, { name: "basic-textarea", label: "With helper text", helperText: "Helper Text" }))); })
    .add("Textarea with error", function () { return (React.createElement("div", null,
    React.createElement(_1.TextArea, { name: "basic-textarea", label: "TextArea with error", errorHelperText: "This field is required", error: true }))); })
    .add("Textarea with rows and cols", function () { return (React.createElement("div", null,
    React.createElement(_1.TextArea, { name: "basic-textarea", label: "TextArea with rows as 5 and cols as 50", rows: 5, cols: 50 }))); });
