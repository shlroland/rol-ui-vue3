import { PropType } from 'vue';
import type { MessageVM } from './message';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"" | "primary" | "success" | "warning" | "danger" | "info" | "link">;
        default: string;
        validator: (val: string) => boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: PropType<string | MessageVM>;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    onClose: {
        type: PropType<() => void>;
        required: true;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    customStyle: import("vue").ComputedRef<{
        top: string;
        zIndex: number;
    }>;
    messageDom: import("vue").Ref<HTMLDivElement>;
    close: () => void;
    visible: import("vue").Ref<boolean>;
    destroyElement: () => void;
    keydown: ({ code }: KeyboardEvent) => void;
    clearTimer: () => void;
    startTimer: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "" | "primary" | "success" | "warning" | "danger" | "info" | "link";
    id: string;
    message: string | MessageVM;
    offset: number;
    center: boolean;
    light: boolean;
    customClass: string;
    zIndex: number;
    duration: number;
    onClose: () => void;
    showClose: boolean;
    dangerouslyUseHTMLString: boolean;
} & {}>, {
    type: "" | "primary" | "success" | "warning" | "danger" | "info" | "link";
    id: string;
    message: string | MessageVM;
    offset: number;
    center: boolean;
    light: boolean;
    customClass: string;
    zIndex: number;
    duration: number;
    showClose: boolean;
    dangerouslyUseHTMLString: boolean;
}>;
export default _default;
