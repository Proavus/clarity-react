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
exports.Card = exports.CardMediaBlock = exports.CardFooter = exports.CardText = exports.CardTitle = exports.CardBlock = exports.CardImage = void 0;
var React = __importStar(require("react"));
var utils_1 = require("../utils");
var ClassNames_1 = require("./ClassNames");
exports.CardImage = function (_a) {
    var children = _a.children;
    return React.createElement("div", { className: ClassNames_1.ClassNames.CARD_IMAGE }, children);
};
exports.CardBlock = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.CARD_BLOCK, className]), style: style }, children));
};
exports.CardTitle = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.CARD_TITLE, className]), style: style }, children));
};
exports.CardText = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.CARD_TEXT, className]), style: style }, children));
};
exports.CardFooter = function (_a) {
    var style = _a.style, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: utils_1.classNames([ClassNames_1.ClassNames.CARD_FOOTER, className]), style: style }, children));
};
exports.CardMediaBlock = function (_a) {
    var image = _a.image, title = _a.title, text = _a.text, wrap = _a.wrap, className = _a.className, children = _a.children;
    return (React.createElement("div", { className: utils_1.classNames([
            className,
            ClassNames_1.ClassNames.CARD_MEDIA_BLOCK,
            wrap && "wrap",
        ]) },
        React.createElement("img", { src: image, className: ClassNames_1.ClassNames.CARD_MEDIA_IMAGE }),
        React.createElement("div", { className: ClassNames_1.ClassNames.CARD_MEDIA_DESC },
            React.createElement("span", { className: ClassNames_1.ClassNames.CARD_MEDIA_TITLE }, title),
            React.createElement("span", { className: ClassNames_1.ClassNames.CARD_MEDIA_TEXT }, text),
            children)));
};
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (evt) {
            var onClick = _this.props.onClick;
            onClick && onClick(evt);
        };
        return _this;
    }
    Card.prototype.render = function () {
        var _a = this.props, className = _a.className, header = _a.header, onClick = _a.onClick, style = _a.style, children = _a.children;
        return (React.createElement("div", { className: utils_1.classNames([
                ClassNames_1.ClassNames.CARD,
                onClick && ClassNames_1.ClassNames.CLICKABLE,
                className,
            ]), style: style, onClick: this.handleClick.bind(this) },
            header && React.createElement("div", { className: ClassNames_1.ClassNames.CARD_HEADER }, header),
            children));
    };
    return Card;
}(React.PureComponent));
exports.Card = Card;
