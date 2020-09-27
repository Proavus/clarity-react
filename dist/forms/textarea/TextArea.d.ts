/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
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
 * TextAreaProps: Props for TextArea component
 *@param {className} CSS class name
 *@param {style} CSS style
 *@param {disabled} set true to disable textarea
 *@param {readonly} set true for read-only textarea
 *@param {helperText} helper text message for textarea
 *@param {errorHelperText} error text mesaahe for textarea
 *@param {label} label for textarea
 *@param {placeholder} placeholder for textarea
 *@param {name} unique name for textarea
 *@param {id} unique id for textarea
 *@param {value} value for textarea
 *@param {defaultValue} default value id for textarea
 *@param {rows} visible number of lines in a text area
 *@param {cols} visible width of a text area
 *@param {wrap} specifies how the text in a text area is to be wrapped
 *@param {required} set to true of text area is required/must be filled out
 *@param {error} set to true to show error mesage and icon
 *@param {spellcheck} set to false to off spelling and grammar checking
 *@param {draggable} set to true if element is draggable
 *@param {maxLength} specifies the maximum number of characters allowed in the text area
 *@param {onChange} callback function to call for onChange event
 *@param {onBlur} callback function to call for onblur event
 *@param {onKeyDown} callback function to call for onKeyDown event
 *@param {onKeyPress} callback function to call for onKeyPress event
 *@param {dataqa} for Quality Engineering
 */
declare type TextAreaProps = {
    className?: string;
    style?: any;
    disabled?: boolean;
    readonly?: boolean;
    helperText?: ReactNode;
    errorHelperText?: string;
    label?: string;
    placeholder?: string;
    name: string;
    id?: string;
    value?: any;
    defaultValue?: any;
    rows?: number;
    cols?: number;
    wrap?: TextWrapType;
    required?: boolean;
    error?: boolean;
    spellcheck?: boolean;
    draggable?: boolean;
    maxLength?: number;
    onChange?: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (evt: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (evt: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    dataqa?: string;
};
/**
 * Enum for TextWrapType in textarea :
 * Specifies how the text in a text area is to be wrapped
 * @param {HARD} for enabling hard wrap
 * @param {SOFT} for enabling soft wrap
 */
export declare enum TextWrapType {
    HARD = "hard",
    SOFT = "soft"
}
/**
 * TextArea Componnet :
 *  Component for long text input
 */
export declare class TextArea extends React.PureComponent<TextAreaProps> {
    private renderHelperText;
    private renderLabel;
    private buildTextArea;
    render(): JSX.Element;
}
export {};
