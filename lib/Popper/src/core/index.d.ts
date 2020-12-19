import { ComponentPublicInstance, SetupContext } from 'vue';
import { PopperInstance, RPopperOptions } from './props';
export declare const UPDATE_VISIBLE_EVENT = "update:visible";
declare type REmitOptions = typeof UPDATE_VISIBLE_EVENT | 'after-enter' | 'after-leave';
export default function (props: RPopperOptions, { emit }: SetupContext<REmitOptions[]>): {
    doDestroy: (forceDestroy?: boolean) => void;
    show: () => void;
    hide: () => void;
    onPopperMouseEnter: () => void;
    onPopperMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    initPopperInstance: () => void;
    arrowRef: import("vue").Ref<HTMLElement>;
    events: {
        onClick?: (e: Event) => void;
        onMouseEnter?: (e: Event) => void;
        onMouseLeave?: (e: Event) => void;
        onFocus?: (e: Event) => void;
        onBlur?: (e: Event) => void;
    };
    popperId: string;
    popperInstance: PopperInstance;
    popperRef: import("vue").Ref<HTMLElement>;
    triggerRef: import("vue").Ref<HTMLElement> | import("vue").Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    visibility: import("vue").WritableComputedRef<boolean>;
    update: () => void;
};
export {};
