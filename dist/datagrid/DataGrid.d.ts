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
 * General component description :
 * DataGrid :
 * Datagrids are for organizing large volumes of data that users can perform actions on.
 */
/**
 * Props for DataGrid :
 * @param {className} CSS class names
 * @param {style} CSS styles
 * @param {selectionType} row selection type that is multi or single
 * @param {pagination} pagination support
 * @param {columns} column details
 * @param {rows} rows data
 * @param {footer} footer component
 * @param {onRowSelect} Function which will gets called on select/deselect of rows
 * @param {onSelectAll} Function which will gets called on select/deselect of all rows
 * @param {keyfield} field to uniquely identify row
 * @param {rowType} Expandable or compact row type
 * @param {itemText} label to display for all items
 * @param {pagination} pagination support
 * @param {dataqa} quality engineering tag
 */
declare type DataGridProps = {
    className?: string;
    style?: any;
    selectionType?: GridSelectionType;
    columns: DataGridColumn[];
    rows?: DataGridRow[];
    footer?: DataGridFooter;
    onRowSelect?: Function;
    onSelectAll?: Function;
    keyfield?: string;
    rowType?: GridRowType;
    itemText?: string;
    pagination?: DataGridPaginationProps;
    dataqa?: string;
};
/**
 * type for DataGridColumn :
 * @param {columnName} column data
 * @param {sort} does colum support sorting
 * @param {className} CSS class name
 * @param {columns} column details
 * @param {style} CSS style
 * @param {filter} Filter component
 * @param {isVisible} if true column will be visible else hide it
 * @param {width} Width of datagrid column the default width will be 100px
 */
export declare type DataGridColumn = {
    columnName: string;
    columnID?: number;
    sort?: DataGridSort;
    className?: string;
    style?: any;
    filter?: React.ReactNode;
    isVisible?: boolean;
    width?: string;
};
/**
 * type for DataGridRow :
 * @param {rowData} row data
 * @param {rowID} unique ID to identify row
 * @param {isSelected} set to true if row is selected
 * @param {className} CSS class name
 * @param {style} CSS style
 * @param {expandableContent} Expandable data content
 */
export declare type DataGridRow = {
    rowData: DataGridCell[];
    className?: string;
    style?: any;
    rowID?: number;
    isSelected?: boolean;
    expandableContent?: any;
    isExpanded?: boolean;
};
/**
 * type for DataGridCell :
 * @param {cellData} data for cell
 * @param {className} CSS class name
 * @param {style} CSS style
 */
export declare type DataGridCell = {
    cellData: any;
    columnName: string;
    className?: string;
    style?: any;
};
/**
 * type for DataGridFooter :
 * @param {footerData} Footer data
 * @param {className} CSS class name
 * @param {style} CSS style
 * @param {hideShowColBtn} Hide and Show column button
 */
export declare type DataGridFooter = {
    footerData?: any;
    className?: string;
    style?: any;
    hideShowColBtn?: boolean;
    showFooter: boolean;
};
/**
 * type for DataGridSort :
 * @param {defaultSortOrder} if data in column by default sorted
 * @param {sortFunction} function to perform sorting
 * @param {isCurrentlySorted} checks if column is currently sorted or not
 */
export declare type DataGridSort = {
    defaultSortOrder: SortOrder;
    isSorted?: boolean;
    sortFunction: (rows: DataGridRow[], order: SortOrder, columnName: string) => Promise<DataGridRow[]>;
};
/**
 * Props for DataGridPagination :
 * @param {className} CSS
 * @param {style} CSS styles
 * @param {currentPage} Index of the currently displayed page, starting from 1
 * @param {pageSize} Number of items displayed per page. Defaults to 10
 * @param {totalItems} Total number of items present in the datagrid, after the filters have been applied
 * @param {lastPage} Index of the last page for the current data
 * @param {getPage} custom function to get page data for given page number
 * @param {compactFooter} if true will render compact pagination footer
 */
declare type DataGridPaginationProps = {
    className?: string;
    style?: any;
    currentPage?: number;
    pageSize?: number;
    pageSizes?: number[];
    totalItems: number;
    compactFooter?: boolean;
    getPageData?: (pageIndex: number, pageSize: number) => Promise<DataGridRow[]>;
};
/**
 * Enum for GridSelectionType :
 * @param {MULTI} for enabling multi row select
 * @param {SINGLE} for enabling single row select
 */
export declare enum GridSelectionType {
    MULTI = "multi",
    SINGLE = "single"
}
/**
 * Enum for sorting order :
 * @param {DESC} to sort data in descending order
 * @param {ASC} to sort data in ascending order
 * @param {NONE} no sorting
 */
export declare enum SortOrder {
    DESC = "descending",
    ASC = "ascending ",
    NONE = "none"
}
/**
 * Enum for RowTpye :
 * @param {EXPANDABLE} for enabling expandable rows
 * @param {COMPACT} for enabling compact rows
 */
export declare enum GridRowType {
    EXPANDABLE = "expandable",
    COMPACT = "compact"
}
/**
 * State for DataGrid :
 * @param {selectAll} set to true if all rows got selected else false
 * @param {allColumns} column data
 * @param {allRows} row data
 * @param {itemText} label to display for all items
 * @param {pagination} pagination data
 * @param {isLoading} if true shows loading spinner else shows datagrid
 */
declare type DataGridState = {
    selectAll: boolean;
    allColumns: DataGridColumn[];
    allRows: DataGridRow[];
    itemText: string;
    pagination?: DataGridPaginationState;
    isLoading: boolean;
};
declare type DataGridPaginationState = {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    firstItem: number;
    lastItem: number;
    totalPages: number;
    pageSizes?: number[];
    compactFooter?: boolean;
};
/**
 * DataGrid Componnet :
 * Displays data in grid format
 */
export declare class DataGrid extends React.PureComponent<DataGridProps, DataGridState> {
    private pageIndexRef;
    state: DataGridState;
    componentWillMount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DataGridProps): void;
    getSelectedRows: () => DataGridRow[];
    updateRows: (rows: DataGridRow[], totalItems?: number | undefined) => void;
    updateColumns: (cols: DataGridColumn[]) => void;
    getAllRows: () => DataGridRow[];
    hideLoader(): void;
    showLoader(): void;
    private setInitalState;
    private setInitalStateForPagination;
    private getTotalPages;
    private getFirstItemIndex;
    private getLastItemIndex;
    private handleSelectPageSize;
    private gotoFirstPage;
    private gotoLastPage;
    private gotoNextPage;
    private gotoPreviousPage;
    private handlePageChangeOnBlur;
    private handlePageChangeOnKeyDown;
    private handlePageChange;
    private getPage;
    private toggleExpand;
    private handleSelectAll;
    private handleSelectSingle;
    private handleSort;
    private updateRowIDs;
    private updateColumnIDs;
    private setColumnVisibility;
    private getColObject;
    private getColWidth;
    private isColVisible;
    private setSortingState;
    private buildExpandableCell;
    private buildSelectColumn;
    private buildEmptyColumn;
    private buildSelectCell;
    private buildDataGridBody;
    private buildPlaceHolderContainer;
    private buildEmptyPlaceholder;
    private buildDataGridHeader;
    private buildDataGridColumn;
    private buildDataGridRow;
    private buildDataGridCell;
    private buildPageSizesSelect;
    private buildCompactPageButtons;
    private buildPageButtons;
    private buildDataGridPagination;
    private buildHideShowColumnsBtn;
    private buildFooterContent;
    private buildDataGridFooter;
    buildDataGridSpinner(): React.ReactElement;
    render(): JSX.Element;
}
export {};
