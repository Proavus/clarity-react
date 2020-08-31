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
exports.AlertItem = void 0;
var React = __importStar(require("react"));
var icon_1 = require("../../icon");
var utils = __importStar(require("../../utils"));
var _1 = require(".");
var AlertItem = /** @class */ (function (_super) {
    __extends(AlertItem, _super);
    function AlertItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlertItem.iconWithAlertClass = function (alertType, icon) {
        if (icon) {
            return React.cloneElement(icon, {
                shape: icon.props.shape || AlertItem.defaultIconShape(alertType),
                className: "alert-icon " + icon.props.className
            });
        }
        return React.createElement(icon_1.Icon, { className: "alert-icon", shape: AlertItem.defaultIconShape(alertType) });
    };
    AlertItem.renderActions = function (actions) {
        return React.Children.map(actions, function (child) {
            return React.cloneElement(child, {
                className: child.props.className + " alert-action"
            });
        });
    };
    AlertItem.prototype.render = function () {
        var _a = this.props, actions = _a.actions, type = _a.type, children = _a.children, icon = _a.icon;
        var classNames = ["alert-item"];
        if (this.props.static)
            classNames.push("static");
        return (React.createElement("div", { className: utils.classNames(classNames) },
            React.createElement("div", { className: "alert-icon-wrapper" }, AlertItem.iconWithAlertClass(type, icon)),
            React.createElement("div", { className: "alert-text" }, children),
            actions &&
                React.createElement("div", { className: "alert-actions" }, AlertItem.renderActions(actions))));
    };
    AlertItem.defaultIconShape = function (alertType) {
        switch (alertType) {
            case _1.AlertType.DANGER:
                return "error-standard";
            case _1.AlertType.WARNING:
                return "warning-standard";
            case _1.AlertType.INFO:
                return "info-standard";
            case _1.AlertType.SUCCESS:
                return "success-standard";
            default:
                return "info-standard";
        }
    };
    return AlertItem;
}(React.PureComponent));
exports.AlertItem = AlertItem;
