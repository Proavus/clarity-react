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
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var _1 = require(".");
var accordionContent = [
    { title: "Item 1", itemComponent: "Content 1" },
    { title: "Item 2", itemComponent: "Content 2" },
    { title: "Item 3", itemComponent: "Content 3" },
];
var nesteAccordionContent = [
    { title: "Item 1", itemComponent: "Content 1" },
    { title: "Item 2", itemComponent: React.createElement(_1.Accordion, { content: accordionContent }) },
];
react_1.storiesOf("Accordion", module)
    .add("Accordion", function () { return React.createElement(_1.Accordion, { content: accordionContent }); })
    .add("Accordion Multi Panel", function () { return React.createElement(_1.Accordion, { content: accordionContent, accordionMultiPanel: true }); })
    .add("Nested accordion", function () { return React.createElement(_1.Accordion, { content: nesteAccordionContent }); });
