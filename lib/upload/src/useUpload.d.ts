import { PropType } from 'vue';
import { ListType, RolUploadFileMap, UploadPropsType } from './upload';
import { Restrictions } from '@uppy/core';
export declare const uploadProps: {
    action: {
        type: StringConstructor;
        required: boolean;
    };
    headers: {
        type: PropType<Headers>;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: PropType<string | string[]>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: FunctionConstructor;
        default: any;
    };
    beforeRemove: {
        type: FunctionConstructor;
        default: () => void;
    };
    onRemove: {
        type: FunctionConstructor;
        default: () => void;
    };
    onChange: {
        type: FunctionConstructor;
        default: () => void;
    };
    onPreview: {
        type: FunctionConstructor;
        default: () => void;
    };
    onSuccess: {
        type: PropType<import("./upload").FileResultHandler<any>>;
        default: () => void;
    };
    onProgress: {
        type: FunctionConstructor;
        default: () => void;
    };
    onError: {
        type: FunctionConstructor;
        default: () => void;
    };
    fileList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: PropType<ListType>;
        default: ListType;
    };
    disabled: BooleanConstructor;
    limit: {
        type: PropType<number>;
        default: any;
    };
    restrictions: {
        type: PropType<Restrictions>;
        default: () => any;
    };
    data: ObjectConstructor;
};
export declare const useUpload: (options: UploadPropsType, emit: any, fileMap: RolUploadFileMap) => {
    uppy: any;
};
