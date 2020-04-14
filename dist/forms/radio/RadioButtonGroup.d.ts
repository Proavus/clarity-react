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
 * RadioButtonGroup Props
 * @param {defaultValue} default value of radio group
 * @param {children} nested radio button or group
 * @param {className} css property
 * @param {disabled} property to enable disable radio button group
 * @param {checked} if true checked else false
 * @param {helperText} helper text of radio group
 * @param {inline} inline style
 * @param {label} label of radio button group
 * @param {name} name of radio group
 * @param {dataqa} quality engineering testing field
 */
declare type RadioButtonGroupProps = {
    defaultValue?: any;
    children?: React.ReactNode[];
    className?: string;
    disabled?: boolean;
    helperText?: ReactNode;
    inline?: boolean;
    label?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    dataqa?: string;
};
declare const initialState: {
    value: null;
};
declare type RadioButtonGroupState = Readonly<typeof initialState>;
export declare class RadioButtonGroup extends React.PureComponent<RadioButtonGroupProps> {
    readonly state: RadioButtonGroupState;
    constructor(props: RadioButtonGroupProps);
    private handleChange;
    private renderChildren;
    private static renderHelperText;
    private static renderLabel;
    render(): JSX.Element;
}
export {};
