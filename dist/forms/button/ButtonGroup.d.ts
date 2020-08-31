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
 * @param {className} css stylke
 * @param {children} childern UI
 * @param {style} css style
 * @param {defaultValue} default value for button group
 * @param {selectedValue} selected value for button group
 * @param {label} name for group
 * @param {disabled} enable disable property
 * @param {isRadio} radio group property
 * @param {name} name for group
 * @param {dataqa} quality engineering testing field
 */
declare type ButtonGroupProps = {
    className?: string;
    children?: React.ReactNode[];
    style?: any;
    defaultValue?: any;
    selectedValue?: any;
    label?: string;
    disabled?: boolean;
    isRadio?: boolean;
    name: string;
    dataqa?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const initialState: {
    value: null;
};
declare type ButtonGroupState = Readonly<typeof initialState>;
export declare class ButtonGroup extends React.PureComponent<ButtonGroupProps> {
    readonly state: ButtonGroupState;
    constructor(props: ButtonGroupProps);
    componentDidUpdate(prevProps: ButtonGroupProps): void;
    private handleChange;
    private renderChildren;
    render(): JSX.Element;
}
export {};
