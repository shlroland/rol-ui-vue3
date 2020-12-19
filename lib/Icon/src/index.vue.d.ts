import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    fixedWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    flip: {
        type: PropType<import("@fortawesome/fontawesome-svg-core").FlipProp>;
        default: any;
        validator: (value: string) => boolean;
    };
    name: {
        type: PropType<import("@fortawesome/fontawesome-svg-core").IconProp>;
        required: true;
    };
    mask: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: any;
    };
    pulse: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotation: {
        type: PropType<import("@fortawesome/fontawesome-svg-core").RotateProp>;
        default: any;
        validator: (value: string | number) => boolean;
    };
    swapOpacity: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<import("@fortawesome/fontawesome-svg-core").SizeProp>;
        default: any;
        validator: (value: string) => boolean;
    };
    spin: {
        type: BooleanConstructor;
        default: boolean;
    };
    transform: {
        type: (StringConstructor | ObjectConstructor)[];
        default: any;
    };
    symbol: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    inverse: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    node: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    symbol: string | boolean;
    mask: any;
    border: boolean;
    fixedWidth: boolean;
    flip: import("@fortawesome/fontawesome-svg-core").FlipProp;
    name: import("@fortawesome/fontawesome-svg-core").IconProp;
    pulse: boolean;
    rotation: import("@fortawesome/fontawesome-svg-core").RotateProp;
    swapOpacity: boolean;
    size: import("@fortawesome/fontawesome-svg-core").SizeProp;
    spin: boolean;
    transform: any;
    title: string;
    inverse: boolean;
} & {}>, {
    symbol: string | boolean;
    mask: any;
    border: boolean;
    fixedWidth: boolean;
    flip: import("@fortawesome/fontawesome-svg-core").FlipProp;
    pulse: boolean;
    rotation: import("@fortawesome/fontawesome-svg-core").RotateProp;
    swapOpacity: boolean;
    size: import("@fortawesome/fontawesome-svg-core").SizeProp;
    spin: boolean;
    transform: any;
    title: string;
    inverse: boolean;
}>;
export default _default;
