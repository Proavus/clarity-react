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
 * General component description :
 * Wizard :
 * Wizards are used to help users walk through a defined step-by-step process.
 * Each step is in the sidebar on the left. As users complete steps,
 * the steps are marked with a green bar to the left.
 */
/**
 * Step details for wizard
 * @param {stepName} Name or title for step this name will be used in
 * left side Navigation as well.
 * @param {stepComponent} React component for step
 * @param {stepId} unique ID to identfy the steo should start from 0
 * @param {showStepTitle} if false do not show step title
 * @param {stepCompleted} flag to check if step is valid and complete
 * @param {customStepNav} custom navigation details for step
 * @param {disableNav} if true then navigation for step is disabled
 * @param {isStepValid} function to check validity of step
 * @param {onStepSubmit} function to perform on step submission
 */
declare type WizardStep = {
    stepName: string;
    stepComponent: React.ReactNode;
    stepId: number;
    showStepTitle?: boolean;
    stepCompleted?: boolean;
    customStepNav?: WizardStepNavDetails;
    disableNav?: boolean;
    isStepValid?: Function;
    onStepSubmit?: () => Promise<any>;
};
declare type WizardStepNavDetails = {
    stepNavIcon?: string;
    stepNavTitle?: string;
    stepNavChildren?: React.ReactNode;
    onNavClick?: () => Promise<any>;
};
/**
 * Props for Wizard :
 * @param {isInline} if true then do not render border of wizard.
 * Used for rendering wizard in vSphere plugin
 * @param {style} CSS styles
 * @param {className} CSS classname
 * @param {show} if true show the wizard
 * @param {size} enum value for size of wizard
 * @param {title} wizard title
 * @param {steps} wizard steps
 * @param {defaultStepId} on which step wiazrd should open at first by default it will get open at first step
 * @param {showNav} if true it will show left side navigation on wizard
 * @param {closable} if true user can close the wizard
 * @param {onClose} callback function to call on close of wizard
 * @param {previousButtonText} custom text for previous button
 * @param {showPreviousButton} if true show previous button on wizard else hide
 * @param {onPrevious} callback function to call on click of previous button
 * @param {previousButtonClassName} extranla CSS for previous button
 * @param {nextButtonText} custom text for next button
 * @param {onNext} callback function to call on click of next button
 * @param {nextButtonClassName} extranla CSS for next button
 * @param {finishButtonText} custom text for finish button
 * @param {onFinish} callback function to call on click of finsih button
 * @param {finishButtonClassName} extranla CSS for finish button
 * @param {cancelButtonText} custom text for cancel button
 * @param {showCancelButton} if true show cancel button on wizard else hide
 * @param {cancelButtonClassName} extranla CSS for cancel button
 * @param {navLinkClasses} extranal css class for navigation links
 * @param {validationType} validation type for wizard steps
 * @param {dataqa} Quality Engineering field
 */
declare type WizardProps = {
    isInline?: boolean;
    show?: boolean;
    size?: WizardSize;
    title?: any;
    steps: WizardStep[];
    defaultStepId?: number;
    showNav?: boolean;
    closable?: boolean;
    previousButtonText?: string;
    showPreviousButton?: boolean;
    onPrevious?: () => Promise<any>;
    previousButtonClassName?: string;
    nextButtonText?: string;
    onNext?: () => Promise<any>;
    nextButtonClassName?: string;
    finishButtonText?: string;
    onFinish?: Function;
    finishButtonClassName?: string;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    cancelButtonClassName?: string;
    onClose?: Function;
    navLinkClasses?: string;
    validationType?: WizardValidationType;
    style?: any;
    className?: string;
    dataqa?: string;
};
/**
 * State for Wizard :
 * @param {show} if true show the wizard else close
 * @param {currentStepId} ID of active step in wizard startig form 0
 * @param {showFinishButton} if true show finish button of wizard
 * @param {showPreviousButton} if true show finish button of wizard
 * @param {showNextButton} if true show next button of wizard
 * @param {showCancelButton} if true show cancel button of wizard
 * @param {disableFinishButton} label to display for all items
 * @param {allSteps} wizard step data
 */
declare type WizardState = {
    show: boolean;
    currentStepId: number;
    showFinishButton: boolean;
    disableFinishButton: boolean;
    showPreviousButton: boolean;
    showNextButton: boolean;
    showCancelButton: boolean;
    disableNextButton: boolean;
    allSteps: WizardStep[];
};
/**
 * Enum for wizard sizes:
 * @param {MEDIUM} midum size wizard
 * @param {LARGE} large size wizard
 * @param {XLARGE} xtra-large size wizard
 */
export declare enum WizardSize {
    MEDIUM = "md",
    LARGE = "lg",
    XLARGE = "xl"
}
/**
 * Enum for sorting order :
 * @param {ASYNC} Asynchronous validation
 * @param {SYNC} Synchronous validation
 * @param {NONE} no validation
 */
export declare enum WizardValidationType {
    ASYNC = "Asynchronous",
    SYNC = "Synchronous",
    NONE = "None"
}
export declare class Wizard extends React.PureComponent<WizardProps> {
    private divRef;
    static defaultProps: {
        isInline: boolean;
        previousButtonText: string;
        nextButtonText: string;
        cancelButtonText: string;
        finishButtonText: string;
        size: WizardSize;
        showNav: boolean;
        defaultStepId: number;
        validationType: WizardValidationType;
    };
    private initialState;
    state: WizardState;
    componentWillMount(): void;
    private createRefDiv;
    private cleanup;
    private initStepsState;
    componentWillUnmount(): void;
    private getStepObj;
    close(): void;
    show(): void;
    resetWizard(): void;
    nextButtonClick(): void;
    previousButtonClick(): void;
    finishButtonClick(): void;
    private modifyButtonStates;
    navigationClick(step: WizardStep): void;
    private getStepNavClasses;
    checkStepValidity(stepId: number): {
        validState: boolean;
        disableNextStep: boolean;
    };
    checkValidityOfAllSteps(): {
        validationData: {
            [key: number]: boolean;
        };
        allStepsValid: boolean;
    };
    private buildWizardFooter;
    private buildStepIcon;
    private buildWizardNav;
    private buildWizardSteps;
    private buildWizard;
    updateDataQAStrings(dataqa: string): void;
    render(): React.ReactPortal | null;
}
export {};
