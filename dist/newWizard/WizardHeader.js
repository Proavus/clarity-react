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
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var icon_1 = require("../icon");
var WizardHeader = /** @class */ (function (_super) {
    __extends(WizardHeader, _super);
    function WizardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WizardHeader.prototype.render = function () {
        var _a = this.props, closable = _a.closable, closeIcon = _a.closeIcon, onClose = _a.onClose, showTitle = _a.showTitle, title = _a.title;
        var classNameList = utils_1.classNames([ClassNames_1.ClassNames.MODAL_HEADER, ClassNames_1.ClassNames.NG_TNS]);
        var wrapperClassNameList = utils_1.classNames([ClassNames_1.ClassNames.MODAL_TITLE_WRAPPER, ClassNames_1.ClassNames.NG_TNS]);
        var titleClassNameList = utils_1.classNames([ClassNames_1.ClassNames.MODAL_TITLE, ClassNames_1.ClassNames.NG_TNS]);
        var closeButtonClassNameList = utils_1.classNames([ClassNames_1.ClassNames.CLOSE, ClassNames_1.ClassNames.NG_TNS, ClassNames_1.ClassNames.NG_STAR_INSERTED]);
        return (react_1.default.createElement("div", { className: classNameList },
            closable && (react_1.default.createElement("button", { "aria-label": "Close", className: closeButtonClassNameList, type: "button", onClick: onClose }, closeIcon)),
            react_1.default.createElement("div", { className: wrapperClassNameList },
                react_1.default.createElement("h3", { className: titleClassNameList, style: ClassNames_1.Styles.MODAL_TITLE_STYLE },
                    react_1.default.createElement("span", { className: ClassNames_1.ClassNames.MODAL_TITLE_TEXT }, showTitle && title)))));
    };
    WizardHeader.defaultProps = {
        closable: true,
        closeIcon: react_1.default.createElement(icon_1.Icon, { "aria-hidden": true, shape: "close" }),
        showTitle: true,
    };
    return WizardHeader;
}(react_1.default.PureComponent));
exports.default = WizardHeader;
