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
declare type PasswordProps = {
    className?: string;
    style?: any;
    type?: string;
    disabled?: boolean;
    helperText?: ReactNode;
    errorHelperText?: string;
    placeholder?: string;
    label?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
    name: string;
    id?: string;
    value?: string;
    defaultValue?: string;
    maxPasswordLength?: number;
    minPasswordLength?: number;
    required?: boolean;
    error?: boolean;
    unmask?: boolean;
    pattern?: string;
    dataqa?: string;
};
declare type PasswordState = {
    show: boolean;
    type: string;
    value: any;
};
export declare class Password extends React.PureComponent<PasswordProps, PasswordState> {
    static defaultProps: {
        unmask: boolean;
    };
    state: PasswordState;
    private showHidePassword;
    private handleChange;
    private static renderHelperText;
    private static renderLabel;
    render(): JSX.Element;
}
export {};
