import dayjs, { Dayjs } from 'dayjs';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor[];
        default: boolean;
    };
    parsedValue: {
        type: PropType<string | dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, {
    showSeconds: import("vue").ComputedRef<boolean>;
    arrowControl: any;
    disabledHours_: (role: any, compare: Dayjs) => any[];
    disabledMinutes_: (hour: any, role: any, compare: Dayjs) => any;
    disabledSeconds_: (hour: any, minute: any, role: any, compare: any) => any;
    defaultValue: any;
    amPmMode: import("vue").ComputedRef<"" | "A" | "a">;
    minDate: import("vue").ComputedRef<dayjs.Dayjs>;
    maxDate: import("vue").ComputedRef<dayjs.Dayjs>;
    handleChange: (minDate: any, maxDate: any) => void;
    handleMinChange: (date: any) => void;
    handleMaxChange: (date: any) => void;
    handleConfirm: (visible?: boolean) => void;
    handleCancel: () => void;
    onSetOption: (e: any) => void;
    setMinSelectionRange: (start: any, end: any) => void;
    setMaxSelectionRange: (start: any, end: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "set-picker-option" | "select-range")[], "pick" | "set-picker-option" | "select-range", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    format: string;
} & {
    parsedValue?: string | dayjs.Dayjs[];
}>, {
    visible: boolean;
    format: string;
}>;
export default _default;
