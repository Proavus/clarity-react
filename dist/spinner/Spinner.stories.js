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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
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
