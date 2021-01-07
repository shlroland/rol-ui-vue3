import { getFirstValidNode } from '@rol-ui/utils/vnode'
import throwError from '@rol-ui/utils/error'
import { cloneVNode, ComponentPublicInstance, Ref, VNode } from 'vue'

type EventHandler = (e: Event) => any

interface RRenderTriggerProps extends Record<string, unknown> {
  ref: string | Ref<ComponentPublicInstance | HTMLElement>
  onClick?: EventHandler
  onMouseOver?: EventHandler
  onMouseLeave?: EventHandler
  onFocus?: EventHandler
}

export default function renderTrigger(trigger: VNode[], extraProps: RRenderTriggerProps) {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) throwError('renderTrigger', 'trigger expects single rooted node')
  return cloneVNode(firstElement, extraProps)
}
