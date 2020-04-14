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
 * ProgressBar Props
 * @param {value} value of progress
 * @param {max} maximum progress value
 * @param {labeled} if true label appears
 * @param {style} css style
 * @param {className} css property
 * @param {status} status of label
 * @param {type} type of progressbar
 * @param {position} progress Bar position
 * @param {dataqa} quality engineering testing field
 */
export declare type ProgressBarProps = {
    value?: number;
    max?: number;
    labeled?: boolean;
    style?: any;
    className?: string;
    status?: ProgressBarStatus;
    type?: ProgressBarType;
    position?: ProgressBarPosition;
    dataqa?: string;
};
export declare enum ProgressBarType {
    STATIC = "progress-static",
    NORMAL = "progress"
}
export declare enum ProgressBarStatus {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}
export declare enum ProgressBarPosition {
    TOP = "top"
}
export declare const ProgressBarAnimation: {
    LOOP: string;
    FADE_OUT: string;
    FLASH: string;
    FLASH_DANGER: string;
};
export declare class ProgressBar extends React.PureComponent<ProgressBarProps> {
    static defaultProps: {
        type: ProgressBarType;
    };
    render(): JSX.Element;
}
