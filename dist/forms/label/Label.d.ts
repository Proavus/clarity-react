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
 * Label Props
 * color: color of label
 * status: status of label
 * dismissable: if true label is dismissable
 * style: css style
 * className: css property
 * dataqa: quality engineering testing field
 */
declare type LabelProps = {
    color?: LabelColor;
    status?: LabelStatus;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
    dismissable?: boolean;
    style?: any;
    className?: string;
    dataqa?: string;
};
export declare enum LabelColor {
    PURPLE = "purple",
    BLUE = "blue",
    ORANGE = "orange",
    LIGHT_BLUE = "light-blue"
}
export declare enum LabelStatus {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
export declare class Label extends React.PureComponent<LabelProps> {
    render(): JSX.Element;
}
export {};
