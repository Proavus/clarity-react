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
var STYLE = { width: "50%" };
var VALUE = 10;
var VALUE_FORTY = 40;
var VALUE_HUNDRED = 100;
var VAL_TWO_HUNDRED = 200;
describe("<ProgressBar /> rendering", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE, max: VALUE_HUNDRED, style: STYLE }));
    });
    it("ProgressBar renders correctly", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with label", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE, max: VALUE_HUNDRED, labeled: true, style: STYLE }));
    });
    it("ProgressBar renders correctly with label", function () {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render the correct value in  label", function () {
        expect(wrapper.find("span").text()).toEqual(" 10% ");
    });
});
describe("<ProgressBar /> rendering with static progress", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE, max: VALUE_HUNDRED, type: _1.ProgressBarType.STATIC, style: STYLE }));
    });
    it("ProgressBar renders correctly with static progress", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with Labeled, Static Progress Bar", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_FORTY, max: VALUE_HUNDRED, type: _1.ProgressBarType.STATIC, labeled: true, style: STYLE }));
    });
    it("ProgressBar renders correctly with Labeled, Static Progress Bar", function () {
        expect(wrapper).toMatchSnapshot();
    });
    it("should render the correct value in  label", function () {
        expect(wrapper.find("span").text()).toEqual(" 40% ");
    });
});
describe("<ProgressBar /> rendering with Indeterminate (Looping)", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_HUNDRED, max: VALUE_HUNDRED, className: _1.ProgressBarAnimation.LOOP, style: STYLE }));
    });
    it("ProgressBar renders correctly with Indeterminate (Looping)", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with animation for flash then fade", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_HUNDRED, max: VALUE_HUNDRED, className: _1.ProgressBarAnimation.FADE_OUT + "  " + _1.ProgressBarAnimation.FLASH, style: STYLE }));
    });
    it("ProgressBar renders correctly with animation for flash then fade", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with animation for red flash and no fade", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_HUNDRED, max: VALUE_HUNDRED, className: _1.ProgressBarAnimation.FLASH_DANGER, style: STYLE }));
    });
    it("ProgressBar renders correctly with animation for red flash and no fade", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with Labeled With SUCCESS Flash And Fade", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_HUNDRED, max: VALUE_HUNDRED, className: _1.ProgressBarAnimation.FADE_OUT + "  " + _1.ProgressBarAnimation.FLASH, labeled: true, style: STYLE }));
    });
    it("ProgressBar renders correctly with Labeled With SUCCESS Flash And Fade", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with fade out animation", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_HUNDRED, max: VALUE_HUNDRED, className: _1.ProgressBarAnimation.FADE_OUT, style: STYLE }));
    });
    it("ProgressBar renders correctly with fade out animation", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with color for success", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_FORTY, max: VALUE_HUNDRED, status: _1.ProgressBarStatus.SUCCESS, style: STYLE }));
    });
    it("ProgressBar renders correctly with color for success", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with color for danger", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_FORTY, max: VALUE_HUNDRED, status: _1.ProgressBarStatus.DANGER, style: STYLE }));
    });
    it("ProgressBar renders correctly with color for danger", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
describe("<ProgressBar /> rendering with Indeterminate (Looping)", function () {
    beforeAll(function () {
        wrapper = enzyme_1.shallow(React.createElement(_1.ProgressBar, { value: VALUE_HUNDRED, max: VAL_TWO_HUNDRED, className: _1.ProgressBarAnimation.LOOP, style: STYLE }));
    });
    it("ProgressBar renders correctly with Indeterminate (Looping)", function () {
        expect(wrapper).toMatchSnapshot();
    });
});
