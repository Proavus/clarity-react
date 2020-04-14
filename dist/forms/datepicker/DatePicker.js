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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var icon_1 = require("../../icon");
var moment_1 = __importDefault(require("moment"));
var utils_1 = require("../../utils");
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Day"] = 0] = "Day";
    ViewMode[ViewMode["Month"] = 1] = "Month";
    ViewMode[ViewMode["Year"] = 2] = "Year";
})(ViewMode || (ViewMode = {}));
var CalendarTableWeekDays = function () {
    return (React.createElement("table", { className: "calendar-table weekdays" },
        React.createElement("tbody", null,
            React.createElement("tr", { className: "calendar-row" }, moment_1.default.weekdaysShort(true).map(function (day) {
                return (React.createElement("td", { key: "day_" + day, className: "calendar-cell weekday" }, day.substring(0, 1)));
            })))));
};
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.calRef = React.createRef();
        _this.inputRef = React.createRef();
        _this.state = {
            viewMode: ViewMode.Day,
            isOpen: false,
            value: _this.value,
            navValue: _this.props.value !== undefined
                ? moment_1.default(DatePicker.validDate(_this.props.value))
                : moment_1.default(_this.props.defaultValue),
            inputFocused: false,
        };
        _this.afterToggle = function () {
            if (_this.state.isOpen) {
                _this.subscribeDocumentClick();
            }
            else {
                _this.unsubscribeDocumentClick();
            }
        };
        _this.subscribeDocumentClick = function () {
            window.addEventListener("click", _this.handleDocumentClick, true);
        };
        _this.unsubscribeDocumentClick = function () {
            window.removeEventListener("click", _this.handleDocumentClick, true);
        };
        _this.handleDocumentClick = function (evt) {
            if (!_this.state.isOpen)
                return;
            var target = evt.target;
            var el = _this.calRef.current;
            if (!el || typeof el === "string") {
                console.warn("wrong element type");
                return;
            }
            if (!el.contains(target)) {
                _this.toggle(false);
            }
        };
        _this.afterSelectedDate = function () {
            _this.inputRef.current.focus();
            if (_this.props.onChange)
                _this.props.onChange(new Date(_this.state.value));
        };
        _this.handleInputChange = function (evt) {
            _this.setState({
                value: evt.target.value,
                navValue: moment_1.default(DatePicker.validDate(new Date(evt.target.value)), moment_1.default.localeData(_this.props.locale).longDateFormat("L")),
            }, _this.afterInputChange);
        };
        _this.handleInputBlur = function (evt) {
            _this.setState({ inputFocused: false });
        };
        _this.handleInputFocus = function (evt) {
            _this.setState({ inputFocused: true });
        };
        _this.afterInputChange = function () {
            if (_this.props.onChange) {
                _this.props.onChange(_this.state.value);
            }
        };
        return _this;
    }
    DatePicker.validDate = function (date) {
        if (isNaN(date.getTime()))
            return new Date();
        return date;
    };
    Object.defineProperty(DatePicker.prototype, "value", {
        get: function () {
            var _a = this.props, value = _a.value, defaultValue = _a.defaultValue;
            var result = ""; // in case we don't have a default or hard set value.
            if (value !== undefined)
                result = DatePicker.dateToString(value);
            if (defaultValue !== undefined)
                result = DatePicker.dateToString(defaultValue);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    DatePicker.prototype.handleToggle = function () {
        this.toggle();
    };
    DatePicker.prototype.toggle = function (isOpen) {
        if (isOpen === void 0) { isOpen = !this.state.isOpen; }
        this.setState({
            isOpen: isOpen,
            viewMode: ViewMode.Day,
            navValue: isOpen && this.state.value.length > 0
                ? moment_1.default(DatePicker.validDate(new Date(this.state.value)), moment_1.default.localeData(this.props.locale).longDateFormat("L"))
                : this.state.navValue,
        }, this.afterToggle);
    };
    DatePicker.prototype.handleSelectedDate = function (date) {
        this.setState({
            isOpen: false,
            value: DatePicker.dateToString(date),
            navValue: moment_1.default(date),
        }, this.afterSelectedDate);
    };
    DatePicker.prototype.toggleViewMode = function (mode) {
        this.setState({ viewMode: mode });
    };
    DatePicker.prototype.toggleNavValueMonth = function (month) {
        var newValue = moment_1.default(this.state.navValue);
        newValue.month(month);
        this.setState({ viewMode: ViewMode.Day, navValue: newValue });
    };
    DatePicker.prototype.toggleNavValueYear = function (year) {
        var newValue = moment_1.default(this.state.navValue);
        newValue.year(year);
        this.setState({ viewMode: ViewMode.Day, navValue: newValue });
    };
    DatePicker.prototype.toggleNavValueYear10 = function (year) {
        var newValue = moment_1.default(this.state.navValue);
        newValue.year(newValue.year() + year);
        this.setState({ navValue: newValue });
    };
    DatePicker.prototype.toggleNavValue = function () {
        this.setState({ viewMode: ViewMode.Day, navValue: moment_1.default() });
    };
    DatePicker.numDaysFromPrevMonth = function (year, month) {
        var tempDate = moment_1.default();
        tempDate.year(year);
        tempDate.month(month);
        tempDate.date(1);
        return tempDate.day();
    };
    DatePicker.dateToString = function (date, locale) {
        if (locale === void 0) { locale = "en"; }
        if (typeof date === "string")
            return date;
        return moment_1.default(date)
            .locale(locale)
            .format("L");
    };
    DatePicker.prototype.buildDateClasses = function (isSelected, isToday, isDisabled) {
        return utils_1.classNames([
            "day-btn",
            isSelected && !isToday && "is-selected",
            isToday && "is-today",
            isDisabled && "is-disabled",
        ]);
    };
    DatePicker.prototype.calculateTabIndex = function (isSelected, isToday, selectedSameMonth) {
        return selectedSameMonth ? (isSelected ? 0 : -1) : isToday ? 0 : -1;
    };
    DatePicker.prototype.calculateFocus = function (isSelected, isToday, selectedSameMonth) {
        return selectedSameMonth ? (isSelected ? true : false) : isToday ? true : false;
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.state, isOpen = _a.isOpen, viewMode = _a.viewMode, navValue = _a.navValue, inputFocused = _a.inputFocused, value = _a.value;
        var _b = this.props, locale = _b.locale, dataqa = _b.dataqa;
        var navMonth = navValue.month();
        var navYear = navValue.year();
        var daysFromPrevMonth = DatePicker.numDaysFromPrevMonth(navYear, navMonth);
        var calendar = moment_1.default()
            .year(navYear)
            .month(navMonth)
            .date(1)
            .subtract(daysFromPrevMonth, "days");
        var moment = moment_1.default(value, moment_1.default.localeData(locale).longDateFormat("L"));
        var selectedSameMonth = moment.isSame(navValue, "month");
        return (React.createElement("div", { ref: this.calRef, className: "clr-control-container", "data-qa": dataqa },
            React.createElement("div", { className: "clr-input-wrapper" },
                React.createElement("div", { className: utils_1.classNames([
                        "clr-input-group",
                        inputFocused && "clr-focus",
                    ]) },
                    React.createElement("input", { ref: this.inputRef, type: "text", className: "clr-input", placeholder: moment_1.default.localeData(locale).longDateFormat("L"), value: value, onFocus: this.handleInputFocus, onBlur: this.handleInputBlur, onChange: this.handleInputChange }),
                    React.createElement("button", { className: "clr-input-group-icon-action", type: "button", title: "Open", onClick: this.handleToggle.bind(this) },
                        React.createElement(icon_1.Icon, { shape: "calendar" })),
                    isOpen && (React.createElement("div", { className: "datepicker", style: {
                            position: "absolute",
                            left: 0,
                            bottom: "auto",
                            right: "auto",
                        } },
                        viewMode === ViewMode.Day && (React.createElement("div", { className: "daypicker" },
                            React.createElement("div", { className: "calendar-header" },
                                React.createElement("div", { className: "calendar-pickers" },
                                    React.createElement("button", { className: "calendar-btn monthpicker-trigger", type: "button", onClick: this.toggleViewMode.bind(this, ViewMode.Month) }, navValue.format("MMM")),
                                    React.createElement("button", { className: "calendar-btn yearpicker-trigger", type: "button", onClick: this.toggleViewMode.bind(this, ViewMode.Year) }, navValue.format("YYYY"))),
                                React.createElement("div", { className: "calendar-switchers" },
                                    React.createElement("button", { className: "calendar-btn switcher", type: "button", onClick: this.toggleNavValueMonth.bind(this, navValue.month() - 1) },
                                        React.createElement(icon_1.Icon, { shape: "angle", dir: icon_1.Direction.LEFT })),
                                    React.createElement("button", { className: "calendar-btn switcher", type: "button", onClick: this.toggleNavValue.bind(this) },
                                        React.createElement(icon_1.Icon, { shape: "event" })),
                                    React.createElement("button", { className: "calendar-btn switcher", type: "button", onClick: this.toggleNavValueMonth.bind(this, navValue.month() + 1) },
                                        React.createElement(icon_1.Icon, { shape: "angle", dir: icon_1.Direction.RIGHT })))),
                            React.createElement(CalendarTableWeekDays, null),
                            React.createElement("table", { className: "calendar-table calendar-dates" },
                                React.createElement("tbody", null, [0, 1, 2, 3, 4, 5].map(function (row) {
                                    return (React.createElement("tr", { key: "tr_" + row, className: "calendar-row" }, [0, 1, 2, 3, 4, 5, 6].map(function (cell) {
                                        var isToday = calendar.isSame(moment_1.default(), "day"); // are we on today?
                                        var isSelected = calendar.isSame(moment, "day"); // are we on selected?
                                        var isDisabled = !navValue.isSame(calendar, "month");
                                        var day = (React.createElement("td", { key: "td_" + cell, className: "calendar-cell" },
                                            React.createElement("div", { className: "day" },
                                                React.createElement("button", { type: "button", className: _this.buildDateClasses(isSelected, isToday, isDisabled), tabIndex: _this.calculateTabIndex(isSelected, isToday, selectedSameMonth), autoFocus: _this.calculateFocus(isSelected, isToday, selectedSameMonth), onClick: _this.handleSelectedDate.bind(_this, calendar.toDate()) }, calendar.date()))));
                                        calendar.add(1, "day");
                                        return day;
                                    })));
                                }))))),
                        viewMode === ViewMode.Month && (React.createElement("div", { className: "monthpicker" }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (month) {
                            return (React.createElement("button", { type: "button" //prettier
                                , className: utils_1.classNames([
                                    "calendar-btn",
                                    "month",
                                    month === 0 && "is-selected",
                                ]), autoFocus: month === 0 ? true : false, tabIndex: month === 0 ? 0 : -1, onClick: _this.toggleNavValueMonth.bind(_this, month) }, moment_1.default()
                                .month(month)
                                .format("MMMM")));
                        }))),
                        viewMode === ViewMode.Year && (React.createElement("div", { className: "yearpicker" },
                            React.createElement("div", { className: "year-switchers" },
                                React.createElement("button", { type: "button", className: "calendar-btn switcher", onClick: this.toggleNavValueYear10.bind(this, -10) },
                                    React.createElement(icon_1.Icon, { shape: "angle", dir: icon_1.Direction.LEFT })),
                                React.createElement("button", { type: "button", className: "calendar-btn switcher", onClick: this.toggleNavValue.bind(this) },
                                    React.createElement(icon_1.Icon, { shape: "event" })),
                                React.createElement("button", { type: "button", className: "calendar-btn switcher", onClick: this.toggleNavValueYear10.bind(this, 10) },
                                    React.createElement(icon_1.Icon, { shape: "angle", dir: icon_1.Direction.RIGHT }))),
                            React.createElement("div", { className: "years" }, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(function (year_index) {
                                var moment = moment_1.default(navValue).subtract(year_index, "year");
                                return (React.createElement("button", { type: "button", className: "calendar-btn year", onClick: _this.toggleNavValueYear.bind(_this, moment.year()) }, moment.format("YYYY")));
                            }))))))))));
    };
    DatePicker.defaultProps = {
        locale: "en",
        value: undefined,
        defaultValue: undefined,
        onChange: undefined,
    };
    return DatePicker;
}(React.PureComponent));
exports.DatePicker = DatePicker;
