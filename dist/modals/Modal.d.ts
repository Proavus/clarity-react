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
/**
 * @param {isOpen} property stating if modal open
 * @param {size} size of modal
 * @param {title} title of modal
 * @param {closable} property stating if modal is closable
 * @param {onClose} function onClose
 * @param {dataqa} Quality Engineering field
 * @param {width} if Size is custom, then width need to be provided in props
 * @param {height} if Size is custom, then height need to be provided in props
 * @param {className} if className is provided, the add custom class with existing classes
 */
declare type ModalProps = {
    isOpen?: boolean;
    size?: ModalSize;
    title?: string;
    closable?: boolean;
    onClose?: Function;
    dataqa?: string;
    width?: number;
    height?: number;
    className?: string;
};
declare type ModalState = {
    isOpen: boolean;
};
export declare enum ModalSize {
    SMALL = "modal-sm",
    LARGE = "modal-lg",
    XLARGE = "modal-xl",
    CUSTOM = "custom"
}
export declare const ModalBody: React.FunctionComponent;
export declare const ModalFooter: React.FunctionComponent;
export declare class Modal extends React.PureComponent<ModalProps> {
    private divRef;
    state: ModalState;
    componentWillUpdate(nextProps: ModalProps, nextState: ModalState): void;
    componentWillMount(): void;
    createDivRef(): void;
    cleanup(): void;
    componentWillUnmount(): void;
    buildModal(): React.ReactElement;
    close(): void;
    open(): void;
    isOpen(props?: Readonly<ModalProps> & Readonly<{
        children?: React.ReactNode;
    }>, state?: ModalState): boolean;
    render(): ReactNode;
}
export {};
