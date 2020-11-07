<template>
  <span v-if="disableTransitions" :class="classes" @click="handleClick">
    <slot></slot>
    <button v-if="closable" :class="deleteClasses" @click="handleClose"></button>
  </span>
  <transition v-else name="rol-zoom-in-center">
    <span :class="classes" @click="handleClick">
      <slot></slot>
      <button v-if="closable" :class="deleteClasses" @click="handleClose"></button>
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
    hit: Boolean,
    size: RTagSize,
    type: RTagType,
  },
  emits: ['close', 'click'],
  setup(props, ctx) {
    const classes = computed(() => {
      const { type, light, size, rounded,hit } = props
      return [
        'rol-tag',
        type ? `is-${type}` : '',
        light ? 'is-light' : '',
        size ? `is-${size}` : '',
        rounded ? 'is-rounded' : '',
        hit? 'is-hit' : '',
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

    // methods
    const handleClose = event => {
      event.stopPropagation()
      ctx.emit('close', event)
    }

    const handleClick = event => {
      ctx.emit('click', event)
    }

    return {
      classes,
      deleteClasses,
      handleClose,
      handleClick,
    }
  },
})
</script>

<style></style>
