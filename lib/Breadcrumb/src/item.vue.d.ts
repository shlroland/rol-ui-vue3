declare const _default: {
    name: string;
    props: {
        to: {
            type: (StringConstructor | ObjectConstructor)[];
            default: string;
        };
        replace: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    setup(props: any): {
        separatorIns: any;
        handleLink: () => void;
    };
    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
export default _default;
