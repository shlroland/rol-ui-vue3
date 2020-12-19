declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
        required: true;
        validator: (val: number) => boolean;
    };
    status: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: (StringConstructor | ArrayConstructor | FunctionConstructor)[];
        default: string;
    };
    format: {
        type: FunctionConstructor;
        default: (percentage: number) => string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
}, {
    barStyle: import("vue").ComputedRef<{
        width: string;
        backgroundColor: any;
    }>;
    content: import("vue").ComputedRef<any>;
    progressTextSize: import("vue").ComputedRef<number>;
    iconClass: import("vue").ComputedRef<string[] | "exclamation-circle" | "check" | "times">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
    percentage: number;
    status: string;
    showText: boolean;
    textInside: boolean;
    strokeWidth: number;
    color: string | Function | unknown[];
    format: Function;
    width: number;
} & {}>, {
    type: string;
    percentage: number;
    status: string;
    showText: boolean;
    textInside: boolean;
    strokeWidth: number;
    color: string | Function | unknown[];
    format: Function;
    width: number;
}>;
export default _default;
