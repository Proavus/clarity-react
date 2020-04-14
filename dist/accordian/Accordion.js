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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
var icon_1 = require("../icon");
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            prevItemIndex: -1,
            panelItems: [],
        };
        _this.handleButtonClick = function (index, accordionMultiPanel) {
            var items = _this.state.panelItems;
            var prevItemIndex = _this.state.prevItemIndex;
            if (prevItemIndex != -1 && prevItemIndex === index) {
                items[index].isOpen = false;
                _this.setState({ prevItemIndex: -1 });
                items[prevItemIndex].content = _this.getItemContent(prevItemIndex, items[prevItemIndex].title, true);
                _this.setState({ panelItems: items });
            }
            else if (items[index].isOpen === true) {
                items[index].isOpen = false;
                items[index].content = _this.getItemContent(index, items[index].title, true);
                _this.setState({ panelItems: items });
            }
            else {
                if (!accordionMultiPanel && prevItemIndex != -1) {
                    items[prevItemIndex].isOpen = false;
                    items[prevItemIndex].content = _this.getItemContent(prevItemIndex, items[prevItemIndex].title, true);
                }
                items[index].isOpen = true;
                items[index].content = _this.getItemContent(index, items[index].title, false);
                _this.setState({ prevItemIndex: index });
                _this.setState({ panelItems: items });
            }
            _this.accordionPanel();
        };
        _this.getItemContent = function (index, title, isPrevious) {
            var accordionMultiPanel = _this.props.accordionMultiPanel;
            var panelClass = isPrevious
                ? ClassNames_1.ClassNames.ACCORDION_PANEL_INNER
                : utils_1.classNames([ClassNames_1.ClassNames.ACCORDION_PANEL_INNER, ClassNames_1.ClassNames.ACCORDION_PANEL_OPEN]);
            var expanded = !isPrevious;
            return (React.createElement("div", { role: "group", className: panelClass, key: index },
                React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_HEADER },
                    React.createElement("button", { className: ClassNames_1.ClassNames.ACCORDION_HEADER_BUTTON, type: "button", "aria-disabled": "false", "aria-controls": "clr-accordion-content", "aria-expanded": expanded, onClick: function () { return _this.handleButtonClick(index, accordionMultiPanel); } },
                        React.createElement("span", { className: ClassNames_1.ClassNames.ACCORDION_SR }),
                        React.createElement("span", { className: ClassNames_1.ClassNames.ACCORDION_STATUS },
                            React.createElement(icon_1.Icon, { className: ClassNames_1.ClassNames.ACCORDION_ANGLE, dir: icon_1.Direction.RIGHT, shape: "angle" }),
                            React.createElement("span", { className: ClassNames_1.ClassNames.ACCORDION_NUMBER })),
                        React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_TITLE }, title)))));
        };
        _this.getAccordionContent = function () {
            var _a = _this.props, content = _a.content, accordionMultiPanel = _a.accordionMultiPanel;
            var panelContent = content.map(function (content, index) {
                return {
                    content: (React.createElement("div", { role: "group", className: ClassNames_1.ClassNames.ACCORDION_PANEL_INNER, key: index, onClick: function () { return _this.handleButtonClick(index, accordionMultiPanel); } },
                        React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_HEADER },
                            React.createElement("button", { className: ClassNames_1.ClassNames.ACCORDION_HEADER_BUTTON, type: "button", "aria-disabled": "false", "aria-controls": "clr-accordion-content", "aria-expanded": "false" },
                                React.createElement("span", { className: ClassNames_1.ClassNames.ACCORDION_SR }),
                                React.createElement("span", { className: ClassNames_1.ClassNames.ACCORDION_STATUS },
                                    React.createElement(icon_1.Icon, { className: ClassNames_1.ClassNames.ACCORDION_ANGLE, dir: icon_1.Direction.RIGHT, shape: "angle" }),
                                    React.createElement("span", { className: ClassNames_1.ClassNames.ACCORDION_NUMBER })),
                                React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_TITLE }, content.title))))),
                    isOpen: false,
                    title: content.title,
                    component: content.itemComponent,
                };
            });
            _this.setState({ panelItems: panelContent });
        };
        return _this;
    }
    Accordion.prototype.componentDidMount = function () {
        this.getAccordionContent();
    };
    Accordion.prototype.componentDidUpdate = function (prevProps) {
        var content = this.props.content;
        if (content && content != prevProps.content) {
            this.getAccordionContent();
        }
    };
    Accordion.prototype.accordionPanel = function () {
        var _this = this;
        return (React.createElement("div", null, this.state.panelItems.map(function (content, index) {
            return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.ACCORDION_PANEL]), key: "accordionPanel_" + index },
                content.content,
                content.isOpen && content.isOpen === true ? (_this.accordionContent(content)) : (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.ACCORDION_COLLAPSED_CONTENT]), "aria-hidden": "true" }))));
        })));
    };
    Accordion.prototype.accordionContent = function (content) {
        return (React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_COLLAPSED_CONTENT, "aria-hidden": "false" },
            React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_TOGGLE_CONTENT, style: { display: "block" } },
                React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_INNER_CONTENT },
                    React.createElement("div", { className: ClassNames_1.ClassNames.ACCORDION_COMPONENT }, content.component)))));
    };
    Accordion.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, dataqa = _a.dataqa;
        return (React.createElement("div", { className: utils_1.classNames([
                ClassNames_1.ClassNames.ACCORDION,
                className,
            ]), style: style, "data-qa": dataqa }, this.accordionPanel()));
    };
    return Accordion;
}(React.Component));
exports.Accordion = Accordion;
