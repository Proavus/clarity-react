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
var Modal_1 = require("./Modal");
var button_1 = require("../forms/button");
var storeSmall = new storybook_state_1.Store({
    isOpen: false,
    closable: true,
});
var storeMedium = new storybook_state_1.Store({
    isOpen: false,
    closable: true,
});
var storeLarge = new storybook_state_1.Store({
    isOpen: false,
    closable: true,
});
var storeExtraLarge = new storybook_state_1.Store({
    isOpen: false,
    closable: true,
});
var storeCustom = new storybook_state_1.Store({
    isOpen: false,
    closable: true,
});
react_1.storiesOf("Modals", module).add("Modal Sizes", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(storybook_state_1.State, { store: storeSmall },
            React.createElement(Modal_1.Modal, { size: Modal_1.ModalSize.SMALL, onClose: function () { return storeSmall.set({ isOpen: false }); }, title: "Small modal" },
                React.createElement(Modal_1.ModalBody, null,
                    React.createElement("p", null, "I'm a small modal")),
                React.createElement(Modal_1.ModalFooter, null,
                    React.createElement(button_1.Button, { onClick: function () { return storeSmall.set({ isOpen: false }); } }, "cancel"),
                    React.createElement(button_1.Button, { onClick: function () { return storeSmall.set({ isOpen: false }); }, primary: true }, "ok"))),
            React.createElement(button_1.Button, { onClick: function () { return storeSmall.set({ isOpen: true }); } }, "small")),
        React.createElement(storybook_state_1.State, { store: storeMedium },
            React.createElement(Modal_1.Modal, { onClose: function () { return storeMedium.set({ isOpen: false }); }, title: "Medium modal" },
                React.createElement(Modal_1.ModalBody, null,
                    React.createElement("p", null, "I'm a medium modal")),
                React.createElement(Modal_1.ModalFooter, null,
                    React.createElement(button_1.Button, { onClick: function () { return storeMedium.set({ isOpen: false }); } }, "cancel"),
                    React.createElement(button_1.Button, { onClick: function () { return storeMedium.set({ isOpen: false }); }, primary: true }, "ok"))),
            React.createElement(button_1.Button, { onClick: function () { return storeMedium.set({ isOpen: !storeMedium.get("isOpen") }); } }, "medium")),
        React.createElement(storybook_state_1.State, { store: storeLarge },
            React.createElement(Modal_1.Modal, { size: Modal_1.ModalSize.LARGE, onClose: function () { return storeLarge.set({ isOpen: false }); }, title: "Large modal" },
                React.createElement(Modal_1.ModalBody, null,
                    React.createElement("p", null, "I'm a large modal")),
                React.createElement(Modal_1.ModalFooter, null,
                    React.createElement(button_1.Button, { onClick: function () { return storeLarge.set({ isOpen: false }); } }, "cancel"),
                    React.createElement(button_1.Button, { onClick: function () { return storeLarge.set({ isOpen: false }); }, primary: true }, "ok"))),
            React.createElement(button_1.Button, { onClick: function () { return storeLarge.set({ isOpen: !storeLarge.get("isOpen") }); } }, "large")),
        React.createElement(storybook_state_1.State, { store: storeExtraLarge },
            React.createElement(Modal_1.Modal, { size: Modal_1.ModalSize.XLARGE, onClose: function () { return storeExtraLarge.set({ isOpen: false }); }, title: "Extra large modal" },
                React.createElement(Modal_1.ModalBody, null,
                    React.createElement("p", null, "I'm an extra large modal")),
                React.createElement(Modal_1.ModalFooter, null,
                    React.createElement(button_1.Button, { onClick: function () { return storeExtraLarge.set({ isOpen: false }); } }, "cancel"),
                    React.createElement(button_1.Button, { onClick: function () { return storeExtraLarge.set({ isOpen: false }); }, primary: true }, "ok"))),
            React.createElement(button_1.Button, { onClick: function () { return storeExtraLarge.set({ isOpen: !storeExtraLarge.get("isOpen") }); } }, "x-large")),
        React.createElement(storybook_state_1.State, { store: storeCustom },
            React.createElement(Modal_1.Modal, { size: Modal_1.ModalSize.CUSTOM, onClose: function () { return storeCustom.set({ isOpen: false }); }, title: "Custom modal", width: 500, height: 300, className: "custom-class" },
                React.createElement(Modal_1.ModalBody, null,
                    React.createElement("p", null, "I'm a Custom sized modal with 500 X 300")),
                React.createElement(Modal_1.ModalFooter, null,
                    React.createElement(button_1.Button, { onClick: function () { return storeCustom.set({ isOpen: false }); } }, "cancel"),
                    React.createElement(button_1.Button, { onClick: function () { return storeCustom.set({ isOpen: false }); }, primary: true }, "ok"))),
            React.createElement(button_1.Button, { onClick: function () { return storeCustom.set({ isOpen: !storeCustom.get("isOpen") }); } }, "Custom"))))); });
