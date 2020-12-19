import { RCheckboxGroupInstance, RCheckboxProps } from './checkbox';
export declare const useCheckboxGroup: () => {
    isGroup: import("vue").ComputedRef<boolean>;
    checkboxGroup: RCheckboxGroupInstance;
};
export declare const useCheckbox: (props: RCheckboxProps) => {
    model: import("vue").WritableComputedRef<any>;
    isChecked: import("vue").ComputedRef<any>;
    isLimitExceeded: import("vue").Ref<boolean>;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<string>;
    checkboxSize: import("vue").ComputedRef<string>;
    isDisabled: import("vue").ComputedRef<any>;
    handleChange: (event: InputEvent) => void;
};
