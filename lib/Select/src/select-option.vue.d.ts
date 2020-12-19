declare const _default: import("vue").DefineComponent<{
    value: {
        required: true;
        type: (ObjectConstructor | StringConstructor | NumberConstructor)[];
    };
    label: (StringConstructor | NumberConstructor)[];
    created: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    currentLabel: import("vue").ComputedRef<any>;
    visible: import("vue").Ref<boolean>;
    hover: import("vue").Ref<boolean>;
    itemSelected: import("vue").ComputedRef<boolean>;
    selectOptionClick: () => void;
    isDisabled: import("vue").ComputedRef<any>;
    hoverItem: () => void;
    multiple: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: unknown;
    disabled: boolean;
} & {
    label?: string | number;
    created?: boolean;
}>, {
    disabled: boolean;
}>;
export default _default;
