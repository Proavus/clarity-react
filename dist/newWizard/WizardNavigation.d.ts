/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import React, { ReactNode } from "react";
import { WizardStepProps } from "./WizardStep";
declare type WizardNavigationProps = {
    id?: number;
    currentStepID: number;
    currentStepValid?: boolean;
    onSelectStep?: (stepID: number) => void;
    show?: boolean;
    showTitle?: boolean;
    title?: ReactNode;
};
export default class WizardNavigation extends React.PureComponent<WizardNavigationProps> {
    render(): JSX.Element;
}
export declare class WizardNavigationStep extends React.PureComponent<WizardStepProps> {
    handleNavigationClick: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    render(): JSX.Element;
    private navigationClasses;
}
export {};
