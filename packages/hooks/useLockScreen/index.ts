import type { Ref } from 'vue'
import { watch, isRef } from 'vue'
import throwError from '@rol-ui/utils/error'
import { addClass, getStyle, hasClass, removeClass } from '@rol-ui/utils/dom'
import getScrollBarWidth from '@rol-ui/utils/scrollbar-width'

export default (trigger: Ref<boolean>) => {
  if (!isRef(trigger)) {
    throwError('[useLockScreen]', 'You need to pass a ref param to this function')
  }
  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0
  watch(trigger, val => {
    if (val) {
      withoutHiddenClass = !hasClass(document.body, 'rol-popup-parent--hidden')
      if (withoutHiddenClass) {
        bodyPaddingRight = document.body.style.paddingRight
        computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10)
      }
      scrollBarWidth = getScrollBarWidth()
      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
      const bodyOverflowY = getStyle(document.body, 'overflowY')
      if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && withoutHiddenClass) {
        document.body.style.paddingRight = computedBodyPaddingRight + scrollBarWidth + 'px'
      }
      addClass(document.body, 'rol-popup-parent--hidden')
    } else {
      if (withoutHiddenClass) {
        document.body.style.paddingRight = bodyPaddingRight
        removeClass(document.body, 'rol-popup-parent--hidden')
      }
      withoutHiddenClass = true
    }
  })
}
