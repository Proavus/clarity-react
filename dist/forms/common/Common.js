"use strict";
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
exports.SubTextWrapper = exports.FormControl = void 0;
var React = __importStar(require("react"));
var icon_1 = require("../../icon");
var ClassNames_1 = require("./ClassNames");
var utils_1 = require("../../utils");
var checkbox_1 = require("../checkbox");
var toggle_1 = require("../toggle");
var FormControl = /** @class */ (function (_super) {
    __extends(FormControl, _super);
    function FormControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormControl.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, label = _a.label, error = _a.error, inline = _a.inline, children = _a.children;
        return (React.createElement("div", { className: utils_1.classNames([
                ClassNames_1.ClassNames.CLR_FORM_CONTROL,
                disabled && ClassNames_1.ClassNames.CLR_FORM_CONTROL_DISABLED,
            ]) },
            label && React.createElement("label", { className: ClassNames_1.ClassNames.CLR_CONTROL_LABEL }, label),
            React.createElement("div", { className: utils_1.classNames([
                    ClassNames_1.ClassNames.CLR_CONTROL_CONTAINER,
                    error && ClassNames_1.ClassNames.CLR_ERROR,
                    inline && ClassNames_1.ClassNames.CLR_CONTROL_INLINE,
                ]) }, disabled ? FormControl.renderChildrenDisabled(children) : children)));
    };
    FormControl.renderChildrenDisabled = function (children) {
        var childrenDisable = React.Children.map(children, function (child) {
            var childEl = child;
            if (childEl.type === checkbox_1.CheckBox || childEl.type === toggle_1.Toggle || childEl.type === exports.SubTextWrapper) {
                return React.cloneElement(childEl, {
                    disabled: true,
                });
            }
        });
        return childrenDisable;
    };
    return FormControl;
}(React.PureComponent));
exports.FormControl = FormControl;
exports.SubTextWrapper = function (_a) {
    var shape = _a.shape, text = _a.text, children = _a.children;
    return (React.createElement("div", { className: ClassNames_1.ClassNames.CLR_SUBTEXT_WRAPPER },
        shape && React.createElement(icon_1.Icon, { className: ClassNames_1.ClassNames.CLR_VALIDATE_ICON, shape: shape }),
        React.createElement("span", { className: ClassNames_1.ClassNames.CLR_SUBTEXT }, text)));
};
