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
var _1 = require(".");
var icon_1 = require("../../icon");
var button_1 = require("../../forms/button");
react_1.storiesOf("Alert", module)
    .add("Default Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Informational Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Dangerous Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.SUCCESS, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Successful Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Warning Alert")))); })
    .add("Closable Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, closeable: true, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Informational Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, closeable: true, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Dangerous Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.SUCCESS, closeable: true, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Successful Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, closeable: true },
        React.createElement(_1.AlertItem, null, "Warning Alert")))); })
    .add("Multi-item alert", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, style: { marginBottom: "2em" }, closeable: true },
        React.createElement(_1.AlertItem, null, "Alert Item one"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "piggy-bank" }) }, "Alert Item two"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "dollar" }) }, "Alert Item three"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "asterisk" }) }, "Alert Item four")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, style: { marginBottom: "2em" }, closeable: true },
        React.createElement(_1.AlertItem, null, "Alert Item one"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "piggy-bank" }) }, "Alert Item two"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "dollar" }) }, "Alert Item three"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "asterisk" }) }, "Alert Item four")),
    React.createElement(_1.Alert, { type: _1.AlertType.SUCCESS, style: { marginBottom: "2em" }, closeable: true },
        React.createElement(_1.AlertItem, null, "Alert Item one"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "piggy-bank" }) }, "Alert Item two"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "dollar" }) }, "Alert Item three"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "asterisk" }) }, "Alert Item four")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, style: { marginBottom: "2em" }, closeable: true },
        React.createElement(_1.AlertItem, null, "Alert Item one"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "piggy-bank" }) }, "Alert Item two"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "dollar" }) }, "Alert Item three"),
        React.createElement(_1.AlertItem, { icon: React.createElement(icon_1.Icon, { shape: "asterisk" }) }, "Alert Item four")))); })
    .add("Compact Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, size: _1.AlertSize.COMPACT, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Informational Standard")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, size: _1.AlertSize.COMPACT, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Dangerous Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.SUCCESS, size: _1.AlertSize.COMPACT, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Successful Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, size: _1.AlertSize.COMPACT },
        React.createElement(_1.AlertItem, null, "Warning Alert")))); })
    .add("Actionable Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, { link: true }, "Action") }, "Informational Standard")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, { link: true }, "Action") }, "Dangerous Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.SUCCESS, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, { link: true }, "Action") }, "Successful Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, size: _1.AlertSize.COMPACT },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, { link: true }, "Action") }, "Warning Alert")))); })
    .add("Static Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, { static: true }, "Informational Standard")))); })
    .add("App Level Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, level: _1.AlertLevel.APP, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Informational Standard")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, level: _1.AlertLevel.APP, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, null, "Dangerous Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, level: _1.AlertLevel.APP },
        React.createElement(_1.AlertItem, null, "Warning Alert")))); })
    .add("App Level Actionable Alerts", function () { return (React.createElement("div", { style: { width: "80em", padding: "3em" } },
    React.createElement(_1.Alert, { type: _1.AlertType.INFO, level: _1.AlertLevel.APP, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, null, "Action") }, "Informational Standard")),
    React.createElement(_1.Alert, { type: _1.AlertType.DANGER, level: _1.AlertLevel.APP, style: { marginBottom: "2em" } },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, null, "Action") }, "Dangerous Alert")),
    React.createElement(_1.Alert, { type: _1.AlertType.WARNING, level: _1.AlertLevel.APP },
        React.createElement(_1.AlertItem, { actions: React.createElement(button_1.Button, null, "Action") }, "Warning Alert")))); });
