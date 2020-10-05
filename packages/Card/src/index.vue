<template>
  <div class="rol-card" :class="'is-' + shadow + '-shadow'">
    <div v-if="$slots.header || header" class="rol-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="rol-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'RolCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: [String, Object] as PropType<string | CSSStyleDeclaration>,
      default: '',
    },
    shadow: {
      type: String,
      default: 'always',
      validator: (val: string) => {
        return ['always', 'hover', 'never'].includes(val)
      },
    },
  },
})
</script>
