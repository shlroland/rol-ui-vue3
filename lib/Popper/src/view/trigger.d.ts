import { VNode } from 'vue';
interface RRenderTriggerProps extends Record<string, unknown> {
    ref: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
}
export default function renderTrigger(trigger: VNode[], extraProps: RRenderTriggerProps): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export {};
