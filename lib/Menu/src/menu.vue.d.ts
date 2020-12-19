declare const _default: import("vue").DefineComponent<{
    defaultActive: {
        type: StringConstructor;
        default: string;
    };
    defaultOpeneds: ArrayConstructor;
    uniqueOpened: BooleanConstructor;
    router: BooleanConstructor;
    collapse: BooleanConstructor;
    backgroundColor: {
        type: StringConstructor;
    };
    textColor: {
        type: StringConstructor;
    };
    activeBackgroundColor: {
        type: StringConstructor;
    };
    collapseTransition: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    defaultActive: string;
    collapseTransition: boolean;
} & {
    defaultOpeneds?: unknown[];
    uniqueOpened?: boolean;
    router?: boolean;
    collapse?: boolean;
    backgroundColor?: string;
    textColor?: string;
    activeBackgroundColor?: string;
}>, {
    defaultActive: string;
    collapseTransition: boolean;
}>;
export default _default;
