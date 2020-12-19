import { PropType } from 'vue';
import { Pane, RootTabs } from './tabs';
declare const _default: import("vue").DefineComponent<{
    align: {
        type: PropType<"centered" | "right">;
        default: string;
        validator: (val: string) => boolean;
    };
    size: {
        type: PropType<"small" | "medium" | "large">;
        default: string;
        validator: (val: string) => boolean;
    };
    type: {
        type: PropType<"boxed">;
        default: string;
        validator: (val: string) => boolean;
    };
    fullwidth: BooleanConstructor;
    panes: {
        type: PropType<Pane[]>;
        default: () => Pane[];
    };
    currentName: {
        type: StringConstructor;
        default: string;
    };
    onTabClick: {
        type: PropType<(tab: Pane, tabName: string, ev: Event) => void>;
        default: () => void;
    };
    onTabRemove: {
        type: PropType<(tab: Pane, ev: Event) => void>;
        default: () => void;
    };
}, {
    rootTabs: RootTabs;
    navStyle: import("vue").ComputedRef<{
        transform: string;
    }>;
    navScroll$: import("vue").Ref<HTMLElement>;
    nav$: import("vue").Ref<HTMLElement>;
    scrollToActiveTab: () => void;
    update: () => void;
    setFocus: () => void;
    removeFocus: () => void;
    visibilityChangeHandler: () => void;
    windowBlurHandler: () => void;
    windowFocusHandler: () => void;
    scrollPrev: () => void;
    scrollNext: () => void;
    scrollable: import("vue").Ref<boolean | {
        next?: boolean;
        prev?: number;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    align: "centered" | "right";
    size: "small" | "medium" | "large";
    type: "boxed";
    panes: Pane[];
    currentName: string;
    onTabClick: (tab: Pane, tabName: string, ev: Event) => void;
    onTabRemove: (tab: Pane, ev: Event) => void;
} & {
    fullwidth?: boolean;
}>, {
    align: "centered" | "right";
    size: "small" | "medium" | "large";
    type: "boxed";
    panes: Pane[];
    currentName: string;
    onTabClick: (tab: Pane, tabName: string, ev: Event) => void;
    onTabRemove: (tab: Pane, ev: Event) => void;
}>;
export default _default;
