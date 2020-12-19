import { PropType } from 'vue';
import type { RRadioSize } from './radio';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    label: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    border: BooleanConstructor;
    size: {
        type: PropType<RRadioSize>;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    model: import("vue").WritableComputedRef<string | number | boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    radioSize: import("vue").ComputedRef<RRadioSize>;
    handleChange: () => void;
    radioRef: import("vue").Ref<HTMLInputElement>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    label: string | number | boolean;
    name: string;
    size: RRadioSize;
} & {
    disabled?: boolean;
    border?: boolean;
}>, {
    modelValue: string | number | boolean;
    label: string | number | boolean;
    name: string;
    size: RRadioSize;
}>;
export default _default;
