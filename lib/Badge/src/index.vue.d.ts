import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    isDot: BooleanConstructor;
    hidden: BooleanConstructor;
    type: {
        type: PropType<"primary" | "success" | "warning" | "danger" | "info" | "link">;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    content: import("vue").ComputedRef<string | number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value: string | number;
    max: number;
    type: "primary" | "success" | "warning" | "danger" | "info" | "link";
} & {
    isDot?: boolean;
    hidden?: boolean;
}>, {
    value: string | number;
    max: number;
    type: "primary" | "success" | "warning" | "danger" | "info" | "link";
}>;
export default _default;
