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
export declare type NavHeaderProps = {
    onHamburgerToggle?: () => void;
    onRightSideToggle?: () => void;
    onCloseAll?: () => void;
    primaryShown: boolean;
    secondaryShown: boolean;
    style?: any;
    color?: HeaderColor;
    className?: string;
};
export declare enum HeaderColor {
    HEADER1 = "header-1",
    HEADER2 = "header-2",
    HEADER3 = "header-3",
    HEADER4 = "header-4",
    HEADER5 = "header-5",
    HEADER6 = "header-6",
    HEADER7 = "header-7"
}
export declare class Header extends React.PureComponent<NavHeaderProps> {
    render(): JSX.Element;
}
