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
import { DataGridColumn } from "./DataGrid";
/**
 * General component description :
 * HideShowColumns :
 * component to render hide and show columns menu
 */
/**
 * Props for HideShowColumns :
 * @param {columns} datagrid columns
 * @param {updateColumns} Function to update datagrid columns
 * @param {className} CSS class names
 */
export declare type HideShowColumnsProps = {
    columns: DataGridColumn[];
    updateColumns: (columns: DataGridColumn[]) => void;
    className?: string;
};
/**
 * State for HideShowColumns :
 * @param {isOpen} true if hide and columns menu is open
 * @param {transformVal} CSS value for transform attribute
 * @param {SelectAll} true if all columns has selected
 */
declare type HideShowColumnsState = {
    isOpen: boolean;
    transformVal: string;
    SelectAll: boolean;
};
export declare class HideShowColumns extends React.PureComponent<HideShowColumnsProps, HideShowColumnsState> {
    private refParent;
    private refChild;
    state: HideShowColumnsState;
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    private handleButtonClick;
    private toggle;
    private afterToggle;
    private resize;
    private handleDocumentClick;
    private handleSelectAll;
    private handleSingleSelect;
    private updateDatagridColumns;
    private buildColumnList;
    render(): JSX.Element;
}
export {};
