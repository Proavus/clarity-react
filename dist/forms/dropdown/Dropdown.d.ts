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
import { DropdownItem, DropdownMenuProps } from ".";
import { ButtonProps } from "../button";
/**
 * DropDown Props
 * @param {label} label of dropdown
 * @param {isNested} property to nest dropdown
 * @param {className} css property
 * @param {button} dropdown button
 * @param {showCaret} caret property
 * @param {direction} direction to open a menu
 * @param {dataqa} quality engineering testing field
 */
export declare type DropdownProps = {
    label?: any;
    isNested?: boolean;
    className?: string;
    button?: ButtonProps;
    showCaret?: boolean;
    direction?: Direction;
    dataqa?: string;
} & DropdownMenuProps;
declare const initialState: {
    isOpen: boolean;
};
export declare enum Direction {
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right",
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    LEFT_BOTTOM = "left-bottom",
    LEFT_TOP = "left-top",
    RIGHT_TOP = "right-top",
    RIGHT_BOTTOM = "right-bottom"
}
declare type DropdownState = Readonly<typeof initialState>;
export declare class Dropdown extends React.PureComponent<DropdownProps> {
    static defaultProps: {
        closeOnItemClick: boolean;
        closeOnBackdrop: boolean;
        itemsPath: string;
        _level: number;
        isNested: boolean;
        showCaret: boolean;
    };
    private ddRef;
    readonly state: DropdownState;
    handleButtonClick(): void;
    toggle(isOpen?: boolean): void;
    afterToggle: () => void;
    subscribeDocumentClick: () => void;
    unsubscribeDocumentClick: () => void;
    handleDocumentClick: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    getClassListMain(): (string | undefined)[];
    getClassListButton(): (string | undefined)[];
    handleItemClick: (item: DropdownItem, itemPath?: string) => Promise<undefined>;
    private renderChildren;
    render(): JSX.Element;
}
export {};
