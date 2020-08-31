"use strict";
/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var Wizard_1 = __importStar(require("./Wizard"));
var WizardStep_1 = __importStar(require("./WizardStep"));
var storybook_state_1 = require("@sambego/storybook-state");
var button_1 = require("../forms/button");
var Input_1 = require("../forms/input/Input");
var select_1 = require("../forms/select");
var addon_actions_1 = require("@storybook/addon-actions");
var steps = [];
// Function to create array of step data
function buildStepData(numberOfSteps) {
    if (numberOfSteps === void 0) { numberOfSteps = 1; }
    for (var i = 0; i < numberOfSteps; i++) {
        steps.push({ name: "page " + i, type: null });
    }
}
// Function to create steps UI
function buildStepsUI() {
    var StepUI = steps.map(function (step, index) {
        return (react_1.default.createElement(WizardStep_1.default, { id: index, key: index, name: step.name, type: step.type, valid: true, complete: true }));
    });
    return StepUI;
}
// Function to build steps for story
function buildSteps(numberOfSteps) {
    if (numberOfSteps === void 0) { numberOfSteps = 1; }
    buildStepData(numberOfSteps);
    return buildStepsUI();
}
// Function to update steps array for story
function updateSteps(index, action) {
    if (action === "insert") {
        // Insert new step
        steps.splice(index, 0, { index: index, name: "page new", type: WizardStep_1.WizardStepType.SUB_STEP });
    }
    else if (action === "remove") {
        steps.splice(index, 1);
    }
    return buildStepsUI();
}
var store = new storybook_state_1.Store({
    open: false,
    activeWizard: "",
    basicInfoValid: true,
    basicInfoComplete: false,
    currentWizardStepID: 0,
    steps: buildSteps(2),
    addStep: function (index, numberOfSteps) {
        if (numberOfSteps === void 0) { numberOfSteps = 1; }
        return store.set({
            open: true,
            steps: updateSteps(index, "insert"),
        });
    },
    removeStep: function (index, numberOfSteps) {
        if (numberOfSteps === void 0) { numberOfSteps = 1; }
        return store.set({
            open: true,
            steps: updateSteps(index, "remove"),
        });
    },
    handleToggleWizard: function (size) {
        return store.set({
            open: true,
            activeWizard: size,
        });
    },
    handleClose: function () {
        return store.set({
            open: false,
        });
    },
    handleNext: function () {
        addon_actions_1.action("next");
        store.set({
            currentWizardStepID: store.get("currentWizardStepID") + 1,
        });
    },
    handlePrevious: function () {
        return addon_actions_1.action("previous") &&
            store.set({
                currentWizardStepID: store.get("currentWizardStepID") - 1,
            });
    },
    handleComplete: function () {
        return addon_actions_1.action("complete") &&
            store.set({
                open: false,
            });
    },
    handleSelectStep: function (selectedStepID) {
        addon_actions_1.action("selected step ", selectedStepID) &&
            store.set({
                currentWizardStepID: selectedStepID,
            });
    },
    handleValidate: function (evt) {
        if (evt.target.value.length > 2) {
            store.set({
                basicInfoValid: true,
                basicInfoComplete: true,
            });
        }
        else {
            store.set({
                basicInfoValid: false,
                basicInfoComplete: false,
            });
        }
    },
});
react_2.storiesOf("New Wizard", module)
    .add("Wizard Sizes", function (_props) { return (react_1.default.createElement(storybook_state_1.State, { store: store }, function (state) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("p", null, "Click to activate a wizard of the described size"),
    react_1.default.createElement(button_1.Button, { key: 0, primary: true, link: true, onClick: function () { return state.handleToggleWizard(Wizard_1.WizardSize.MEDIUM); } }, "MEDIUM"),
    react_1.default.createElement(button_1.Button, { key: 1, primary: true, link: true, onClick: function () { return state.handleToggleWizard(Wizard_1.WizardSize.LARGE); } }, "LARGE"),
    react_1.default.createElement(button_1.Button, { key: 2, primary: true, link: true, onClick: function () { return state.handleToggleWizard(Wizard_1.WizardSize.XLARGE); } }, "X-LARGE"),
    react_1.default.createElement(Wizard_1.default, { currentStepID: state.currentWizardStepID, key: 3, size: Wizard_1.WizardSize.MEDIUM, show: state.open && state.activeWizard === Wizard_1.WizardSize.MEDIUM, showCancel: true, onClose: function () { return state.handleClose(); }, onNext: state.handleNext, onPrevious: state.handlePrevious, onComplete: state.handleComplete, onNavigateTo: state.handleSelectStep, title: "Medium Wizard" },
        react_1.default.createElement(WizardStep_1.default, { id: 0, name: "Basic Information", valid: state.basicInfoValid, complete: state.basicInfoComplete },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Input_1.Input, { label: "Name", name: "name", onChange: state.handleValidate }),
                react_1.default.createElement(Input_1.Input, { label: "Height (feet)", defaultValue: 1, max: 10, min: 1, name: "heightFeet", type: "number", onChange: state.handleValidate }),
                react_1.default.createElement(Input_1.Input, { label: "Height (inches)", defaultValue: 1, max: 10, min: 1, name: "heightInches", type: "number", onChange: state.handleValidate }),
                react_1.default.createElement(Input_1.Input, { label: "Weight", name: "weight", placeholder: "lbs", onChange: state.handleValidate }),
                react_1.default.createElement(select_1.Select, { value: "3", label: "Gender", onChange: state.handleValidate },
                    react_1.default.createElement(select_1.SelectOption, { value: "1" }, " Male "),
                    react_1.default.createElement(select_1.SelectOption, { value: "2" }, " Female "),
                    react_1.default.createElement(select_1.SelectOption, { value: "3" }, " Non-binary ")))),
        react_1.default.createElement(WizardStep_1.default, { id: 1, name: "Power" }),
        react_1.default.createElement(WizardStep_1.default, { id: 2, name: "Weakness" }),
        react_1.default.createElement(WizardStep_1.default, { id: 3, name: "Summary" })),
    react_1.default.createElement(Wizard_1.default, { currentStepID: state.currentWizardStepID, key: 4, size: Wizard_1.WizardSize.LARGE, show: state.open && state.activeWizard === Wizard_1.WizardSize.LARGE, title: "Medium Wizard", onClose: state.handleClose, onNavigateTo: state.handleSelectStep },
        react_1.default.createElement(WizardStep_1.default, { id: 0, key: 0, name: "Page 1" }),
        react_1.default.createElement(WizardStep_1.default, { id: 1, key: 1, name: "Page 2" })),
    react_1.default.createElement(Wizard_1.default, { currentStepID: state.currentWizardStepID, key: 5, size: Wizard_1.WizardSize.XLARGE, show: state.open && state.activeWizard === Wizard_1.WizardSize.XLARGE, title: "Medium Wizard", onClose: state.handleClose, onNext: state.handleNext, onPrevious: state.handlePrevious, onComplete: state.handleComplete, onNavigateTo: state.handleSelectStep },
        react_1.default.createElement(WizardStep_1.default, { id: 0, key: 0, name: "Page 1" }),
        react_1.default.createElement(WizardStep_1.default, { id: 1, key: 1, name: "Page 2" })))); })); })
    .add("wizard with rich titles", function (_props) { return (react_1.default.createElement(storybook_state_1.State, { store: store }, function (state) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(button_1.Button, { key: 0, primary: true, link: true, onClick: function () { return state.handleToggleWizard(Wizard_1.WizardSize.MEDIUM); } }, "OPEN WIZARD"),
    react_1.default.createElement(Wizard_1.default, { currentStepID: state.currentWizardStepID, key: 1, size: Wizard_1.WizardSize.MEDIUM, show: state.open, title: react_1.default.createElement("h1", null, "Rich Text Wizard Title"), onClose: function () { return state.handleClose(); }, onNext: function () { return state.handleNext(); }, onPrevious: function () { return state.handlePrevious(); }, onComplete: function () { return state.handleComplete(); }, onNavigateTo: state.handleSelectStep },
        react_1.default.createElement(WizardStep_1.default, { id: 0, key: 0, name: "Page 1" })))); })); })
    .add("wizard with custom footer", function (_props) { return (react_1.default.createElement(storybook_state_1.State, { store: store }, function (state) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(button_1.Button, { key: 0, primary: true, link: true, onClick: function () { return state.handleToggleWizard(Wizard_1.WizardSize.LARGE); } }, "OPEN WIZARD"),
    react_1.default.createElement(Wizard_1.default, { currentStepID: state.currentWizardStepID, key: 1, size: Wizard_1.WizardSize.LARGE, show: state.open, title: "Wizard with custom footer", onClose: function () { return state.handleClose(); }, onNext: function () { return state.handleNext(); }, onPrevious: function () { return state.handlePrevious(); }, onComplete: function () { return state.handleComplete(); }, customFooter: function (props) {
            return !props.disableComplete && react_1.default.createElement(Input_1.Input, { helperText: "Save As", name: "save-as" });
        }, onNavigateTo: state.handleSelectStep },
        react_1.default.createElement(WizardStep_1.default, { id: 0, key: 0, name: "Page 1", valid: state.basicInfoValid, complete: state.basicInfoValid },
            react_1.default.createElement(Input_1.Input, { name: "some-input", label: "Some Input", onChange: state.handleValidate }))))); })); })
    .add("wizard with add or remove steps", function (_props) { return (react_1.default.createElement(storybook_state_1.State, { store: store }, function (state) { return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(button_1.Button, { key: 0, primary: true, link: true, onClick: function () { return state.handleToggleWizard(Wizard_1.WizardSize.LARGE); } }, "OPEN WIZARD"),
    react_1.default.createElement(Wizard_1.default, { currentStepID: state.currentWizardStepID, key: 1, size: Wizard_1.WizardSize.LARGE, show: state.open, title: "Wizard with dynamic step", onClose: function () { return state.handleClose(); }, onNext: function () { return state.addStep(1); }, onPrevious: function () { return state.handlePrevious(); }, onComplete: function () { return state.handleComplete(); }, onNavigateTo: state.handleSelectStep, customFooter: function (props) { return (react_1.default.createElement(button_1.Button, { primary: true, link: true, onClick: function () { return state.removeStep(state.currentWizardStepID); } }, "Delete Step")); } }, state.steps))); })); });
