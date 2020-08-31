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
import { IconProps } from "../../icon";
declare type SignPostState = {
    isOpen: boolean;
    transformVal: string;
};
/**
 *@param {direction} for SignPostDirection;
 *@param {style} for css style;
 *@param {icon} for IconProps;
 *@param {showCloseButton} for close button;
 *@param {dataqa} for Quality Engineering
 */
declare type SignPostProps = {
    direction?: SignPostDirection;
    style?: any;
    icon?: IconProps;
    showCloseButton?: boolean;
    dataqa?: string;
};
export declare enum SignPostDirection {
    TOP_LEFT = "top-left",
    TOP_MIDDLE = "top-middle",
    TOP_RIGHT = "top-right",
    RIGHT_TOP = "right-top",
    RIGHT_MIDDLE = "right-middle",
    RIGHT_BOTTOM = "right-bottom",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_MIDDLE = "bottom-middle",
    BOTTOM_RIGHT = "bottom-right",
    LEFT_TOP = "left-top",
    LEFT_MIDDLE = "left-middle",
    LEFT_BOTTOM = "left-bottom"
}
export declare class SignPost extends React.PureComponent<SignPostProps> {
    static defaultProps: {
        direction: SignPostDirection;
        style: {};
        icon: {
            shape: string;
            size: number;
        };
        showCloseButton: boolean;
    };
    private refParent;
    private refChild;
    state: SignPostState;
    handleButtonClick: () => void;
    toggle(isOpen?: boolean): void;
    afterToggle: () => void;
    subscribeDocumentClick: () => void;
    unsubscribeDocumentClick: () => void;
    handleDocumentClick: (evt: React.MouseEvent<HTMLElement>) => void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
