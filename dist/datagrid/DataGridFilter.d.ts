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
import { DataGridRow } from "./DataGrid";
/**
 * General component description :
 * DataGridFilter :
 * Render filter box for datagrid
 */
/**
 * Props for DataGridFilter :
 * @param {style} CSS style
 * @param {className} CSS classnames
 * @param {datagridRef} Refrence for DataGrid on which filter will gets apply. We need this to call method which will update datagird rows.
 * @param {columnName} columnName on which filter will apply
 * @param {placeholder} placeholder for string filter input
 * @param {onFilter} Custom filter logic
 * @param {filterType} Type of filter string or custom
 * @param {customFilter} custom Filter component
 * In case of Custom filter component: the custom filter component owner needs to take care of following things.
 * 1. Custom filter component should preseve filter value inside state of component and pass it to DataGridFilter
 * 2. Custom filter component should implement its onChange event handler.
 * 3. Custom filter's onChange event handler should call 'updateFilter' method of DataGridFilter.
 */
export declare type DataGridFilterProps = {
    style?: any;
    className?: string;
    datagridRef: any;
    columnName: string;
    placeholder?: string;
    onFilter: (rows: DataGridRow[], columnValue: any, columnName: string) => Promise<DataGridFilterResult>;
    filterType?: FilterType;
    customFilter?: React.ReactNode;
};
/**
 * Props for DataGridFilter results :
 * @param {rows} datagrid rows after applying filter
 * @param {totalItems} total rows length
 */
export declare type DataGridFilterResult = {
    rows: DataGridRow[];
    totalItems: number;
};
/**
 * Enum for filter type :
 * @param {STR} to render string filter
 * @param {CUSTOM} to render custom filter
 */
export declare enum FilterType {
    STR = "String",
    CUSTOM = "Custom"
}
/**
 * State for DataGridFilter:
 * @param {isOpen} check if filter box is open
 * @param {transformVal} value for transform css attribute
 */
declare type DataGridFilterState = {
    isOpen: boolean;
    transformVal: string;
};
export declare class DataGridFilter extends React.PureComponent<DataGridFilterProps, DataGridFilterState> {
    private refParent;
    private refChild;
    private filterValue;
    static defaultProps: {
        filterType: FilterType;
        className: string;
        style: {};
        customFilter: null;
    };
    state: DataGridFilterState;
    constructor(props: DataGridFilterProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    getFilterValue: () => any;
    updateFilter: (value: any) => void;
    private handleButtonClick;
    private toggle;
    private afterToggle;
    private resize;
    private handleDocumentClick;
    private openFilter;
    render(): JSX.Element;
}
export {};
