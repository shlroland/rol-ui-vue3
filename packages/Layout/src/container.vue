<template>
  <section class="rol-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type RContainer = PropType<'vertical' | 'horizontal'>

export default defineComponent({
  name: 'RolContainer',
  props: {
    direction: {
      type: String as RContainer,
      default: '',
    },
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      } else if (slots && slots?.default?.()) {
        const vNodes = slots.default()
        return vNodes.some(vNode => {
          const tag = vNode.type?.name
          return tag === 'RolHeader' || tag === 'RolFooter'
        })
      } else {
        return false
      }
    })

    return {
      isVertical,
    }
  },
})
</script>
