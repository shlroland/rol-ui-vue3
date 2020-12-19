import type { StrictModifiers } from '@popperjs/core';
interface ModifierProps {
    offset?: number;
    arrow?: HTMLElement;
    arrowOffset?: number;
}
export default function buildModifier(props: ModifierProps, externalModifiers?: StrictModifiers[]): StrictModifiers[];
export {};
