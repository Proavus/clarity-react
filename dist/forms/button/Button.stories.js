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
react_1.storiesOf("Button", module)
    .add("Simple buttons", function () { return (React.createElement("div", null,
    React.createElement(_1.Button, { key: "basic", onClick: addon_actions_1.action("basic click") }, "BASIC"),
    React.createElement(_1.Button, { key: "basic-info", state: _1.ButtonState.INFO, onClick: addon_actions_1.action("basic-info click") }, "INFO"),
    React.createElement(_1.Button, { key: "basic-warning", state: _1.ButtonState.WARNING, onClick: addon_actions_1.action("basic-warning click") }, "WARNING"),
    React.createElement(_1.Button, { key: "basic-success", state: _1.ButtonState.SUCCESS, onClick: addon_actions_1.action("basic-success click") }, "SUCCESS"),
    React.createElement(_1.Button, { key: "basic-danger", state: _1.ButtonState.DANGER, onClick: addon_actions_1.action("basic-danger click") }, "DANGER"),
    React.createElement(_1.Button, { key: "basic-disabled", disabled: true, onClick: addon_actions_1.action("basic-disabled click") }, "DISABLED"))); })
    .add("Primary buttons", function () { return (React.createElement("div", null,
    React.createElement(_1.Button, { key: "primary", primary: true, onClick: addon_actions_1.action("primary click") }, "PRIMARY"),
    React.createElement(_1.Button, { key: "primary-info", primary: true, state: _1.ButtonState.INFO, onClick: addon_actions_1.action("primary-info click") }, "INFO"),
    React.createElement(_1.Button, { key: "primary-warning", primary: true, state: _1.ButtonState.WARNING, onClick: addon_actions_1.action("primary-warning click") }, "WARNING"),
    React.createElement(_1.Button, { key: "primary-success", primary: true, state: _1.ButtonState.SUCCESS, onClick: addon_actions_1.action("primary-success click") }, "SUCCESS"),
    React.createElement(_1.Button, { key: "primary-danger", primary: true, state: _1.ButtonState.DANGER, onClick: addon_actions_1.action("primary-danger click") }, "DANGER"),
    React.createElement(_1.Button, { key: "primary-disabled", primary: true, disabled: true, onClick: addon_actions_1.action("primary-disabled click") }, "DISABLED"))); })
    .add("Link buttons", function () { return (React.createElement("div", null,
    React.createElement(_1.Button, { key: "link", link: true, onClick: addon_actions_1.action("link click") }, "PRIMARY"),
    React.createElement(_1.Button, { key: "link-disabled", link: true, disabled: true, onClick: addon_actions_1.action("link-disabled click") }, "DISABLED"))); })
    .add("Small buttons", function () { return (React.createElement("div", null,
    React.createElement(_1.Button, { key: "small", size: _1.ButtonSize.SMALL, onClick: addon_actions_1.action("small click") }, "PRIMARY"),
    React.createElement(_1.Button, { key: "small-info", size: _1.ButtonSize.SMALL, state: _1.ButtonState.INFO, onClick: addon_actions_1.action("small-info click") }, "INFO"),
    React.createElement(_1.Button, { key: "small-warning", size: _1.ButtonSize.SMALL, state: _1.ButtonState.WARNING, onClick: addon_actions_1.action("small-warning click") }, "WARNING"),
    React.createElement(_1.Button, { key: "small-success", size: _1.ButtonSize.SMALL, state: _1.ButtonState.SUCCESS, onClick: addon_actions_1.action("small-success click") }, "SUCCESS"),
    React.createElement(_1.Button, { key: "small-danger", size: _1.ButtonSize.SMALL, state: _1.ButtonState.DANGER, onClick: addon_actions_1.action("small-danger click") }, "DANGER"),
    React.createElement(_1.Button, { key: "small-disabled", size: _1.ButtonSize.SMALL, disabled: true, onClick: addon_actions_1.action("small-disabled click") }, "DISABLED"))); })
    .add("Icon buttons", function () { return (React.createElement("div", null,
    React.createElement(_1.Button, { key: "home", onClick: addon_actions_1.action("home click"), icon: { shape: "home" } }, "HOME"),
    React.createElement(_1.Button, { key: "cog", primary: true, onClick: addon_actions_1.action("cog click"), icon: { shape: "cog" } }, "SETTINGS"),
    React.createElement(_1.Button, { key: "link", primary: true, state: _1.ButtonState.SUCCESS, onClick: addon_actions_1.action("link click"), icon: { shape: "link" } }))); })
    .add("Simple Button and Icon button without btn and btn-icon class", function () { return (React.createElement("div", null,
    React.createElement(_1.Button, { key: "home", defaultBtn: false, onClick: addon_actions_1.action("home click"), icon: { shape: "home" } }, "HOME"),
    React.createElement(_1.Button, { key: "basic", defaultBtn: false, onClick: addon_actions_1.action("basic click") }, "BASIC"))); });
