import { PropType } from 'vue';
import { ListType, RolUploadFile } from './upload';
declare const _default: import("vue").DefineComponent<{
    files: {
        type: PropType<Record<string, RolUploadFile>>;
        default: () => {};
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: PropType<ListType>;
        default: string;
    };
    handlePreview: {
        type: PropType<(file: RolUploadFile) => void>;
        default: () => () => void;
    };
}, {
    focusing: import("vue").Ref<boolean>;
    onFileClicked: (e: Event) => void;
    handleClick: (file: any) => void;
    iconType: (status: string) => string[];
    handleRemove: (file: RolUploadFile) => void;
    parsePercentage: (file: RolUploadFile) => number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "remove"[], "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    files: Record<string, RolUploadFile>;
    disabled: boolean;
    listType: ListType;
    handlePreview: (file: RolUploadFile) => void;
} & {}>, {
    files: Record<string, RolUploadFile>;
    disabled: boolean;
    listType: ListType;
    handlePreview: (file: RolUploadFile) => void;
}>;
export default _default;
