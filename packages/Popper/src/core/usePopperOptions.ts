import { computed } from 'vue'
import buildModifiers from './modifiers'

import type { Ref } from 'vue'
import type { Options, Placement } from '@popperjs/core'

interface RUsePopperProps {
  popperOptions: Options
  arrowOffset: number
  offset: number
  placement: Placement
}

interface RUsePopperState {
  arrow: Ref<HTMLElement>
}

export default function (props: RUsePopperProps, state: RUsePopperState) {
  return computed(() => {
    return {
      placement: props.placement,
      ...props.popperOptions,
      modifiers: buildModifiers(
        {
          arrow: state.arrow.value,
          arrowOffset: props.arrowOffset,
          offset: props.offset,
        },
        props.popperOptions?.modifiers,
      ),
    }
  })
}
