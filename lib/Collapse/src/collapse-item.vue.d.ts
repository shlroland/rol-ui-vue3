import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: PropType<string | number>;
        default: () => number;
    };
    disabled: BooleanConstructor;
}, {
    isActive: import("vue").ComputedRef<boolean>;
    id: import("vue").Ref<number>;
    focusing: import("vue").Ref<boolean>;
    handleFocus: () => void;
    handleHeaderClick: () => void;
    handleEnterClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    name: string | number;
} & {
    disabled?: boolean;
}>, {
    title: string;
    name: string | number;
}>;
export default _default;
