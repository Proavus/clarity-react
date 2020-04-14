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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
 * @param {STATIC} tabs are allowed to be disable enabled confitionally in this type.
 * @param {SIMPLE} simple tabs user can switch between tabs, tabs are always enabled.
 */
var TabType;
(function (TabType) {
    TabType["STATIC"] = "static";
    TabType["SIMPLE"] = "simple";
})(TabType = exports.TabType || (exports.TabType = {}));
/**
 * Tab Component of clarity divide content into separate views which users navigate between.
 */
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        //Initialize tabs
        _this.initializeTabs = function () {
            // set index in array and selected tab
            var _a = _this.props, tabs = _a.tabs, tabType = _a.tabType, selectedTabName = _a.selectedTabName;
            //set first tab as selected by default
            tabs[0].isSelected = true;
            var initialVisibleTabComponent = tabs[0].component;
            tabs.map(function (tab) {
                //if initial selected tab name is given by user set it visible first
                if (tab.name === selectedTabName) {
                    tab.isSelected = true;
                    initialVisibleTabComponent = tab.component;
                    tabs[0].isSelected = false;
                }
                //disabled tabs work only for STATIC Type
                tabType === TabType.STATIC && tab.isDisabled ? (tab.isDisabled = true) : (tab.isDisabled = false);
            });
            _this.state = {
                tabs: tabs.slice(),
                component: initialVisibleTabComponent,
                overflowTab: {
                    name: "overflow",
                    component: React.createElement("div", null),
                    isSelected: false,
                    isDisabled: false,
                },
            };
        };
        //Function handelling normal tab click
        _this.tabClicked = function (evt, clickedTab) {
            var tabs = _this.state.tabs;
            tabs.map(function (tab) {
                clickedTab.name === tab.name ? (tab.isSelected = true) : (tab.isSelected = false);
            });
            _this.setState({
                tabs: tabs.slice(),
                component: clickedTab.component,
            });
        };
        //Render Tab Button
        _this.renderTab = function (tab) {
            var className = tab.isSelected ? ClassNames_1.ClassNames.TABACTIVE : ClassNames_1.ClassNames.TABINACTIVE;
            return (React.createElement("li", { className: ClassNames_1.ClassNames.TABITEM },
                React.createElement(button_1.Button, { className: className, disabled: tab.isDisabled, onClick: function (evt) { return _this.tabClicked(evt, tab); } }, tab.name)));
        };
        //Render Tab bar
        _this.renderTabList = function (tabs) {
            var _a = _this.props, tabType = _a.tabType, tabOrientation = _a.tabOrientation, overflowTabsFrom = _a.overflowTabsFrom;
            var isOverflowRendered = false;
            return (React.createElement("ul", { className: ClassNames_1.ClassNames.TABMAIN }, tabs.map(function (tab, index) {
                //once overflow tab rendered push all tans in overflow list
                if (tabOrientation === TabOrientation.HORIZONTAL && tab.name === overflowTabsFrom) {
                    isOverflowRendered = true;
                    return _this.renderOverflowTab(tabs.slice(index, tabs.length));
                }
                //Render normal tab unless overflow tab rendered
                if (!isOverflowRendered) {
                    return _this.renderTab(tab);
                }
            })));
        };
        //Render Overflow Tab
        _this.renderOverflowTab = function (overflowTabs) {
            var overflowTab = _this.state.overflowTab;
            var className;
            if (overflowTab) {
                overflowTab.isSelected ? (className = ClassNames_1.ClassNames.TABACTIVE) : (className = ClassNames_1.ClassNames.TABINACTIVE);
                return (React.createElement("li", { className: ClassNames_1.ClassNames.TABITEM },
                    React.createElement(dropdown_1.Dropdown, { showCaret: false, button: { icon: { shape: "ellipsis-horizontal" }, link: true, className: className } },
                        React.createElement(dropdown_1.DropdownMenu, null, overflowTabs.map(function (tab) {
                            return (React.createElement(dropdown_1.DropdownItem, { menuItemType: dropdown_1.MenuItemType.ITEM, isHeaderChild: true, label: tab.name, onClick: function (evt) { return _this.tabClicked(evt, tab); }, isDisabled: tab.isDisabled }));
                        })))));
            }
        };
        _this.initializeTabs();
        return _this;
    }
    Tab.prototype.render = function () {
        var _a = this.state, tabs = _a.tabs, component = _a.component;
        var tabOrientation = this.props.tabOrientation;
        return (React.createElement("div", { className: tabOrientation === TabOrientation.VERTICAL ? ClassNames_1.ClassNames.VERTICALTAB : "" },
            this.renderTabList(tabs),
            component));
    };
    return Tab;
}(React.PureComponent));
exports.Tab = Tab;
