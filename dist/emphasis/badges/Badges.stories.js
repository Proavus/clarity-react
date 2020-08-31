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
var Badges_1 = require("./Badges");
react_1.storiesOf("Badges", module)
    .add("Color Badges", function () { return (React.createElement("div", null,
    React.createElement(Badges_1.Badge, null, "1"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.PURPLE }, "15"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.BLUE }, "2"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.ORANGE }, "3"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.LIGHT_BLUE }, "12"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.BADGE_1 }, "90"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.BADGE_2 }, "51"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.BADGE_3 }, "25"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.BADGE_4 }, "32"),
    React.createElement(Badges_1.Badge, { color: Badges_1.BadgeColor.BADGE_5 }, "57"))); })
    .add("Status Badges", function () { return (React.createElement("div", null,
    React.createElement(Badges_1.Badge, { status: Badges_1.BadgeStatus.BADGE_INFO }, "2"),
    React.createElement(Badges_1.Badge, { status: Badges_1.BadgeStatus.BADGE_SUCCESS }, "3"),
    React.createElement(Badges_1.Badge, { status: Badges_1.BadgeStatus.BADGE_WARNING }, "12"),
    React.createElement(Badges_1.Badge, { status: Badges_1.BadgeStatus.BADGE_DANGER }, "15"))); });
