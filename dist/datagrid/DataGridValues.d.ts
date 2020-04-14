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
import { SortOrder, DataGridRow, DataGridFilterResult } from ".";
/**
 * General file description :
 * Data to render diffrent datagrids in storybook
 */
/**
 * Data for Columns
 */
export declare const normalColumns: {
    columnName: string;
}[];
/**
 * Data for Rows
 */
export declare const normalRows: {
    rowData: ({
        columnName: string;
        cellData: number;
    } | {
        columnName: string;
        cellData: string;
    })[];
}[];
/**
 * Data for Footer
 */
export declare const customFooter: {
    footerData: string;
    showFooter: boolean;
};
export declare const defaultFooter: {
    showFooter: boolean;
};
export declare const noFooter: {
    showFooter: boolean;
};
/**
 * Data for Custom content rendering
 */
export declare const customRows: {
    rowData: ({
        columnName: string;
        cellData: number;
    } | {
        columnName: string;
        cellData: string;
    } | {
        columnName: string;
        cellData: JSX.Element;
    })[];
}[];
export declare const filterFunction: (rows: DataGridRow[], columnValue: string, columnName: string) => Promise<DataGridFilterResult>;
/**
 * Data for Sorting
 */
export declare const sortFunction: (rows: DataGridRow[], sortOrder: SortOrder, columnName: string) => Promise<DataGridRow[]>;
export declare const sortColumns: ({
    columnName: string;
    sort: {
        defaultSortOrder: SortOrder;
        sortFunction: (rows: DataGridRow[], sortOrder: SortOrder, columnName: string) => Promise<DataGridRow[]>;
        isSorted?: undefined;
    };
} | {
    columnName: string;
    sort?: undefined;
} | {
    columnName: string;
    sort: {
        defaultSortOrder: SortOrder;
        sortFunction: (rows: DataGridRow[], sortOrder: SortOrder, columnName: string) => Promise<DataGridRow[]>;
        isSorted: boolean;
    };
})[];
/**
 * Data for Batch Actions
 */
declare type GridActionsState = {
    selectedRows: any[];
    showEdit: boolean;
};
export declare class GridActions extends React.PureComponent<any, GridActionsState> {
    state: {
        selectedRows: never[];
        showEdit: boolean;
    };
    updateActions(rows: any): void;
    render(): JSX.Element;
}
export declare const expandableRows: ({
    rowData: ({
        columnName: string;
        cellData: number;
    } | {
        columnName: string;
        cellData: string;
    })[];
    expandableContent: string;
} | {
    rowData: ({
        columnName: string;
        cellData: number;
    } | {
        columnName: string;
        cellData: string;
    })[];
    expandableContent: null;
})[];
/**
 * Data for Pagination
 */
export declare function getRowData(): DataGridRow[];
export declare const paginationRows: DataGridRow[];
export declare const getPageData: (pageIndex: number, pageSize: number) => Promise<DataGridRow[]>;
export declare const paginationDetails: {
    totalItems: number;
    getPageData: (pageIndex: number, pageSize: number) => Promise<DataGridRow[]>;
    pageSize: number;
    pageSizes: number[];
};
export declare const paginationDetailsWithCompactFooter: {
    totalItems: number;
    getPageData: (pageIndex: number, pageSize: number) => Promise<DataGridRow[]>;
    pageSize: number;
    pageSizes: number[];
    compactFooter: boolean;
};
export declare const pageFilterFunction: (rows: DataGridRow[], columnValue: string, columnName: string) => Promise<DataGridFilterResult>;
export declare const hideableColumns: ({
    columnName: string;
    isVisible?: undefined;
} | {
    columnName: string;
    isVisible: boolean;
})[];
export {};
