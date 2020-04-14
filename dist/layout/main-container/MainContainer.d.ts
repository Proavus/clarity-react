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
 * @param {actions} for actions
 * @param {title} for title;
 * @param {headerNav} for header navigation;
 * @param {sideNav} for side navigation;
 * @param {subNav} for sub navigation;
 * @param {dataqa} for Quality Engineering
 */
export declare type MainContainerProps = {
    actions?: React.ReactNode;
    title: string;
    headerNav?: any;
    sideNav?: any;
    subNav?: any;
    dataqa?: string;
};
declare const initialState: {
    leftNavOpen: boolean;
    rightNavOpen: boolean;
};
export declare type navsShown = {
    primary: boolean;
    secondary: boolean;
};
declare type MainContainerState = Readonly<typeof initialState>;
export declare class MainContainer extends React.PureComponent<MainContainerProps> {
    readonly state: MainContainerState;
    handleHamburgerToggle: () => void;
    handleRightSideToggle: () => void;
    closeAll: () => void;
    getClassList(): (string | undefined)[];
    render(): JSX.Element;
    private static detectNavs;
}
export {};
