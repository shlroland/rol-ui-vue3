declare const _default: import("vue").DefineComponent<{
    openDelay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeDelay: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: NumberConstructor;
    };
    modalFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalClass: {
        type: StringConstructor;
        default: string;
    };
    modalAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnHashChange: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        default: boolean;
        type: BooleanConstructor;
    };
    roundButton: {
        default: boolean;
        type: BooleanConstructor;
    };
}, {
    hasMessage: import("vue").ComputedRef<boolean>;
    confirmButtonClasses: import("vue").ComputedRef<string>;
    handleWrapperClick: () => void;
    handleInputEnter: () => void;
    handleAction: (action: any) => void;
    handleClose: () => void;
    doClose: () => void;
    icon: import("vue").ComputedRef<string>;
    uid?: import("vue").Ref<number>;
    callback?: import("vue").Ref<(...rest: any[]) => unknown>;
    focusAfterClosed?: import("vue").Ref<string | HTMLElement>;
    isOnComposition?: import("vue").Ref<boolean>;
    distinguishCancelAndClose?: import("vue").Ref<boolean>;
    type$?: import("vue").Ref<any>;
    visible: import("vue").Ref<boolean>;
    validateError: import("vue").Ref<boolean>;
    title?: import("vue").Ref<string>;
    message?: import("vue").Ref<string>;
    type?: import("vue").Ref<import("./message-box").MessageType>;
    iconClass?: import("vue").Ref<string>;
    customClass?: import("vue").Ref<string>;
    showInput?: import("vue").Ref<boolean>;
    showClose?: import("vue").Ref<boolean>;
    inputValue?: import("vue").Ref<string>;
    inputPlaceholder?: import("vue").Ref<string>;
    inputType?: import("vue").Ref<string>;
    inputPattern?: import("vue").Ref<{
        exec: (string: string) => RegExpExecArray;
        test: (string: string) => boolean;
        readonly source: string;
        readonly global: boolean;
        readonly ignoreCase: boolean;
        readonly multiline: boolean;
        lastIndex: number;
        compile: () => RegExp;
        readonly flags: string;
        readonly sticky: boolean;
        readonly unicode: boolean;
        readonly dotAll: boolean;
    } & {
        [Symbol.match]: (string: string) => RegExpMatchArray;
    } & {
        [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
    } & {
        [Symbol.replace]: {
            (string: string, replaceValue: string): string;
            (string: string, replacer: (substring: string, ...args: any[]) => string): string;
        };
    } & {
        [Symbol.search]: (string: string) => number;
    } & {
        [Symbol.split]: (string: string, limit?: number) => string[];
    }>;
    inputValidator?: import("vue").Ref<import("./message-box").MessageBoxInputValidator>;
    inputErrorMessage?: import("vue").Ref<string>;
    showConfirmButton?: import("vue").Ref<boolean>;
    showCancelButton?: import("vue").Ref<boolean>;
    action?: import("vue").Ref<import("./message-box").MessageBoxCloseAction>;
    dangerouslyUseHTMLString?: import("vue").Ref<boolean>;
    confirmButtonText?: import("vue").Ref<string>;
    cancelButtonText?: import("vue").Ref<string>;
    confirmButtonLoading?: import("vue").Ref<boolean>;
    cancelButtonLoading?: import("vue").Ref<boolean>;
    confirmButtonClass?: import("vue").Ref<string>;
    confirmButtonDisabled?: import("vue").Ref<boolean>;
    cancelButtonClass?: import("vue").Ref<string>;
    editorErrorMessage?: import("vue").Ref<string>;
    close?: import("vue").Ref<() => any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    showClose: boolean;
    openDelay: boolean;
    closeDelay: boolean;
    modalFade: boolean;
    modalClass: string;
    modalAppendToBody: boolean;
    modal: boolean;
    lockScroll: boolean;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    closeOnHashChange: boolean;
    center: boolean;
    roundButton: boolean;
} & {
    zIndex?: number;
}>, {
    showClose: boolean;
    openDelay: boolean;
    closeDelay: boolean;
    modalFade: boolean;
    modalClass: string;
    modalAppendToBody: boolean;
    modal: boolean;
    lockScroll: boolean;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    closeOnHashChange: boolean;
    center: boolean;
    roundButton: boolean;
}>;
export default _default;
