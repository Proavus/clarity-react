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
export declare type NavLinkProps = {
    iconShape?: string;
    className?: string;
    onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
};
export declare class NavLink extends React.PureComponent<NavLinkProps> {
    render(): JSX.Element;
}
