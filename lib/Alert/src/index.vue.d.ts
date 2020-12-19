import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    center: BooleanConstructor;
    blod: BooleanConstructor;
    light: BooleanConstructor;
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<"" | "primary" | "success" | "warning" | "danger" | "info" | "link">;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    visible: import("vue").Ref<boolean>;
    isBoldTitle: import("vue").ComputedRef<"" | "is-bold">;
    close: (evt: any) => void;
    typeClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title: string;
    description: string;
    closable: boolean;
    type: "" | "primary" | "success" | "warning" | "danger" | "info" | "link";
} & {
    center?: boolean;
    blod?: boolean;
    light?: boolean;
}>, {
    title: string;
    description: string;
    closable: boolean;
    type: "" | "primary" | "success" | "warning" | "danger" | "info" | "link";
}>;
export default _default;
