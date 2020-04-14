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
export interface VerticalNavGroupProps {
    groupName: string;
    iconShape?: string;
    verticalIsCollapsed?: boolean;
    openVerticalNav?: () => void;
    className?: string;
}
interface VerticalNavGroupState {
    groupIsExpanded: boolean;
}
export declare class VerticalNavGroup extends React.PureComponent<VerticalNavGroupProps, VerticalNavGroupState> {
    constructor(props: VerticalNavGroupProps);
    private handleClick;
    render(): JSX.Element;
}
export {};
