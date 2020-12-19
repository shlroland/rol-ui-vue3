import { RRadioSize } from '@rol-ui/radio/src/radio';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    size: {
        type: PropType<RRadioSize>;
        default: string;
        validator: (val: string) => boolean;
    };
    fill: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}, {
    radioGroup: import("vue").Ref<HTMLDivElement>;
    handleKeydown: (event: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    size: RRadioSize;
    fill: string;
    textColor: string;
} & {
    disabled?: boolean;
}>, {
    modelValue: string | number | boolean;
    size: RRadioSize;
    fill: string;
    textColor: string;
}>;
export default _default;
