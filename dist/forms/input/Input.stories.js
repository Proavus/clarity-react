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
var addon_actions_1 = require("@storybook/addon-actions");
var Input_1 = require("./Input");
var icon_1 = require("../../icon");
react_1.storiesOf("Input", module)
    .add("a simple input box", function () { return React.createElement(Input_1.Input, { name: "somevalue", onChange: addon_actions_1.action("changed") }); })
    .add("a simple input box with value", function () { return React.createElement(Input_1.Input, { name: "somevalue", value: "Apple", onChange: addon_actions_1.action("changed") }); })
    .add("with a label", function () { return React.createElement(Input_1.Input, { name: "somevalue", label: "somevalue", onChange: addon_actions_1.action("changed") }); })
    .add("with placeholder text", function () { return (React.createElement(Input_1.Input, { name: "somevalue", placeholder: "stuff goes here", onChange: addon_actions_1.action("changed") })); })
    .add("with helper text", function () { return (React.createElement("div", null,
    React.createElement(Input_1.Input, { name: "somevalue", helperText: "this should help you figure it out", onChange: addon_actions_1.action("changed") }),
    React.createElement("br", null),
    " ",
    React.createElement("br", null),
    React.createElement(Input_1.Input, { name: "somevalue", isBoxed: true, helperText: "this should help you figure it out", onChange: addon_actions_1.action("changed") }))); })
    .add("when disabled", function () { return React.createElement(Input_1.Input, { name: "somevalue", disabled: true, onChange: addon_actions_1.action("changed") }); })
    .add("input box with icon", function () { return (React.createElement(Input_1.Input, { name: "somevalue", onChange: addon_actions_1.action("changed"), placeholder: "Type to search ..." },
    React.createElement(icon_1.Icon, { shape: "search", style: { marginLeft: "-20px", width: "16px", height: "16px" } }))); })
    .add("input with number", function () { return (React.createElement(Input_1.Input, { name: "somevalue", type: "number", min: 1, max: 10, onChange: addon_actions_1.action("changed"), defaultValue: 1 })); })
    .add("input box with custom width", function () { return (React.createElement("div", null,
    React.createElement(Input_1.Input, { name: "somevalue", placeholder: "stuff goes here", onChange: addon_actions_1.action("changed"), style: { width: "40%" } }),
    React.createElement("br", null),
    React.createElement(Input_1.Input, { name: "somevalue", isBoxed: true, placeholder: "stuff goes here", onChange: addon_actions_1.action("changed"), style: { width: "40%" } }),
    React.createElement("br", null),
    React.createElement(Input_1.Input, { name: "somevalue", onChange: addon_actions_1.action("changed"), placeholder: "Type to search ...", style: { width: "40%" } },
        React.createElement(icon_1.Icon, { shape: "search", style: { marginLeft: "-20px", width: "16px", height: "16px" } })))); })
    .add("input box with error", function () { return (React.createElement("div", null,
    React.createElement(Input_1.Input, { name: "somevalue", placeholder: "stuff goes here", style: { width: "20%" }, error: true, onBlur: addon_actions_1.action("select with error - blur"), onChange: addon_actions_1.action("select with error - change"), errorHelperText: "This field is required" }),
    React.createElement("br", null),
    " ",
    React.createElement("br", null),
    React.createElement(Input_1.Input, { name: "somevalue", isBoxed: true, error: true, errorHelperText: "This field is required", onBlur: addon_actions_1.action("select with error - blur"), onChange: addon_actions_1.action("select with error - change") }),
    React.createElement("br", null),
    React.createElement(Input_1.Input, { name: "somevalue", error: true, onBlur: addon_actions_1.action("select with error - blur"), onChange: addon_actions_1.action("select with error - change"), helperText: "Provide search value" },
        React.createElement(icon_1.Icon, { shape: "search", style: { marginLeft: "-20px", width: "16px", height: "16px" } })))); });
