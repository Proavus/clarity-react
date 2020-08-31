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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = exports.WizardValidationType = exports.WizardSize = void 0;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var icon_1 = require("../icon");
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var button_1 = require("../forms/button");
var vertical_nav_1 = require("../layout/vertical-nav");
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
/**
 * Enum for sorting order :
 * @param {ASYNC} Asynchronous validation
 * @param {SYNC} Synchronous validation
 * @param {NONE} no validation
 */
var WizardValidationType;
(function (WizardValidationType) {
    WizardValidationType["ASYNC"] = "Asynchronous";
    WizardValidationType["SYNC"] = "Synchronous";
    WizardValidationType["NONE"] = "None";
})(WizardValidationType = exports.WizardValidationType || (exports.WizardValidationType = {}));
//Quality Engineering Fields
var dataqa_wizard = "prefix";
var dataqa_wizard_btn_cancel = "prefix_btn_cancel";
var dataqa_wizard_btn_previous = "prefix_btn_back";
var dataqa_wizard_btn_next = "prefix_btn_next";
var dataqa_wizard_btn_finish = "prefix_btn_finish";
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.divRef = null;
        // Default state of wizard - Need this to reset Wizard state
        _this.initialState = {
            show: _this.props.show !== undefined ? _this.props.show : false,
            currentStepId: _this.props.defaultStepId,
            showFinishButton: _this.props.defaultStepId === _this.props.steps.length - 1 ? true : false,
            disableFinishButton: false,
            showPreviousButton: _this.props.showPreviousButton ? _this.props.showPreviousButton : false,
            showCancelButton: _this.props.showCancelButton ? _this.props.showCancelButton : true,
            showNextButton: _this.props.defaultStepId === _this.props.steps.length - 1 ? false : true,
            disableNextButton: false,
            allSteps: _this.props.steps,
        };
        // Initial state of wizard
        _this.state = _this.initialState;
        return _this;
    }
    /* ##########  Wizard lifestyle hooks start  ############ */
    Wizard.prototype.componentWillMount = function () {
        this.createRefDiv();
        this.initStepsState();
    };
    Wizard.prototype.createRefDiv = function () {
        var isInline = this.props.isInline;
        if (this.divRef === null) {
            var el = document.createElement("div");
            document.body.appendChild(el);
            this.divRef = el;
        }
        if (isInline) {
            document.body.classList.add(ClassNames_1.ClassNames.NO_SCROLLING);
        }
    };
    Wizard.prototype.cleanup = function () {
        var isInline = this.props.isInline;
        if (this.divRef !== null) {
            document.body.removeChild(this.divRef);
            this.divRef = null;
        }
        if (isInline) {
            document.body.classList.remove(ClassNames_1.ClassNames.NO_SCROLLING);
        }
    };
    // Initialize state of wizard steps
    Wizard.prototype.initStepsState = function () {
        var _this = this;
        var _a = this.props, validationType = _a.validationType, steps = _a.steps;
        // For 1st step disable Next button for synchronous validation
        var disableNext = validationType === WizardValidationType.SYNC ? true : false;
        var disableFinish = this.state.disableFinishButton;
        // In case of single step wizard we need to disable Finish button for synchronous validation
        if (steps.length === 1) {
            disableFinish = disableNext;
        }
        steps.map(function (step, key) {
            // Enable Nav for first step in case of Synchronous validation
            var disableNav = (step.stepId === 0 && validationType === WizardValidationType.SYNC) ||
                [WizardValidationType.ASYNC, WizardValidationType.NONE].includes(validationType)
                ? false
                : true;
            _this.setState({
                disableNextButton: _this.state.disableNextButton !== disableNext ? disableNext : undefined,
                disableFinishButton: _this.state.disableFinishButton !== disableFinish ? disableFinish : undefined,
                allSteps: __spreadArrays(_this.state.allSteps, [
                    ((_this.state.allSteps[step.stepId].stepCompleted = false),
                        (_this.state.allSteps[step.stepId].disableNav = disableNav)),
                ]),
            });
        });
    };
    Wizard.prototype.componentWillUnmount = function () {
        this.cleanup();
    };
    /* ##########  Wizard lifestyle hooks end  ############ */
    /* ##########  Wizard private methods start  ############ */
    Wizard.prototype.getStepObj = function (stepId) {
        return this.state.allSteps[stepId];
    };
    // Function to return details of current step
    Wizard.prototype.getCurrentStepDetails = function () {
        return this.getStepObj(this.state.currentStepId);
    };
    // Close the wizard
    Wizard.prototype.close = function () {
        var onClose = this.props.onClose;
        this.setState({ show: false });
        onClose && onClose();
    };
    // Make wizard visible
    Wizard.prototype.show = function () {
        this.setState({ show: true });
    };
    // Reset Wizard state
    Wizard.prototype.resetWizard = function () {
        var _this = this;
        var steps = this.props.steps;
        steps.map(function (step, key) {
            _this.setState({
                allSteps: __spreadArrays(_this.state.allSteps, [(_this.state.allSteps[step.stepId].stepCompleted = false)]),
            });
        });
        this.setState(this.initialState);
    };
    Wizard.prototype.nextButtonClick = function () {
        var _this = this;
        var _a = this.props, onNext = _a.onNext, steps = _a.steps;
        var nextStepId = this.state.currentStepId + 1;
        var currenstStep = this.getStepObj(this.state.currentStepId);
        // Check validity of current step before going next
        var _b = this.checkStepValidity(this.state.currentStepId), validState = _b.validState, disableNextStep = _b.disableNextStep;
        if (!disableNextStep && nextStepId <= steps.length - 1) {
            if (currenstStep.onStepSubmit) {
                currenstStep
                    .onStepSubmit()
                    .then(function () {
                    onNext && onNext();
                })
                    .then(function () {
                    _this.modifyButtonStates(nextStepId);
                });
            }
            else if (onNext) {
                onNext().then(function () {
                    _this.modifyButtonStates(nextStepId);
                });
            }
            else {
                this.modifyButtonStates(nextStepId);
            }
        }
    };
    Wizard.prototype.previousButtonClick = function () {
        var _this = this;
        var onPrevious = this.props.onPrevious;
        var previousStepId = this.state.currentStepId - 1;
        if (onPrevious) {
            onPrevious().then(function () {
                if (previousStepId >= 0) {
                    _this.modifyButtonStates(previousStepId);
                }
            });
        }
        else {
            this.modifyButtonStates(previousStepId);
        }
    };
    // Close the wizard on finish
    Wizard.prototype.finishButtonClick = function () {
        var _a = this.props, onFinish = _a.onFinish, validationType = _a.validationType, isInline = _a.isInline;
        var finishWizard;
        var currenstStep = this.getStepObj(this.state.currentStepId);
        var _b = this.checkStepValidity(this.state.currentStepId), validState = _b.validState, disableNextStep = _b.disableNextStep;
        if (validationType === WizardValidationType.ASYNC) {
            var _c = this.checkValidityOfAllSteps(), validationData = _c.validationData, allStepsValid = _c.allStepsValid;
            finishWizard = allStepsValid;
        }
        else {
            finishWizard = !disableNextStep;
        }
        if (finishWizard) {
            if (currenstStep.onStepSubmit) {
                currenstStep.onStepSubmit().then(function () {
                    onFinish && onFinish();
                });
            }
            else {
                onFinish && onFinish();
            }
            if (!isInline) {
                this.close();
            }
        }
    };
    Wizard.prototype.modifyButtonStates = function (stepId) {
        var _a = this.props, steps = _a.steps, validationType = _a.validationType, showPreviousButton = _a.showPreviousButton, showCancelButton = _a.showCancelButton;
        var step = this.getStepObj(stepId);
        this.scrollToTop();
        if (stepId === 0) {
            /* for first step : If currenst step is first step of workflow
          then hide privious button and show next button */
            this.setState({
                showPreviousButton: false,
                showNextButton: true,
                disableNextButton: !step.stepCompleted && validationType == WizardValidationType.SYNC ? true : false,
                showFinishButton: false,
                showCancelButton: showCancelButton !== undefined ? showCancelButton : true,
                currentStepId: step.stepId,
            });
        }
        else if (stepId === steps.length - 1) {
            /* for last step : If currenst step is last step of workflow
          then hide next button and show privious and finish buttons */
            this.setState({
                showPreviousButton: showPreviousButton !== undefined ? showPreviousButton : true,
                showFinishButton: true,
                disableFinishButton: !step.stepCompleted && validationType == WizardValidationType.SYNC ? true : false,
                showNextButton: false,
                showCancelButton: showCancelButton !== undefined ? showCancelButton : true,
                currentStepId: step.stepId,
            });
        }
        else {
            /* for in between step : If currenst step is not last or first step of workflow
        then show next , privious buttons and hide finish button */
            this.setState({
                showPreviousButton: showPreviousButton !== undefined ? showPreviousButton : true,
                showNextButton: true,
                disableNextButton: !step.stepCompleted && validationType == WizardValidationType.SYNC ? true : false,
                showFinishButton: false,
                showCancelButton: showCancelButton !== undefined ? showCancelButton : true,
                currentStepId: step.stepId,
            });
        }
    };
    // Function to call on left side navigation click
    Wizard.prototype.navigationClick = function (stepId) {
        var _this = this;
        var step = this.getStepObj(stepId);
        if (step && step.customStepNav && step.customStepNav.onNavClick) {
            step.customStepNav.onNavClick().then(function () {
                _this.modifyButtonStates(stepId);
            });
        }
        else {
            this.modifyButtonStates(stepId);
        }
    };
    Wizard.prototype.getStepNavClasses = function (stepId) {
        var classNames = [ClassNames_1.ClassNames.WIZARD_STEPNAV_LINK];
        if (this.state.currentStepId === stepId)
            classNames.push(ClassNames_1.ClassNames.ACTIVE);
        if (this.state.allSteps[stepId].stepCompleted)
            classNames.push(ClassNames_1.ClassNames.COMPLETE);
        if (this.props.navLinkClasses)
            classNames.push(this.props.navLinkClasses);
        // TODO: Add class error if step is not valid
        return classNames;
    };
    // Check validity of given step
    Wizard.prototype.checkStepValidity = function (stepId) {
        var _a = this.props, validationType = _a.validationType, steps = _a.steps;
        var validationState = true;
        var disableNext = false;
        var currenstStep = this.getStepObj(stepId);
        var nextStep = stepId == steps.length - 1 ? currenstStep : this.state.allSteps[stepId + 1];
        if (currenstStep.isStepValid !== undefined)
            validationState = currenstStep.isStepValid();
        if (!validationState && validationType === WizardValidationType.SYNC)
            disableNext = true;
        if (currenstStep.stepCompleted !== validationState) {
            this.setState({
                disableNextButton: this.state.disableNextButton !== disableNext ? disableNext : undefined,
                disableFinishButton: this.state.disableFinishButton !== disableNext ? disableNext : undefined,
                allSteps: __spreadArrays(this.state.allSteps, [
                    ((currenstStep.stepCompleted = validationState), (nextStep.disableNav = disableNext)),
                ]),
            });
        }
        return {
            validState: validationState,
            disableNextStep: disableNext,
        };
    };
    // Check validity of All steps
    Wizard.prototype.checkValidityOfAllSteps = function () {
        var _this = this;
        var steps = this.props.steps;
        var validationData = {};
        steps.map(function (step, key) {
            var _a = _this.checkStepValidity(step.stepId), validState = _a.validState, disableNextStep = _a.disableNextStep;
            validationData[step.stepId] = validState;
        });
        var allStepsValid = utils_1.allTrue(validationData);
        return {
            validationData: validationData,
            allStepsValid: allStepsValid,
        };
    };
    // Build DOM for Wizard footer
    Wizard.prototype.buildWizardFooter = function () {
        var _a = this.props, cancelButtonText = _a.cancelButtonText, // prettier
        nextButtonText = _a.nextButtonText, previousButtonText = _a.previousButtonText, finishButtonText = _a.finishButtonText, nextButtonClassName = _a.nextButtonClassName, previousButtonClassName = _a.previousButtonClassName, finishButtonClassName = _a.finishButtonClassName, cancelButtonClassName = _a.cancelButtonClassName, customFooter = _a.customFooter;
        var _b = this.state, showPreviousButton = _b.showPreviousButton, showNextButton = _b.showNextButton, showFinishButton = _b.showFinishButton, showCancelButton = _b.showCancelButton, currentStepId = _b.currentStepId;
        var stepObj = this.getStepObj(currentStepId);
        return (React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_FOOTER },
            React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_FOOTER_BUTTON },
                customFooter,
                stepObj.stepFooter,
                showCancelButton && (React.createElement(button_1.Button, { key: cancelButtonText, className: cancelButtonClassName, link: true, dataqa: dataqa_wizard_btn_cancel, onClick: this.close.bind(this) },
                    cancelButtonText,
                    " ")),
                showPreviousButton && (React.createElement(button_1.Button, { key: previousButtonText, className: previousButtonClassName, dataqa: dataqa_wizard_btn_previous, onClick: this.previousButtonClick.bind(this) },
                    previousButtonText,
                    " ")),
                showNextButton && (React.createElement(button_1.Button, { key: nextButtonText, className: nextButtonClassName, primary: true, disabled: this.state.disableNextButton, dataqa: dataqa_wizard_btn_next, onClick: this.nextButtonClick.bind(this) },
                    nextButtonText,
                    " ")),
                showFinishButton && (React.createElement(button_1.Button, { key: finishButtonText, className: finishButtonClassName, state: button_1.ButtonState.SUCCESS, disabled: this.state.disableFinishButton, dataqa: dataqa_wizard_btn_finish, onClick: this.finishButtonClick.bind(this) }, finishButtonText))),
            " "));
    };
    // Build icon props if specified in WizardStep
    Wizard.prototype.buildStepIcon = function (step) {
        if (step.customStepNav !== undefined && step.customStepNav.stepNavIcon)
            return { shape: step.customStepNav.stepNavIcon };
        return undefined;
    };
    // Build DOM for Wizard NAV
    Wizard.prototype.buildWizardNav = function () {
        var _this = this;
        var _a = this.props, steps = _a.steps, title = _a.title, showNav = _a.showNav;
        return (React.createElement(vertical_nav_1.VerticalNav, { className: utils_1.classNames([ClassNames_1.ClassNames.WIZARD_STEPNAV_WRAPPER, ClassNames_1.ClassNames.NG_TNS]), style: ClassNames_1.Styles.WIZARD_STEPNAV_WRAPPER_STYLE },
            React.createElement("h2", { className: ClassNames_1.ClassNames.WIZARD_TITLE },
                React.createElement("span", { style: ClassNames_1.Styles.WIZARD_TITLE_STYLE }, title)),
            showNav && (React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_STEPNAV }, steps.map(function (step, key) {
                return (React.createElement("div", { className: utils_1.classNames(_this.getStepNavClasses(step.stepId)) },
                    React.createElement(button_1.Button, { disabled: _this.state.allSteps[step.stepId].disableNav, link: true, className: "clr-wizard-stepnav-link", onClick: _this.navigationClick.bind(_this, step.stepId), icon: _this.buildStepIcon(step) },
                        "\u00A0",
                        step.customStepNav !== undefined && step.customStepNav.stepNavTitle
                            ? step.customStepNav.stepNavTitle
                            : step.stepName,
                        "\u00A0",
                        step.customStepNav !== undefined && step.customStepNav.stepNavChildren)));
            })))));
    };
    // Build DOM for wizard step
    Wizard.prototype.buildWizardSteps = function () {
        var _this = this;
        var steps = this.props.steps;
        return (React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_CONTENT }, steps.map(function (step, key) {
            var hideStep = step.stepId === _this.state.currentStepId ? false : true;
            return (React.createElement("div", { role: "tabpanel", id: step.stepId.toString(), "aria-hidden": hideStep, "aria-labelledby": "stepId", className: ClassNames_1.ClassNames.ACTIVE + " " + ClassNames_1.ClassNames.WIZARD_PAGE }, step.stepComponent));
        })));
    };
    Wizard.prototype.buildWizard = function () {
        var _a = this.props, size = _a.size, // prettier
        closable = _a.closable, steps = _a.steps, isInline = _a.isInline, style = _a.style, className = _a.className, dataqa = _a.dataqa;
        //replace prefix with incoming prop
        if (dataqa)
            this.updateDataQAStrings(dataqa);
        var wizardSize = "wizard-" + size;
        var modalSize = "modal-" + size;
        var buttonStyle = function () {
            if (isInline) {
                return { display: "inline-block !important" };
            }
        };
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { "data-qa": dataqa_wizard, className: utils_1.classNames([
                    isInline && ClassNames_1.ClassNames.WIZARD_INLINE + " " + ClassNames_1.ClassNames.WIZARD_NO_SHADOW,
                    ClassNames_1.ClassNames.WIZARD,
                    wizardSize,
                    ClassNames_1.ClassNames.NG_TNS,
                    ClassNames_1.ClassNames.WIZARD_OPEN,
                    className,
                ]), style: style },
                React.createElement("span", { className: "offscreen-focus-rebounder ng-tns-c167-4 ng-star-inserted" }),
                React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_MODAL },
                    React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.WIZARD_MODAL_DIALOG, modalSize]), role: "dialog", "aria-hidden": "false", "aria-labelledby": "clr-id-3" },
                        React.createElement("div", { "_ngcontent-clarity-c167": "", className: "clr-sr-only ng-tns-c167-4" }),
                        React.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_OUTER_WRAPPER, style: ClassNames_1.Styles.WIZARD_OUTER_WRAPPER },
                            React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.MODAL_CONTENT_WRAPPER, ClassNames_1.ClassNames.NG_TNS]) },
                                this.buildWizardNav(),
                                React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.MODAL_CONTENT, ClassNames_1.ClassNames.NG_TNS]) },
                                    React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.MODAL_HEADER, ClassNames_1.ClassNames.NG_TNS]) },
                                        closable && (React.createElement("button", { "aria-label": "Close", className: utils_1.classNames([
                                                ClassNames_1.ClassNames.CLOSE,
                                                ClassNames_1.ClassNames.NG_TNS,
                                                ClassNames_1.ClassNames.NG_STAR_INSERTED,
                                            ]), type: "button", onClick: this.close.bind(this) },
                                            React.createElement(icon_1.Icon, { "aria-hidden": true, shape: "close" }))),
                                        React.createElement("div", { className: utils_1.classNames([
                                                ClassNames_1.ClassNames.MODAL_TITLE_WRAPPER,
                                                ClassNames_1.ClassNames.NG_TNS,
                                            ]) },
                                            React.createElement("h3", { className: utils_1.classNames([ClassNames_1.ClassNames.MODAL_TITLE, ClassNames_1.ClassNames.NG_TNS]), style: ClassNames_1.Styles.MODAL_TITLE_STYLE },
                                                React.createElement("span", { className: ClassNames_1.ClassNames.MODAL_TITLE_TEXT }, steps[this.state.currentStepId].showStepTitle !== false &&
                                                    steps[this.state.currentStepId].stepName)))),
                                    React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_BODY }, this.buildWizardSteps()),
                                    " ",
                                    this.buildWizardFooter())),
                            React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_GHOST_WRAPPER },
                                React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_GHOST_1, style: ClassNames_1.Styles.MODAL_GHOST_1 }),
                                React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_GHOST_2, style: ClassNames_1.Styles.MODAL_GHOST_2 }))),
                        " "),
                    " ",
                    React.createElement("div", { className: ClassNames_1.ClassNames.MODAL_BACKDROP, "aria-hidden": "true" })),
                " "),
            " "));
    };
    Wizard.prototype.updateDataQAStrings = function (dataqa) {
        var prefix = "prefix";
        dataqa_wizard_btn_cancel = dataqa_wizard_btn_cancel.replace(new RegExp("^" + prefix), dataqa);
        dataqa_wizard_btn_previous = dataqa_wizard_btn_previous.replace(new RegExp("^" + prefix), dataqa);
        dataqa_wizard_btn_next = dataqa_wizard_btn_next.replace(new RegExp("^" + prefix), dataqa);
        dataqa_wizard_btn_finish = dataqa_wizard_btn_finish.replace(new RegExp("^" + prefix), dataqa);
        dataqa_wizard = dataqa_wizard.replace(new RegExp("^" + prefix), dataqa);
    };
    // Function to keep scroll bar on top on step change
    Wizard.prototype.scrollToTop = function () {
        document.getElementsByClassName("modal-body")[0].scrollTo(0, 0);
    };
    /* ##########  Wizard private methods end  ############ */
    Wizard.prototype.render = function () {
        return this.props.show ? ReactDOM.createPortal(this.buildWizard(), this.divRef) : null;
    };
    // By default Wizard will have following prop values
    Wizard.defaultProps = {
        isInline: false,
        previousButtonText: "BACK",
        nextButtonText: "NEXT",
        cancelButtonText: "CANCEL",
        finishButtonText: "FINISH",
        size: WizardSize.MEDIUM,
        showNav: true,
        defaultStepId: 0,
        validationType: WizardValidationType.NONE,
    };
    return Wizard;
}(React.PureComponent));
exports.Wizard = Wizard;
