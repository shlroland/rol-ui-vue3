import { computed, Ref } from 'vue'
import type { Options, Placement } from '@popperjs/core'
import buildModifiers from './build-modifiers'

interface RUsePopperProps {
  popperOptions: Options
  arrowOffset: number
  offset: number
  placement: Placement
  gpuAcceleration: boolean
}

interface RUsePopperState {
  arrow: Ref<HTMLElement>
}

export default function usePopperOptions(props: RUsePopperProps, state: RUsePopperState) {
  return computed(() => {
    return {
      placement: props.placement,
      ...props.popperOptions,
      modifiers: buildModifiers(
        {
          arrow: state.arrow.value,
          arrowOffset: props.arrowOffset,
          offset: props.offset,
          gpuAcceleration: props.gpuAcceleration,
        },
        props.popperOptions?.modifiers,
      ),
    }
  })
}
