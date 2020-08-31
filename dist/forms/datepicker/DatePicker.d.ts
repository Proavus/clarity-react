import * as React from "react";
import Moment from "moment";
/**
 * DatePicker Props
 * @param {value} date value
 * @param {locale} regional code
 * @param {defaultValue} default date value
 * @param {dataqa} quality engineering testing field
 */
export declare type DatePickerProps = {
    value?: Date;
    locale?: string;
    defaultValue?: Date | string;
    dataqa?: string;
    onChange?: (newValue: string | Date) => void;
};
export declare type DatePickerState = {
    isOpen: boolean;
    value: string;
    navValue: Moment.Moment;
    viewMode: ViewMode;
    inputFocused: boolean;
};
declare enum ViewMode {
    Day = 0,
    Month = 1,
    Year = 2
}
export declare class DatePicker extends React.PureComponent<DatePickerProps, DatePickerState> {
    static defaultProps: DatePickerProps;
    private calRef;
    private inputRef;
    static validDate(date: Date): Date;
    state: DatePickerState;
    get value(): string;
    handleToggle(): void;
    toggle(isOpen?: boolean): void;
    afterToggle: () => void;
    subscribeDocumentClick: () => void;
    unsubscribeDocumentClick: () => void;
    handleDocumentClick: (evt: React.MouseEvent<HTMLElement>) => void;
    handleSelectedDate(date: Date): void;
    afterSelectedDate: () => void;
    toggleViewMode(mode: ViewMode): void;
    toggleNavValueMonth(month: number): void;
    toggleNavValueYear(year: number): void;
    toggleNavValueYear10(year: number): void;
    toggleNavValue(): void;
    private static numDaysFromPrevMonth;
    private static dateToString;
    private handleInputChange;
    private handleInputBlur;
    private handleInputFocus;
    private afterInputChange;
    private buildDateClasses;
    private calculateTabIndex;
    private calculateFocus;
    render(): JSX.Element;
}
export {};
