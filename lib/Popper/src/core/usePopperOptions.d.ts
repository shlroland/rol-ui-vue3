import type { Ref } from 'vue';
import type { Options, Placement } from '@popperjs/core';
interface RUsePopperProps {
    popperOptions: Options;
    arrowOffset: number;
    offset: number;
    placement: Placement;
}
interface RUsePopperState {
    arrow: Ref<HTMLElement>;
}
export default function (props: RUsePopperProps, state: RUsePopperState): import("vue").ComputedRef<{
    modifiers: import("@popperjs/core").StrictModifiers[];
    placement: Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    onFirstUpdate?: (arg0: Partial<import("@popperjs/core").State>) => void;
}>;
export {};
