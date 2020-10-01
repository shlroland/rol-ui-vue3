import { h, withDirectives, VNode } from 'vue'
import { OutSideClick } from '@rol-ui/directives'

interface RRenderMaskProps {
  hide: () => void
}

export default function (popper: VNode, { hide }: RRenderMaskProps) {
  return withDirectives(h('div', { class: 'rol-popper__mask' }, popper), [[OutSideClick, hide]])
}
