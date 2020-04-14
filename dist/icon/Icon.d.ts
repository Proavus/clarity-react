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
export interface IconProps {
    shape: string;
    size?: number;
    className?: string;
    style?: any;
    dir?: Direction;
}
export declare class Icon extends React.PureComponent<IconProps> {
    render(): React.DOMElement<{
        shape: string;
        size?: number | undefined;
        className?: string | undefined;
        style?: any;
        dir?: Direction | undefined;
        children?: React.ReactNode;
        class: string | undefined;
    }, Element>;
}
export declare enum Direction {
    LEFT = "left",
    RIGHT = "right",
    DOWN = "down",
    UP = "up"
}
