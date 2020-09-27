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
exports.Tabs = exports.TabType = exports.TabOrientation = void 0;
var React = __importStar(require("react"));
var button_1 = require("../forms/button");
var ClassNames_1 = require("./ClassNames");
var dropdown_1 = require("../forms/dropdown");
/**
 * Tab Orientation Types
 * @param {VERTICAL} vertical tabs
 * @param {HORIZONTAL} Horizontal tabs
 */
var TabOrientation;
(function (TabOrientation) {
    TabOrientation["VERTICAL"] = "vertical";
    TabOrientation["HORIZONTAL"] = "horizontal";
})(TabOrientation = exports.TabOrientation || (exports.TabOrientation = {}));
/**
 * Tab Types
 * @param {STATIC} tabs which has no panel to render
 * @param {SIMPLE} simple tabs user can switch between tabs
 */
var TabType;
(function (TabType) {
    TabType["STATIC"] = "static";
    TabType["SIMPLE"] = "simple";
})(TabType = exports.TabType || (exports.TabType = {}));
/**
 * Tabs Component : Use to divide content into separate views which users navigate between.
 */
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        //Function handelling normal tab click
        _this.tabClicked = function (evt, clickedTab, isOverflowTab) {
            if (isOverflowTab === void 0) { isOverflowTab = false; }
            var _a = _this.props, tabs = _a.tabs, onTabClick = _a.onTabClick;
            var lastActiveTabIndex;
            var activeLastTab = false;
            tabs.map(function (tab, index) {
                if (tab.isSelected) {
                    lastActiveTabIndex = index;
                }
                if (clickedTab.id === tab.id) {
                    // If tabType is present and if tabType is STATIC then active last selected tab
                    if (clickedTab.tabType && clickedTab.tabType === TabType.STATIC) {
                        tab.isSelected = false;
                        activeLastTab = true;
                    }
                    else {
                        tab.isSelected = true;
                    }
                }
                else {
                    tab.isSelected = false;
                }
            });
            // Active last tab if user clicks on static tab
            if (activeLastTab && lastActiveTabIndex !== undefined) {
                tabs[lastActiveTabIndex].isSelected = true;
            }
            _this.setState({
                isOverflowTabSelected: isOverflowTab,
            }, function () { return onTabClick && onTabClick(evt, clickedTab, tabs); });
        };
        //Render Tab Button
        _this.renderTabLink = function (tab, index) {
            var className = tab.isSelected ? ClassNames_1.ClassNames.TABACTIVE : ClassNames_1.ClassNames.TABINACTIVE;
            return (React.createElement("li", { key: index, role: "presentation", className: ClassNames_1.ClassNames.TABITEM },
                React.createElement(button_1.Button, { id: "tab-" + tab.id, "aria-controls": "panel-" + tab.id, "aria-selected": tab.isSelected, className: className, disabled: tab.isDisabled, onClick: function (evt) { return _this.tabClicked(evt, tab); } }, tab.name)));
        };
        //Render Tab bar
        _this.renderTabLinks = function () {
            var _a = _this.props, id = _a.id, tabOrientation = _a.tabOrientation, overflowTabsFrom = _a.overflowTabsFrom, tabs = _a.tabs;
            var isOverflowRendered = false;
            return (React.createElement("ul", { className: ClassNames_1.ClassNames.TABMAIN, role: "tablist", id: id }, tabs.map(function (tab, index) {
                //once overflow tab rendered push all tabs in overflow list
                if (tabOrientation === TabOrientation.HORIZONTAL && index === overflowTabsFrom) {
                    isOverflowRendered = true;
                    return _this.renderOverflowTab(tabs.slice(index, tabs.length), index);
                }
                //Render normal tab unless overflow tab rendered
                if (!isOverflowRendered) {
                    return _this.renderTabLink(tab, index);
                }
            })));
        };
        //Render Tab panels
        _this.renderTabPanels = function () {
            var tabs = _this.props.tabs;
            return (React.createElement(React.Fragment, null, tabs.map(function (tab, index) {
                return (React.createElement("section", { key: index, id: "panel-" + tab.id, role: "tabpanel", className: ClassNames_1.ClassNames.TAB_PANEL, "aria-labelledby": "tab-" + tab.id, "aria-hidden": tab.isSelected ? "false" : "true" }, tab.component));
            })));
        };
        //Render Overflow Tab
        _this.renderOverflowTab = function (overflowTabs, index) {
            var isOverflowTabSelected = _this.state.isOverflowTabSelected;
            var className = isOverflowTabSelected ? ClassNames_1.ClassNames.TABACTIVE : ClassNames_1.ClassNames.TABINACTIVE;
            return (React.createElement("li", { className: ClassNames_1.ClassNames.TABITEM, key: index },
                React.createElement(dropdown_1.Dropdown, { showCaret: false, button: {
                        icon: { shape: "ellipsis-horizontal" },
                        link: true,
                        className: className,
                    } },
                    React.createElement(dropdown_1.DropdownMenu, null, overflowTabs.map(function (tab, index) {
                        return (React.createElement(dropdown_1.DropdownItem, { key: index.toString(), menuItemType: dropdown_1.MenuItemType.ITEM, isHeaderChild: true, label: tab.name, onClick: function (evt) { return _this.tabClicked(evt, tab, true); }, isDisabled: tab.isDisabled }));
                    })))));
        };
        _this.state = {
            isOverflowTabSelected: false,
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var tabOrientation = this.props.tabOrientation;
        return (React.createElement("div", { className: tabOrientation === TabOrientation.VERTICAL ? ClassNames_1.ClassNames.VERTICALTAB : undefined },
            this.renderTabLinks(),
            this.renderTabPanels()));
    };
    return Tabs;
}(React.PureComponent));
exports.Tabs = Tabs;
