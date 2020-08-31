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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.ProgressBar = exports.ProgressBarAnimation = exports.ProgressBarPosition = exports.ProgressBarStatus = exports.ProgressBarType = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ProgressBarType;
(function (ProgressBarType) {
    ProgressBarType["STATIC"] = "progress-static";
    ProgressBarType["NORMAL"] = "progress";
})(ProgressBarType = exports.ProgressBarType || (exports.ProgressBarType = {}));
var ProgressBarStatus;
(function (ProgressBarStatus) {
    ProgressBarStatus["SUCCESS"] = "success";
    ProgressBarStatus["WARNING"] = "warning";
    ProgressBarStatus["DANGER"] = "danger";
})(ProgressBarStatus = exports.ProgressBarStatus || (exports.ProgressBarStatus = {}));
var ProgressBarPosition;
(function (ProgressBarPosition) {
    ProgressBarPosition["TOP"] = "top";
})(ProgressBarPosition = exports.ProgressBarPosition || (exports.ProgressBarPosition = {}));
exports.ProgressBarAnimation = {
    LOOP: "loop",
    FADE_OUT: "progress-fade",
    FLASH: "flash",
    FLASH_DANGER: "flash-danger",
};
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, value = _a.value, max = _a.max, status = _a.status, type = _a.type, labeled = _a.labeled, position = _a.position, style = _a.style, className = _a.className, dataqa = _a.dataqa;
        // Label style for labled progress bar
        var labelStyle = { display: "block" };
        return (React.createElement("div", { className: utils_1.classNames([
                type,
                status,
                labeled && "labeled",
                position,
                className,
            ]), style: style, "data-qa": dataqa },
            type == ProgressBarType.NORMAL && (React.createElement("progress", { max: max, value: value }, " ")),
            type == ProgressBarType.STATIC && React.createElement("div", { className: "progress-meter", "data-value": value }),
            labeled && React.createElement("span", { style: labelStyle },
                " ",
                value,
                "% ")));
    };
    // By default Progress Bar will be normal progress bar not static
    ProgressBar.defaultProps = {
        type: ProgressBarType.NORMAL,
    };
    return ProgressBar;
}(React.PureComponent));
exports.ProgressBar = ProgressBar;
