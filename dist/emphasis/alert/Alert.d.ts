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
import "@clr/icons/clr-icons.min.css";
import "@webcomponents/custom-elements/custom-elements.min.js";
import "@clr/icons/clr-icons.min.js";
export interface AlertProps {
    className?: string;
    closeable?: boolean | undefined;
    children?: React.ReactNode | React.ReactNode[];
    level?: AlertLevel;
    onClose?: React.MouseEventHandler<any>;
    size?: AlertSize;
    isStatic?: boolean;
    style?: any;
    type: AlertType;
    dataqa?: string;
}
export declare enum AlertType {
    INFO = "info",
    DANGER = "danger",
    WARNING = "warning",
    SUCCESS = "success"
}
export declare enum AlertSize {
    COMPACT = "compact"
}
export declare enum AlertLevel {
    APP = "app"
}
export declare class Alert extends React.PureComponent<AlertProps> {
    constructor(props: AlertProps);
    private static getClassNames;
    render(): JSX.Element;
    private static withAlertType;
}
