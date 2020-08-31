/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import React from "react";
export declare type InheritedWizardFooterProps = {
    cancelText?: string;
    cancelClassName?: string;
    completeClassName?: string;
    completeText?: string;
    customFooter?: ((props: WizardFooterProps) => any) | any;
    nextClassName?: string;
    nextText?: string;
    previousClassName?: string;
    previousText?: string;
    showCancel?: boolean;
    dataqa?: string;
};
export interface WizardFooterProps extends InheritedWizardFooterProps {
    activeStepFooter?: React.ReactElement;
    currentStepID: number;
    disableNext?: boolean;
    disableComplete?: boolean;
    onClose?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onComplete?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onNext?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onPrevious?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    showComplete?: boolean;
    showNext?: boolean;
    showPrevious?: boolean;
}
export default class WizardFooter extends React.PureComponent<WizardFooterProps> {
    render(): JSX.Element;
}
