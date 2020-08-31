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
import { Icon } from "../icon";
declare type WizardHeaderProps = {
    closable: boolean;
    closeIcon: Icon;
    title?: ReactNode;
    showTitle: boolean;
    onClose?: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
export default class WizardHeader extends React.PureComponent<WizardHeaderProps> {
    static defaultProps: {
        closable: boolean;
        closeIcon: JSX.Element;
        showTitle: boolean;
    };
    render(): JSX.Element;
}
export {};
