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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MainContainer_1 = require("./MainContainer");
var enzyme_1 = require("enzyme");
var React = __importStar(require("react"));
var nav_1 = require("../nav");
var wrapper;
describe("<MainContainer /> rendering", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(MainContainer_1.MainContainer, { title: "test", actions: React.createElement(nav_1.NavLink, null), headerNav: React.createElement("div", { className: "head" }, "header nav"), sideNav: React.createElement("div", { className: "side" }, "side nav"), subNav: React.createElement("div", { className: "sub" }, "sub nav") }));
    });
    it("renders correctly", function () {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render the title", function () {
        expect(wrapper.find(".title").text()).toEqual("test");
    });
    it("should render one <Header />", function () {
        expect(wrapper.find("Header")).toHaveLength(1);
    });
    it("should render one Header actions", function () {
        expect(wrapper.find(".nav-link")).toHaveLength(1);
    });
    it("should render header nav correctly", function () {
        expect(wrapper.find(".head")).toHaveLength(1);
    });
    it("should render side nav correctly", function () {
        expect(wrapper.find(".side")).toHaveLength(1);
    });
    it("should render sub nav correctly", function () {
        expect(wrapper.find(".sub")).toHaveLength(1);
    });
    it("should have hamburger class when state is toggled", function () {
        wrapper.instance().handleHamburgerToggle();
        expect(wrapper.find(".open-hamburger-menu")).toHaveLength(1);
    });
    it("should have overflow class when state is toggled", function () {
        wrapper.instance().handleRightSideToggle();
        expect(wrapper.find(".open-overflow-menu")).toHaveLength(1);
    });
    it("should not have overflow or hamburger class when close state is toggled", function () {
        wrapper.instance().closeAll();
        expect(wrapper.find(".open-hamburger-menu")).toHaveLength(0);
        expect(wrapper.find(".open-overflow-menu")).toHaveLength(0);
    });
});
