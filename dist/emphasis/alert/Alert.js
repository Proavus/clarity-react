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
require("@clr/icons/clr-icons.min.css");
require("@webcomponents/custom-elements/custom-elements.min.js");
require("@clr/icons/clr-icons.min.js");
var icon_1 = require("../../icon");
var utils = __importStar(require("../../utils"));
var AlertItem_1 = require("./AlertItem");
var AlertType;
(function (AlertType) {
    AlertType["INFO"] = "info";
    AlertType["DANGER"] = "danger";
    AlertType["WARNING"] = "warning";
    AlertType["SUCCESS"] = "success";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
var AlertSize;
(function (AlertSize) {
    AlertSize["COMPACT"] = "compact";
})(AlertSize = exports.AlertSize || (exports.AlertSize = {}));
var AlertLevel;
(function (AlertLevel) {
    AlertLevel["APP"] = "app";
})(AlertLevel = exports.AlertLevel || (exports.AlertLevel = {}));
//TODO: Add alert paging for app-level alerts
//TODO: Improve alert action styling
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        return _super.call(this, props) || this;
    }
    Alert.getClassNames = function (props) {
        var type = props.type, isStatic = props.isStatic, level = props.level, size = props.size, className = props.className;
        return [
            "alert",
            type ? "alert-" + type : undefined,
            size ? "alert-" + size : undefined,
            isStatic ? "static" : undefined,
            level == AlertLevel.APP ? "alert-app-level" : undefined,
            size == AlertSize.COMPACT ? "alert-sm" : undefined,
            className,
        ];
    };
    Alert.prototype.render = function () {
        var _a = this.props, type = _a.type, children = _a.children, closeable = _a.closeable, onClose = _a.onClose, style = _a.style, dataqa = _a.dataqa;
        return (React.createElement("div", { className: utils.classNames(Alert.getClassNames(this.props)), role: "alert", style: style, "data-qa": dataqa },
            React.createElement("div", { className: "alert-items" }, Alert.withAlertType(type, children)),
            closeable && (React.createElement("button", { type: "button", onClick: onClose, className: "close", "aria-label": "Close" },
                React.createElement(icon_1.Icon, { "aria-hidden": "true", shape: "close" })))));
    };
    Alert.withAlertType = function (alertType, children) {
        return React.Children.map(children, function (child) {
            var childEl = child;
            if (childEl.type === AlertItem_1.AlertItem)
                return React.cloneElement(childEl, {
                    type: alertType,
                });
        });
    };
    return Alert;
}(React.PureComponent));
exports.Alert = Alert;
