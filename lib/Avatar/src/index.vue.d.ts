import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<string | number>;
        validator(this: never, val: unknown): boolean;
        default: string;
    };
    shape: {
        type: StringConstructor;
        default: string;
        validator(this: never, val: string): boolean;
    };
    icon: {
        type: PropType<import("@fortawesome/fontawesome-svg-core").IconProp>;
        default: string;
    };
    src: StringConstructor;
    alt: StringConstructor;
    srcSet: StringConstructor;
    fit: {
        type: StringConstructor;
        default: string;
    };
}, {
    sizeStyle: import("vue").ComputedRef<{
        height: string;
        width: string;
        lineHeight: string;
    } | {
        height?: undefined;
        width?: undefined;
        lineHeight?: undefined;
    }>;
    fitStyle: import("vue").ComputedRef<{
        objectFit: string;
    }>;
    handleError: (e: Event) => void;
    hasLoadError: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size: string | number;
    shape: string;
    icon: import("@fortawesome/fontawesome-svg-core").IconProp;
    fit: string;
} & {
    src?: string;
    alt?: string;
    srcSet?: string;
}>, {
    size: string | number;
    shape: string;
    icon: import("@fortawesome/fontawesome-svg-core").IconProp;
    fit: string;
}>;
export default _default;
