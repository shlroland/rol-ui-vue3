import { ComponentPublicInstance } from 'vue';
interface ComponentMethods {
    closeOnClickModal: boolean;
    close: () => void;
    closeOnPressEscape: boolean;
    handleClose: () => void;
    handleAction: (action: string) => void;
}
interface StackFrame {
    id: string;
    zIndex: number;
    modalClass: string;
}
export declare type Instance = ComponentPublicInstance<unknown, ComponentMethods>;
interface PopupManager {
    getInstance: (id: string) => Instance;
    zIndex: number;
    modalDom?: HTMLElement;
    modalFade: boolean;
    modalStack: StackFrame[];
    nextZIndex: () => number;
    register: (id: string, instance: Instance) => void;
    deregister: (id: string) => void;
    doOnModalClick: () => void;
    openModal: (id: string, zIndex: number, dom: HTMLElement, modalClass: string, modalFade: boolean) => void;
    closeModal: (id: string) => void;
}
declare const PopupManager: PopupManager;
export default PopupManager;
