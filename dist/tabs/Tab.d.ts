/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import * as React from "react";
/**
 * state for tabs
 * @param {tabs} List of all Tabs
 * @param {component} currently selected tab's component
 * @param {overflowTab} overflow tab button. optional param activates only when overflow prop set.
 */
declare type TabState = {
    tabs: TabPane[];
    component: React.ReactElement;
    overflowTab?: TabPane;
};
/**
 * props for tabs
 * @param {index} index of tab in array
 * @param {name} name or title of tab
 * @param {component} React element loaded on tab selection
 * @param {isSelected} true if tab is selected
 * @param {isDisabled} true if tab is disabled
 */
declare type TabPane = {
    name: string;
    component: React.ReactElement;
    isSelected?: boolean;
    isDisabled?: boolean;
};
/**
 * Tab Orientation Types
 * @param {VERTICAL} vertical tabs
 * @param {HORIZONTAL} Horizontal tabs
 */
export declare enum TabOrientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}
/**
 * Tab Types
 * @param {STATIC} tabs are allowed to be disable enabled confitionally in this type.
 * @param {SIMPLE} simple tabs user can switch between tabs, tabs are always enabled.
 */
export declare enum TabType {
    STATIC = "static",
    SIMPLE = "simple"
}
/**
 * props for tabs
 * @param {tabs} List of all Tabs
 * @param {tabOrientation} orientation of tabs
 * @param {tabType} type of tabs
 * @param {selectedTabName} which tab is selected to show first.optional prop, if set shows given tab explicitly selected
 * @param {overflowTabsFrom} name of tab from which tabs added to overflow menu. optional prop, if set activates overflow tabs
 */
declare type TabProp = {
    tabs: TabPane[];
    tabOrientation: TabOrientation;
    tabType: TabType;
    selectedTabName?: string;
    overflowTabsFrom?: string;
};
/**
 * Tab Component of clarity divide content into separate views which users navigate between.
 */
export declare class Tab extends React.PureComponent<TabProp, TabState> {
    constructor(props: TabProp);
    initializeTabs: () => void;
    tabClicked: (evt: React.MouseEvent<HTMLElement>, clickedTab: TabPane) => void;
    private renderTab;
    private renderTabList;
    private renderOverflowTab;
    render(): JSX.Element;
}
export {};
