import { VNode } from 'vue';
export declare type MessageVM = VNode;
export declare type RMessageOptions = {
    customClass?: string;
    center?: boolean;
    light?: boolean;
    dangerouslyUseHTMLString?: boolean;
    duration?: number;
    iconClass?: string;
    id?: string;
    message?: string | VNode;
    offset?: number;
    onClose?: () => void;
    showClose?: boolean;
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | '';
    zIndex?: number;
};
declare type MessageQueueItem = {
    vm: MessageVM;
    $el: HTMLElement;
};
export declare type MessageQueue = Array<MessageQueueItem>;
export interface RMessageHandle {
    close: () => void;
}
declare type RMessageFunc = (options?: RMessageOptions | string) => RMessageHandle;
export interface RMessage {
    (options?: RMessageOptions | string): RMessageHandle;
    closeAll(): void;
    primary?: RMessageFunc;
    success?: RMessageFunc;
    warning?: RMessageFunc;
    danger?: RMessageFunc;
    info?: RMessageFunc;
    link?: RMessageFunc;
}
declare const Message: RMessage;
export declare function closeAll(): void;
export default Message;
