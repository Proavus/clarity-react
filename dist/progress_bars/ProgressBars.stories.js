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
var ProgressBars_1 = require("./ProgressBars");
var cards_1 = require("../cards");
react_1.storiesOf("ProgressBar", module)
    .add("ProgressBar Simple", function () { return (React.createElement("div", null,
    React.createElement("h4", null, " Progress Bar "),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 10, max: 100, style: { width: "50%" } }, " ")))); })
    .add("ProgressBar Labled", function () { return (React.createElement("div", null,
    React.createElement("h4", null, " Labled Progress Bar "),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 10, max: 100, labeled: true, style: { width: "50%" } }, " ")))); })
    .add("Indeterminate (Looping) Progress Bar", function () { return (React.createElement("div", null,
    React.createElement("h4", null, "Indeterminate/Looping"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 100, max: 100, className: ProgressBars_1.ProgressBarAnimation.LOOP, style: { width: "50%" } }, " ")))); })
    .add("Progress Bar with color", function () { return (React.createElement("div", null,
    React.createElement("h4", null, "Normal"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 40, max: 100, type: ProgressBars_1.ProgressBarType.NORMAL, style: { width: "50%" } }, " ")),
    React.createElement("br", null),
    React.createElement("h4", null, "Success"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 40, max: 100, status: ProgressBars_1.ProgressBarStatus.SUCCESS, style: { width: "50%" } }, " ")),
    React.createElement("br", null),
    React.createElement("h4", null, "Danger/Warning"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 40, max: 100, status: ProgressBars_1.ProgressBarStatus.DANGER, style: { width: "50%" } }, " ")))); })
    .add("Progress Bar with animation", function () { return (React.createElement("div", null,
    React.createElement("h4", null, "Fed out"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 100, max: 100, className: ProgressBars_1.ProgressBarAnimation.FADE_OUT, style: { width: "50%" } }, " ")),
    React.createElement("br", null),
    React.createElement("h4", null, "Flash Then Fade"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 100, max: 100, className: ProgressBars_1.ProgressBarAnimation.FADE_OUT + "  " + ProgressBars_1.ProgressBarAnimation.FLASH, style: { width: "50%" } }, " ")),
    React.createElement("br", null),
    React.createElement("h4", null, "Flash Red, No Fade"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 100, max: 100, className: ProgressBars_1.ProgressBarAnimation.FLASH_DANGER, style: { width: "50%" } }, " ")),
    React.createElement("h4", null, "Labeled With Success Flash And Fade"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 100, max: 100, className: ProgressBars_1.ProgressBarAnimation.FADE_OUT + "  " + ProgressBars_1.ProgressBarAnimation.FLASH, labeled: true, style: { width: "50%" } }, " ")))); })
    .add("Static Progress Bar", function () { return (React.createElement("div", null,
    React.createElement("h4", null, "Static Progress Bar"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 10, max: 100, type: ProgressBars_1.ProgressBarType.STATIC, style: { width: "50%" } }, " ")),
    React.createElement("br", null),
    React.createElement("h4", null, "Labeled, Static Progress Bar"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 50, max: 100, type: ProgressBars_1.ProgressBarType.STATIC, labeled: true, style: { width: "50%" } }, " ")),
    React.createElement("br", null),
    React.createElement("h4", null, "Red Static Progress Bar"),
    React.createElement("div", { style: { width: "80%" } },
        React.createElement(ProgressBars_1.ProgressBar, { value: 80, max: 100, type: ProgressBars_1.ProgressBarType.STATIC, status: ProgressBars_1.ProgressBarStatus.DANGER, style: { width: "50%" } }, " ")))); })
    .add("Progress Bar in Cards", function () { return (React.createElement("div", null,
    React.createElement("div", { className: "clr-row" },
        React.createElement(cards_1.Card, { header: "Header", className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(cards_1.CardBlock, null,
                React.createElement(ProgressBars_1.ProgressBar, { value: 50, max: 100, position: ProgressBars_1.ProgressBarPosition.TOP }, " "),
                React.createElement(cards_1.CardTitle, null, "Card title"),
                React.createElement(cards_1.CardText, null, "Card content can contain text, links, images, data visualizations, lists and more.")),
            React.createElement(cards_1.CardFooter, null,
                React.createElement("button", { className: "btn btn-sm btn-link", onClick: addon_actions_1.action("onclick - footer action 1") }, "Footer Action 1")))),
    React.createElement("div", { className: "clr-row" },
        React.createElement(cards_1.Card, { header: "Header", className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(cards_1.CardBlock, null,
                React.createElement(cards_1.CardTitle, null, "Card title"),
                React.createElement(cards_1.CardText, null, "Card content can contain text, links, images, data visualizations, lists and more.")),
            React.createElement(cards_1.CardFooter, null,
                React.createElement(ProgressBars_1.ProgressBar, { value: 40, max: 100 }, " "),
                React.createElement("button", { className: "btn btn-sm btn-link", onClick: addon_actions_1.action("onclick - footer action 1") }, "Footer Action 1")))))); })
    .add("Static Progress Bar in Cards", function () { return (React.createElement("div", null,
    React.createElement("div", { className: "clr-row" },
        React.createElement(cards_1.Card, { header: "Header", className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(cards_1.CardBlock, null,
                React.createElement(ProgressBars_1.ProgressBar, { value: 50, max: 100, type: ProgressBars_1.ProgressBarType.STATIC, position: ProgressBars_1.ProgressBarPosition.TOP }, " "),
                React.createElement(cards_1.CardTitle, null, "Card title"),
                React.createElement(cards_1.CardText, null, "Card content can contain text, links, images, data visualizations, lists and more.")),
            React.createElement(cards_1.CardFooter, null,
                React.createElement("button", { className: "btn btn-sm btn-link", onClick: addon_actions_1.action("onclick - footer action 1") }, "Footer Action 1")))),
    React.createElement("div", { className: "clr-row" },
        React.createElement(cards_1.Card, { header: "Header", className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(cards_1.CardBlock, null,
                React.createElement(cards_1.CardTitle, null, "Card title"),
                React.createElement(cards_1.CardText, null, "Card content can contain text, links, images, data visualizations, lists and more.")),
            React.createElement(cards_1.CardFooter, null,
                React.createElement(ProgressBars_1.ProgressBar, { value: 40, max: 100, type: ProgressBars_1.ProgressBarType.STATIC }, " "),
                React.createElement("button", { className: "btn btn-sm btn-link", onClick: addon_actions_1.action("onclick - footer action 1") }, "Footer Action 1")))))); });
