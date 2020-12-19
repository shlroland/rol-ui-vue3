import { PropType, Ref } from 'vue';
import { Emitter } from 'mitt';
export interface CollapseProvider {
    activeNames: Ref;
    collapseMitt: Emitter;
}
declare const _default: import("vue").DefineComponent<{
    accordion: BooleanConstructor;
    modelValue: {
        type: PropType<string | number | (string | number)[]>;
        default: () => any[];
    };
}, {
    activeNames: Ref<any[]>;
    setActiveNames: (_activeNames: string | number | Array<string | number>) => void;
    handleItemClick: (name: string | number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | (string | number)[];
} & {
    accordion?: boolean;
}>, {
    modelValue: string | number | (string | number)[];
}>;
export default _default;
