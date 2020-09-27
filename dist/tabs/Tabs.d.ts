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
 * props for tabs
 * @param {tabs} List of all Tabs
 * @param {id} string to identify tab group uniquely
 * @param {tabOrientation} orientation of tab either vertical or horizontal
 * @param {onTabClick} callback function from parent to call on tab click
 * @param {overflowTabsFrom} name of tab from which tabs added to overflow menu.
 *         optional prop, if set activates overflow tabs
 * @param {dataqa} quality engineering tag
 */
declare type TabsProp = {
    tabs: TabDetails[];
    id: string;
    tabOrientation: TabOrientation;
    onTabClick: (evt: React.MouseEvent<HTMLElement>, clickedTab: TabDetails, updatedTabDetails: TabDetails[]) => void;
    overflowTabsFrom?: number;
    dataqa?: string;
};
/**
 * state for tabs
 * @param {isOverflowTabSelected} if true inticate overflow tab button as active
 */
declare type TabsState = {
    isOverflowTabSelected: boolean;
};
/**
 * props for tabs
 * @param {name} name or title of tab to uniquely identify tab
 * @param {id} id to uniquely identify single tab
 * @param {component} React element loaded on tab selection
 * @param {isSelected} true if tab is selected by default
 * @param {isDisabled} true if tab is disabled
 */
export declare type TabDetails = {
    name: any;
    id: string;
    component: React.ReactElement;
    isSelected?: boolean;
    isDisabled?: boolean;
    tabType?: TabType;
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
 * @param {STATIC} tabs which has no panel to render
 * @param {SIMPLE} simple tabs user can switch between tabs
 */
export declare enum TabType {
    STATIC = "static",
    SIMPLE = "simple"
}
/**
 * Tabs Component : Use to divide content into separate views which users navigate between.
 */
export declare class Tabs extends React.PureComponent<TabsProp, TabsState> {
    constructor(props: TabsProp);
    tabClicked: (evt: React.MouseEvent<HTMLElement>, clickedTab: TabDetails, isOverflowTab?: boolean) => void;
    private renderTabLink;
    private renderTabLinks;
    private renderTabPanels;
    private renderOverflowTab;
    render(): JSX.Element;
}
export {};
