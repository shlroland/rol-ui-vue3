import { createVNode, Ref, VNode, Transition, withCtx, withDirectives, vShow } from 'vue'
import { Effect } from '../usePopper'
import { NOOP } from '@vue/shared'
import { stop } from '@rol-ui/utils/dom'
import { PatchFlags } from '@rol-ui/utils/vnode'

interface RRenderPopperProps {
  effect: Effect
  name: string
  stopPopperMouseEvent: boolean
  popperClass: string
  popperStyle?: Partial<CSSStyleDeclaration>
  popperId: string
  popperRef?: Ref<HTMLElement>
  pure?: boolean
  visibility: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onAfterEnter?: () => void
  onAfterLeave?: () => void
  onBeforeEnter?: () => void
  onBeforeLeave?: () => void
}

export default function renderPopper(props: RRenderPopperProps, children: VNode[]) {
  const {
    effect,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseEnter,
    onMouseLeave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = props

  const classes = [popperClass, 'rol-popper', 'is-' + effect, pure ? 'is-pure' : '']
  const mouseUpAndDown = stopPopperMouseEvent ? stop : NOOP

  return createVNode(
    Transition,
    {
      name,
      onAfterEnter: onAfterEnter,
      onAfterLeave: onAfterLeave,
      onBeforeEnter: onBeforeEnter,
      onBeforeLeave: onBeforeLeave,
    },
    {
      default: withCtx(() => [
        withDirectives(
          createVNode(
            'div',
            {
              'aria-hidden': String(!visibility),
              class: classes,
              style: popperStyle ?? {},
              id: popperId,
              ref: popperRef ?? 'popperRef',
              role: 'tooltip',
              onMouseEnter,
              onMouseLeave,
              onClick: stop,
              onMouseDown: mouseUpAndDown,
              onMouseUp: mouseUpAndDown,
            },
            children,
            PatchFlags.CLASS | PatchFlags.STYLE | PatchFlags.PROPS | PatchFlags.HYDRATE_EVENTS,
            ['aria-hidden', 'onMouseenter', 'onMouseleave', 'onMouseDown', 'onMouseUp', 'onClick', 'id'],
          ),
          [[vShow, visibility]],
        ),
      ]),
    },
  )
}
