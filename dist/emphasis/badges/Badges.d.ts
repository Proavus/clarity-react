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
 * Badge Props
 * @param {color} color of label
 * @param {status} status of label
 * @param {dataqa} quality engineering testing field
 * @param {className} CSS classname
 */
export declare type BadgeProps = {
    color?: BadgeColor;
    status?: BadgeStatus;
    dataqa?: string;
    className?: string;
};
export declare enum BadgeColor {
    PURPLE = "purple",
    BLUE = "blue",
    ORANGE = "orange",
    LIGHT_BLUE = "light-blue",
    BADGE_1 = "1",
    BADGE_2 = "2",
    BADGE_3 = "3",
    BADGE_4 = "4",
    BADGE_5 = "5"
}
export declare enum BadgeStatus {
    BADGE_INFO = "info",
    BADGE_SUCCESS = "success",
    BADGE_WARNING = "warning",
    BADGE_DANGER = "danger"
}
export declare class Badge extends React.PureComponent<BadgeProps> {
    render(): JSX.Element;
}
