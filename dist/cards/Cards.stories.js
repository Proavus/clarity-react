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
var dropdown_1 = require("../forms/dropdown");
var alert_1 = require("../emphasis/alert");
var icon_1 = require("../icon");
var Label_1 = require("../forms/label/Label");
react_1.storiesOf("Cards", module)
    .add("Basic Card", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Card, { header: "Header" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardTitle, null, "Block"),
                React.createElement(_1.CardText, null, "Card content can contain text, links, images, data visualizations, lists and more.")),
            React.createElement(_1.CardFooter, null,
                React.createElement("button", { className: "btn btn-sm btn-link", onClick: addon_actions_1.action("onclick - footer action 1") }, "Footer Action 1"),
                React.createElement("button", { className: "btn btn-sm btn-link", onClick: addon_actions_1.action("onclick - footer action 2") }, "Footer Action 2")))))); })
    .add("Clickable Card", function () { return (React.createElement("div", null,
    React.createElement("div", { className: "clr-row" },
        React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(_1.Card, { onClick: addon_actions_1.action("onclick - card image top") },
                React.createElement(_1.CardImage, null,
                    React.createElement("img", { src: require("./placeholder_350x150.png") })),
                React.createElement(_1.CardBlock, null,
                    React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.")))),
        React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(_1.Card, { onClick: addon_actions_1.action("onclick - card image bottom") },
                React.createElement(_1.CardBlock, null,
                    React.createElement(_1.CardText, null,
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.",
                        " ")),
                React.createElement(_1.CardImage, null,
                    React.createElement("img", { src: require("./placeholder_350x150.png") })))),
        React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
            React.createElement(_1.Card, { onClick: addon_actions_1.action("onclick - card image middle") },
                React.createElement(_1.CardBlock, null,
                    React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),
                React.createElement(_1.CardImage, null,
                    React.createElement("img", { src: require("./placeholder_350x150.png") })),
                React.createElement(_1.CardBlock, null,
                    React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit."))))),
    React.createElement("div", { className: "clr-row" },
        React.createElement(_1.Card, { className: "clr-col-md-6 clr-col-12", onClick: addon_actions_1.action("onclick - card image only") },
            React.createElement(_1.CardImage, null,
                React.createElement("img", { src: require("./placeholder_350x150.png") })))))); })
    .add("Dropdowns in Cards", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Card, { header: "Header" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardTitle, null, "Block"),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti.")),
            React.createElement(_1.CardFooter, null,
                React.createElement("button", { className: "btn btn-sm btn-link" }, "Action 1"),
                React.createElement("button", { className: "btn btn-sm btn-link" }, "Action 2"),
                React.createElement(dropdown_1.Dropdown, { label: "dropdown 1", button: { link: true, className: "dropdown-toggle btn-sm" }, onItemClick: addon_actions_1.action("onItemClick - Dropdown."), className: "top-left" },
                    React.createElement(dropdown_1.DropdownMenu, null,
                        React.createElement(dropdown_1.DropdownItem, { menuItemType: dropdown_1.MenuItemType.ITEM, label: "Item 1" }),
                        React.createElement(dropdown_1.DropdownItem, { menuItemType: dropdown_1.MenuItemType.ITEM, label: "Item 2" }),
                        React.createElement(dropdown_1.DropdownItem, { menuItemType: dropdown_1.MenuItemType.ITEM, label: "Item 3" }),
                        React.createElement(dropdown_1.DropdownItem, { menuItemType: dropdown_1.MenuItemType.ITEM, label: "Item 4" })))))))); })
    .add("Card Media Block", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Card, { header: "Header" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardMediaBlock, { image: require("./placeholder_350x150.png"), title: "Project A", text: "Owner: John Doe" }),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum earum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis quod.")),
            React.createElement(_1.CardFooter, null,
                React.createElement("button", { className: "btn btn-sm btn-link" }, "Action")))),
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Card, { header: "Header" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardMediaBlock, { image: require("./placeholder_350x150.png"), title: "Project B", text: "Owner: Jane Doe", wrap: true }),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ipsum?")),
            React.createElement(_1.CardFooter, null,
                React.createElement("button", { className: "btn btn-sm btn-link" }, "Action")))))); })
    .add("Alerts in Cards", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Card, null,
            React.createElement(_1.CardBlock, null,
                React.createElement(alert_1.Alert, { type: alert_1.AlertType.WARNING, style: { marginBottom: "2em" }, size: alert_1.AlertSize.COMPACT, closeable: true },
                    React.createElement(alert_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "exclamation-triangle" }) }, "Use small alerts in a card")),
                React.createElement(_1.CardMediaBlock, { image: require("./placeholder_350x150.png"), title: "Project A", text: "Owner: John Doe", wrap: true }),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")),
            React.createElement(_1.CardFooter, null,
                React.createElement("a", { className: "card-link" }, "Button One"),
                React.createElement("a", { className: "card-link" }, "Button Two")))))); })
    .add("Lists in Cards", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-12" },
        React.createElement(_1.Card, { header: "Unordered Lists" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardText, null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),
            React.createElement(_1.CardBlock, null,
                React.createElement("ul", { className: "list" },
                    React.createElement("li", null, "Ullamco Laboris"),
                    React.createElement("li", null,
                        "Nisi Ut Aliquip",
                        React.createElement("ul", { className: "list" },
                            React.createElement("li", null, "Exercitation"),
                            React.createElement("li", null, "Laboris"),
                            React.createElement("li", null, "Commodo"))),
                    React.createElement("li", null, "Consequat"),
                    React.createElement("li", null, "Excepteur sint occaecat cupidatat non proident"),
                    React.createElement("li", null, "Enim ad Minim"),
                    React.createElement("li", null,
                        "Occeaecat",
                        React.createElement("ul", { className: "list-unstyled" },
                            React.createElement("li", null, "Exercitation"),
                            React.createElement("li", null, "Laboris"),
                            React.createElement("li", null, "Commodo"))))),
            React.createElement(_1.CardFooter, null,
                React.createElement("a", { className: "btn btn-primary" }, "Action")))),
    React.createElement("div", { className: "clr-col-lg-4 clr-col-12" },
        React.createElement(_1.Card, { header: "Ordered Lists" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardText, null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),
            React.createElement(_1.CardBlock, null,
                React.createElement("ol", { className: "list" },
                    React.createElement("li", null, "Ullamco Laboris"),
                    React.createElement("li", null,
                        "Nisi Ut Aliquip",
                        React.createElement("ol", { className: "list" },
                            React.createElement("li", null, "Exercitation"),
                            React.createElement("li", null, "Laboris"),
                            React.createElement("li", null, "Commodo"))),
                    React.createElement("li", null, "Consequat"),
                    React.createElement("li", null, "Excepteur sint occaecat cupidatat non proident"),
                    React.createElement("li", null, "Enim ad Minim"),
                    React.createElement("li", null,
                        "Occeaecat",
                        React.createElement("ol", { className: "list-unstyled" },
                            React.createElement("li", null, "Exercitation"),
                            React.createElement("li", null, "Laboris"),
                            React.createElement("li", null, "Commodo"))))),
            React.createElement(_1.CardFooter, null,
                React.createElement("a", { className: "btn btn-primary" }, "Action")))),
    React.createElement("div", { className: "clr-col-lg-4 clr-col-12" },
        React.createElement(_1.Card, { header: "Unstyled Lists" },
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardText, null, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),
            React.createElement(_1.CardBlock, null,
                React.createElement("ul", { className: "list-unstyled" },
                    React.createElement("li", null, "Ullamco Laboris"),
                    React.createElement("li", null,
                        "Nisi Ut Aliquip",
                        React.createElement("ul", { className: "list" },
                            React.createElement("li", null, "Exercitation"),
                            React.createElement("li", null, "Laboris"),
                            React.createElement("li", null, "Commodo"))),
                    React.createElement("li", null, "Consequat"),
                    React.createElement("li", null, "Excepteur sint occaecat cupidatat non proident"),
                    React.createElement("li", null, "Enim ad Minim"),
                    React.createElement("li", null,
                        "Occeaecat",
                        React.createElement("ul", { className: "list-unstyled" },
                            React.createElement("li", null, "Exercitation"),
                            React.createElement("li", null, "Laboris"),
                            React.createElement("li", null, "Commodo"))))),
            React.createElement(_1.CardFooter, null,
                React.createElement("a", { className: "btn btn-primary" }, "Action")))))); })
    .add("List Groups in Cards", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-5" },
        React.createElement(_1.Card, null,
            React.createElement(_1.CardImage, null,
                React.createElement("img", { src: require("./placeholder_350x150.png") })),
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardTitle, null, "Title"),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut. Nihil nemo, necessitatibus earum.")),
            React.createElement("ul", { className: "list-group list-group-flush" },
                React.createElement("li", { className: "list-group-item" }, "Lorem ipsum dolor."),
                React.createElement("li", { className: "list-group-item" }, "Lorem ipsum dolor sit."),
                React.createElement("li", { className: "list-group-item" }, "Lorem ipsum.")),
            React.createElement(_1.CardFooter, null,
                React.createElement("a", { className: "btn btn-sm btn-link" }, "Action 1"),
                React.createElement("a", { className: "btn btn-sm btn-link" }, "Action 2")))))); })
    .add("Custom Styled Card", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-lg-4 clr-col-md-8 clr-col-12" },
        React.createElement(_1.Card, null,
            React.createElement(_1.CardBlock, { style: { backgroundColor: "#eeeeee", borderBottom: "1px solid #cccccc" } },
                React.createElement(_1.CardTitle, { style: { height: "30px" } },
                    React.createElement("div", { style: { float: "left" } },
                        React.createElement("a", { className: "btn btn-sm btn-link" }, "My App Object")),
                    React.createElement("div", { style: { float: "right" } },
                        React.createElement(Label_1.Label, { status: Label_1.LabelStatus.SUCCESS }, "Healthy")))),
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardMediaBlock, { image: require("./placeholder_350x150.png"), title: "Project A", text: "Owner: John Doe", wrap: false }),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")),
            React.createElement(_1.CardBlock, null,
                React.createElement(_1.CardTitle, null, "Details"),
                React.createElement(_1.CardText, null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut. Nihil nemo, necessitatibus earum.")))))); });
