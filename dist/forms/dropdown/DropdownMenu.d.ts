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
import { DropdownItem } from ".";
export declare const STOP_PROPAGATION: "stopPropagation";
export declare type OnItemClickResult = void | undefined | typeof STOP_PROPAGATION | Promise<undefined | typeof STOP_PROPAGATION>;
export declare type DropdownMenuProps = {
    itemsPath?: string;
    closeOnItemClick?: boolean;
    closeOnBackdrop?: boolean;
    _level: number;
    onItemClick?: (item: DropdownItem, itemPath: string) => OnItemClickResult;
    style?: any;
    className?: string;
};
export declare function propogationChain(item: any, itemPath: any, funcs: any[]): Promise<"stopPropagation" | undefined>;
export declare class DropdownMenu extends React.PureComponent<DropdownMenuProps> {
    static defaultProps: {
        closeOnItemClick: boolean;
        closeOnBackdrop: boolean;
        itemsPath: string;
        _level: number;
        style: {};
        className: string;
    };
    private renderChildren;
    render(): JSX.Element;
}
