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
exports.WizardSize = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var WizardNavigation_1 = __importStar(require("./WizardNavigation"));
var WizardHeader_1 = __importDefault(require("./WizardHeader"));
var WizardStep_1 = __importDefault(require("./WizardStep"));
var WizardFooter_1 = __importDefault(require("./WizardFooter"));
/**
 * Enum for wizard sizes:
 * @param {MEDIUM} midum size wizard
 * @param {LARGE} large size wizard
 * @param {XLARGE} xtra-large size wizard
 */
var WizardSize;
(function (WizardSize) {
    WizardSize["MEDIUM"] = "md";
    WizardSize["LARGE"] = "lg";
    WizardSize["XLARGE"] = "xl";
})(WizardSize = exports.WizardSize || (exports.WizardSize = {}));
var modalContentWrapperClassNames = utils_1.classNames([ClassNames_1.ClassNames.MODAL_CONTENT_WRAPPER, ClassNames_1.ClassNames.NG_TNS]);
var modalContentClassNames = utils_1.classNames([ClassNames_1.ClassNames.MODAL_CONTENT, ClassNames_1.ClassNames.NG_TNS]);
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // and this step's position in the list
    // progressionStatus determines the status of the wizard based on the current step properties
    Wizard.progressionStatus = function (currentStepID, steps) {
        if (steps.length > 0 && steps[currentStepID]) {
            var currentStep = steps[currentStepID];
            return {
                previousStepExists: currentStepID !== steps[0].props.id,
                nextStepExists: currentStepID !== steps[steps.length - 1].props.id,
                currentStepIsCompleteAndValid: (currentStep.props.valid && currentStep.props.complete) || false,
                currentStepTitle: currentStep.props.name,
            };
        }
        return {
            previousStepExists: false,
            nextStepExists: false,
            currentStepIsCompleteAndValid: false,
            currentStepTitle: "",
        };
    };
    // Function to keep scroll bar on top on step change
    Wizard.prototype.scrollToTop = function () {
        document.getElementsByClassName("modal-body")[0].scrollTo(0, 0);
    };
    Wizard.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, closable = _a.closable, currentStepID = _a.currentStepID, dataqa = _a.dataqa, isInline = _a.isInline, onClose = _a.onClose, onPrevious = _a.onPrevious, onNext = _a.onNext, onComplete = _a.onComplete, onNavigateTo = _a.onNavigateTo, show = _a.show, showCancel = _a.showCancel, showNavigation = _a.showNavigation, showStepTitle = _a.showStepTitle, showTitle = _a.showTitle, title = _a.title, size = _a.size, style = _a.style;
        // initialize a bunch of class names
        var wizardSize = "wizard-" + size;
        var modalSize = "modal-" + size;
        var wizardClassNames = utils_1.classNames([
            isInline && ClassNames_1.ClassNames.WIZARD_INLINE + " " + ClassNames_1.ClassNames.WIZARD_NO_SHADOW,
            ClassNames_1.ClassNames.WIZARD,
            wizardSize,
            ClassNames_1.ClassNames.NG_TNS,
            ClassNames_1.ClassNames.WIZARD_OPEN,
            className,
        ]);
        var modalClassNames = utils_1.classNames([ClassNames_1.ClassNames.WIZARD_MODAL_DIALOG, modalSize]);
        // get a list of all of the step IDs in component children
        var navigable = true;
        var maybeSteps = React.Children.map(children, function (child) {
            if (React.isValidElement(child) && child.type === WizardStep_1.default) {
                var step = React.cloneElement(child, Object.assign({}, child.props, {
                    currentStepID: currentStepID,
                    navigable: navigable,
                }));
                // subsequent iterations are navigable if all previous iterations are valid
                // @ts-ignore //step is of type WizardStep not ReactElement<WizardStep>
                navigable = navigable && step.props.valid && step.props.complete;
                return step;
            }
        });
        var allStepsCompleteAndValid = navigable; // if navigable stayed true throughout, then the wizard is completed
        var steps = (maybeSteps ? maybeSteps : []).filter(function (el) { return el !== null; }); // compact the step list
        var _b = Wizard.progressionStatus(currentStepID, steps), currentStepTitle = _b.currentStepTitle, currentStepIsCompleteAndValid = _b.currentStepIsCompleteAndValid, nextStepExists = _b.nextStepExists, previousStepExists = _b.previousStepExists;
        var navigationSteps = steps.map(function (step, index) { return (
        // @ts-ignore // since step is of type WizardStep, name and id are ensured on WizardNavigationStep
        React.createElement(WizardNavigation_1.WizardNavigationStep, __assign({ key: step.key || index, currentStepID: currentStepID, onSelectStep: onNavigateTo }, step.props))); });
        return (React.createElement(React.Fragment, null, show && (React.createElement("div", { "data-qa": dataqa, className: wizardClassNames, style: style },
            React.createElement("span", { className: "offscreen-focus-rebounder ng-tns-c167-4 ng-star-inserted" }),
            React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_MODAL },
                React.createElement("div", { className: modalClassNames, role: "dialog", "aria-hidden": "false", "aria-labelledby": "clr-id-3" },
                    React.createElement("div", { className: "clr-sr-only ng-tns-c167-4" }),
                    React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_OUTER_WRAPPER, style: ClassNames_1.Styles.WIZARD_OUTER_WRAPPER },
                        React.createElement("div", { className: modalContentWrapperClassNames },
                            React.createElement(WizardNavigation_1.default, { currentStepID: currentStepID, show: showNavigation, showTitle: showTitle, title: title }, navigationSteps),
                            React.createElement("div", { className: modalContentClassNames },
                                React.createElement(WizardHeader_1.default, { title: currentStepTitle, showTitle: showStepTitle, onClose: onClose, closable: closable }),
                                React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_BODY },
                                    React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_CONTENT }, steps)),
                                React.createElement(WizardFooter_1.default, __assign({ currentStepID: currentStepID, disableNext: !currentStepIsCompleteAndValid, disableComplete: !allStepsCompleteAndValid, showCancel: showCancel, showComplete: !nextStepExists, showNext: nextStepExists, showPrevious: previousStepExists, onClose: onClose, onComplete: onComplete, onNext: onNext, onPrevious: onPrevious }, this.footerProps())))),
                        React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_GHOST_WRAPPER },
                            React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_GHOST_1, style: ClassNames_1.Styles.MODAL_GHOST_1 }),
                            React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_GHOST_2, style: ClassNames_1.Styles.MODAL_GHOST_2 })))),
                React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_BACKDROP, "aria-hidden": "true" }))))));
    };
    // inherited properties from the Wizard to the WizardFooter
    Wizard.prototype.footerProps = function () {
        var _a = this.props, cancelText = _a.cancelText, cancelClassName = _a.cancelClassName, completeClassName = _a.completeClassName, completeText = _a.completeText, customFooter = _a.customFooter, nextClassName = _a.nextClassName, nextText = _a.nextText, previousClassName = _a.previousClassName, previousText = _a.previousText, dataqa = _a.dataqa, showCancel = _a.showCancel;
        return {
            cancelText: cancelText,
            cancelClassName: cancelClassName,
            completeClassName: completeClassName,
            completeText: completeText,
            customFooter: customFooter,
            nextClassName: nextClassName,
            nextText: nextText,
            previousClassName: previousClassName,
            previousText: previousText,
            dataqa: dataqa,
            showCancel: showCancel,
        };
    };
    // By default Wizard will have following prop values
    Wizard.defaultProps = {
        isInline: false,
        previousText: "BACK",
        nextText: "NEXT",
        cancelText: "CANCEL",
        completeText: "FINISH",
        size: WizardSize.MEDIUM,
        showNavigation: true,
        showStepTitle: true,
        showTitle: true,
        onComplete: function () {
            // by default do nothing in addition the the default handler
        },
        onPrevious: function () {
            // by default do nothing in addition the the default handler
        },
        onNext: function () {
            // by default do nothing in addition the the default handler
        },
        onClose: function () {
            // by default do nothing in addition the the default handler
        },
    };
    return Wizard;
}(React.PureComponent));
exports.default = Wizard;
