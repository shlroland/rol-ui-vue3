import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | ArrayConstructor)[];
        default: () => any;
    };
    disabled: BooleanConstructor;
    min: {
        type: NumberConstructor;
        default: any;
    };
    max: {
        type: NumberConstructor;
        default: any;
    };
    size: {
        type: PropType<"normal" | "medium" | "small" | "mini">;
        default: string;
        validator: (val: string) => boolean;
    };
    fill: {
        type: StringConstructor;
        default: any;
    };
    textColor: {
        type: StringConstructor;
        default: any;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: any;
    min: number;
    max: number;
    size: "normal" | "medium" | "small" | "mini";
    fill: string;
    textColor: string;
} & {
    disabled?: boolean;
}>, {
    modelValue: any;
    min: number;
    max: number;
    size: "normal" | "medium" | "small" | "mini";
    fill: string;
    textColor: string;
}>;
export default _default;
