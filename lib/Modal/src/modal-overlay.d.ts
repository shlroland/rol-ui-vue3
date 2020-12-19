declare const _default: import("vue").DefineComponent<{
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
    };
    zIndex: {
        type: NumberConstructor;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mask: boolean;
    center: boolean;
} & {
    overlayClass?: string;
    zIndex?: number;
}>, {
    mask: boolean;
    center: boolean;
}>;
export default _default;
