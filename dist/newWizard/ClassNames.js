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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styles = exports.ClassNames = void 0;
var ClassNames = /** @class */ (function () {
    function ClassNames() {
    }
    ClassNames.WIZARD = "clr-wizard";
    ClassNames.WIZARD_OPEN = "open";
    ClassNames.WIZARD_MODAL = "modal ng-tns-c167-4 ng-star-inserted";
    ClassNames.WIZARD_MODAL_DIALOG = "modal-dialog ng-tns-c167-4 ng-trigger ng-trigger-fadeDown";
    ClassNames.WIZARD_OUTER_WRAPPER = "modal-outer-wrapper";
    ClassNames.MODAL_CONTENT_WRAPPER = "modal-content-wrapper";
    ClassNames.WIZARD_CONTENT = "clr-wizard-content";
    ClassNames.WIZARD_STEPNAV_WRAPPER = "modal-nav clr-wizard-stepnav-wrapper";
    ClassNames.WIZARD_STEPNAV = "clr-wizard-stepnav clr-wizard-stepnav-list";
    ClassNames.WIZARD_STEPNAV_LINK = "clr-wizard-stepnav-item clr-nav-link nav-item ng-star-inserted";
    ClassNames.WIZARD_INLINE = "clr-wizard--inline";
    ClassNames.WIZARD_NO_SHADOW = "clr-wizard--no-shadow";
    ClassNames.MODAL_HEADER = "modal-header";
    ClassNames.MODAL_CONTENT = "modal-content";
    ClassNames.MODAL_BODY = "modal-body";
    ClassNames.MODAL_FOOTER = "modal-footer";
    ClassNames.NO_SCROLLING = "no-scrolling";
    ClassNames.WIZARD_TITLE = "clr-wizard-title";
    ClassNames.MODAL_TITLE = "modal-title";
    ClassNames.MODAL_TITLE_TEXT = "modal-title-text";
    ClassNames.MODAL_TITLE_WRAPPER = "modal-title-wrapper";
    ClassNames.MODAL_BACKDROP = "modal-backdrop ng-trigger ng-trigger-fade";
    ClassNames.MODAL_GHOST_WRAPPER = "modal-ghost-wrapper";
    ClassNames.MODAL_GHOST_1 = "modal-ghost modal-ghost-1 ng-trigger ng-trigger-ghostPageOneState";
    ClassNames.MODAL_GHOST_2 = "modal-ghost modal-ghost-2 ng-trigger ng-trigger-ghostPageTwoState";
    ClassNames.WIZARD_PAGE = "clr-wizard-page";
    ClassNames.WIZARD_FOOTER = "modal-footer clr-wizard-footer";
    ClassNames.WIZARD_FOOTER_BUTTON = " clr-wizard-footer-buttons clr-wizard-footer-buttons-wrapper ng-star-inserted";
    ClassNames.ACTIVE = "active";
    ClassNames.COMPLETE = "complete";
    ClassNames.ERROR = "error";
    ClassNames.NG_TNS = "ng-tns-c167-4";
    ClassNames.CLOSE = "close";
    ClassNames.NG_STAR_INSERTED = "ng-star-inserted";
    return ClassNames;
}());
exports.ClassNames = ClassNames;
var Styles = /** @class */ (function () {
    function Styles() {
    }
    Styles.MODAL_GHOST_2 = { left: "-24px", top: "24px", bottom: "24px" };
    Styles.MODAL_GHOST_1 = { left: "-24px" };
    Styles.WIZARD_STEPNAV_WRAPPER_STYLE = { paddingTop: "0" };
    Styles.WIZARD_TITLE_STYLE = { marginTop: "-0.3rem" };
    Styles.MODAL_TITLE_STYLE = { marginTop: "-0.17rem" };
    Styles.WIZARD_OUTER_WRAPPER = { height: "100%", width: "100%" };
    Styles.WIZARD_SUB_STEP_NAV = { padding: "0 0 0 1.8rem" };
    return Styles;
}());
exports.Styles = Styles;
