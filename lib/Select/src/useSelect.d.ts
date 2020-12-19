/// <reference types="lodash" />
import { PopperVnode, RolSelectCtx, States } from './type';
export declare const useSelectStates: (props: {
    multiple?: boolean;
}) => {
    options: any[];
    cachedOptions: any[];
    createdSelected: boolean;
    selected: any;
    inputLength: number;
    inputWidth: number;
    initialInputHeight: number;
    optionsCount: number;
    filteredOptionsCount: number;
    visible: boolean;
    softFocus: boolean;
    selectedLabel: string;
    hoverIndex: number;
    query: string;
    previousQuery: any;
    inputHovering: boolean;
    cachedPlaceHolder: string;
    menuVisibleOnFocus: boolean;
    isOnComposition: boolean;
    isSilentBlur: boolean;
    selectEmitter: {
        all: import("mitt").EventHandlerMap;
        on: {
            <T = any>(type: import("mitt").EventType, handler: import("mitt").Handler<T>): void;
            (type: "*", handler: import("mitt").WildcardHandler): void;
        };
        off: {
            <T_1 = any>(type: import("mitt").EventType, handler: import("mitt").Handler<T_1>): void;
            (type: "*", handler: import("mitt").WildcardHandler): void;
        };
        emit: {
            <T_2 = any>(type: import("mitt").EventType, event?: T_2): void;
            (type: "*", event?: any): void;
        };
    };
    currentPlaceholder: string;
};
export declare const useSelect: (props: any, states: States, ctx: RolSelectCtx) => {
    selectSize: import("vue").ComputedRef<any>;
    dropMenuVisible: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<any>;
    showClose: import("vue").ComputedRef<boolean>;
    iconClass: import("vue").ComputedRef<"" | "angle-down">;
    popper: import("vue").Ref<PopperVnode>;
    selectWrapper: import("vue").Ref<HTMLElement>;
    handleOptionSelect: (option: any, byClick: any) => void;
    onOptionDestroy: (index: number) => void;
    readonly: import("vue").ComputedRef<any>;
    handleFocus: (event: FocusEvent) => void;
    toggleMenu: () => void;
    reference: any;
    input: import("vue").Ref<HTMLInputElement>;
    tags: import("vue").Ref<HTMLElement>;
    showNewOption: import("vue").ComputedRef<boolean>;
    handleClose: () => void;
    setSelected: () => void;
    handleClearClick: (event: MouseEvent) => void;
    getValueKey: (item: any) => any;
    collapseTagSize: import("vue").ComputedRef<"normal" | "small">;
    resetInputHeight: () => void;
    deleteTag: (event: MouseEvent, tag: any) => void;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
    handleComposition: (event: CompositionEvent) => void;
    handleResize: () => void;
    emptyText: import("vue").ComputedRef<any>;
};
