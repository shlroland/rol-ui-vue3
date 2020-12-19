import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    actualVisible: {
        type: BooleanConstructor;
        default: any;
    };
    datetimeRole: {
        type: StringConstructor;
        default: string;
    };
    parsedValue: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    getPopperRef: {
        type: FunctionConstructor;
    };
}, {
    arrowControl: any;
    disabledHours: any;
    disabledMinutes: any;
    disabledSeconds: any;
    defaultValue: any;
    showSeconds: import("vue").ComputedRef<boolean>;
    amPmMode: import("vue").ComputedRef<"" | "A" | "a">;
    popperRef: import("vue").Ref<HTMLElement>;
    handleChange: (date: Dayjs) => void;
    onSetOption: (e: any) => void;
    setSelectionRange: (start: any, end: any) => void;
    transitionName: import("vue").ComputedRef<"" | "rol-zoom-in-top">;
    handleCancel: () => void;
    handleConfirm: (visible?: boolean, first?: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select-range" | "set-picker-option")[], "pick" | "select-range" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    actualVisible: boolean;
    datetimeRole: string;
    format: string;
} & {
    parsedValue?: unknown;
    getPopperRef?: Function;
}>, {
    visible: boolean;
    actualVisible: boolean;
    datetimeRole: string;
    format: string;
}>;
export default _default;
