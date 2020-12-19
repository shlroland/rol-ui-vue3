import { PropType } from 'vue';
import { Options, Placement, RTrigger } from '@rol-ui/popper';
declare const _default: import("vue").DefineComponent<{
    class: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    manual: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: PropType<Placement>;
        default: Placement;
    };
    popperOptions: {
        type: PropType<Options>;
        default: () => any;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: PropType<RTrigger>;
        default: () => string[];
    };
    visibleArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    manual: boolean;
    trigger: RTrigger;
    content: string;
    class: string;
    disabled: boolean;
    enterable: boolean;
    hideAfter: number;
    showAfter: number;
    offset: number;
    placement: Placement;
    popperClass: string;
    popperOptions: Options;
    transition: string;
    visible: boolean;
    style: Record<string, any>;
    width: string;
    title: string;
    tabindex: string | number;
    visibleArrow: boolean;
} & {}>, {
    manual: boolean;
    trigger: RTrigger;
    content: string;
    class: string;
    disabled: boolean;
    enterable: boolean;
    hideAfter: number;
    showAfter: number;
    offset: number;
    placement: Placement;
    popperClass: string;
    popperOptions: Options;
    transition: string;
    visible: boolean;
    style: Record<string, any>;
    width: string;
    title: string;
    tabindex: string | number;
    visibleArrow: boolean;
}>;
export default _default;
