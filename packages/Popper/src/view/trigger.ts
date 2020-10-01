import { getFirstValidNode } from '@rol-ui/utils/vnode'
import throwError from '@rol-ui/utils/error'
import { cloneVNode, VNode } from 'vue'

interface RRenderTriggerProps extends Record<string, unknown> {
  ref: string
  onClick?: () => void
  onMouseOver?: () => void
  onMouseLeave?: () => void
  onFocus?: () => void
}

export default function renderTrigger(trigger: VNode[], extraProps: RRenderTriggerProps) {
  const firstElement = getFirstValidNode(trigger, 1)
  if (!firstElement) throwError('renderTrigger', 'trigger expects single rooted node')
  return cloneVNode(firstElement, extraProps)
}
