"use strict";
/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFalseOnKey = exports.allTrueOnKey = exports.allTrue = exports.classNames = void 0;
function classNames(classNameList) {
    return classNameList.filter(function (x) { return typeof x === "string"; }).join(" ");
}
exports.classNames = classNames;
//Find if all the keys in an object are true
function allTrue(obj) {
    for (var key in obj)
        if (!obj[key])
            return false;
    return true;
}
exports.allTrue = allTrue;
// Find if a particular key in an object array is true for all elements in the array.
function allTrueOnKey(obj, key) {
    for (var index in obj) {
        if (!obj[index][key]) {
            return false;
        }
    }
    return true;
}
exports.allTrueOnKey = allTrueOnKey;
// Find if a particular key in an object array is false for all elements in the array.
function allFalseOnKey(obj, key) {
    for (var index in obj) {
        if (obj[index][key]) {
            return false;
        }
    }
    return true;
}
exports.allFalseOnKey = allFalseOnKey;
