"use strict";
/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
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
var tabsData = [
    {
        name: "Dashboard",
        isDisabled: false,
        component: React.createElement("div", null, "Content for Dashboard tab."),
    },
    {
        name: "Management",
        isDisabled: false,
        component: React.createElement("div", null, "Content for Management tab."),
    },
    {
        name: "Cloud",
        isDisabled: false,
        component: React.createElement("div", null, "Content for Cloud tab."),
    },
    {
        name: "Infrastructure",
        isDisabled: false,
        component: React.createElement("div", null, "Content for Infrastructure tab."),
    },
];
var staticTabsData = [
    {
        name: "Dashboard",
        isDisabled: false,
        component: React.createElement("div", null, "Content for Dashboard tab."),
    },
    {
        name: "Management",
        isDisabled: false,
        component: React.createElement("div", null, "Content for Management tab."),
    },
    {
        name: "Cloud",
        isDisabled: true,
        component: React.createElement("div", null, "Content for Cloud tab."),
    },
    {
        name: "Infrastructure",
        isDisabled: true,
        component: React.createElement("div", null, "Content for Infrastructure tab."),
    },
];
react_1.storiesOf("Tab", module)
    .add("Tab Vertical", function () { return (React.createElement(_1.Tab, { tabs: tabsData, tabOrientation: _1.TabOrientation.VERTICAL, tabType: _1.TabType.SIMPLE })); })
    .add("Tab Horizontal", function () { return (React.createElement(_1.Tab, { tabs: tabsData, tabOrientation: _1.TabOrientation.HORIZONTAL, tabType: _1.TabType.SIMPLE })); })
    .add("Tab Static", function () { return (React.createElement(_1.Tab, { tabs: staticTabsData, tabOrientation: _1.TabOrientation.HORIZONTAL, tabType: _1.TabType.STATIC })); })
    .add("Tab Overflow", function () { return (React.createElement(_1.Tab, { tabs: tabsData, tabOrientation: _1.TabOrientation.HORIZONTAL, tabType: _1.TabType.SIMPLE, overflowTabsFrom: "Cloud" })); });
