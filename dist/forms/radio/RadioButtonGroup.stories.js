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
var addon_actions_1 = require("@storybook/addon-actions");
var _1 = require(".");
react_1.storiesOf("RadioButton", module)
    .add("single radio button", function () { return React.createElement(_1.RadioButton, { label: "O", value: "one" }); })
    .add("radio button without label", function () { return React.createElement(_1.RadioButton, { value: "one" }); })
    .add("simple with two radio buttons", function () { return (React.createElement(_1.RadioButtonGroup, { name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one" }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); })
    .add("when inline", function () { return (React.createElement(_1.RadioButtonGroup, { inline: true, name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one" }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); })
    .add("with a default value", function () { return (React.createElement(_1.RadioButtonGroup, { defaultValue: "two", name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one" }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); })
    .add("when disabled", function () { return (React.createElement(_1.RadioButtonGroup, { disabled: true, name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one" }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); })
    .add("With label", function () { return (React.createElement(_1.RadioButtonGroup, { label: "Radio Label", name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one" }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); })
    .add("With one radio disabled", function () { return (React.createElement(_1.RadioButtonGroup, { label: "Radio Label", name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one", disabled: true }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); })
    .add("With helper text", function () { return (React.createElement(_1.RadioButtonGroup, { helperText: "This text should help you figure things out", name: "number", onChange: addon_actions_1.action("changed") },
    React.createElement(_1.RadioButton, { key: "one", label: "One", value: "one" }),
    React.createElement(_1.RadioButton, { key: "two", label: "Two", value: "two" }))); });
