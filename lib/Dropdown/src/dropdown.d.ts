import { ComponentInternalInstance, ComponentPublicInstance, ComputedRef, PropType, Ref, VNode } from 'vue';
import { RButtonSize } from '@rol-ui/button';
export interface DropdownInstance {
    instance?: ComponentInternalInstance;
    dropdownSize?: ComputedRef<string>;
    visible?: Ref<boolean>;
    handleClick?: () => void;
    commandHandler?: (...arg: any[]) => void;
    show?: () => void;
    hide?: () => void;
    trigger?: ComputedRef<string>;
    hideOnClick?: ComputedRef<boolean>;
    triggerElm?: ComputedRef<Nullable<HTMLButtonElement>>;
}
declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    type: StringConstructor;
    size: {
        type: PropType<RButtonSize>;
        default: string;
        validator: (val: string) => boolean;
    };
    splitButton: BooleanConstructor;
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
    };
}, {
    onVisibleUpdate: (val: boolean) => void;
    triggerVnode: Ref<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    caretButton: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    visible: Ref<boolean>;
    popper: Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visible-change" | "command")[], "visible-change" | "command", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger: string;
    effect: string;
    placement: string;
    size: RButtonSize;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
    tabindex: number;
} & {
    type?: string;
    splitButton?: boolean;
}>, {
    trigger: string;
    effect: string;
    placement: string;
    size: RButtonSize;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
    tabindex: number;
}>;
export default _default;
