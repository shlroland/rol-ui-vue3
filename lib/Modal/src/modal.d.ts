import { PropType } from 'vue';
declare const modal: import("vue").DefineComponent<{
    type: {
        type: PropType<"content" | "card">;
        default: string;
        validator: (val: string) => boolean;
    };
    visible: {
        type: BooleanConstructor;
        required: true;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: PropType<(...args: any[]) => unknown>;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        validator: (val: string) => boolean;
    };
    zIndex: {
        type: NumberConstructor;
    };
}, {
    visible: import("vue").Ref<boolean>;
    style: import("vue").ComputedRef<CSSStyleDeclaration>;
    zIndex: import("vue").Ref<number>;
    onModalClick: () => void;
    handleClose: () => void;
    afterEnter: () => void;
    afterLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open" | "closed" | "opened" | "update:visible")[], "close" | "open" | "closed" | "opened" | "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "content" | "card";
    visible: boolean;
    appendToBody: boolean;
    destroyOnClose: boolean;
    customClass: string;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    fullscreen: boolean;
    lockScroll: boolean;
    overlay: boolean;
    showClose: boolean;
    title: string;
    openDelay: number;
    closeDelay: number;
    top: string;
    center: boolean;
} & {
    beforeClose?: (...args: any[]) => unknown;
    width?: string;
    zIndex?: number;
}>, {
    type: "content" | "card";
    appendToBody: boolean;
    destroyOnClose: boolean;
    customClass: string;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    fullscreen: boolean;
    lockScroll: boolean;
    overlay: boolean;
    showClose: boolean;
    title: string;
    openDelay: number;
    closeDelay: number;
    top: string;
    center: boolean;
}>;
export default modal;
