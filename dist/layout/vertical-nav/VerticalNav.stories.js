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
var nav_1 = require("../nav");
var main_container_1 = require("../main-container");
// TODO: figure out link formatting
react_1.storiesOf("Vertical Navigation", module)
    .add("a simple vertical nav", function () { return (React.createElement(_1.VerticalNav, null,
    React.createElement(nav_1.NavLink, null, "Link 1"),
    React.createElement(nav_1.NavLink, null, "Link 2"))); })
    .add("a vertical nav with groups", function () { return (React.createElement(_1.VerticalNav, null,
    React.createElement(_1.VerticalNavGroup, { groupName: "Group 1" },
        React.createElement(nav_1.NavLink, null, "Link 1"),
        React.createElement(nav_1.NavLink, null, "Link 2")),
    React.createElement(_1.VerticalNavGroup, { groupName: "Group 2" },
        React.createElement(nav_1.NavLink, null, "Link 3"),
        React.createElement(nav_1.NavLink, null, "Link 4")))); })
    .add("incorporated vertical nav", function () { return (React.createElement(main_container_1.MainContainer, { title: "Project Pok\u00E9mon", sideNav: React.createElement(_1.VerticalNav, { isCollapsible: true },
        React.createElement(nav_1.NavLink, { iconShape: "user" }, "Normal"),
        React.createElement(nav_1.NavLink, { iconShape: "bolt", className: "active" }, "Electric"),
        React.createElement(nav_1.NavLink, { iconShape: "sad-face" }, "Poison"),
        React.createElement(nav_1.NavLink, { iconShape: "bug" }, "Grass"),
        React.createElement(nav_1.NavLink, { iconShape: "shield" }, "Fighting"),
        React.createElement(nav_1.NavLink, { iconShape: "certificate" }, "Credit")) },
    React.createElement("h2", null, "Electric"),
    React.createElement("p", null, "There are relatively few Electric Pok\u00E9mon; in fact only four were added in the third generation. Most are based on rodents or inanimate objects. Electric Pok\u00E9mon are very good defensively, being weak only to Ground moves."))); });
