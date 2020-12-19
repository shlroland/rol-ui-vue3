import { RadioGroupContext, RUseRadioAttrsState, RUseRadioAttrsProps } from './radio';
export declare const radioGroupKey: any;
export declare const useRadio: () => {
    isGroup: import("vue").ComputedRef<boolean>;
    focus: import("vue").Ref<boolean>;
    radioGroup: RadioGroupContext;
};
export declare const useRadioAttrs: (props: RUseRadioAttrsProps, { isGroup, radioGroup, model }: RUseRadioAttrsState) => {
    isDisabled: import("vue").ComputedRef<boolean>;
    tabIndex: import("vue").ComputedRef<-1 | 0>;
};
