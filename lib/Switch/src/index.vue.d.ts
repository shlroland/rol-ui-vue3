import { ValueType } from './switch';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    activeIconClass: {
        type: StringConstructor;
        default: string;
    };
    inactiveIconClass: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
}, {
    checked: import("vue").ComputedRef<boolean>;
    switchDisabled: import("vue").ComputedRef<boolean>;
    input: import("vue").Ref<HTMLInputElement>;
    core: import("vue").Ref<HTMLSpanElement>;
    coreWidth: import("vue").Ref<number>;
    switchValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: ValueType;
    value: ValueType;
    disabled: boolean;
    width: number;
    activeIconClass: string;
    inactiveIconClass: string;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: ValueType;
    inactiveValue: ValueType;
    name: string;
    id: string;
} & {}>, {
    modelValue: ValueType;
    value: ValueType;
    disabled: boolean;
    width: number;
    activeIconClass: string;
    inactiveIconClass: string;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: ValueType;
    inactiveValue: ValueType;
    name: string;
    id: string;
}>;
export default _default;
