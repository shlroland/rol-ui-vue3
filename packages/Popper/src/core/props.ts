import type { Placement, PositioningStrategy, Instance as PopperInstance, Options } from '@popperjs/core'
import { PropType } from 'vue'

export enum Effect {
  DARK = 'dark',
  LIGHT = 'light',
}

export type { Placement, PositioningStrategy, PopperInstance, Options }
export type RTriggerType = 'click' | 'hover' | 'focus' | 'manual'
export type RTrigger = RTriggerType | RTriggerType[]
export type RefElement = Nullable<HTMLElement>
export type Offset = [number, number] | number

export type RPopperOptions = {
  arrowOffset: number
  boundariesPadding: number
  class: string
  closeDelay: number
  cutoff: boolean
  disabled: boolean
  enterable: boolean
  hideAfter: number
  manualMode: boolean
  offset: number
  placement: Placement
  popperOptions: Options
  showAfter: number
  showArrow: boolean
  strategy: PositioningStrategy
  tabIndex: string
  trigger: RTrigger
  visible: boolean
}

export default {
  arrowOffset: {
    type: Number,
    default: 5,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  closeDelay: {
    type: Number,
    default: 200,
  },
  cutoff: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  effect: {
    type: String as PropType<Effect>,
    default: Effect.DARK,
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  hideAfter: {
    type: Number,
    default: 0,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  offset: {
    type: Number,
    default: 12,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom' as Placement,
  },
  popperClass: {
    type: String,
    default: '',
  },
  pure: {
    type: Boolean,
    default: false,
  },
  popperOptions: {
    type: Object as PropType<Options>,
    default: () => null,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: {
    type: String as PropType<PositioningStrategy>,
    default: 'fixed' as PositioningStrategy,
  },
  transition: {
    type: String,
    default: 'rol-fade-in-linear',
  },
  trigger: {
    type: [String, Array] as PropType<RTrigger>,
    default: 'hover',
  },
  tabIndex: {
    type: String,
    default: '0',
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
}
