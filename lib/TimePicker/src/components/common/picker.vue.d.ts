import { PropType } from 'vue';
import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: () => string[];
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<"large" | "medium" | "small" | "mini">;
        default: string;
        validator: (val: string) => boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<string | Date | Date[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: PropType<Date | Date[]>;
    };
    defaultTime: {
        type: PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => any[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    pickerVisible: import("vue").Ref<boolean>;
    isRangeInput: import("vue").ComputedRef<boolean>;
    onClickOutside: () => void;
    displayValue: import("vue").ComputedRef<any>;
    isDatesPicker: import("vue").ComputedRef<boolean>;
    triggerClass: import("vue").ComputedRef<string | string[]>;
    parsedValue: import("vue").ComputedRef<any>;
    showClose: import("vue").Ref<boolean>;
    handleFocus: (event: Event) => void;
    getPopperRef: (value: any) => void;
    popperRef: any;
    onPick: (date: Dayjs, visible?: boolean) => void;
    onSetPickerOption: (e: any) => void;
    onUserInput: (e: any) => void;
    handleChange: () => void;
    refContainer: any;
    handleKeydown: (event: KeyboardEvent) => void;
    setSelectionRange: (start: any, end: any, pos: any) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClearIconClick: (event: any) => void;
    handleStartInput: (event: InputEvent) => void;
    handleEndInput: (event: InputEvent) => void;
    handleStartChange: () => void;
    handleEndChange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:modelValue" | "change")[], "focus" | "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    name: string | unknown[];
    format: string;
    type: string;
    clearable: boolean;
    clearIcon: string[];
    editable: boolean;
    prefixIcon: string;
    size: "large" | "medium" | "small" | "mini";
    readonly: boolean;
    placeholder: string;
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
} & {
    startPlaceholder?: string;
    endPlaceholder?: string;
    defaultValue?: Date | Date[];
    defaultTime?: Date | Date[];
    disabledHours?: Function;
    disabledMinutes?: Function;
    disabledSeconds?: Function;
    disabledDate?: Function;
    cellClassName?: Function;
}>, {
    disabled: boolean;
    name: string | unknown[];
    type: string;
    clearable: boolean;
    clearIcon: string[];
    editable: boolean;
    prefixIcon: string;
    size: "large" | "medium" | "small" | "mini";
    readonly: boolean;
    placeholder: string;
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
}>;
export default _default;
