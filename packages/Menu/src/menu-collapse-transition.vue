<template>
  <transition mode="out-in" v-on="on">
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { addClass, hasClass, removeClass } from '@rol-ui/utils/dom'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolMenuCollapseTransition',
  setup() {
    return {
      on: {
        beforeEnter(el: HTMLElement) {
          el.style.opacity = '0.2'
        },
        enter(el: HTMLElement) {
          addClass(el, 'rol-opacity-transition')
          el.style.opacity = '1'
        },
        afterEnter(el: HTMLElement) {
          removeClass(el, 'rol-opacity-transition')
          el.style.opacity = ''
        },
        beforeLeave(el: HTMLElement) {
          if (!el.dataset) el.dataset = {}
          if (hasClass(el, 'rol-menu--collapse')) {
            removeClass(el, 'rol-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = String(el.clientWidth)
            addClass(el, 'rol-menu--collapse')
          } else {
            addClass(el, 'rol-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = String(el.clientWidth)
            removeClass(el, 'rol-menu--collapse')
          }

          el.style.width = el.scrollWidth + 'px'
          el.style.overflow = 'hidden'
        },
        leave(el) {
          addClass(el, 'horizontal-collapse-transition')
          el.style.width = el.dataset.scrollWidth + 'px'
        },
      },
    }
  },
})
</script>

<style></style>
