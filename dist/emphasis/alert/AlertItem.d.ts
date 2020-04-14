/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import * as React from 'react';
import { AlertType } from ".";
export declare type AlertItemProps = {
    actions?: React.ReactElement;
    type?: AlertType;
    children?: React.ReactNode | React.ReactNode[];
    icon?: React.ReactElement;
    static?: boolean;
};
export declare class AlertItem extends React.PureComponent<AlertItemProps> {
    private static iconWithAlertClass;
    private static renderActions;
    render(): JSX.Element;
    private static defaultIconShape;
}
