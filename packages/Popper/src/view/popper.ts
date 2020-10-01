import { h, Transition, VNode, vShow, withDirectives } from 'vue'
import { Effect } from '../core/props'

interface RRenderPopperProps {
  name: string
  effect: Effect
  popperClass: string
  popperStyle?: string | CSSStyleDeclaration
  popperId: string
  pure: boolean
  visibility: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onAfterEnter: () => void
  onAfterLeave: () => void
}

export default function renderPopper(props: RRenderPopperProps, children: VNode[]) {
  const {
    effect,
    name,
    popperClass,
    popperStyle,
    pure,
    popperId,
    visibility,
    onMouseEnter,
    onMouseLeave,
    ...transitionEvents
  } = props

  return h(
    Transition,
    { name, ...transitionEvents },
    {
      default: () =>
        withDirectives(
          h(
            'div',
            {
              'aria-hidden': String(!visibility),
              class: ['rol-popper', 'is-' + effect, popperClass, pure ? 'el-popper__pure' : ''],
              style: popperStyle,
              id: popperId,
              ref: 'popperRef',
              role: 'tooltip',
              onMouseEnter,
              onMouseLeave,
              onClick: stop,
            },
            children,
          ),
          [[vShow, visibility]],
        ),
    },
  )
}
