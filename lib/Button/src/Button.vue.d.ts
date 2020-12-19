import { PropType } from 'vue';
import type { RButtonNativeType, RButtonShapeType, RButtonSize, RButtonType } from './ButtonType';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<RButtonType>;
        default: string;
        validator: (val: string) => boolean;
    };
    size: {
        type: PropType<RButtonSize>;
        default: string;
        validator: (val: string) => boolean;
    };
    nativeType: {
        type: PropType<RButtonNativeType>;
        default: string;
        validator: (val: string) => boolean;
    };
    shape: {
        type: PropType<RButtonShapeType>;
        default: string;
        validator: (val: string) => boolean;
    };
    icon: {
        type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
        default: string;
    };
    light: BooleanConstructor;
    fullwidth: BooleanConstructor;
    outlined: BooleanConstructor;
    inverted: BooleanConstructor;
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    hovered: BooleanConstructor;
    focused: BooleanConstructor;
    active: BooleanConstructor;
    isStatic: BooleanConstructor;
    autofocus: BooleanConstructor;
    selected: BooleanConstructor;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: RButtonType;
    size: RButtonSize;
    nativeType: RButtonNativeType;
    shape: RButtonShapeType;
    icon: string;
} & {
    light?: boolean;
    fullwidth?: boolean;
    outlined?: boolean;
    inverted?: boolean;
    loading?: boolean;
    disabled?: boolean;
    hovered?: boolean;
    focused?: boolean;
    active?: boolean;
    isStatic?: boolean;
    autofocus?: boolean;
    selected?: boolean;
}>, {
    type: RButtonType;
    size: RButtonSize;
    nativeType: RButtonNativeType;
    shape: RButtonShapeType;
    icon: string;
}>;
export default _default;
