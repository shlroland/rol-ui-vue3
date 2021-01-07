import { PatchFlags } from '@rol-ui/utils/vnode'
import { openBlock, createBlock, Comment } from 'vue'

const renderArrow = (showArrow: boolean) => {
  return showArrow
    ? (openBlock(),
      createBlock(
        'div',
        { ref: 'arrowRef', class: 'rol-popper__arrow', 'data-popper-arrow': '' },
        null,
        PatchFlags.NEED_PATCH,
      ))
    : (openBlock(), createBlock(Comment, null, ''))
}

export default renderArrow
