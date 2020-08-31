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
var _1 = require(".");
var addon_actions_1 = require("@storybook/addon-actions");
var button_1 = require("../button");
react_1.storiesOf("Signposts", module)
    .add("Top left position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.TOP_LEFT },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement(button_1.Button, { key: "primary", onClick: addon_actions_1.action("basic click") }, "PRIMARY"),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Top middle position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.TOP_MIDDLE },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Top right position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.TOP_RIGHT, icon: { shape: "help-info", size: 34 } },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Right top position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.RIGHT_TOP },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."),
            React.createElement(button_1.Button, { key: "primary", onClick: addon_actions_1.action("basic click") }, "PRIMARY"))))); })
    .add("Right middle position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.RIGHT_MIDDLE, icon: { shape: "inbox", size: 40 } },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Right bottom position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.RIGHT_BOTTOM },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Bottom right position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.BOTTOM_RIGHT },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Bottom middle position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.BOTTOM_MIDDLE },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Bottom left position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.BOTTOM_LEFT },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."),
            React.createElement(button_1.Button, { key: "primary", onClick: addon_actions_1.action("basic click") }, "PRIMARY"))))); })
    .add("Left top position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.LEFT_TOP },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Left middle position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.LEFT_MIDDLE },
            React.createElement("h3", { style: { marginTop: "0px" } }, "Inline signpost"),
            React.createElement("p", null, "sample data here ..."))))); })
    .add("Left bottom position", function () { return (React.createElement("div", { style: { paddingTop: "250px", paddingLeft: "300px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(_1.SignPost, { direction: _1.SignPostDirection.LEFT_BOTTOM, showCloseButton: false },
            React.createElement("h3", { style: { marginTop: "0px" } }, "No close button"),
            React.createElement("p", null, "sample data here ..."))))); });
