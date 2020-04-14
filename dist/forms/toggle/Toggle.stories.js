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
var Toggle_1 = require("./Toggle");
var common_1 = require("../common");
react_1.storiesOf("Toggle", module)
    .add("Basic toggle switch button", function () { return (React.createElement("div", null,
    React.createElement(Toggle_1.Toggle, null))); })
    .add("Labels", function () { return (React.createElement("div", null,
    React.createElement(Toggle_1.Toggle, { label: "Option 1" }),
    React.createElement(Toggle_1.Toggle, { label: "Option 2" }))); })
    .add("Full input display", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { label: "Full toggle example" },
        React.createElement(Toggle_1.Toggle, { label: "option 1" }),
        React.createElement(Toggle_1.Toggle, { label: "option 2" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Helper Text" })))); })
    .add("Error state", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { label: "Error toggle", error: true },
        React.createElement(Toggle_1.Toggle, { label: "option 1" }),
        React.createElement(Toggle_1.Toggle, { label: "option 2" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Error message" })))); })
    .add("Inline toggle switches", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { label: "Inline toggle example", inline: true },
        React.createElement(Toggle_1.Toggle, { label: "option 1" }),
        React.createElement(Toggle_1.Toggle, { label: "option 2" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Helper text" })))); })
    .add("Disabled toggle switches", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { disabled: true, label: "Disabled toggle example" },
        React.createElement(Toggle_1.Toggle, { label: "option 1" }),
        React.createElement(Toggle_1.Toggle, { label: "option 2" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Helper text" })))); });
