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
exports.Spinner = exports.SpinnerSize = exports.SpinnerType = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var SpinnerType;
(function (SpinnerType) {
    SpinnerType["INLINE"] = "inline";
    SpinnerType["INVERSE"] = "inverse";
})(SpinnerType = exports.SpinnerType || (exports.SpinnerType = {}));
var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize["SMALL"] = "sm";
    SpinnerSize["MEDIUM"] = "md";
    SpinnerSize["LARGE"] = "lg";
})(SpinnerSize = exports.SpinnerSize || (exports.SpinnerSize = {}));
exports.Spinner = function (_a) {
    var type = _a.type, size = _a.size, children = _a.children, dataqa = _a.dataqa;
    return (React.createElement("span", null,
        React.createElement("span", { className: utils_1.classNames([
                "spinner",
                type && "spinner-" + type,
                size && "spinner-" + size,
            ]), "data-qa": dataqa }),
        React.createElement("span", null,
            " ",
            children)));
};
