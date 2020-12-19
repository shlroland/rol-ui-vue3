import { PropType, VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"" | "primary" | "success" | "warning" | "danger" | "info" | "link">;
        default: string;
        validator: (val: string) => boolean;
    };
    light: BooleanConstructor;
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    onClick: {
        type: PropType<() => void>;
        default: () => any;
    };
    onClose: {
        type: PropType<() => void>;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    horizontalClass: import("vue").ComputedRef<"right" | "left">;
    positionStyle: import("vue").ComputedRef<{
        [x: string]: string;
    }>;
    notificationDom: import("vue").Ref<HTMLDivElement>;
    close: () => void;
    visible: import("vue").Ref<boolean>;
    destroyElement: () => void;
    keydown: ({ code }: KeyboardEvent) => void;
    clearTimer: () => void;
    startTimer: () => void;
    click: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "" | "primary" | "success" | "warning" | "danger" | "info" | "link";
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    offset: number;
    customClass: string;
    message: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    title: string;
    dangerouslyUseHTMLString: boolean;
    showClose: boolean;
    id: string;
    onClick: () => void;
    onClose: () => void;
    duration: number;
} & {
    light?: boolean;
}>, {
    type: "" | "primary" | "success" | "warning" | "danger" | "info" | "link";
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    offset: number;
    customClass: string;
    message: string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    title: string;
    dangerouslyUseHTMLString: boolean;
    showClose: boolean;
    id: string;
    onClick: () => void;
    duration: number;
}>;
export default _default;
