import { PatchFlags } from '@rol-ui/utils/vnode'
import { createVNode, Transition, VNode, vShow, withCtx, withDirectives } from 'vue'
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
    onAfterEnter,
    onAfterLeave,
  } = props

  return createVNode(
    Transition,
    { name, 'onAfter-enter': onAfterEnter, 'onAfter-leave': onAfterLeave },
    {
      default: withCtx(() => [
        withDirectives(
          createVNode(
            'div',
            {
              'aria-hidden': String(!visibility),
              class: ['rol-popper', 'is-' + effect, popperClass, pure ? 'rol-popper__pure' : ''],
              style: popperStyle,
              id: popperId,
              ref: 'popperRef',
              role: 'tooltip',
              onMouseEnter,
              onMouseLeave,
              onClick: stop,
              onMouseDown: stop,
              onMouseUp: stop,
            },
            children,
            PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.PROPS | PatchFlags.HYDRATE_EVENTS,
            ['aria-hidden', 'onMouseenter', 'onMouseleave', 'onMousedown', 'onMouseup', 'onClick', 'id'],
          ),
          [[vShow, visibility]],
        ),
      ]),
    },
    PatchFlags.PROPS,
    ['name', 'onAfter-enter', 'onAfter-leave'],
  )
}
