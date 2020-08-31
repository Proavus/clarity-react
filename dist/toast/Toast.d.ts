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
export declare enum Direction {
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right",
    TOP_LEFT = "top-left"
}
export declare enum MessageType {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "info"
}
/**
 * @param {showToast} for showing toast;
 * @param {duration} for time;
 * @param {position} for Direction;
 * @param {type} for MessageType;
 * @param {icon} for icon;
 * @param {text} for text;
 * @param {onClose} for close function;
 * @param {style} for css style;
 * @param {className} for css style;
 * @param {dataqa} for Qulaity engineering;
 */
declare type ToastProps = {
    showToast?: boolean;
    duration?: number;
    position?: Direction;
    type?: MessageType;
    icon?: string;
    text: string;
    onClose?: Function;
    style?: any;
    className?: string;
    dataqa?: string;
};
declare type ToastState = {
    showToast: boolean;
};
export declare class Toast extends React.PureComponent<ToastProps> {
    private divRef;
    private _isMounted;
    state: ToastState;
    static defaultProps: {
        showToast: boolean;
        type: MessageType;
        position: Direction;
        duration: number;
    };
    componentWillUpdate(nextProps: ToastProps, nextState: ToastState): void;
    componentWillMount(): void;
    createElement(): void;
    componentDidMount(): void;
    setTimer(hideTime: number): void;
    cleanup(): void;
    componentWillUnmount(): void;
    buildToast(): React.ReactElement;
    close(): void;
    showToast(props?: Readonly<ToastProps> & Readonly<{
        children?: React.ReactNode;
    }>, state?: ToastState): boolean;
    render(): ReactNode;
}
export {};
