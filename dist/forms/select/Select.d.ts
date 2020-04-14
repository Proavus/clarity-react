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
declare type SelectOption = {
    value?: string;
    selected?: boolean;
};
export declare const SelectOption: React.FunctionComponent<SelectOption>;
declare type SelectProps = {
    label?: string;
    id?: string;
    value?: any;
    isBoxed?: boolean;
    required?: boolean;
    error?: boolean;
    defaultHelperText?: string;
    errorHelperText?: string;
    onBlur?: (evt: React.FocusEvent<HTMLSelectElement>) => void;
    onChange?: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    style?: any;
    width?: string;
    showDefaultSelect?: boolean;
    name?: string;
    dataqa?: string;
    disabled?: boolean;
};
export declare class Select extends React.PureComponent<SelectProps> {
    constructor(props: SelectProps);
    private buildSelect;
    private getSelectWidth;
    render(): JSX.Element;
}
export {};
