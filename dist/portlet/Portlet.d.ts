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
 * PortletProp Types
 * @param{style} css style
 * @param{classname} css style classnames
 * @param{header} portlet header
 * @param{dataqa} quality engineering field
 */
declare type PortletProps = {
    style?: any;
    className?: string;
    header: string;
    dataqa?: string;
};
declare type PortletState = {
    toggleContent: boolean;
    iconStyle: any;
};
export declare class Portlet extends React.PureComponent<PortletProps, PortletState> {
    state: PortletState;
    handleClick: () => void;
    render(): JSX.Element;
}
export {};
