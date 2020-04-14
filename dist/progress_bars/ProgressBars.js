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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
