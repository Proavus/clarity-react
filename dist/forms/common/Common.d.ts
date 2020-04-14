import * as React from "react";
declare type FormControlProps = {
    label?: string;
    inline?: boolean;
    error?: boolean;
    disabled?: boolean;
};
export declare class FormControl extends React.PureComponent<FormControlProps> {
    render(): JSX.Element;
    private static renderChildrenDisabled;
}
declare type SubTextWrapperProps = {
    shape?: string;
    text?: string;
};
export declare const SubTextWrapper: React.FunctionComponent<SubTextWrapperProps>;
export {};
