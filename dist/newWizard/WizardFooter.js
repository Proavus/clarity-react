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
var react_1 = __importDefault(require("react"));
var ClassNames_1 = require("./ClassNames");
var button_1 = require("../forms/button");
var qualityFields_1 = require("./qualityFields");
var WizardFooter = /** @class */ (function (_super) {
    __extends(WizardFooter, _super);
    function WizardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardFooter.prototype.render = function () {
        var _a = this.props, activeStepFooter = _a.activeStepFooter, cancelText = _a.cancelText, cancelClassName = _a.cancelClassName, completeClassName = _a.completeClassName, completeText = _a.completeText, customFooter = _a.customFooter, disableComplete = _a.disableComplete, disableNext = _a.disableNext, nextClassName = _a.nextClassName, nextText = _a.nextText, onClose = _a.onClose, onComplete = _a.onComplete, onNext = _a.onNext, onPrevious = _a.onPrevious, previousClassName = _a.previousClassName, previousText = _a.previousText, dataqa = _a.dataqa, showCancel = _a.showCancel, showComplete = _a.showComplete, showNext = _a.showNext, showPrevious = _a.showPrevious;
        return (react_1.default.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_FOOTER },
            react_1.default.createElement("div", { className: ClassNames_1.ClassNames.WIZARD_FOOTER_BUTTON },
                typeof customFooter === "function" && customFooter(this.props),
                typeof customFooter !== "function" && customFooter,
                activeStepFooter,
                showCancel && (react_1.default.createElement(button_1.Button, { link: true, key: cancelText, className: cancelClassName, dataqa: dataqa + qualityFields_1.dataqa_wizard_btn_cancel, onClick: onClose }, cancelText + " ")),
                showPrevious && (react_1.default.createElement(button_1.Button, { key: previousText, className: previousClassName, dataqa: dataqa + qualityFields_1.dataqa_wizard_btn_previous, onClick: onPrevious }, previousText + " ")),
                showNext && (react_1.default.createElement(button_1.Button, { key: nextText, className: nextClassName, primary: true, disabled: disableNext, dataqa: dataqa + qualityFields_1.dataqa_wizard_btn_next, onClick: onNext }, nextText + " ")),
                showComplete && (react_1.default.createElement(button_1.Button, { key: completeText, className: completeClassName, state: button_1.ButtonState.SUCCESS, disabled: disableComplete, dataqa: dataqa + qualityFields_1.dataqa_wizard_btn_finish, onClick: onComplete }, completeText)))));
    };
    return WizardFooter;
}(react_1.default.PureComponent));
exports.default = WizardFooter;
