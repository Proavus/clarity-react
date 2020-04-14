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
var _1 = require(".");
var _2 = require(".");
var _3 = require("../radio/.");
var _4 = require("../dropdown/.");
react_1.storiesOf("ButtonGroup", module)
    .add("Outline ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { defaultValue: "three", name: "number" },
    React.createElement(_1.Button, { key: "one", onClick: addon_actions_1.action("One click") }, "One"),
    React.createElement(_1.Button, { key: "two", onClick: addon_actions_1.action("Two click") }, "Two"),
    React.createElement(_1.Button, { key: "three", onClick: addon_actions_1.action("Three click") }, "Three"),
    React.createElement(_1.Button, { key: "four", onClick: addon_actions_1.action("Four click") }, "Four"))); })
    .add("Basic Structure ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-primary", name: "Operation" },
    React.createElement(_1.Button, { onClick: addon_actions_1.action("Add click") }, "Add"),
    React.createElement(_1.Button, { onClick: addon_actions_1.action("Edit click") }, "Edit"),
    React.createElement(_1.Button, { onClick: addon_actions_1.action("Download click") }, "Download"),
    React.createElement(_1.Button, { onClick: addon_actions_1.action("Delete click") }, "Delete"))); })
    .add("Overflow ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-primary", name: "Operation" },
    React.createElement(_1.Button, null, "Add"),
    React.createElement(_1.Button, null, "Edit"),
    React.createElement(_4.Dropdown, { button: { icon: { shape: "ellipsis-horizontal" } }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
        React.createElement(_4.DropdownMenu, null,
            React.createElement(_4.DropdownItem, { onClick: addon_actions_1.action("Download"), label: "Download" }),
            React.createElement(_4.DropdownItem, { onClick: addon_actions_1.action("Delete"), label: "Delete" }))))); })
    .add("Primary ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-primary", name: "Operation" },
    React.createElement(_1.Button, null, "Add"),
    React.createElement(_1.Button, null, "Edit"),
    React.createElement(_1.Button, null, "Download"),
    React.createElement(_1.Button, null, "Delete"))); })
    .add("Flat ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-link", name: "Operation" },
    React.createElement(_1.Button, null, "Add"),
    React.createElement(_1.Button, null, "Edit"),
    React.createElement(_1.Button, null, "Download"),
    React.createElement(_1.Button, null, "Delete"))); })
    .add("Small ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-outline-primary btn-sm", name: "Operation" },
    React.createElement(_1.Button, null, "Add"),
    React.createElement(_1.Button, null, "Edit"),
    React.createElement(_1.Button, null, "Download"),
    React.createElement(_1.Button, null, "Delete"))); })
    .add("Mixed ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-primary", name: "Operation" },
    React.createElement(_1.Button, null, "Favorite"),
    React.createElement(_1.Button, { className: "btn btn-success" }, "Add"),
    React.createElement(_1.Button, { className: "btn btn-danger" }, "Delete"))); })
    .add("Icon ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-primary btn-icon", name: "Operation" },
    React.createElement(_1.Button, { icon: { shape: "home" } }),
    React.createElement(_1.Button, { icon: { shape: "cog" } }),
    React.createElement(_4.Dropdown, { showCaret: false, className: "btn-group-overflow", button: { icon: { shape: "ellipsis-horizontal" } }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
        React.createElement(_4.DropdownMenu, null,
            React.createElement(_4.DropdownItem, { onClick: addon_actions_1.action("User"), label: "user" }),
            React.createElement(_4.DropdownItem, { onClick: addon_actions_1.action("Cloud"), label: "cloud" }))))); })
    .add("With Text Icon ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { className: "btn-primary btn-icon", name: "Operation" },
    React.createElement(_1.Button, { icon: { shape: "home" } }, "Home"),
    React.createElement(_1.Button, { icon: { shape: "cog" } }, "Setting"),
    React.createElement(_4.Dropdown, { showCaret: false, className: "btn-group-overflow", button: { icon: { shape: "ellipsis-horizontal" } }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
        React.createElement(_4.DropdownMenu, null,
            React.createElement(_4.DropdownItem, { onClick: addon_actions_1.action("User"), label: "user" }),
            React.createElement(_4.DropdownItem, { onClick: addon_actions_1.action("cloud"), label: "cloud" }))))); })
    .add("Radio ButtonGroup", function () { return (React.createElement(_2.ButtonGroup, { defaultValue: "apples", name: "fruit", onChange: addon_actions_1.action("Changed") },
    React.createElement(_3.RadioButton, { key: "1", value: "apples", label: "apples" }),
    React.createElement(_3.RadioButton, { key: "2", value: "oranges", label: "oranges" }),
    React.createElement(_3.RadioButton, { key: "3", value: "kiwi", label: "kiwi" }),
    React.createElement(_3.RadioButton, { key: "4", value: "pears", label: "pears" }))); });
