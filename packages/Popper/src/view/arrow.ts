import { openBlock, createBlock, Comment } from 'vue'
import { PatchFlags } from '@rol-ui/utils/vnode'

export default function renderArrow(showArrow: boolean) {
  return showArrow
    ? (openBlock(),
      createBlock(
        'div',
        {
          ref: 'arrowRef',
          class: 'rol-popper__arrow',
          'data-popper-arrow': '',
        },
        null,
        PatchFlags.NEED_PATCH,
      ))
    : (openBlock(), createBlock(Comment, null, ''))
}
