import { VNode } from 'vue';
export declare type NotificationVM = VNode;
declare type NotificationQueueItem = {
    vm: NotificationVM;
    $el: HTMLElement;
};
export declare type NotificationQueue = Array<NotificationQueueItem>;
export declare type NotificationOptions = {
    customClass?: string;
    dangerouslyUseHTMLString?: boolean;
    duration?: number;
    iconClass?: string;
    id?: string;
    message?: string | VNode;
    zIndex?: number;
    onClose?: () => void;
    onClick?: () => void;
    offset?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    showClose?: boolean;
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | '';
    title?: string;
};
export interface NotificationHandle {
    close: () => void;
}
export declare type Notification = (options?: NotificationOptions) => NotificationHandle;
export declare const close: (id: string, userOnClose?: (vm: NotificationVM) => void) => void;
declare const notification: Notification;
export default notification;
