import { SetupContext } from 'vue';
interface UseModalProps {
    beforeClose?: (close: (shouldCancel: boolean) => void) => void;
    closeOnClickModal?: boolean;
    closeOnPressEscape?: boolean;
    closeDelay?: number;
    destroyOnClose?: boolean;
    fullscreen?: boolean;
    lockScroll?: boolean;
    visible: boolean;
    openDelay?: number;
    top?: string;
    width?: string;
    zIndex?: number;
    center?: boolean;
}
export declare const CLOSE_EVENT = "close";
export declare const OPEN_EVENT = "open";
export declare const CLOSED_EVENT = "closed";
export declare const OPENED_EVENT = "opened";
export default function (props: UseModalProps, ctx: SetupContext): {
    visible: import("vue").Ref<boolean>;
    style: import("vue").ComputedRef<CSSStyleDeclaration>;
    zIndex: import("vue").Ref<number>;
    onModalClick: () => void;
    handleClose: () => void;
    afterEnter: () => void;
    afterLeave: () => void;
};
export {};
