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
var storybook_state_1 = require("@sambego/storybook-state");
var button_1 = require("../forms/button");
var Toast_1 = require("./Toast");
var storeBottomLeftToast = new storybook_state_1.Store({
    showToast: false,
});
var storeBottomRightToast = new storybook_state_1.Store({
    showToast: false,
});
var storeTopRightToast = new storybook_state_1.Store({
    showToast: false,
});
var storeTopLeftToast = new storybook_state_1.Store({
    showToast: false,
});
var DURATION = 4000;
react_1.storiesOf("Toasts", module).add("Show toasts", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(storybook_state_1.State, { store: storeBottomLeftToast },
            React.createElement(Toast_1.Toast, { text: "Toast created at bottom left corner", icon: "warning-standard", position: Toast_1.Direction.BOTTOM_LEFT, type: Toast_1.MessageType.WARNING, style: { marginBottom: "15px", marginLeft: "15px", color: "white", backgroundColor: "#f2af00" }, onClose: function () { return storeBottomLeftToast.set({ showToast: false }); } }),
            React.createElement(button_1.Button, { onClick: function () { return storeBottomLeftToast.set({ showToast: true }); } }, "Bottom Left")),
        React.createElement(storybook_state_1.State, { store: storeBottomRightToast },
            React.createElement(Toast_1.Toast, { text: "Toast created at bottom right corner", icon: "error-standard", position: Toast_1.Direction.BOTTOM_RIGHT, duration: DURATION, type: Toast_1.MessageType.DANGER, style: { marginBottom: "15px", marginRight: "15px", color: "white", backgroundColor: "#ce1126" }, onClose: function () { return storeBottomRightToast.set({ showToast: false }); } }),
            React.createElement(button_1.Button, { onClick: function () { return storeBottomRightToast.set({ showToast: true }); } }, "Bottom Right")),
        React.createElement(storybook_state_1.State, { store: storeTopRightToast },
            React.createElement(Toast_1.Toast, { text: "Toast created at top right corner", style: { marginTop: "15px", marginRight: "15px", color: "white", backgroundColor: "#6ea204" }, onClose: function () { return storeTopRightToast.set({ showToast: false }); } }),
            React.createElement(button_1.Button, { onClick: function () { return storeTopRightToast.set({ showToast: true }); } }, "Top Right")),
        React.createElement(storybook_state_1.State, { store: storeTopLeftToast },
            React.createElement(Toast_1.Toast, { text: "Toast created at top left corner", icon: "info-standard", position: Toast_1.Direction.TOP_LEFT, type: Toast_1.MessageType.INFO, style: { marginTop: "15px", marginLeft: "15px", color: "white", backgroundColor: "#007db8" }, onClose: function () { return storeTopLeftToast.set({ showToast: false }); } }),
            React.createElement(button_1.Button, { onClick: function () { return storeTopLeftToast.set({ showToast: true }); } }, "Top Left"))))); });
