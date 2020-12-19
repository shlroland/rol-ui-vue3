import { VNode, Ref } from 'vue';
import { Effect } from '../core/props';
interface RRenderPopperProps {
    name: string;
    effect: Effect;
    popperClass: string;
    popperStyle?: string | CSSStyleDeclaration;
    popperId: string;
    pure?: boolean;
    popperRef?: Ref<HTMLElement>;
    visibility: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
}
export default function renderPopper(props: RRenderPopperProps, children: VNode[]): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export {};
