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
var utils_1 = require("../../utils");
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["PURPLE"] = "purple";
    BadgeColor["BLUE"] = "blue";
    BadgeColor["ORANGE"] = "orange";
    BadgeColor["LIGHT_BLUE"] = "light-blue";
    BadgeColor["BADGE_1"] = "1";
    BadgeColor["BADGE_2"] = "2";
    BadgeColor["BADGE_3"] = "3";
    BadgeColor["BADGE_4"] = "4";
    BadgeColor["BADGE_5"] = "5";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));
var BadgeStatus;
(function (BadgeStatus) {
    BadgeStatus["BADGE_INFO"] = "info";
    BadgeStatus["BADGE_SUCCESS"] = "success";
    BadgeStatus["BADGE_WARNING"] = "warning";
    BadgeStatus["BADGE_DANGER"] = "danger";
})(BadgeStatus = exports.BadgeStatus || (exports.BadgeStatus = {}));
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a = this.props, color = _a.color, status = _a.status, children = _a.children, dataqa = _a.dataqa, className = _a.className;
        return (React.createElement("span", { className: utils_1.classNames([
                "badge",
                color && "badge-" + color,
                status && "badge-" + status,
                className && className,
            ]), "data-qa": dataqa }, children));
    };
    return Badge;
}(React.PureComponent));
exports.Badge = Badge;
