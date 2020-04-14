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
declare type CustomStepComponentState = {
    value: string;
};
declare type CustomStepComponentProps = {
    wizardRef: any;
    stepId: number;
};
export declare class CustomStepComponent extends React.PureComponent<CustomStepComponentProps, CustomStepComponentState> {
    state: CustomStepComponentState;
    resetComponent(): Promise<{}>;
    private handleChange;
    render(): JSX.Element;
}
export {};
