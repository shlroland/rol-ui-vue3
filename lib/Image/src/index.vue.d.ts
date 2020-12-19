import { PropType } from 'vue';
declare enum ObjectFit {
    NONE = "none",
    CONTAIN = "contain",
    COVER = "cover",
    FILL = "fill",
    SCALE_DOWN = "scale-down",
    EMPTY = ""
}
declare const _default: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        default: string;
    };
    fit: {
        type: PropType<ObjectFit>;
        default: ObjectFit;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    previewSrcList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    container: import("vue").Ref<HTMLElement>;
    imageStyle: import("vue").ComputedRef<{
        width?: undefined;
        height?: undefined;
    } | {
        width: string;
        height: string;
    } | {
        width: string;
        height?: undefined;
    } | {
        height: string;
        width?: undefined;
    } | {
        'object-fit': ObjectFit.NONE | ObjectFit.CONTAIN | ObjectFit.COVER | ObjectFit.FILL | ObjectFit.SCALE_DOWN;
    }>;
    alignCenter: import("vue").ComputedRef<boolean>;
    preview: import("vue").ComputedRef<boolean>;
    imageIndex: import("vue").ComputedRef<number>;
    clickHandler: () => void;
    loading: import("vue").Ref<boolean>;
    hasLoadError: import("vue").Ref<boolean>;
    imgWidth: import("vue").Ref<number>;
    imgHeight: import("vue").Ref<number>;
    attrs: import("vue").Ref<{}>;
    showViewer: import("vue").Ref<boolean>;
    closeViewer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    src: string;
    fit: ObjectFit;
    lazy: boolean;
    scrollContainer: any;
    previewSrcList: unknown[];
    zIndex: number;
} & {}>, {
    src: string;
    fit: ObjectFit;
    lazy: boolean;
    scrollContainer: any;
    previewSrcList: unknown[];
    zIndex: number;
}>;
export default _default;
