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
 * @param {navLevel} for The level of navigation invoked.
 * @param {navType} for  The navigation type (header, sub side).
 * @param {dataqa} for Quality Engineering
 */
export declare type NavProps = {
    navLevel: NavLevel;
    navType: NavType;
    dataqa?: string;
};
export declare enum NavLevel {
    PRIMARY = "1",
    SECONDARY = "2"
}
export declare enum NavType {
    HEADER = "NAV_TYPE_HEADER",
    SIDE = "NAV_TYPE_SIDE",
    SUB = "NAV_TYPE_SUB"
}
export declare class Nav extends React.PureComponent<NavProps> {
    private static classForNavType;
    private static classForNavLevel;
    private static maybeWrapInList;
    render(): JSX.Element;
}
