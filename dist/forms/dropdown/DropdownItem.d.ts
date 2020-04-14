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
export declare type DropdownItemProps = {
    menuItemType: MenuItemType;
    label?: string;
    value?: string;
    key?: string;
    isDisabled?: boolean;
    isExpandable?: boolean;
    isHeaderChild?: boolean;
    isActive?: boolean;
    onClickEvent?: Function;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
};
export declare enum MenuItemType {
    HEADER = 0,
    DIVIDER = 1,
    ITEM = 2
}
export declare class DropdownItem extends React.PureComponent<DropdownItemProps> {
    static defaultProps: {
        isDisabled: boolean;
        isExpandable: boolean;
        isHeaderChild: boolean;
        menuIsOpen: boolean;
        menuItemType: MenuItemType;
    };
    getClassList(): (string | undefined)[];
    render(): JSX.Element;
}
