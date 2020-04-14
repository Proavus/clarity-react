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
import { ReactNode } from "react";
import { IconProps } from "../../icon";
export declare type ButtonProps = {
    block?: boolean;
    className?: string;
    disabled?: boolean;
    flat?: boolean;
    inverse?: boolean;
    link?: boolean;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
    onSubmit?: () => void;
    primary?: boolean;
    size?: ButtonSize;
    state?: ButtonState;
    children?: ReactNode | ReactNode[];
    icon?: IconProps;
    defaultBtn?: boolean;
    show?: boolean;
    type?: string;
    value?: string;
    dataqa?: string;
};
export declare enum ButtonState {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
export declare enum ButtonSize {
    SMALL = "sm"
}
export declare class Button extends React.PureComponent<ButtonProps> {
    static defaultProps: {
        defaultBtn: boolean;
        show: boolean;
    };
    private static getClassNames;
    render(): JSX.Element | null;
}
