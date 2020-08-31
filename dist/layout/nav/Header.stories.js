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
var icon_1 = require("../../icon");
var _1 = require(".");
var dropdown_1 = require("../../forms/dropdown");
react_1.storiesOf("Header", module)
    .add("Header Types", function () { return (React.createElement(React.Fragment, null,
    React.createElement("h4", null, " Header Types"),
    React.createElement("div", { className: "main-container" },
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement(_1.Nav, { navLevel: _1.NavLevel.PRIMARY, navType: _1.NavType.HEADER },
                React.createElement(_1.NavLink, { className: "active" }, "Dashboard"),
                React.createElement(_1.NavLink, null, "Interactive Analytics")),
            React.createElement("div", { className: "header-actions" },
                React.createElement(_1.NavLink, { className: "nav-icon", iconShape: "cog" }))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement("form", { className: "search" },
                React.createElement("label", null,
                    React.createElement("input", { id: "search_input", type: "text", placeholder: "Search for keywords..." }))),
            React.createElement("div", { className: "header-actions" },
                React.createElement(_1.NavLink, { className: "nav-icon", iconShape: "cog" }))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement("div", { className: "header-actions" },
                React.createElement(dropdown_1.Dropdown, { button: { icon: { shape: "cog" }, defaultBtn: false, className: "nav-icon dropdown-toggle" }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
                    React.createElement(dropdown_1.DropdownMenu, null,
                        React.createElement(dropdown_1.DropdownItem, { label: "About" }),
                        React.createElement(dropdown_1.DropdownItem, { label: "Preferences" }),
                        React.createElement(dropdown_1.DropdownItem, { label: "Log out" }))))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement(_1.Nav, { navLevel: _1.NavLevel.PRIMARY, navType: _1.NavType.HEADER },
                React.createElement(_1.NavLink, { className: "nav-icon", iconShape: "cloud" }),
                React.createElement(_1.NavLink, { className: "active nav-icon", iconShape: "folder" })),
            React.createElement("form", { className: "search" },
                React.createElement("label", null,
                    React.createElement("input", { id: "search_input", type: "text", placeholder: "Search for keywords..." }))),
            React.createElement("div", { className: "header-actions" },
                React.createElement(dropdown_1.Dropdown, { button: { icon: { shape: "user" }, defaultBtn: false, className: "nav-icon dropdown-toggle" }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
                    React.createElement(dropdown_1.DropdownMenu, null,
                        React.createElement(dropdown_1.DropdownItem, { label: "About" }),
                        React.createElement(dropdown_1.DropdownItem, { label: "Preferences" }),
                        React.createElement(dropdown_1.DropdownItem, { label: "Log out" }))))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement("div", { className: "header-actions" },
                React.createElement(_1.NavLink, null, "Log Out"))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement("div", { className: "header-actions" },
                React.createElement(dropdown_1.Dropdown, { label: "john.doe@vmware.com", button: { defaultBtn: false, className: "nav-text dropdown-toggle" }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
                    React.createElement(dropdown_1.DropdownMenu, null,
                        React.createElement(dropdown_1.DropdownItem, { label: "Preferences" }),
                        React.createElement(dropdown_1.DropdownItem, { label: "Log out" }))))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))),
            React.createElement("div", { className: "header-actions" },
                React.createElement("a", { href: "javascript://", className: "nav-link nav-icon-text" },
                    React.createElement(icon_1.Icon, { shape: "user", style: {
                            position: "relative",
                            top: "22%",
                            left: "22%",
                            height: "1rem",
                            width: "1rem",
                            transform: "translate(-50%,-50%)",
                            webkitTransform: "translate(-50%,-50%)",
                        } }),
                    React.createElement("span", { className: "nav-text" }, "username"))))))); })
    .add("Header With Color Options", function () { return (React.createElement(React.Fragment, null,
    React.createElement("h4", null, " Header with Color Options"),
    React.createElement("div", { className: "main-container" },
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER1, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER2, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER3, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER4, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER5, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER6, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER7, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity"))))))); })
    .add("Header with Subnav", function () { return (React.createElement(React.Fragment, null,
    React.createElement("h4", null, " Header with Subnav"),
    React.createElement("div", { className: "main-container" },
        React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, color: _1.HeaderColor.HEADER1, style: { marginTop: "24px" } },
            React.createElement("div", { className: "branding" },
                React.createElement(_1.NavLink, { iconShape: "vm-bug" },
                    React.createElement("span", { className: "title" }, "Project Clarity")))),
        React.createElement(_1.Nav, { navLevel: _1.NavLevel.SECONDARY, navType: _1.NavType.SUB },
            React.createElement("li", { className: "nav-item" },
                React.createElement(_1.NavLink, { className: "active" }, "Dashboard")),
            React.createElement("li", { className: "nav-item" },
                React.createElement(_1.NavLink, null, "Management")),
            React.createElement("li", { className: "nav-item" },
                React.createElement(_1.NavLink, null, "Cloud")),
            React.createElement("li", { className: "nav-item" },
                React.createElement(_1.NavLink, null, "Tenants")))))); });
