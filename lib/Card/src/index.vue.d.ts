import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    header: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: PropType<string | CSSStyleDeclaration>;
        default: string;
    };
    shadow: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    header: string;
    bodyStyle: string | CSSStyleDeclaration;
    shadow: string;
} & {}>, {
    header: string;
    bodyStyle: string | CSSStyleDeclaration;
    shadow: string;
}>;
export default _default;
