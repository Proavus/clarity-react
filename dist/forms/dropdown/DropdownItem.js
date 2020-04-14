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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ClassNames_1 = require("./ClassNames");
var utils_1 = require("../../utils");
var button_1 = require("../button");
var MenuItemType;
(function (MenuItemType) {
    MenuItemType[MenuItemType["HEADER"] = 0] = "HEADER";
    MenuItemType[MenuItemType["DIVIDER"] = 1] = "DIVIDER";
    MenuItemType[MenuItemType["ITEM"] = 2] = "ITEM";
})(MenuItemType = exports.MenuItemType || (exports.MenuItemType = {}));
var DropdownItem = /** @class */ (function (_super) {
    __extends(DropdownItem, _super);
    function DropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownItem.prototype.getClassList = function () {
        var _a = this.props, menuItemType = _a.menuItemType, isExpandable = _a.isExpandable, isHeaderChild = _a.isHeaderChild, isActive = _a.isActive;
        var result = [];
        switch (menuItemType) {
            case MenuItemType.HEADER:
                if (isHeaderChild) {
                    result.push(ClassNames_1.ClassNames.DROPDOWN_ITEM);
                    result.push(ClassNames_1.ClassNames.DROPDOWN_HEADER_CHILD);
                }
                else {
                    result.push(ClassNames_1.ClassNames.DROPDOWN_HEADER);
                }
                break;
            case MenuItemType.ITEM:
                result.push(ClassNames_1.ClassNames.DROPDOWN_ITEM);
                isExpandable && result.push(ClassNames_1.ClassNames.EXPANDABLE);
                isActive && result.push("active");
                break;
            case MenuItemType.DIVIDER:
                result.push(ClassNames_1.ClassNames.DROPDOWN_DIVIDER);
                break;
        }
        return result;
    };
    DropdownItem.prototype.render = function () {
        var _a = this.props, menuItemType = _a.menuItemType, // prettier hack
        isDisabled = _a.isDisabled, children = _a.children, onClick = _a.onClick, label = _a.label, value = _a.value;
        var classList = this.getClassList();
        switch (menuItemType) {
            case MenuItemType.HEADER:
                return (React.createElement("label", { className: utils_1.classNames(classList) },
                    label,
                    children));
            case MenuItemType.DIVIDER:
                return React.createElement("div", { className: utils_1.classNames(classList) });
            case MenuItemType.ITEM:
                return (React.createElement(button_1.Button, { value: value, className: utils_1.classNames(classList), disabled: isDisabled, onClick: onClick },
                    label,
                    children));
        }
    };
    DropdownItem.defaultProps = {
        isDisabled: false,
        isExpandable: false,
        isHeaderChild: false,
        menuIsOpen: false,
        menuItemType: MenuItemType.ITEM,
    };
    return DropdownItem;
}(React.PureComponent));
exports.DropdownItem = DropdownItem;
