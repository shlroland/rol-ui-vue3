import { PropType } from 'vue';
import { ListType } from './upload';
declare const _default: import("vue").DefineComponent<{
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    accept: {
        type: PropType<string | string[]>;
        default: string;
    };
    disabled: BooleanConstructor;
    listType: {
        type: PropType<ListType>;
        default: string;
    };
    addFile: {
        type: PropType<(files: File[]) => void>;
        default: () => void;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleClick: () => void;
    handleKeydown: () => void;
    handleChange: (event: InputEvent) => void;
    inputRef: import("vue").Ref<HTMLInputElement>;
    acceptArr: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    multiple: boolean;
    name: string;
    accept: string | string[];
    listType: ListType;
    addFile: (files: File[]) => void;
    drag: boolean;
} & {
    disabled?: boolean;
}>, {
    multiple: boolean;
    name: string;
    accept: string | string[];
    listType: ListType;
    addFile: (files: File[]) => void;
    drag: boolean;
}>;
export default _default;
