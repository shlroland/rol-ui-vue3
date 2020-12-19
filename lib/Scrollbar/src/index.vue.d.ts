import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    native: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapStyle: {
        type: PropType<string | string[]>;
        default: string;
    };
    wrapClass: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    viewClass: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    viewStyle: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    noresize: BooleanConstructor;
}, {
    gutter: import("vue").ComputedRef<number>;
    style: import("vue").ComputedRef<string | Record<string, string>>;
    wrap: any;
    resize: any;
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    handleScroll: () => void;
    sizeWidth: import("vue").Ref<string>;
    sizeHeight: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    native: boolean;
    wrapStyle: string | string[];
    wrapClass: string | unknown[];
    viewClass: string | unknown[];
    viewStyle: string | unknown[];
    tag: string;
} & {
    noresize?: boolean;
}>, {
    native: boolean;
    wrapStyle: string | string[];
    wrapClass: string | unknown[];
    viewClass: string | unknown[];
    viewStyle: string | unknown[];
    tag: string;
}>;
export default _default;
