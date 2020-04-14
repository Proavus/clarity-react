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
var Select_1 = require("./Select");
var addon_actions_1 = require("@storybook/addon-actions");
react_1.storiesOf("Select", module)
    .add("Basic select", function () { return (React.createElement("div", null,
    React.createElement(Select_1.Select, { onChange: addon_actions_1.action("basic change") },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")))); })
    .add("Select with custom width", function () { return (React.createElement("div", null,
    React.createElement(Select_1.Select, { onChange: addon_actions_1.action("basic change"), width: "30%", label: "Basic Select" },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")),
    React.createElement("br", null),
    React.createElement(Select_1.Select, { onChange: addon_actions_1.action("basic change"), width: "50%", isBoxed: true, label: "Boxed Select" },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")))); })
    .add("Labels", function () { return (React.createElement("div", null,
    React.createElement(Select_1.Select, { onChange: addon_actions_1.action("label select - change"), label: "I've got some options" },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")))); })
    .add("Full select display", function () { return (React.createElement("div", null,
    React.createElement(Select_1.Select, { onChange: addon_actions_1.action("full select - change"), defaultHelperText: "You have these choices", errorHelperText: "This field is required!", label: "I've got some options" },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")))); })
    .add("Select with error", function () { return (React.createElement("div", null,
    React.createElement(Select_1.Select, { error: true, width: "30%", onBlur: addon_actions_1.action("select with error and custom width - blur"), onChange: addon_actions_1.action("select with error - change"), defaultHelperText: "You have these choices", errorHelperText: "This field is required!", label: "I've got some options" },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")),
    React.createElement(Select_1.Select, { error: true, onBlur: addon_actions_1.action("select with error - blur"), onChange: addon_actions_1.action("select with error - change"), defaultHelperText: "You have these choices", errorHelperText: "This field is required!", label: "I've got some options" },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")))); })
    .add("Disabled select", function () { return (React.createElement("div", null,
    React.createElement(Select_1.Select, { onChange: addon_actions_1.action("Disabled select - change"), disabled: true },
        React.createElement(Select_1.SelectOption, { value: "1" }, "One"),
        React.createElement(Select_1.SelectOption, { value: "2" }, "Two"),
        React.createElement(Select_1.SelectOption, { value: "3" }, "Three")))); });
