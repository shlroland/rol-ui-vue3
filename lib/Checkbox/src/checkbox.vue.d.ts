import { PropType } from 'vue';
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
    id: {
        type: StringConstructor;
        default: any;
    };
    controls: {
        type: StringConstructor;
        default: any;
    };
    border: BooleanConstructor;
    size: {
        type: PropType<"normal" | "medium" | "small" | "mini">;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isChecked: import("vue").ComputedRef<any>;
    checkboxSize: import("vue").ComputedRef<string>;
    model: import("vue").WritableComputedRef<any>;
    isDisabled: import("vue").ComputedRef<any>;
    handleChange: (event: InputEvent) => void;
    isLimitExceeded: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
    id: string;
    controls: string;
    size: "normal" | "medium" | "small" | "mini";
} & {
    label?: string | number | boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    checked?: boolean;
    border?: boolean;
}>, {
    modelValue: string | number | boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
    id: string;
    controls: string;
    size: "normal" | "medium" | "small" | "mini";
}>;
export default _default;
