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
 * RadioButton Props
 * @param {checked} if true checked else false
 * @param {className} css property
 * @param {disabled} property to enable disable checkbox
 * @param {label} label of checkbox
 * @param {labelclass} label css style
 * @param {name} name of checkbox
 * @param {value} value of radio button
 * @param {children} nested radio button or group
 * @param {style} css style
 * @param {inButtonGroup} button group property
 * @param {dataqa} quality engineering testing field
 */
declare type RadioButtonProps = {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    label?: string;
    labelClass?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    value: any;
    children?: ReactNode;
    style?: any;
    inButtonGroup?: boolean;
    dataqa?: string;
};
export declare class RadioButton extends React.PureComponent<RadioButtonProps> {
    static defaultProps: {
        inButtonGroup: boolean;
        disabled: boolean;
    };
    key: string | undefined;
    constructor(props: RadioButtonProps);
    private static getClassNames;
    render(): JSX.Element;
}
export {};
