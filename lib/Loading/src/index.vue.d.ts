declare const _default: import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
        default: any;
    };
    spinner: {
        type: StringConstructor;
        default: any;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    fullscreen: BooleanConstructor;
    visible: BooleanConstructor;
    customClass: {
        type: StringConstructor;
        default: string;
    };
}, {
    handleAfterLeave: () => void;
    show: () => void;
    close: () => void;
    setText: (text: any) => void;
    text: import("vue").Ref<string>;
    spinner: import("vue").Ref<string>;
    background: import("vue").Ref<string>;
    customClass: import("vue").Ref<string>;
    fullscreen?: import("vue").Ref<boolean>;
    visible?: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "after-leave"[], "after-leave", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text: string;
    spinner: string;
    background: string;
    customClass: string;
} & {
    fullscreen?: boolean;
    visible?: boolean;
}>, {
    text: string;
    spinner: string;
    background: string;
    customClass: string;
}>;
export default _default;
