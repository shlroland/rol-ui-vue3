import { ComponentInternalInstance, ObjectDirective, SetupContext } from 'vue';
export interface defaultProps {
    target: HTMLElement | string;
    body: boolean;
    fullscreen: boolean;
    lock: boolean;
    text: string;
    spinner: string;
    background: string;
    customClass: string;
}
export declare const defaults: defaultProps;
interface CtxProps extends SetupContext {
    $el: any;
}
export interface releaseComponentInternalInstance extends ComponentInternalInstance {
    ctx?: CtxProps;
    close?: () => void;
}
declare const loadingDirective: ObjectDirective;
export default loadingDirective;
