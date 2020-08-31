/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import * as React from "react";
/**
 * @param {isCollapsible} for collapsing;
 * @param {collapseButtonOnBottom} for collapse button;
 * @param {className} for css classname;
 * @param {dataqa} for Quality Engineering
 * @param {style} for css style;
 */
declare type VerticalNavProps = {
    isCollapsible?: boolean;
    collapseButtonOnBottom?: boolean;
    className?: string;
    dataqa?: string;
    style?: any;
};
declare type VerticalNavState = {
    isCollapsed: boolean;
    hasNavGroups: boolean;
    hasIcons: boolean;
};
export declare class VerticalNav extends React.PureComponent<VerticalNavProps, VerticalNavState> {
    constructor(props: VerticalNavProps);
    private initializeState;
    getClassList(): string[];
    toggleVertical(): void;
    openVertical(): void;
    private renderChildren;
    render(): JSX.Element;
}
export declare class VerticalNavCodes {
    static CLR_VERTICAL_NAV: string;
    static HAS_ICONS: string;
    static HAS_NAV_GROUPS: string;
    static IS_COLLAPSED: string;
    static NAV_TRIGGER_BOTTOM: string;
}
export {};
