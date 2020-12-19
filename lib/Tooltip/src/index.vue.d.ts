import { PropType } from 'vue';
import { Effect, Options, Placement, RTrigger } from '@rol-ui/popper';
declare const _default: import("vue").DefineComponent<{
    effect: {
        type: PropType<Effect>;
        default: Effect;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    popperClass: {
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
    effect: Effect;
    enterable: boolean;
    hideAfter: number;
    showAfter: number;
    offset: number;
    placement: Placement;
    popperClass: string;
    popperOptions: Options;
    transition: string;
    visible: boolean;
    tabindex: string | number;
    visibleArrow: boolean;
} & {}>, {
    manual: boolean;
    trigger: RTrigger;
    content: string;
    class: string;
    disabled: boolean;
    effect: Effect;
    enterable: boolean;
    hideAfter: number;
    showAfter: number;
    offset: number;
    placement: Placement;
    popperClass: string;
    popperOptions: Options;
    transition: string;
    visible: boolean;
    tabindex: string | number;
    visibleArrow: boolean;
}>;
export default _default;
