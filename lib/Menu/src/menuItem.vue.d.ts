import { RootMenuProvider } from './menu';
declare const _default: import("vue").DefineComponent<{
    index: {
        default: any;
        validator: (val: unknown) => boolean;
    };
    route: (ObjectConstructor | StringConstructor)[];
    disabled: BooleanConstructor;
}, {
    active: import("vue").ComputedRef<boolean>;
    handleClick: () => void;
    backgroundColor: import("vue").ComputedRef<string>;
    paddingStyle: import("vue").ComputedRef<{
        paddingLeft: string;
    }>;
    itemStyle: import("vue").ComputedRef<{
        color: string;
        backgroundColor: string;
        borderBottomColor: string;
    }>;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    parentMenu: import("vue").ComputedRef<import("vue").ComponentInternalInstance>;
    rootMenu: RootMenuProvider;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    index: any;
} & {
    route?: unknown;
    disabled?: boolean;
}>, {
    index: any;
}>;
export default _default;
