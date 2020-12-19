import { ComponentPublicInstance, Ref } from 'vue';
import { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    role: {
        type: StringConstructor;
        required: true;
    };
    spinnerDate: {
        type: typeof Dayjs;
        required: true;
    };
    showSeconds: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowControl: BooleanConstructor;
    amPmMode: {
        type: StringConstructor;
        default: string;
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
}, {
    timePartsMap: import("vue").ComputedRef<{
        hours: import("vue").ComputedRef<number>;
        minutes: import("vue").ComputedRef<number>;
        seconds: import("vue").ComputedRef<number>;
    }>;
    listMap: import("vue").ComputedRef<{
        hours: import("vue").ComputedRef<any[]>;
        minutes: import("vue").ComputedRef<any[]>;
        seconds: import("vue").ComputedRef<any[]>;
    }>;
    spinnerItems: import("vue").ComputedRef<string[]>;
    getAmPmFlag: (hour: number) => string;
    getRefId: (item: string) => string;
    handleClick: (type: string, { value, disabled }: {
        value: any;
        disabled: any;
    }) => void;
    listHoursRef: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    listMinutesRef: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    listSecondsRef: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    listRefsMap: {
        hours: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        minutes: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        seconds: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    };
    adjustCurrentSpinner: (type: string) => void;
    emitSelectRange: (type: string) => void;
    arrowListMap: import("vue").ComputedRef<{
        hours: import("vue").ComputedRef<number[]>;
        minutes: import("vue").ComputedRef<number[]>;
        seconds: import("vue").ComputedRef<number[]>;
    }>;
    onIncreaseClick: () => void;
    onDecreaseClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "select-range" | "set-option")[], "change" | "select-range" | "set-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    role: string;
    spinnerDate: Dayjs;
    showSeconds: boolean;
    amPmMode: string;
} & {
    arrowControl?: boolean;
    disabledHours?: Function;
    disabledMinutes?: Function;
    disabledSeconds?: Function;
}>, {
    showSeconds: boolean;
    amPmMode: string;
}>;
export default _default;
