declare const _default: import("vue").DefineComponent<{
    index: {
        type: StringConstructor;
        required: true;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    disabled: BooleanConstructor;
    popperClass: StringConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isMenuPopup: import("vue").ComputedRef<boolean>;
    opened: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
    backgroundColor: import("vue").ComputedRef<string>;
    paddingStyle: import("vue").ComputedRef<{
        paddingLeft: string;
    }>;
    active: import("vue").ComputedRef<boolean>;
    titleStyle: import("vue").ComputedRef<{
        borderBottomColor: string;
        color: string;
    }>;
    textColor: import("vue").ComputedRef<string>;
    verticalTitleRef: import("vue").Ref<HTMLElement>;
    popperVnode: any;
    handleTitleMouseenter: () => void;
    handleTitleMouseleave: () => void;
    handleMouseenter: (event: MouseEvent, showTimeout?: number) => void;
    handleMouseleave: (deepDispatch?: boolean) => void;
    data: {
        popperJS: any;
        timeout: any;
        items: {};
        submenus: {};
        mouseInChild: boolean;
        opened: boolean;
    };
    appendToBody: import("vue").ComputedRef<boolean>;
    rootProps: {} & {
        defaultActive?: string;
        defaultOpeneds?: unknown[];
        uniqueOpened?: boolean;
        router?: boolean;
        menuTrigger?: string;
        collapse?: boolean;
        backgroundColor?: string;
        textColor?: string;
        activeBackgroundColor?: string;
        collapseTransition?: boolean;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    index: string;
    showTimeout: number;
    hideTimeout: number;
    popperAppendToBody: boolean;
} & {
    disabled?: boolean;
    popperClass?: string;
}>, {
    showTimeout: number;
    hideTimeout: number;
    popperAppendToBody: boolean;
}>;
export default _default;
