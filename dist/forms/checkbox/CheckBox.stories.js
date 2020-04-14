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
var _1 = require(".");
var common_1 = require("../common");
react_1.storiesOf("Checkboxes", module)
    .add("Basic checkbox button", function () { return (React.createElement("div", null,
    React.createElement(_1.CheckBox, null))); })
    .add("Labels", function () { return (React.createElement("div", null,
    React.createElement(_1.CheckBox, { label: "Label 1" }),
    React.createElement(_1.CheckBox, { label: "Label 2" }))); })
    .add("Full input display", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { label: "Full checkbox example" },
        React.createElement(_1.CheckBox, { label: "option 1" }),
        React.createElement(_1.CheckBox, { label: "option 2" }),
        React.createElement(_1.CheckBox, { label: "option 3" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Helper Text" })))); })
    .add("Error state", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { label: "Error checkbox", error: true },
        React.createElement(_1.CheckBox, { label: "option 1" }),
        React.createElement(_1.CheckBox, { label: "option 2" }),
        React.createElement(_1.CheckBox, { label: "option 3" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Error message" })))); })
    .add("Inline checkbox", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { label: "Inline checkbox example", inline: true },
        React.createElement(_1.CheckBox, { label: "option 1" }),
        React.createElement(_1.CheckBox, { label: "option 2" }),
        React.createElement(_1.CheckBox, { label: "option 3" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Error message" })))); })
    .add("Disabled checkbox", function () { return (React.createElement("div", null,
    React.createElement(common_1.FormControl, { disabled: true, label: "Inline checkbox example" },
        React.createElement(_1.CheckBox, { label: "option 1" }),
        React.createElement(_1.CheckBox, { label: "option 2" }),
        React.createElement(_1.CheckBox, { label: "option 3" }),
        React.createElement(common_1.SubTextWrapper, { shape: "exclamation-circle", text: "Error message" })))); });
// .add("Indeterminate checkboxes", () => (
//     <div>
//         <FormControl label="Indeterminate checkbox example">
//             <CheckBox label="option 1" defaultChecked="indeterminate" />
//             <SubTextWrapper shape="exclamation-circle" text="Helper text" />
//         </FormControl>
//     </div>
// ));
