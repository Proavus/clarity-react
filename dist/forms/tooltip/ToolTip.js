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
var utils_1 = require("../../utils");
var icon_1 = require("../../icon");
var ToolTipDirection;
(function (ToolTipDirection) {
    ToolTipDirection["TOP_RIGHT"] = "top-right";
    ToolTipDirection["TOP_LEFT"] = "top-left";
    ToolTipDirection["BOTTOM_RIGHT"] = "bottom-right";
    ToolTipDirection["BOTTOM_LEFT"] = "bottom-left";
    ToolTipDirection["TOP"] = "top";
    ToolTipDirection["BOTTOM"] = "bottom";
    ToolTipDirection["RIGHT"] = "right";
    ToolTipDirection["LEFT"] = "left";
})(ToolTipDirection = exports.ToolTipDirection || (exports.ToolTipDirection = {}));
var ToolTipSize;
(function (ToolTipSize) {
    ToolTipSize["EXTRA_SMALL"] = "xs";
    ToolTipSize["SMALL"] = "sm";
    ToolTipSize["MEDIUM"] = "md";
    ToolTipSize["LARGE"] = "lg";
})(ToolTipSize = exports.ToolTipSize || (exports.ToolTipSize = {}));
var ToolTipStatus;
(function (ToolTipStatus) {
    ToolTipStatus["INFO"] = "info";
    ToolTipStatus["OK"] = "ok";
    ToolTipStatus["WARNING"] = "warning";
    ToolTipStatus["ERROR"] = "error";
})(ToolTipStatus = exports.ToolTipStatus || (exports.ToolTipStatus = {}));
exports.ToolTip = function (_a) {
    var direction = _a.direction, size = _a.size, style = _a.style, shape = _a.shape, iconSize = _a.iconSize, className = _a.className, status = _a.status, children = _a.children;
    var setShape = shape ? shape : "info-circle";
    return (React.createElement("a", { href: "javascript://", role: "tooltip", "aria-haspopup": "true", className: utils_1.classNames([
            className && className,
            "tooltip",
            direction && "tooltip-" + direction,
            size && "tooltip-" + size,
        ]), style: style },
        React.createElement(icon_1.Icon, { shape: setShape, size: iconSize }),
        React.createElement("span", { className: utils_1.classNames([
                "tooltip-content",
                status && status,
            ]) }, children)));
};
