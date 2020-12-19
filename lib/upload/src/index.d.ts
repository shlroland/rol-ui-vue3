import { VNode } from 'vue';
import { ListType } from './upload';
declare const _default: import("vue").DefineComponent<{
    action: {
        type: StringConstructor;
        required: boolean;
    };
    headers: {
        type: import("vue").PropType<Headers>;
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
        type: import("vue").PropType<string | string[]>;
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
        type: import("vue").PropType<import("./upload").FileResultHandler<any>>;
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
        type: import("vue").PropType<ListType>;
        default: ListType;
    };
    disabled: BooleanConstructor;
    limit: {
        type: import("vue").PropType<number>;
        default: any;
    };
    restrictions: {
        type: import("vue").PropType<import("@uppy/core").Restrictions>;
        default: () => any;
    };
    data: ObjectConstructor;
}, {
    component: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    uppy: any;
    submit: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("exceed" | "error" | "preview" | "update:fileList")[], "exceed" | "error" | "preview" | "update:fileList", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    headers: Headers;
    multiple: boolean;
    name: string;
    drag: boolean;
    showFileList: boolean;
    accept: string | string[];
    type: string;
    beforeUpload: Function;
    beforeRemove: Function;
    onRemove: Function;
    onChange: Function;
    onPreview: Function;
    onSuccess: import("./upload").FileResultHandler<any>;
    onProgress: Function;
    onError: Function;
    fileList: unknown[];
    autoUpload: boolean;
    listType: ListType;
    limit: number;
    restrictions: any;
} & {
    action?: string;
    withCredentials?: boolean;
    disabled?: boolean;
    data?: Record<string, any>;
}>, {
    headers: Headers;
    multiple: boolean;
    name: string;
    drag: boolean;
    showFileList: boolean;
    accept: string | string[];
    type: string;
    beforeUpload: Function;
    beforeRemove: Function;
    onRemove: Function;
    onChange: Function;
    onPreview: Function;
    onSuccess: import("./upload").FileResultHandler<any>;
    onProgress: Function;
    onError: Function;
    fileList: unknown[];
    autoUpload: boolean;
    listType: ListType;
    limit: number;
    restrictions: any;
}>;
export default _default;
