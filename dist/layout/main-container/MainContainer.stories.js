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
react_1.storiesOf('MainContainer', module)
    .add('Main Container', function () {
    return React.createElement(_1.MainContainer, { title: "Storybook", headerNav: React.createElement(nav_1.Nav, { navLevel: nav_1.NavLevel.PRIMARY, navType: nav_1.NavType.HEADER },
            React.createElement(nav_1.NavLink, null, "Link 1"),
            React.createElement(nav_1.NavLink, null, "Link 2")), subNav: React.createElement(nav_1.Nav, { navLevel: nav_1.NavLevel.SECONDARY, navType: nav_1.NavType.SUB },
            React.createElement(nav_1.NavLink, null, "Link 3"),
            React.createElement(nav_1.NavLink, null, "Link 4")) });
});
