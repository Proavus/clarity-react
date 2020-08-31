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
var Password_1 = require("./Password");
react_1.storiesOf("Password", module)
    .add("a simple password input", function () { return React.createElement(Password_1.Password, { name: "password", onChange: addon_actions_1.action("changed") }); })
    .add("a simple password box with defaultValue", function () { return (React.createElement(Password_1.Password, { name: "Password", defaultValue: "Password123", onChange: addon_actions_1.action("changed") })); })
    .add("with a label", function () { return React.createElement(Password_1.Password, { name: "Password", label: "Password", onChange: addon_actions_1.action("changed") }); })
    .add("with placeholder text", function () { return (React.createElement(Password_1.Password, { name: "Password", placeholder: "Enter password", onChange: addon_actions_1.action("changed") })); })
    .add("with helper text", function () { return (React.createElement(Password_1.Password, { name: "Password", helperText: "password should have min 8 characters", minPasswordLength: 8, onChange: addon_actions_1.action("changed") })); })
    .add("Password box with custom width", function () { return (React.createElement(Password_1.Password, { name: "Password", placeholder: "Password", onChange: addon_actions_1.action("changed"), style: { width: "40%" } })); })
    .add("Password box with error", function () { return (React.createElement(Password_1.Password, { name: "Password", placeholder: "Enter Password", error: true, onBlur: addon_actions_1.action("select with error - blur"), onChange: addon_actions_1.action("select with error - change"), errorHelperText: "This field is reuired" })); })
    .add("Password box without show password icon", function () { return React.createElement(Password_1.Password, { name: "Password", unmask: false }); });
