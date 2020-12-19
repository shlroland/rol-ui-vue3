declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: () => any;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: any;
    };
    trueLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
    falseLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isChecked: import("vue").ComputedRef<any>;
    isDisabled: import("vue").ComputedRef<any>;
    size: import("vue").ComputedRef<string>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (event: InputEvent) => void;
    activeStyle: import("vue").ComputedRef<{
        backgroundColor: string;
        borderColor: string;
        color: string;
        boxShadow: string;
    }>;
    input: import("vue").Ref<HTMLInputElement>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
} & {
    label?: string | number | boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    checked?: boolean;
}>, {
    modelValue: string | number | boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
}>;
export default _default;
