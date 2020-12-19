import { PropType } from 'vue';
declare type RButtonSizeObject = {
    span: number;
    offset: number;
};
declare const _default: import("vue").DefineComponent<{
    span: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    xs: {
        type: PropType<number | RButtonSizeObject>;
        default: () => RButtonSizeObject;
    };
    sm: {
        type: PropType<number | RButtonSizeObject>;
        default: () => RButtonSizeObject;
    };
    md: {
        type: PropType<number | RButtonSizeObject>;
        default: () => RButtonSizeObject;
    };
    lg: {
        type: PropType<number | RButtonSizeObject>;
        default: () => RButtonSizeObject;
    };
    xl: {
        type: PropType<number | RButtonSizeObject>;
        default: () => RButtonSizeObject;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    span: number;
    offset: number;
    pull: number;
    push: number;
    xs: number | RButtonSizeObject;
    sm: number | RButtonSizeObject;
    md: number | RButtonSizeObject;
    lg: number | RButtonSizeObject;
    xl: number | RButtonSizeObject;
} & {}>, {
    span: number;
    offset: number;
    pull: number;
    push: number;
    xs: number | RButtonSizeObject;
    sm: number | RButtonSizeObject;
    md: number | RButtonSizeObject;
    lg: number | RButtonSizeObject;
    xl: number | RButtonSizeObject;
}>;
export default _default;
