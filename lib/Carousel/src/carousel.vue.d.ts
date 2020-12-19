/// <reference types="node" />
/// <reference types="lodash" />
import { Ref, ToRefs, UnwrapRef } from 'vue';
import { RCarouselItemData, RCarouselItemProps } from './carousel-item.vue';
declare type UnionCarouselItemData = RCarouselItemProps & ToRefs<RCarouselItemData>;
interface CarouselItem extends UnionCarouselItemData {
    uid: number;
    translateItem: (index: number, activeIndex: number, oldIndex: number) => void;
}
export interface InjectCarouselScope {
    direction: string;
    offsetWidth: Ref<number>;
    offsetHeight: Ref<number>;
    type: string;
    items: Ref<UnwrapRef<CarouselItem[]>>;
    loop: boolean;
    updateItems: (item: CarouselItem) => void;
    setActiveItem: (index: number) => void;
}
declare const _default: import("vue").DefineComponent<{
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    indicatorPosition: {
        type: StringConstructor;
        default: string;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrow: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
}, {
    carouselClasses: import("vue").ComputedRef<string[]>;
    arrowDisplay: import("vue").ComputedRef<boolean>;
    root: Ref<HTMLDivElement>;
    indicatorsClasses: import("vue").ComputedRef<string[]>;
    items: Ref<{
        [x: string]: any;
        uid: number;
        translateItem: (index: number, activeIndex: number, oldIndex: number) => void;
    }[]>;
    data: {
        activeIndex: number;
        containerWidth: number;
        timer: {
            hasRef: () => boolean;
            refresh: () => NodeJS.Timeout;
            ref: () => NodeJS.Timeout;
            unref: () => NodeJS.Timeout;
        };
        hover: boolean;
    };
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    throttledArrowClick: import("lodash").DebouncedFunc<(index: number) => void>;
    hasLabel: import("vue").ComputedRef<boolean>;
    handleIndicatorClick: (index: any) => void;
    throttledIndicatorHover: import("lodash").DebouncedFunc<(index: number) => void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    initialIndex: number;
    height: string;
    trigger: string;
    autoplay: boolean;
    interval: number;
    indicatorPosition: string;
    indicator: boolean;
    arrow: string;
    type: string;
    loop: boolean;
    direction: string;
} & {}>, {
    initialIndex: number;
    height: string;
    trigger: string;
    autoplay: boolean;
    interval: number;
    indicatorPosition: string;
    indicator: boolean;
    arrow: string;
    type: string;
    loop: boolean;
    direction: string;
}>;
export default _default;
