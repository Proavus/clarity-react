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
var Wizard_1 = require("./Wizard");
var button_1 = require("../forms/button");
var badges_1 = require("../emphasis/badges");
var CustomStepComponent_1 = require("./CustomStepComponent");
var CustomStepComponentRef = React.createRef();
// Refrence to call step validation methods of wizard
var wizardSingleRefSync = React.createRef();
// Refrence to call resetWizard() of Wizard component
var wizardRef = React.createRef();
// Refrence to call step validation methods of wizard
var wizardRefSync = React.createRef();
// Refrence to call close methods of wizard
var wizardRefClose = React.createRef();
// Promise Function to call on left pane navigation link click
var handleNavClick = function () {
    return new Promise(function (resolve, reject) {
        alert("Power Navigation clicked");
        resolve();
    });
};
var SingleStep = [
    {
        stepName: "page 1",
        stepId: 0,
        stepComponent: React.createElement(CustomStepComponent_1.CustomStepComponent, { ref: CustomStepComponentRef, wizardRef: wizardSingleRefSync, stepId: 0 }),
        onStepSubmit: function () { return CustomStepComponentRef.current.resetComponent(); },
        isStepValid: function () { return true; },
    },
];
var stepsMedium = [
    { stepName: "page 1", stepId: 0, stepComponent: React.createElement("p", null, " Page 1") },
    { stepName: "page 2", stepId: 1, stepComponent: React.createElement("p", null, " Page 2") },
    { stepName: "page 3", stepId: 2, stepComponent: React.createElement("p", null, " Page 3") },
];
var stepsLarge = [
    { stepName: "page 1", stepId: 0, stepComponent: React.createElement("p", null, " Page 1") },
    { stepName: "page 2", stepId: 1, stepComponent: React.createElement("p", null, " Page 2") },
    { stepName: "page 3", stepId: 2, stepComponent: React.createElement("p", null, " Page 3") },
];
var stepsXLarge = [
    { stepName: "page 1", stepId: 0, stepComponent: React.createElement("p", null, " Page 1"), showStepTitle: false },
    { stepName: "page 2", stepId: 1, stepComponent: React.createElement("p", null, " Page 2") },
    { stepName: "page 3", stepId: 2, stepComponent: React.createElement("p", null, " Page 3") },
];
var stepsNavIcon = [
    {
        stepName: "Play",
        stepId: 0,
        stepComponent: React.createElement("p", null, " Play "),
        customStepNav: {
            stepNavIcon: "play",
            stepNavTitle: "Start",
            stepNavChildren: React.createElement(badges_1.Badge, { status: badges_1.BadgeStatus.BADGE_INFO }, "2"),
        },
    },
    {
        stepName: "Stop",
        stepId: 1,
        stepComponent: React.createElement("p", null, " Stop "),
        customStepNav: { stepNavIcon: "stop", stepNavChildren: React.createElement(badges_1.Badge, { color: badges_1.BadgeColor.ORANGE }, "3") },
    },
    {
        stepName: "Power",
        stepId: 2,
        stepComponent: React.createElement("p", null, " Power "),
        customStepNav: {
            stepNavIcon: "power",
            stepNavChildren: React.createElement(badges_1.Badge, { status: badges_1.BadgeStatus.BADGE_DANGER }, "15"),
            onNavClick: handleNavClick,
        },
    },
];
var stepsSyncValidation = [
    {
        stepName: "Step 1",
        stepId: 0,
        stepComponent: (React.createElement(button_1.Button, { onClick: function () {
                wizardRefSync.current.checkStepValidity(0);
            } },
            " ",
            "Finish Step 1",
            " ")),
        isStepValid: function () { return true; },
    },
    {
        stepName: "Step 2",
        stepId: 1,
        stepComponent: (React.createElement("div", null,
            " ",
            React.createElement(button_1.Button, { onClick: function () {
                    wizardRefSync.current.checkStepValidity(1);
                } },
                " ",
                "Finish Step 2",
                " "),
            " ")),
        isStepValid: function () { return true; },
    },
    {
        stepName: "Step 3",
        stepId: 2,
        stepComponent: (React.createElement(button_1.Button, { onClick: function () {
                wizardRefSync.current.checkStepValidity(2);
            } },
            " ",
            "Finish Step 3",
            " ")),
        isStepValid: function () { return true; },
    },
];
var stepsAsyncValidation = [
    { stepName: "Step 1", stepId: 0, stepComponent: React.createElement("p", null, " Step 1 "), isStepValid: function () { return true; } },
    { stepName: "Step 2", stepId: 1, stepComponent: React.createElement("p", null, " Step 2 "), isStepValid: function () { return false; } },
    {
        stepName: "Step 3",
        stepId: 2,
        stepComponent: (React.createElement("p", null,
            " ",
            "Step 3 ",
            React.createElement("div", null, " Error at Step 2"),
            " ")),
        isStepValid: function () { return true; },
    },
];
// Function to close and reset wizard
var closeWizard = function () {
    return new Promise(function (resolve, reject) {
        wizardRefClose.current.close();
        wizardRefClose.current.resetWizard();
        resolve();
    });
};
var stepclosewizard = [
    { stepName: "page 1", stepId: 0, stepComponent: React.createElement("p", null, " Page 1"), onStepSubmit: closeWizard },
    { stepName: "page 2", stepId: 1, stepComponent: React.createElement("p", null, " Page 2"), onStepSubmit: closeWizard },
    { stepName: "page 3", stepId: 2, stepComponent: React.createElement("p", null, " Page 3"), onStepSubmit: closeWizard },
];
var storeMedium = new storybook_state_1.Store({ show: false });
var storeLarge = new storybook_state_1.Store({ show: false });
var storeXlarge = new storybook_state_1.Store({ show: false });
var storeSingleStep = new storybook_state_1.Store({ show: false });
var storeDefaultState = new storybook_state_1.Store({ show: false });
var storeCustomButtons = new storybook_state_1.Store({ show: false });
var storeWithoutNav = new storybook_state_1.Store({ show: false });
var storeNavWithIcon = new storybook_state_1.Store({ show: false });
var storeSyncValidation = new storybook_state_1.Store({ show: false });
var storeAsyncValidation = new storybook_state_1.Store({ show: false });
var storeResetWizard = new storybook_state_1.Store({ show: false });
var storeCloseWizard = new storybook_state_1.Store({ show: false });
react_1.storiesOf("Wizard", module)
    .add("Wizard Sizes", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeMedium.set({ show: true }); } }, "MEDIUM"),
        React.createElement(button_1.Button, { onClick: function () { return storeLarge.set({ show: true }); } }, "LARGE"),
        React.createElement(button_1.Button, { onClick: function () { return storeXlarge.set({ show: true }); } }, "XLARGE"),
        React.createElement(storybook_state_1.State, { store: storeMedium, key: "store-1" },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Medium-Sized Wizard", steps: stepsMedium, onClose: function () { return storeMedium.set({ show: false }); } })),
        React.createElement(storybook_state_1.State, { store: storeLarge, key: "store-2" },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.LARGE, title: "Large-Sized Wizard", steps: stepsLarge, onClose: function () { return storeLarge.set({ show: false }); } })),
        React.createElement(storybook_state_1.State, { store: storeXlarge, key: "store-3" },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.XLARGE, title: "XLarge-Sized Wizard", steps: stepsXLarge, onClose: function () { return storeXlarge.set({ show: false }); } }))))); })
    .add("Wizard with Single step ", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeSingleStep.set({ show: true }); } }, " Single Step "),
        React.createElement(storybook_state_1.State, { store: storeSingleStep },
            React.createElement(Wizard_1.Wizard, { ref: wizardSingleRefSync, size: Wizard_1.WizardSize.MEDIUM, title: "Wizard with Single Step", steps: SingleStep, validationType: Wizard_1.WizardValidationType.SYNC, onClose: function () { return storeSingleStep.set({ show: false }); } }))))); })
    .add("Wizard with deafult step ", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeDefaultState.set({ show: true }); } }, " OPEN AT STEP 2 "),
        React.createElement(storybook_state_1.State, { store: storeDefaultState },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Open Wizard at step 2", steps: stepsMedium, onClose: function () { return storeDefaultState.set({ show: false }); }, defaultStepId: 1 }))))); })
    .add("Overriding wizard buttons", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeCustomButtons.set({ show: true }); } }, " Custom Wizard buttons "),
        React.createElement(storybook_state_1.State, { store: storeCustomButtons },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Custom and default buttons", steps: stepsMedium, onClose: function () { return storeCustomButtons.set({ show: false }); }, nextButtonText: "Custom Next", finishButtonText: "Done" }))))); })
    .add("Wizard without NAV", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeWithoutNav.set({ show: true }); } }, " Wizard without NAV "),
        React.createElement(storybook_state_1.State, { store: storeWithoutNav },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Wizard Without Navigation Links", steps: stepsMedium, onClose: function () { return storeWithoutNav.set({ show: false }); }, showNav: false }))))); })
    .add("Wizard with custom NAV", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeNavWithIcon.set({ show: true }); } }, " Wizard with Icon NAV "),
        React.createElement(storybook_state_1.State, { store: storeNavWithIcon },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Wizard with Icon Navigation Links", steps: stepsNavIcon, onClose: function () { return storeNavWithIcon.set({ show: false }); } }))))); })
    .add("Wizard with Reset", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeResetWizard.set({ show: true }); } }, " Reset on Finish "),
        React.createElement(storybook_state_1.State, { store: storeResetWizard },
            React.createElement(Wizard_1.Wizard, { ref: wizardRef, size: Wizard_1.WizardSize.MEDIUM, title: "Reset Wizard on Finish", steps: stepsMedium, onClose: function () { return storeResetWizard.set({ show: false }); }, onFinish: function () { return wizardRef.current.resetWizard(); } }))))); })
    .add("Wizard which will close on any step", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeCloseWizard.set({ show: true }); } }, " Wizard with Close on any Step "),
        React.createElement(storybook_state_1.State, { store: storeCloseWizard },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Wizard which can close on any step", steps: stepclosewizard, ref: wizardRefClose, onClose: function () { return storeCloseWizard.set({ show: false }); }, nextButtonText: "Apply", finishButtonText: "Apply", showPreviousButton: false }))))); })
    .add("Wizard Validation", function () { return (React.createElement("div", { className: "clr-row" },
    React.createElement("div", { className: "clr-col-12" },
        React.createElement(button_1.Button, { onClick: function () { return storeSyncValidation.set({ show: true }); } }, " Synchronous validation "),
        React.createElement(button_1.Button, { onClick: function () { return storeAsyncValidation.set({ show: true }); } }, " Asynchronous validation "),
        React.createElement(storybook_state_1.State, { store: storeSyncValidation },
            React.createElement(Wizard_1.Wizard, { ref: wizardRefSync, size: Wizard_1.WizardSize.MEDIUM, title: "Wizard with synchronous validation", steps: stepsSyncValidation, validationType: Wizard_1.WizardValidationType.SYNC, onClose: function () { return storeSyncValidation.set({ show: false }); } })),
        React.createElement(storybook_state_1.State, { store: storeAsyncValidation },
            React.createElement(Wizard_1.Wizard, { size: Wizard_1.WizardSize.MEDIUM, title: "Wizard with Asynchronous Validation", steps: stepsAsyncValidation, validationType: Wizard_1.WizardValidationType.ASYNC, onClose: function () { return storeAsyncValidation.set({ show: false }); } }))))); });
