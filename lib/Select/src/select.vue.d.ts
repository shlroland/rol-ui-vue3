/// <reference types="lodash" />
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
    id: StringConstructor;
    modelValue: {
        type: (StringConstructor | ArrayConstructor | NumberConstructor)[];
        required: true;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: StringConstructor;
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: BooleanConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: PropType<import("@fortawesome/fontawesome-svg-core").IconProp>;
        default: string[];
    };
}, {
    selectSize: import("vue").ComputedRef<any>;
    selectDisabled: import("vue").ComputedRef<any>;
    dropMenuVisible: import("vue").ComputedRef<boolean>;
    showClose: import("vue").ComputedRef<boolean>;
    iconClass: import("vue").ComputedRef<"" | "angle-down">;
    popper: import("vue").Ref<import("./type").PopperVnode>;
    readonly: import("vue").ComputedRef<any>;
    toggleMenu: () => void;
    handleClose: () => void;
    inputWidth: import("vue").Ref<number>;
    selected: import("vue").Ref<any>;
    inputLength: import("vue").Ref<number>;
    filteredOptionsCount: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
    softFocus: import("vue").Ref<boolean>;
    selectedLabel: import("vue").Ref<string>;
    hoverIndex: import("vue").Ref<number>;
    query: import("vue").Ref<string>;
    inputHovering: import("vue").Ref<boolean>;
    currentPlaceholder: import("vue").Ref<string>;
    menuVisibleOnFocus: import("vue").Ref<boolean>;
    isOnComposition: import("vue").Ref<boolean>;
    isSilentBlur: import("vue").Ref<boolean>;
    options: import("vue").Ref<any[]>;
    cachedOptions: import("vue").Ref<any[]>;
    optionsCount: import("vue").Ref<number>;
    handleFocus: (event: FocusEvent) => void;
    reference: any;
    input: import("vue").Ref<HTMLInputElement>;
    selectWrapper: import("vue").Ref<HTMLElement>;
    showNewOption: import("vue").ComputedRef<boolean>;
    handleClearClick: (event: MouseEvent) => void;
    tags: import("vue").Ref<HTMLElement>;
    getValueKey: (item: any) => any;
    collapseTagSize: import("vue").ComputedRef<"normal" | "small">;
    resetInputHeight: () => void;
    deleteTag: (event: MouseEvent, tag: any) => void;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
    handleComposition: (event: CompositionEvent) => void;
    emptyText: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "remove-tag" | "clear" | "change" | "visible-change" | "blur" | "update:modelValue")[], "focus" | "remove-tag" | "clear" | "change" | "visible-change" | "blur" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | unknown[];
    autocomplete: string;
    size: string;
    multipleLimit: number;
    placeholder: string;
    valueKey: string;
    popperAppendToBody: boolean;
    clearIcon: import("@fortawesome/fontawesome-svg-core").IconProp;
} & {
    disabled?: boolean;
    popperClass?: string;
    name?: string;
    id?: string;
    automaticDropdown?: boolean;
    clearable?: boolean;
    filterable?: boolean;
    allowCreate?: boolean;
    loading?: boolean;
    remote?: boolean;
    loadingText?: string;
    noMatchText?: string;
    noDataText?: string;
    remoteMethod?: Function;
    filterMethod?: Function;
    multiple?: boolean;
    defaultFirstOption?: boolean;
    reserveKeyword?: boolean;
    collapseTags?: boolean;
}>, {
    autocomplete: string;
    size: string;
    multipleLimit: number;
    placeholder: string;
    valueKey: string;
    popperAppendToBody: boolean;
    clearIcon: import("@fortawesome/fontawesome-svg-core").IconProp;
}>;
export default _default;
