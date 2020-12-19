declare const _default: import("vue").DefineComponent<{
    pageSize: NumberConstructor;
    pageSizes: {
        type: ArrayConstructor;
        default: () => number[];
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}, {
    innerPagesizes: import("vue").ComputedRef<unknown[]>;
    innerPageSize: import("vue").Ref<number>;
    handleChange: (val: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "page-size-change"[], "page-size-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    pageSizes: unknown[];
    popperClass: string;
} & {
    pageSize?: number;
    disabled?: boolean;
}>, {
    pageSizes: unknown[];
    popperClass: string;
}>;
export default _default;
