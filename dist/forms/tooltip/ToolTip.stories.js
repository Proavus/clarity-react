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
var ToolTip_1 = require("./ToolTip");
react_1.storiesOf("ToolTip", module)
    .add("Tooltip sizes", function () { return (React.createElement("div", { style: { paddingTop: "75px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL }, "Lorem"),
        "Extra Small"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.SMALL }, "Lorem ipsum sit"),
        "Small"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.MEDIUM }, "Loren ipsum dolor sit amet, ipsum"),
        "Medium"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.LARGE }, "Loren ipsum dolor sit amet, consectetur adipisicing elit"),
        "Large"))); })
    .add("Tooltip directions", function () { return (React.createElement("div", { style: { paddingTop: "75px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, direction: ToolTip_1.ToolTipDirection.TOP_RIGHT }, "Lorem"),
        "Top Right"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, direction: ToolTip_1.ToolTipDirection.BOTTOM_RIGHT }, "Lorem"),
        "Bottom Right"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, direction: ToolTip_1.ToolTipDirection.RIGHT }, "Loren"),
        "Right"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, direction: ToolTip_1.ToolTipDirection.TOP_LEFT }, "Loren"),
        "Top Left"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, direction: ToolTip_1.ToolTipDirection.BOTTOM_LEFT }, "Loren"),
        "Bottom Left"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, direction: ToolTip_1.ToolTipDirection.LEFT }, "Loren"),
        "Left"))); })
    .add("Tooltip customization", function () { return (React.createElement("div", { style: { paddingTop: "75px" } },
    React.createElement("div", { style: { float: "left" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.EXTRA_SMALL, iconSize: 30 }, "Lorem"),
        "Extra Small"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.SMALL, style: { color: "gray" } }, "Lorem ipsum sit"),
        "Small"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.MEDIUM, shape: "check-circle" }, "Loren ipsum dolor sit amet, ipsum"),
        "Medium"),
    React.createElement("div", { style: { float: "left", marginLeft: "20px" } },
        React.createElement(ToolTip_1.ToolTip, { size: ToolTip_1.ToolTipSize.LARGE, iconSize: 30, shape: "exclamation-triangle", style: { color: "orange" } }, "Loren ipsum dolor sit amet, consectetur adipisicing elit"),
        "Large"))); });
