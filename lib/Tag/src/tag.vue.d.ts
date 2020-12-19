export declare const RTagSize: {
    type: StringConstructor;
    default: string;
    validator: (val: string) => boolean;
};
export declare const RTagType: {
    type: StringConstructor;
    default: string;
    validator: (val: string) => boolean;
};
declare const _default: import("vue").DefineComponent<{
    disableTransitions: BooleanConstructor;
    light: BooleanConstructor;
    rounded: BooleanConstructor;
    closable: BooleanConstructor;
    hit: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
    deleteClasses: import("vue").ComputedRef<string[]>;
    handleClose: (event: any) => void;
    handleClick: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "click")[], "close" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size: string;
    type: string;
} & {
    disableTransitions?: boolean;
    light?: boolean;
    rounded?: boolean;
    closable?: boolean;
    hit?: boolean;
}>, {
    size: string;
    type: string;
}>;
export default _default;
