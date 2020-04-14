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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var LabelColor;
(function (LabelColor) {
    LabelColor["PURPLE"] = "purple";
    LabelColor["BLUE"] = "blue";
    LabelColor["ORANGE"] = "orange";
    LabelColor["LIGHT_BLUE"] = "light-blue";
})(LabelColor = exports.LabelColor || (exports.LabelColor = {}));
var LabelStatus;
(function (LabelStatus) {
    LabelStatus["INFO"] = "info";
    LabelStatus["SUCCESS"] = "success";
    LabelStatus["WARNING"] = "warning";
    LabelStatus["DANGER"] = "danger";
})(LabelStatus = exports.LabelStatus || (exports.LabelStatus = {}));
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, color = _a.color, status = _a.status, onClick = _a.onClick, dismissable = _a.dismissable, style = _a.style, className = _a.className, children = _a.children, dataqa = _a.dataqa;
        var styled;
        var Tag;
        if (onClick) {
            Tag = "a";
            styled = __assign({}, style, { cursor: "pointer" });
        }
        else {
            Tag = "span";
            styled = __assign({}, style);
        }
        return (React.createElement(Tag, { "data-qa": dataqa, className: utils_1.classNames([
                className,
                "label",
                color && "label-" + color,
                status && "label-" + status,
                onClick && !dismissable && "clickable",
            ]), onClick: onClick, style: styled },
            children,
            dismissable && React.createElement(icon_1.Icon, { shape: "close" })));
    };
    return Label;
}(React.PureComponent));
exports.Label = Label;
