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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var storybook_state_1 = require("@sambego/storybook-state");
var _1 = require(".");
var tabsData = [
    {
        name: "Dashboard",
        id: "dashboard",
        isSelected: true,
        component: React.createElement("p", null, "Content for Dashboard tab."),
    },
    {
        name: "Management",
        id: "mgmt",
        component: React.createElement("p", null, "Content for Management tab."),
    },
    {
        name: "Cloud",
        id: "cloud",
        component: React.createElement("p", null, "Content for Cloud tab."),
    },
    {
        name: "Infrastructure",
        id: "infra",
        isDisabled: true,
        component: React.createElement("p", null, "Content for Infrastructure tab."),
    },
];
var staticTabsData = [
    {
        name: "Dashboard",
        id: "dashboard",
        isSelected: true,
        component: React.createElement("p", null, "Content for Dashboard tab."),
    },
    {
        name: "Management",
        id: "mgmt",
        isDisabled: false,
        component: React.createElement("p", null, "Content for Management tab."),
        tabType: _1.TabType.STATIC,
    },
    {
        name: "Cloud",
        id: "cloud",
        component: React.createElement("p", null, "Content for Cloud tab."),
    },
    {
        name: "Infrastructure",
        id: "infra",
        isDisabled: true,
        component: React.createElement("p", null, "Content for Infrastructure tab."),
    },
];
var store = new storybook_state_1.Store({
    simpleTabs: tabsData,
    staticTabs: staticTabsData,
    onTabClick: function (evt, clickedTab, updatedTabs) {
        store.set({
            simpleTabs: __spreadArrays(updatedTabs),
        });
    },
});
react_1.storiesOf("Tabs", module)
    .add("Tab Vertical", function () { return (React.createElement(storybook_state_1.State, { store: store }, function (state) { return (React.createElement(_1.Tabs, { id: "verticalTabs", tabs: state.simpleTabs, tabOrientation: _1.TabOrientation.VERTICAL, onTabClick: state.onTabClick })); })); })
    .add("Tab Horizontal", function () { return (React.createElement(storybook_state_1.State, { store: store }, function (state) { return (React.createElement(_1.Tabs, { id: "horizontalTabs", tabs: state.simpleTabs, tabOrientation: _1.TabOrientation.HORIZONTAL, onTabClick: state.onTabClick })); })); })
    .add("Tab Static", function () { return (React.createElement(storybook_state_1.State, { store: store }, function (state) { return (React.createElement(_1.Tabs, { id: "staticTabs", tabs: state.staticTabs, tabOrientation: _1.TabOrientation.HORIZONTAL, onTabClick: state.onTabClick })); })); })
    .add("Tab Overflow", function () { return (React.createElement(storybook_state_1.State, { store: store }, function (state) { return (React.createElement(_1.Tabs, { id: "overflowTabs", tabs: state.simpleTabs, tabOrientation: _1.TabOrientation.HORIZONTAL, onTabClick: state.onTabClick, overflowTabsFrom: 2 })); })); });
