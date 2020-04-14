/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference types="react" />
export declare type ReactChildren = (React.ReactNode) | (React.ReactNode[] & React.ReactNode);
export declare function classNames(classNameList: (false | undefined | null | string)[]): string;
export declare function allTrue(obj: any): boolean;
export declare function allTrueOnKey(obj: any, key: any): boolean;
export declare function allFalseOnKey(obj: any, key: any): boolean;
