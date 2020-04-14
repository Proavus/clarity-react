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
 * CheckBox Props
 * @param {label} label of checkbox
 * @param {name} name of checkbox
 * @param {id} id of checkbox
 * @param {checked} if true checked else false
 * @param {defaultChecked} default checked value
 * @param {ariaLabel} arial label
 * @param {ariaLabelledby} arial label details
 * @param {disabled} property to enable disable checkbox
 * @param {className} css property
 * @param {dataqa} quality engineering testing field
 */
declare type CheckBoxProps = {
    label?: string;
    name?: string;
    id?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    ariaLabelledby?: string;
    ariaLabel?: string;
    disabled?: boolean;
    className?: string;
    dataqa?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (evt: React.MouseEvent<HTMLInputElement>) => void;
};
declare type CheckBoxState = {
    value: boolean;
};
export declare class CheckBox extends React.PureComponent<CheckBoxProps, CheckBoxState> {
    private myRef;
    private handleChange;
    constructor(props: CheckBoxProps);
    render(): JSX.Element;
}
export {};
