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
var Label_1 = require("./Label");
var addon_actions_1 = require("@storybook/addon-actions");
var badges_1 = require("../../emphasis/badges");
react_1.storiesOf("Label", module)
    .add("Labels (not clickable)", function () { return (React.createElement("div", null,
    React.createElement(Label_1.Label, null, "Austin"),
    React.createElement(Label_1.Label, null, "New York"),
    React.createElement(Label_1.Label, null, "Palo Alto"),
    React.createElement(Label_1.Label, null, "San Francisco"),
    React.createElement(Label_1.Label, null, "Seattle"))); })
    .add("Color Options", function () { return (React.createElement("div", null,
    React.createElement(Label_1.Label, null, "Austin"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.PURPLE }, "New York"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.BLUE }, "Palo Alto"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.ORANGE }, "San Francisco"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.LIGHT_BLUE }, "Seattle"))); })
    .add("Clickable Labels", function () { return (React.createElement("div", null,
    React.createElement(Label_1.Label, { onClick: addon_actions_1.action("Austin - click") }, "Austin"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.PURPLE, onClick: addon_actions_1.action("New York - click") }, "New York"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.BLUE, onClick: addon_actions_1.action("Palo Alto - click") }, "Palo Alto"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.ORANGE, onClick: addon_actions_1.action("San Francisco - click") }, "San Francisco"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.LIGHT_BLUE, onClick: addon_actions_1.action("Seattle - click") }, "Seattle"))); })
    .add("Dismissing Labels", function () { return (React.createElement("div", { style: { width: "30px" } },
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.BLUE, onClick: function (evt) {
            var target = evt.target;
            if (target.tagName !== "A") {
                target.parentElement.style.display = "none";
            }
            else {
                target.style.display = "none";
            }
        }, dismissable: true }, "james@test.com"),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.BLUE, onClick: function (evt) {
            var target = evt.target;
            if (target.tagName !== "A") {
                target.parentElement.style.display = "none";
            }
            else {
                target.style.display = "none";
            }
        }, dismissable: true }, "jimmy@test.com"))); })
    .add("Status Labels (not clickable)", function () { return (React.createElement("div", null,
    React.createElement(Label_1.Label, { status: Label_1.LabelStatus.INFO }, "Info"),
    React.createElement(Label_1.Label, { status: Label_1.LabelStatus.SUCCESS }, "Success"),
    React.createElement(Label_1.Label, { status: Label_1.LabelStatus.WARNING }, "Warning"),
    React.createElement(Label_1.Label, { status: Label_1.LabelStatus.DANGER }, "Error"))); })
    .add("Labels with Badges", function () { return (React.createElement("div", null,
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.PURPLE, onClick: addon_actions_1.action("Austin - click") },
        "Austin",
        React.createElement(badges_1.Badge, { color: badges_1.BadgeColor.PURPLE }, "3")),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.BLUE, onClick: addon_actions_1.action("New York - click") },
        "New York",
        React.createElement(badges_1.Badge, { color: badges_1.BadgeColor.BLUE }, "32")),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.ORANGE, onClick: addon_actions_1.action("San Francisco - click") },
        "San Francisco",
        React.createElement(badges_1.Badge, { color: badges_1.BadgeColor.ORANGE }, "12")),
    React.createElement(Label_1.Label, { color: Label_1.LabelColor.LIGHT_BLUE, onClick: addon_actions_1.action("Seattle - click") },
        "Seattle",
        React.createElement(badges_1.Badge, { color: badges_1.BadgeColor.LIGHT_BLUE }, "59")),
    React.createElement(Label_1.Label, { onClick: addon_actions_1.action("Minneapolis - click") },
        "Minneapolis",
        React.createElement(badges_1.Badge, null, "59")))); })
    .add("Custom styled labels", function () { return (React.createElement("div", null,
    React.createElement(Label_1.Label, { status: Label_1.LabelStatus.INFO, style: { color: "black", height: "40px" } }, "Info"),
    React.createElement(Label_1.Label, { style: { color: "#fff", background: "#6ea204", border: "1px solid #6ea204", fontWeight: "800" } }, "Healthy"),
    React.createElement(Label_1.Label, { style: { color: "#fff", background: "#ff0000", border: "1px solid #ff0000", fontWeight: "800" } }, "Critical"),
    React.createElement(Label_1.Label, { style: { color: "gray", background: "#ffff", border: "1px solid gray", width: "100px" } }, "Main"),
    React.createElement(Label_1.Label, { status: Label_1.LabelStatus.INFO, style: {
            color: "#ffffff",
            background: "gray",
            border: "1px solid #dcdcdc",
            width: "100px",
            fontWeight: "800",
            height: "35px",
        } }, "sample"))); });
