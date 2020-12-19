import { PropType } from 'vue';
declare type AutosizeProp = {
    minRows?: number;
    maxRows?: number;
} | boolean;
declare const _default: {
    name: string;
    components: {
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
    inheritAttrs: boolean;
    props: {
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: PropType<"large" | "medium" | "small" | "mini">;
            default: string;
            validator: (val: string) => boolean;
        };
        resize: {
            type: PropType<"none" | "both" | "horizontal" | "vertical">;
            validator: (val: string) => boolean;
        };
        autosize: {
            type: PropType<AutosizeProp>;
            default: boolean;
        };
        autocomplete: {
            type: StringConstructor;
            default: string;
            validator: (val: string) => boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassword: {
            type: BooleanConstructor;
            default: boolean;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        suffixIcon: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            default: string;
        };
        prefixIcon: {
            type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        tabindex: {
            type: StringConstructor;
            default: string;
        };
        validateEvent: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    emits: string[];
    setup(props: any, ctx: any): {
        input: any;
        textarea: any;
        inputSize: import("vue").ComputedRef<any>;
        inputDisabled: import("vue").ComputedRef<any>;
        inputExceed: import("vue").ComputedRef<boolean>;
        passwordVisible: import("vue").Ref<boolean>;
        getSuffixVisible: import("vue").ComputedRef<any>;
        showClear: import("vue").ComputedRef<boolean>;
        isWordLimitVisible: import("vue").ComputedRef<boolean>;
        showPwdVisible: import("vue").ComputedRef<boolean>;
        textLength: import("vue").ComputedRef<any>;
        upperLimit: import("vue").ComputedRef<any>;
        textareaStyle: import("vue").ComputedRef<{
            resize: any;
        }>;
        onMouseEnter: (e: any) => void;
        onMouseLeave: (e: any) => void;
        handleCompositionStart: () => void;
        handleCompositionUpdate: (event: CompositionEvent) => void;
        handleCompositionEnd: (event: InputEvent) => void;
        handleInput: (event: InputEvent) => void;
        handleChange: (event: any) => void;
        handleFocus: (event: any) => void;
        handleBlur: (event: any) => void;
        attrs: import("vue").Ref<{}>;
        select: () => void;
        focus: () => void;
        blur: () => void;
        handlePasswordVisible: () => void;
        clear: () => void;
        handleKeydown: (event: any) => void;
    };
};
export default _default;
