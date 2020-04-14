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
 * Accordian Props
 * @param {style} css style
 * @param {className} css property
 * @param {accordianMultiPanel} if yes multipanel enebled else not
 * @param {dataqa} quality engineering testing field
 */
declare type AccordionProps = {
    style?: any;
    className?: string;
    content: accordionContent[];
    accordionMultiPanel?: boolean;
    dataqa?: string;
};
declare type accordionContent = {
    title: React.ReactNode;
    itemComponent: React.ReactNode;
};
declare type AccordionState = {
    panelItems: any;
    prevItemIndex: number;
};
export declare class Accordion extends React.Component<AccordionProps, AccordionState> {
    state: AccordionState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: AccordionProps): void;
    handleButtonClick: (index: any, accordionMultiPanel: any) => void;
    private accordionPanel;
    private accordionContent;
    getItemContent: (index: any, title: any, isPrevious: boolean) => JSX.Element;
    getAccordionContent: () => void;
    render(): JSX.Element;
}
export {};
