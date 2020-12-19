import { PropType, VNode } from 'vue';
interface RBreadcrumbProps {
    alignment: string;
    size: string;
    separator: string;
}
export interface RBreadcrumbProvide {
    separatorIns: string | VNode[];
}
declare const _default: {
    name: string;
    props: {
        alignment: {
            type: PropType<"left" | "centered" | "right">;
            default: string;
            validator(val: string): boolean;
        };
        size: {
            type: PropType<"small" | "normal" | "medium" | "large">;
            default: string;
            validator(val: string): boolean;
        };
        separator: {
            type: StringConstructor;
            default: string;
        };
    };
    setup(props: RBreadcrumbProps, { slots }: {
        slots: any;
    }): void;
};
export default _default;
