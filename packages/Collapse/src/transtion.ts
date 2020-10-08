import { addClass, removeClass } from '@rol-ui/utils/dom'
import { defineComponent, h, Transition } from 'vue'

export default defineComponent({
  name: 'RolCollapseTransition',
  setup(props, { slots }) {
    return () => {
      return h(
        Transition,
        {
          onBeforeEnter(el: HTMLElement) {
            addClass(el, 'collapse-transition')

            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom

            el.style.height = '0'
            el.style.paddingTop = '0'
            el.style.paddingBottom = '0'
          },
          onEnter(el: HTMLElement) {
            el.dataset.oldOverflow = el.style.overflow

            if (el.scrollHeight !== 0) {
              el.style.height = el.scrollHeight + 'px'
              el.style.paddingTop = el.dataset.oldPaddingTop
              el.style.paddingBottom = el.dataset.oldPaddingBottom
            } else {
              el.style.height = ''
              el.style.paddingTop = el.dataset.oldPaddingTop
              el.style.paddingBottom = el.dataset.oldPaddingBottom
            }
            el.style.overflow = 'hidden'
          },
          onAfterEnter(el: HTMLElement) {
            removeClass(el, 'collapse-transition')
            el.style.height = ''
            el.style.overflow = el.dataset.oldOverflow
          },
          onBeforeLeave(el: HTMLElement) {
            el.dataset.oldPaddingTop = el.style.paddingTop
            el.dataset.oldPaddingBottom = el.style.paddingBottom
            el.dataset.oldOverflow = el.style.overflow

            el.style.height = el.scrollHeight + 'px'
            el.style.overflow = 'hidden'
          },
          onLeave(el: HTMLElement) {
            if (el.scrollHeight !== 0) {
              addClass(el, 'collapse-transition')
              el.style.height = '0'
              el.style.paddingTop = '0'
              el.style.paddingBottom = '0'
            }
          },
          onAfterLeave(el: HTMLElement) {
            removeClass(el, 'collapse-transition')
            el.style.height = ''
            el.style.overflow = el.dataset.oldOverflow
            el.style.paddingTop = el.dataset.oldPaddingTop
            el.style.paddingBottom = el.dataset.oldPaddingBottom
          },
        },
        { default: slots?.default() },
      )
    }
  },
})
