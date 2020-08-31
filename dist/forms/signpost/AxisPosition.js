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
exports.calculateAxisPosition = void 0;
var _1 = require(".");
function calculateAxisPosition(pHeight, pWidth, cHeight, cWidth, direction) {
    var axisTransform = "";
    var buff = -5;
    switch (direction) {
        case _1.SignPostDirection.TOP_LEFT: {
            var x_1 = -cWidth + pWidth / 2;
            var y_1 = -cHeight - pHeight / 2 - buff;
            axisTransform = "translateX(" + x_1 + "px) " + "translateY(" + y_1 + "px)";
            break;
        }
        case _1.SignPostDirection.TOP_MIDDLE: {
            var x_2 = -(cWidth / 2) + pWidth / 2;
            var y_2 = -cHeight - pHeight / 2 - buff;
            axisTransform = "translateX(" + x_2 + "px) " + "translateY(" + y_2 + "px)";
            break;
        }
        case _1.SignPostDirection.TOP_RIGHT:
            var x = pWidth / 2;
            var y = -cHeight - pHeight / 2 - buff;
            axisTransform = "translateX(" + x + "px) " + "translateY(" + y + "px)";
            break;
        case _1.SignPostDirection.RIGHT_TOP: {
            var x_3 = pWidth + pWidth / 2;
            var y_3 = -cHeight + pWidth / 2;
            axisTransform = "translateX(" + x_3 + "px) " + "translateY(" + y_3 + "px)";
            break;
        }
        case _1.SignPostDirection.RIGHT_MIDDLE: {
            var x_4 = pWidth + pWidth / 2;
            var y_4 = -(cHeight / 2) + pHeight / 2;
            axisTransform = "translateX(" + x_4 + "px) " + "translateY(" + y_4 + "px)";
            break;
        }
        case _1.SignPostDirection.RIGHT_BOTTOM: {
            var x_5 = pWidth + pWidth / 2;
            var y_5 = pHeight / 2;
            axisTransform = "translateX(" + x_5 + "px) " + "translateY(" + y_5 + "px)";
            break;
        }
        case _1.SignPostDirection.BOTTOM_LEFT: {
            var x_6 = -cWidth + pWidth / 2;
            var y_6 = pHeight + pHeight / 2 + buff;
            axisTransform = "translateX(" + x_6 + "px) " + "translateY(" + y_6 + "px)";
            break;
        }
        case _1.SignPostDirection.BOTTOM_MIDDLE: {
            var x_7 = -(cWidth / 2) + pWidth;
            var y_7 = pHeight + pHeight / 2 + buff;
            axisTransform = "translateX(" + x_7 + "px) " + "translateY(" + y_7 + "px)";
            break;
        }
        case _1.SignPostDirection.BOTTOM_RIGHT: {
            var x_8 = pWidth / 2;
            var y_8 = pHeight + pHeight / 2 + buff;
            axisTransform = "translateX(" + x_8 + "px) " + "translateY(" + y_8 + "px)";
            break;
        }
        case _1.SignPostDirection.LEFT_TOP: {
            var x_9 = -(cWidth + pWidth / 2);
            var y_9 = -cHeight + pHeight / 2;
            axisTransform = "translateX(" + x_9 + "px) " + "translateY(" + y_9 + "px)";
            break;
        }
        case _1.SignPostDirection.LEFT_MIDDLE: {
            var x_10 = -(cWidth + pWidth / 2);
            var y_10 = -(cHeight / 2) + pHeight / 2;
            axisTransform = "translateX(" + x_10 + "px) " + "translateY(" + y_10 + "px)";
            break;
        }
        case _1.SignPostDirection.LEFT_BOTTOM: {
            var x_11 = -(cWidth + pWidth / 2);
            var y_11 = pHeight / 2;
            axisTransform = "translateX(" + x_11 + "px) " + "translateY(" + y_11 + "px)";
            break;
        }
        // TOP_MIDDLE as default position
        default: {
            var x_12 = -(cWidth / 2) + pWidth / 2;
            var y_12 = -cHeight - pHeight / 2 - buff;
            axisTransform = "translateX(" + x_12 + "px) " + "translateY(" + y_12 + "px)";
            break;
        }
    }
    return axisTransform;
}
exports.calculateAxisPosition = calculateAxisPosition;
