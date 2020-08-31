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
 * Props for DataGridColumnResize :
 * @param {column} datagrid column
 * @param {height} datagrid height
 * @param {updateColumn} callback function to update datagrid column width
 * @param {className} CSS class names
 * @param {style} CSS style
 */
export declare type DataGridColumnResizeProps = {
    column: DataGridColumn;
    height: number | null;
    updateColumn?: (column: DataGridColumn) => void;
    className?: string;
    style?: any;
};
/**
 * State for DataGridColumnResize :
 * @param {startX} start position for tracker
 * @param {moveX} moved position for tracker
 * @param {showTracker} show width tracker if true
 * @param {isLessThanMinWidth} show width tracker in red if true
 */
declare type DataGridColumnResizeState = {
    startX: number;
    moveX: number;
    showTracker: boolean;
    isLessThanMinWidth: boolean;
};
export declare class DataGridColumnResize extends React.PureComponent<DataGridColumnResizeProps, DataGridColumnResizeState> {
    state: DataGridColumnResizeState;
    calculateResizedBy: (clientX: number) => Promise<any>;
    moveTracker: (event: React.DragEvent) => void;
    showTracker: (event: React.DragEvent) => void;
    hideTracker: (event: React.DragEvent) => void;
    render(): JSX.Element;
}
export {};
