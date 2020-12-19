declare const _default: import("vue").DefineComponent<{
    label: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}, {
    isGroup: import("vue").ComputedRef<boolean>;
    size: import("vue").ComputedRef<import("@rol-ui/radio/src/radio").RRadioSize>;
    isDisabled: import("vue").ComputedRef<boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    value: import("vue").WritableComputedRef<string | number | boolean>;
    focus: import("vue").Ref<boolean>;
    activeStyle: import("vue").ComputedRef<{
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
        color: string;
    }>;
    inputRef: import("vue").Ref<HTMLInputElement>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label: string | number | boolean;
    name: string;
} & {
    disabled?: boolean;
}>, {
    label: string | number | boolean;
    name: string;
}>;
export default _default;
