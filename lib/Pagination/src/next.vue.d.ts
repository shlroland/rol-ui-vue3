declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, {
    internalDisabled: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    currentPage: number;
    pageCount: number;
    nextText: string;
} & {
    disabled?: boolean;
}>, {
    currentPage: number;
    pageCount: number;
    nextText: string;
}>;
export default _default;
