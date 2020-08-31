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
var Spinner_1 = require("./Spinner");
react_1.storiesOf("Spinner", module)
    .add("Page spinners", function () { return (React.createElement("div", null,
    React.createElement(Spinner_1.Spinner, null))); })
    .add("Inline spinners", function () { return (React.createElement("div", null,
    React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.INLINE }, "Loading ..."))); })
    .add("Spinners on a dark background", function () { return (React.createElement("div", { style: { background: "#313131" } },
    React.createElement(Spinner_1.Spinner, { type: Spinner_1.SpinnerType.INVERSE }))); })
    .add("Spinner sizes", function () { return (React.createElement("div", null,
    React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.LARGE }),
    React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.MEDIUM }),
    React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.SMALL }))); });
