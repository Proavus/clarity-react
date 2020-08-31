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
exports.WizardStepType = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
// Enum for wizard step type
var WizardStepType;
(function (WizardStepType) {
    WizardStepType["SUB_STEP"] = "subStep";
})(WizardStepType = exports.WizardStepType || (exports.WizardStepType = {}));
var WizardStep = /** @class */ (function (_super) {
    __extends(WizardStep, _super);
    function WizardStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardStep.prototype.render = function () {
        var _a = this.props, children = _a.children, currentStepID = _a.currentStepID, id = _a.id;
        var classNameList = utils_1.classNames([ClassNames_1.ClassNames.ACTIVE, ClassNames_1.ClassNames.WIZARD_PAGE]);
        return (React.createElement("div", { role: "tabpanel", "aria-labelledby": "id", id: name, "aria-hidden": id !== currentStepID, className: classNameList }, children));
    };
    WizardStep.defaultProps = {
        complete: false,
        valid: true,
        navigationClasses: [],
    };
    return WizardStep;
}(React.PureComponent));
exports.default = WizardStep;
