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
/**
 * General component description :
 * DataList :
 * The datalist element offers a flexible input when users need to filter
 * and select from a large list of pre-defined options.
 * Or, they need to input a custom value
 * (not provided in the pre-defined list) for the input.
 */
/**
 * Props for DataList option:
 * @param {value} option value
 * @param {selected} true if option is selected
 * @param {style} CSS styles
 * @param {className} CSS classname
 **/
declare type DataListOptionProps = {
    value?: string;
    selected?: boolean;
    className?: string;
    style?: any;
};
export declare const DataListOption: React.FunctionComponent<DataListOptionProps>;
/**
 * Enum for datalist autocomplete status
 */
export declare enum DataListAutoComplete {
    ON = "on",
    OFF = "off"
}
/**
 * Props for DataList:
 * @param {placeHolder} placeHolder for datalist
 * @param {label} label for datalist
 * @param {name} name for datalist
 * @param {required} true if datalist is mandatory field
 * @param {isError} true if there is error in datalist
 * @param {errorText} error message for datalist
 * @param {helperText} helper message for datalist
 * @param {onChange} function to handle onChange event
 * @param {onBlur} function to handle onBlur event
 * @param {dataqa} quality engineering parameter
 * @param {style} CSS styles
 * @param {className} CSS classname
 * @param {autoComplete} if "off" disable browser autocomplete
 * @param {defaultValue} if it will be used to set default value of input element, useful in case of edit workflows
 **/
declare type DataListProps = {
    placeHolder?: string;
    label?: string;
    name?: string;
    required?: boolean;
    isError?: boolean;
    errorText?: string;
    helperText?: string;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
    autoComplete?: DataListAutoComplete;
    dataqa?: string;
    className?: string;
    style?: any;
    defaultValue?: string;
};
/**
 * State for DataList:
 * @param {hasFocus} true if datalist has focus on it
 **/
declare type DataListState = {
    hasFocus: boolean;
};
export declare class DataList extends React.PureComponent<DataListProps, DataListState> {
    constructor(props: DataListProps);
    private handleFocus;
    private handleBlur;
    private renderHelperText;
    private renderLabel;
    private renderDataList;
    render(): JSX.Element;
}
export {};
