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
var _1 = require(".");
var addon_actions_1 = require("@storybook/addon-actions");
react_1.storiesOf("Dropdown", module)
    .add("Simple Dropdown", function () { return (React.createElement("div", null,
    React.createElement(_1.Dropdown, { label: "Dropdown", onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
        React.createElement(_1.DropdownMenu, null,
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.HEADER, label: "Dropdown header" }),
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.ITEM, isHeaderChild: true, label: "Action" }),
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.ITEM, isHeaderChild: true, label: "Disabled Link", isDisabled: true }),
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.DIVIDER }),
            React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("onClick - Lorem"), label: "Lorem", isActive: true }),
            React.createElement(_1.Dropdown, { label: "Lorem ipsum.", isNested: true },
                React.createElement(_1.DropdownMenu, null,
                    React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("onClick - Foo."), label: "Foo." }),
                    React.createElement(_1.Dropdown, { label: "Bar", isNested: true },
                        React.createElement(_1.DropdownMenu, null,
                            React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("click - Baz"), label: "Baz" }),
                            React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("click - Caz"), label: "Caz" }),
                            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.DIVIDER }),
                            React.createElement(_1.Dropdown, { label: "Jaz", isNested: true },
                                React.createElement(_1.DropdownMenu, null,
                                    React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("click - Caz"), label: "Tazmania" }))))))))))); })
    .add("Icon Dropdown", function () { return (React.createElement("div", null,
    React.createElement(_1.Dropdown, { button: { icon: { shape: "house" }, link: true }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
        React.createElement(_1.DropdownMenu, null,
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.ITEM, isHeaderChild: true, label: "Action" }),
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.DIVIDER }),
            React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("onClick - Lorem"), label: "Lorem" }),
            React.createElement(_1.Dropdown, { label: "Lorem ipsum.", isNested: true },
                React.createElement(_1.DropdownMenu, null,
                    React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("onClick - Foo."), label: "Foo." }))))))); })
    .add("Link Button Dropdown", function () { return (React.createElement("div", null,
    React.createElement(_1.Dropdown, { label: "dropdown toggle", button: { link: true }, onItemClick: addon_actions_1.action("onItemClick - Dropdown.") },
        React.createElement(_1.DropdownMenu, null,
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.ITEM, isHeaderChild: true, label: "Action" }),
            React.createElement(_1.DropdownItem, { menuItemType: _1.MenuItemType.DIVIDER }),
            React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("onClick - Lorem"), label: "Lorem" }),
            React.createElement(_1.Dropdown, { label: "Lorem ipsum.", isNested: true },
                React.createElement(_1.DropdownMenu, null,
                    React.createElement(_1.DropdownItem, { onClick: addon_actions_1.action("onClick - Foo."), label: "Foo." }))))))); });
