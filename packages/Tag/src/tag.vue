<template>
  <span v-if="!disableTransitions" :class="classes">
    <slot></slot>
    <button :class="deleteClasses"></button>
  </span>
  <transition v-else name="rol-zoom-in-center">
    <span v-if="!disableTransitions" :class="classes">
      <slot></slot>
      <button :class="deleteClasses"></button>
    </span>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'RolTag',
  props: {
    disableTransitions: Boolean,
    light: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator: (val: string): boolean => {
        return ['normal', 'small', 'medium', 'large'].indexOf(val) !== -1
      },
    },
    type: {
      type: String,
      default: '',
      validator: (val: string): boolean => {
        return (
          ['dark', 'light', 'black', 'light', 'primary', 'link', 'info', 'success', 'warning', 'danger'].indexOf(
            val,
          ) !== -1
        )
      },
    },
  },
  setup(props) {
    const classes = computed(() => {
      const { type, light, size } = props
      return ['rol-tag', type ? `is-${type}` : '', light ? 'is-light' : '', size ? `is-${size}` : '']
    })

    const deleteClasses = computed(() => {
      const classes = ['delete']
      const { size } = props
      console.log(size)
      switch (size) {
        case 'normal':
          classes.push('is-small')
          break
        case 'medium':
          classes.push('is-small')
          break
        case 'large':
          classes.push('')
          break
        case 'small':
          classes.push('is-mini')
          break
        default:
          classes.push('is-small')
      }
      return classes
    })

    return {
      classes,
      deleteClasses,
    }
  },
})
</script>

<style></style>
