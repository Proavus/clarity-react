/**
 * Copyright (c) 2020 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
import * as React from "react";
import { ReactNode } from "react";
import { WizardFooterProps } from "./WizardFooter";
/**
 * General component description :
 * Wizard :
 * Wizards are used to help users walk through a defined step-by-step process.
 * Each step is in the sidebar on the left. As users complete steps,
 * the steps are marked with a green bar to the left.
 */
/**
 * Props for Wizard :
 * @param {isInline} if true then do not render border of wizard.
 * Used for rendering wizard in vSphere plugin
 * @param {style} CSS styles
 * @param {className} CSS classname
 * @param {show} if true show the wizard
 * @param {size} enum value for size of wizard
 * @param {title} wizard title
 * @param {showNavigation} if true it will show left side navigation on wizard
 * @param {closable} if true user can close the wizard
 * @param {onClose} callback function to call on close of wizard
 * @param {previousText} custom text for previous button
 * @param {showPreviousButton} if true show previous button on wizard else hide
 * @param {onPrevious} callback function to call on click of previous button
 * @param {previousClassName} external CSS for previous button
 * @param {nextButtonText} custom text for next button
 * @param {onNext} callback function to call on click of next button
 * @param {nextClassName} external CSS for next button
 * @param {completeText} custom text for finish button
 * @param {onComplete} callback function to call on click of finish button
 * @param {completeClassName} external CSS for finish button
 * @param {cancelText} custom text for cancel button
 * @param {showCancel} if true show cancel button on wizard else hide
 * @param {cancelClassName} external CSS for cancel button
 * @param {customFooter} custom footer for all steps
 * @param {navLinkClasses} external css class for navigation links
 * @param {dataqa} Quality Engineering field
 *
 * @param {className} custom CSS class to use for the wizard
 * @param {children} child components that make up the internal pages of the wizard.
 *                   These will generally be WizardStep components
 * @param {currentStepID} The current step ID that the wizard is displaying
 * @param {dataqa?} a string to embed within HTML components for instrumentation of
 *                  fields
 * @param {showNavigation?} indicates if the left step navigation pane should be displayed
 * @param {closable?} indicates if the wizard is closable before completion
 * @param {completeText?} test for the completion button
 * @param {isInline?} indicates if the wizard border should be displayed
 * @param {showPrevious?} indicates if the previous button should be shown
 * @param {previousClassName?} custom class name for the previous button
 * @param {nextText?} text for the next button
 * @param {nextClassName?} custom class for the next button
 * @param {onClose?} event handler to execute when the wizard has been closed
 * @param {onComplete?} event handler to execute when the wizard has been completed
 * @param {onNext?} event handler to execute when the next button has been pressed
 * @param {onPrevious?} event handler to execute when the previous button has been pressed
 * @param {onNavigateTo?} event handler to execute when the wizard should navigate to a specific step
 * @param {previousText?} text to display in previous button;
 * @param {completeClassName?} custom class for the completion button
 * @param {cancelText} text to use for the cancellation button
 * @param {showCancel} indicates if the cancel button should be displayed
 * @param {cancelClassName} custom class name for the cancel button
 * @param {customFooter} custom footer component to display to the left of bottom navigation buttons
 * @param {navLinkClasses} custom classes to use for navigation links
 * @param {showStepTitle} indicates if the step title should be displayed
 * @param {showTitle} indicates if the wizard title should be displayed
 * @param {show} indicates if the wizard should be displayed
 * @param {size} indicates the size of the wizard component
 * @param {style} custom inline CSS styles for the wizard component
 * @param {title} title React component to use for the wizard
 *
 *
 */
export declare type WizardProps = {
    className?: string;
    children: ReactNode;
    currentStepID: number;
    dataqa?: string;
    showNavigation?: boolean;
    closable?: boolean;
    completeText?: string;
    isInline?: boolean;
    showPrevious?: boolean;
    previousClassName?: string;
    nextText?: string;
    nextClassName?: string;
    onClose?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onComplete?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onNext?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onPrevious?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onNavigateTo?: (stepID: number, evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    previousText?: string;
    completeClassName?: string;
    cancelText?: string;
    showCancel?: boolean;
    cancelClassName?: string;
    customFooter?: ((wizardState: WizardState, props: WizardFooterProps) => any) | any;
    navLinkClasses?: string;
    showStepTitle?: boolean;
    showTitle?: boolean;
    show: boolean;
    size: WizardSize;
    style?: Object;
    title?: ReactNode;
};
/**
 * State for Wizard :
 */
export declare type WizardState = {};
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
export default class Wizard extends React.PureComponent<WizardProps, WizardState> {
    static defaultProps: {
        isInline: boolean;
        previousText: string;
        nextText: string;
        cancelText: string;
        completeText: string;
        size: WizardSize;
        showNavigation: boolean;
        showStepTitle: boolean;
        showTitle: boolean;
        onComplete: () => void;
        onPrevious: () => void;
        onNext: () => void;
        onClose: () => void;
    };
    private static progressionStatus;
    scrollToTop(): void;
    render(): JSX.Element;
    private footerProps;
}
