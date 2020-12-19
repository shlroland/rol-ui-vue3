import type { Placement, PositioningStrategy, Instance as PopperInstance, Options } from '@popperjs/core';
import { PropType } from 'vue';
export declare enum Effect {
    DARK = "dark",
    LIGHT = "light"
}
export type { Placement, PositioningStrategy, PopperInstance, Options };
export declare type RTriggerType = 'click' | 'hover' | 'focus' | 'manual';
export declare type RTrigger = RTriggerType | RTriggerType[];
export declare type RefElement = Nullable<HTMLElement>;
export declare type Offset = [number, number] | number;
export declare type RPopperStyle = string | CSSStyleDeclaration;
export declare type RPopperOptions = {
    arrowOffset: number;
    boundariesPadding: number;
    class: string;
    closeDelay: number;
    cutoff: boolean;
    disabled: boolean;
    enterable: boolean;
    hideAfter: number;
    manualMode: boolean;
    offset: number;
    placement: Placement;
    popperOptions: Options;
    showAfter: number;
    showArrow: boolean;
    strategy: PositioningStrategy;
    tabIndex: string;
    trigger: RTrigger;
    visible: boolean;
    popperClass: string;
    popperStyle: RPopperStyle;
};
declare const _default: {
    trigger: {
        type: PropType<RTrigger>;
        default: string;
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    cutoff: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<Effect>;
        default: Effect;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    manualMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: PropType<Placement>;
        default: Placement;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperStyle: {
        type: PropType<RPopperStyle>;
        default: string;
    };
    pure: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperOptions: {
        type: PropType<Options>;
        default: () => any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    strategy: {
        type: PropType<PositioningStrategy>;
        default: PositioningStrategy;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    tabIndex: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
};
export default _default;
