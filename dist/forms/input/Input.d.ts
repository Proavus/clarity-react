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
declare type InputProps = {
    className?: string;
    style?: any;
    type?: string;
    disabled?: boolean;
    helperText?: ReactNode;
    errorHelperText?: string;
    label?: string;
    isBoxed?: boolean;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
    onKeyPress?: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name: string;
    id?: string;
    value?: any;
    defaultValue?: any;
    size?: number;
    min?: number;
    max?: number;
    step?: any;
    spellCheck?: boolean;
    pattern?: string;
    required?: boolean;
    error?: boolean;
    dataqa?: string;
};
declare const initialState: {
    value: null;
};
declare type InputState = Readonly<typeof initialState>;
export declare class Input extends React.PureComponent<InputProps> {
    readonly state: InputState;
    private handleChange;
    private handleKeyDown;
    private static renderHelperText;
    private static renderLabel;
    private buildInput;
    render(): JSX.Element;
}
export {};
