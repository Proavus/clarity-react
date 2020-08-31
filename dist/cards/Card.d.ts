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
export declare const CardImage: React.FunctionComponent;
declare type CardBlockProps = {
    className?: string;
    style?: any;
};
export declare const CardBlock: React.FunctionComponent<CardBlockProps>;
declare type CardTitleProps = {
    className?: string;
    style?: any;
};
export declare const CardTitle: React.FunctionComponent<CardTitleProps>;
declare type CardTextProps = {
    className?: string;
    style?: any;
};
export declare const CardText: React.FunctionComponent<CardTextProps>;
declare type CardFooterProps = {
    className?: string;
    style?: any;
};
export declare const CardFooter: React.FunctionComponent<CardFooterProps>;
export declare type CardMediaBlockProps = {
    image?: string;
    title?: string;
    text?: string;
    wrap?: boolean;
    className?: string;
};
export declare const CardMediaBlock: React.FunctionComponent<CardMediaBlockProps>;
export declare type CardProps = {
    style?: any;
    className?: string;
    header?: any;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
};
export declare class Card extends React.PureComponent<CardProps> {
    handleClick: (evt: React.MouseEvent<HTMLElement>) => void;
    render(): JSX.Element;
}
export {};
