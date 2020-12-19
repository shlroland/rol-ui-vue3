import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    addons: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<"center" | "right">;
        default: string;
        validator: (val: string) => boolean;
    };
    groupSize: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    defaults: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    addons: boolean;
    position: "center" | "right";
    groupSize: "small" | "medium" | "large";
} & {}>, {
    addons: boolean;
    position: "center" | "right";
    groupSize: "small" | "medium" | "large";
}>;
export default _default;
