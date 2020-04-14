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
 * @param {id } id for toggle;
 * @param { label } label for toggle;
 * @param { name } name for toggle;
 * @param { ariaLabelledby } aria label;
 * @param { disabled } enable disable property;
 * @param { checked } is checked property;
 * @param { defaultChecked } default checked property;
 * @param { dataqa } quality engineering property
 */
declare type ToggleProps = {
    id?: string;
    label?: string;
    name?: string;
    ariaLabelledby?: string;
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    dataqa?: string;
    onChange?: (newValue: boolean) => void;
    onClick?: (evt: React.MouseEvent<HTMLInputElement>) => void;
};
declare type ToggleState = {
    checked: boolean;
};
export declare class Toggle extends React.PureComponent<ToggleProps, ToggleState> {
    constructor(props: ToggleProps);
    getValue(): boolean;
    handleChange(evt: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
