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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var wrapper;
var clickFn = jest.fn();
describe("<MainContainer /> with primary and secondary rendering", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.Header, { primaryShown: true, secondaryShown: true, onCloseAll: clickFn, onHamburgerToggle: clickFn, onRightSideToggle: clickFn }));
    });
    it("renders correctly", function () {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have two buttons for hamburger and overflow", function () {
        expect(wrapper.find(".header-hamburger-trigger")).toHaveLength(1);
        expect(wrapper.find(".header-overflow-trigger")).toHaveLength(1);
        expect(wrapper.find("button")).toHaveLength(2);
    });
});
describe("<MainContainer /> without primary and secondary rendering", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.Header, { primaryShown: false, secondaryShown: false, onCloseAll: clickFn, onHamburgerToggle: clickFn, onRightSideToggle: clickFn }));
    });
    it("should not have any buttons", function () {
        expect(wrapper.find(".header-hamburger-trigger")).toHaveLength(0);
        expect(wrapper.find(".header-overflow-trigger")).toHaveLength(0);
        expect(wrapper.find("button")).toHaveLength(0);
    });
});
describe("<MainContainer /> with only primary rendering", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.Header, { primaryShown: true, secondaryShown: false, onCloseAll: clickFn, onHamburgerToggle: clickFn, onRightSideToggle: clickFn }));
    });
    it("should have one button only for hamburger", function () {
        expect(wrapper.find(".header-hamburger-trigger")).toHaveLength(1);
        expect(wrapper.find(".header-overflow-trigger")).toHaveLength(0);
        expect(wrapper.find("button")).toHaveLength(1);
    });
    it("should toggle hamburger menu", function () {
        wrapper.find("button.header-hamburger-trigger").simulate("click");
        expect(clickFn).toHaveBeenCalled();
    });
});
describe("<MainContainer /> with only secondary rendering", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.Header, { primaryShown: false, secondaryShown: true, onCloseAll: clickFn, onHamburgerToggle: clickFn, onRightSideToggle: clickFn }));
    });
    it("should have one button only for overflow", function () {
        expect(wrapper.find(".header-hamburger-trigger")).toHaveLength(0);
        expect(wrapper.find(".header-overflow-trigger")).toHaveLength(1);
        expect(wrapper.find("button")).toHaveLength(1);
    });
    it("should toggle overflow menu", function () {
        wrapper.find("button.header-overflow-trigger").simulate("click");
        expect(clickFn).toHaveBeenCalled();
    });
});
