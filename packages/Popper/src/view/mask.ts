import { h, withDirectives, VNode, Fragment } from 'vue'
import { OutSideClick } from '@rol-ui/directives'

interface RRenderMaskProps {
  hide: () => void
}

export default function (popper: VNode, { hide }: RRenderMaskProps) {
  return withDirectives(h('div', { class: 'rol-popper__mask' }, popper), [[OutSideClick, hide]])
}

export const isFragment = (node: VNode) => node.type === Fragment
export const isText = (node: VNode) => node.type === Text
export const isComment = (node: VNode) => node.type === Comment
export const isTemplate = (node: VNode) => node.type === 'template'

