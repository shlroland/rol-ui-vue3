declare const _default: import("vue").DefineComponent<{
    mode: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    size: any;
    leftText: StringConstructor;
    rightText: StringConstructor;
    leftType: any;
    rightType: any;
}, {
    handleClose: (event: any) => void;
    handleClick: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close")[], "click" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    mode: string;
    size: any;
    leftType: any;
    rightType: any;
} & {
    leftText?: string;
    rightText?: string;
}>, {
    mode: string;
    size: any;
    leftType: any;
    rightType: any;
}>;
export default _default;
