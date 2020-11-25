<template>
  <div class="rol-badge">
    <slot></slot>
    <sup
      v-show="!hidden && (content || content === 0 || isDot)"
      :class="['rol-badge__content',`rol-badge__content--${type}`, {
        'is-fixed': $slots.default,
        'is-dot': isDot
      }]"
      v-text="content"
    ></sup>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'RolBadge',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    max: {
      type: Number,
      default: 99,
    },
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link'>,
      default: 'danger',
      validator: (val: string) => {
        return ['primary', 'success', 'warning', 'danger', 'info', 'link'].includes(val)
      },
    },
  },
  setup(props) {
    const content = computed(() => {
      if (props.isDot) {
        return
      }
      const { value, max } = props
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value
      }
      return value
    })

    return {
      content,
    }
  },
})
</script>

<style>
</style>
