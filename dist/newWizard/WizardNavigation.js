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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardNavigationStep = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var vertical_nav_1 = require("../layout/vertical-nav");
var WizardStep_1 = require("./WizardStep");
var button_1 = require("../forms/button");
var WizardNavigation = /** @class */ (function (_super) {
    __extends(WizardNavigation, _super);
    function WizardNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardNavigation.prototype.render = function () {
        var _a = this.props, title = _a.title, show = _a.show, children = _a.children;
        var classNamesList = utils_1.classNames([ClassNames_1.ClassNames.WIZARD_STEPNAV_WRAPPER, ClassNames_1.ClassNames.NG_TNS]);
        return (react_1.default.createElement(vertical_nav_1.VerticalNav, { className: classNamesList, style: ClassNames_1.Styles.WIZARD_STEPNAV_WRAPPER_STYLE },
            react_1.default.createElement("h2", { className: ClassNames_1.ClassNames.WIZARD_TITLE },
                react_1.default.createElement("span", { style: ClassNames_1.Styles.WIZARD_TITLE_STYLE }, title)),
            show && react_1.default.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_STEPNAV }, children)));
    };
    return WizardNavigation;
}(react_1.default.PureComponent));
exports.default = WizardNavigation;
var WizardNavigationStep = /** @class */ (function (_super) {
    __extends(WizardNavigationStep, _super);
    function WizardNavigationStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleNavigationClick = function (evt) {
            var _a = _this.props, id = _a.id, onSelectStep = _a.onSelectStep;
            onSelectStep && onSelectStep(id, evt);
        };
        return _this;
    }
    WizardNavigationStep.prototype.render = function () {
        var _a = this.props, name = _a.name, navigationChildren = _a.navigationChildren, navigationIcon = _a.navigationIcon, navigationTitle = _a.navigationTitle, navigable = _a.navigable, type = _a.type;
        return (react_1.default.createElement("div", { className: this.navigationClasses(), style: type && type === WizardStep_1.WizardStepType.SUB_STEP ? ClassNames_1.Styles.WIZARD_SUB_STEP_NAV : undefined },
            react_1.default.createElement(button_1.Button, { disabled: !navigable, link: true, className: "clr-wizard-stepnav-link", onClick: this.handleNavigationClick, icon: navigationIcon === undefined ? undefined : { shape: navigationIcon } },
                navigationTitle === undefined ? name : navigationTitle,
                navigationChildren)));
    };
    WizardNavigationStep.prototype.navigationClasses = function () {
        var _a = this.props, id = _a.id, currentStepID = _a.currentStepID, complete = _a.complete, valid = _a.valid;
        return utils_1.classNames([
            ClassNames_1.ClassNames.WIZARD_STEPNAV_LINK,
            id === currentStepID && ClassNames_1.ClassNames.ACTIVE,
            complete && ClassNames_1.ClassNames.COMPLETE,
            !valid && ClassNames_1.ClassNames.ERROR,
        ]);
    };
    return WizardNavigationStep;
}(react_1.default.PureComponent));
exports.WizardNavigationStep = WizardNavigationStep;
