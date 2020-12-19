import { RButtonType } from '@rol-ui/button';
import { PropType } from 'vue';
declare const _default: {
    name: string;
    components: {
        Popover: import("vue").DefineComponent<{
            class: {
                type: StringConstructor;
                default: string;
            };
            style: {
                type: ObjectConstructor;
                default: () => {};
            };
            popperClass: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: StringConstructor;
                default: string;
            };
            title: {
                type: StringConstructor;
                default: string;
            };
            content: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            enterable: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideAfter: {
                type: NumberConstructor;
                default: number;
            };
            manual: {
                type: BooleanConstructor;
                default: boolean;
            };
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            placement: {
                type: PropType<import("@rol-ui/popper").Placement>;
                default: import("@rol-ui/popper").Placement;
            };
            popperOptions: {
                type: PropType<import("@rol-ui/popper").Options>;
                default: () => any;
            };
            showAfter: {
                type: NumberConstructor;
                default: number;
            };
            tabindex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            transition: {
                type: StringConstructor;
                default: string;
            };
            trigger: {
                type: PropType<import("@rol-ui/popper").RTrigger>;
                default: () => string[];
            };
            visibleArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            manual: boolean;
            trigger: import("@rol-ui/popper").RTrigger;
            content: string;
            class: string;
            disabled: boolean;
            enterable: boolean;
            hideAfter: number;
            showAfter: number;
            offset: number;
            placement: import("@rol-ui/popper").Placement;
            popperClass: string;
            popperOptions: import("@rol-ui/popper").Options;
            transition: string;
            visible: boolean;
            style: Record<string, any>;
            width: string;
            title: string;
            tabindex: string | number;
            visibleArrow: boolean;
        } & {}>, {
            manual: boolean;
            trigger: import("@rol-ui/popper").RTrigger;
            content: string;
            class: string;
            disabled: boolean;
            enterable: boolean;
            hideAfter: number;
            showAfter: number;
            offset: number;
            placement: import("@rol-ui/popper").Placement;
            popperClass: string;
            popperOptions: import("@rol-ui/popper").Options;
            transition: string;
            visible: boolean;
            style: Record<string, any>;
            width: string;
            title: string;
            tabindex: string | number;
            visibleArrow: boolean;
        }>;
        Button: import("vue").DefineComponent<readonly string[] | Readonly<import("vue").ComponentObjectPropsOptions<Record<string, unknown>>>, unknown, unknown, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            [x: number]: string;
        } & {
            length?: number;
            toString?: string;
            toLocaleString?: string;
            concat?: string[];
            join?: string;
            slice?: string[];
            indexOf?: (searchElement: string, fromIndex?: number) => number;
            lastIndexOf?: (searchElement: string, fromIndex?: number) => number;
            every?: {
                <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[];
                (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean;
            };
            some?: (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean;
            forEach?: (callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void;
            map?: <U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[];
            filter?: {
                <S_1 extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S_1, thisArg?: any): S_1[];
                (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[];
            };
            reduce?: {
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
                <U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: readonly string[]) => U_1, initialValue: U_1): U_1;
            };
            reduceRight?: {
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
                <U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: readonly string[]) => U_2, initialValue: U_2): U_2;
            };
            find?: {
                <S_2 extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S_2, thisArg?: any): S_2;
                (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string;
            };
            findIndex?: (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number;
            entries?: IterableIterator<[number, string]>;
            keys?: IterableIterator<number>;
            values?: IterableIterator<string>;
            includes?: (searchElement: string, fromIndex?: number) => boolean;
            flatMap?: <U_3, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U_3 | readonly U_3[], thisArg?: This) => U_3[];
            flat?: unknown[];
        }> | Readonly<{} & {
            [x: string]: unknown;
        }>, {
            [x: number]: string;
        } | {}>;
        Icon: import("vue").DefineComponent<readonly string[] | Readonly<import("vue").ComponentObjectPropsOptions<Record<string, unknown>>>, unknown, unknown, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            [x: number]: string;
        } & {
            length?: number;
            toString?: string;
            toLocaleString?: string;
            concat?: string[];
            join?: string;
            slice?: string[];
            indexOf?: (searchElement: string, fromIndex?: number) => number;
            lastIndexOf?: (searchElement: string, fromIndex?: number) => number;
            every?: {
                <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[];
                (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean;
            };
            some?: (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean;
            forEach?: (callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void;
            map?: <U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[];
            filter?: {
                <S_1 extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S_1, thisArg?: any): S_1[];
                (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[];
            };
            reduce?: {
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
                <U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: readonly string[]) => U_1, initialValue: U_1): U_1;
            };
            reduceRight?: {
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
                (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
                <U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: readonly string[]) => U_2, initialValue: U_2): U_2;
            };
            find?: {
                <S_2 extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S_2, thisArg?: any): S_2;
                (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string;
            };
            findIndex?: (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number;
            entries?: IterableIterator<[number, string]>;
            keys?: IterableIterator<number>;
            values?: IterableIterator<string>;
            includes?: (searchElement: string, fromIndex?: number) => boolean;
            flatMap?: <U_3, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U_3 | readonly U_3[], thisArg?: This) => U_3[];
            flat?: unknown[];
        }> | Readonly<{} & {
            [x: string]: unknown;
        }>, {
            [x: number]: string;
        } | {}>;
    };
    props: {
        title: {
            type: StringConstructor;
        };
        confirmButtonText: {
            type: StringConstructor;
            default: string;
        };
        cancelButtonText: {
            type: StringConstructor;
            default: string;
        };
        confirmButtonType: {
            type: PropType<RButtonType>;
            default: string;
            validator: (val: string) => boolean;
        };
        cancelButtonType: {
            type: PropType<RButtonType>;
            default: string;
            validator: (val: string) => boolean;
        };
        icon: {
            type: PropType<import("@fortawesome/fontawesome-svg-core").IconProp>;
            default: string;
        };
        iconColor: {
            type: StringConstructor;
            default: string;
        };
        hideIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    emits: string[];
    setup(props: any, { emit }: {
        emit: any;
    }): {
        confirm: () => void;
        cancel: () => void;
        visible: import("vue").Ref<boolean>;
    };
};
export default _default;
