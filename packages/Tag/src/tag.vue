<template>
  <span v-if="!disableTransitions" :class="classes">
    <slot></slot>
    <button v-if="closable" :class="deleteClasses"></button>
  </span>
  <transition v-else name="rol-zoom-in-center">
    <span v-if="!disableTransitions" :class="classes">
      <slot></slot>
      <button v-if="closable" :class="deleteClasses"></button>
    </span>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export const RTagSize = {
  type: String,
  default: 'normal',
  validator: (val: string): boolean => {
    return ['normal', 'small', 'medium', 'large'].indexOf(val) !== -1
  },
}

export const RTagType = {
  type: String,
  default: '',
  validator: function (val: string): boolean {
    return (
      ['dark', 'light', 'white', 'black', 'light', 'primary', 'link', 'info', 'success', 'warning', 'danger'].indexOf(
        val,
      ) !== -1
    )
  },
}

export default defineComponent({
  name: 'RolTag',
  props: {
    disableTransitions: Boolean,
    light: Boolean,
    rounded: Boolean,
    closable: Boolean,
    size: RTagSize,
    type: RTagType,
  },
  setup(props) {
    const classes = computed(() => {
      const { type, light, size, rounded } = props
      return [
        'rol-tag',
        type ? `is-${type}` : '',
        light ? 'is-light' : '',
        size ? `is-${size}` : '',
        rounded ? 'is-rounded' : '',
      ]
    })

    const deleteClasses = computed(() => {
      const classes = ['delete']
      const { size } = props
      switch (size) {
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
