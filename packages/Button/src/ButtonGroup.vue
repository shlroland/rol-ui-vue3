<template>
  <div
    :class="[
      'rol-buttons',
      groupSize ? `are-${groupSize}` : '',
      addons ? 'has-addons' : '',
      position ? `is-${position}` : '',
    ]"
  >
    <component :is="item" v-for="(item, index) in defaults" :key="index" />
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import Button from './Button.vue'

type IButtonGroupPosition = PropType<'center' | 'right'>
type IButtonGroupSize = PropType<'small' | 'medium' | 'large'>

export default defineComponent({
  name: 'RolButtonGroup',
  props: {
    addons: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String as IButtonGroupPosition,
      default: '',
      validator: (val: string) => {
        return ['center', 'right'].includes(val)
      },
    },
    groupSize: {
      type: String as IButtonGroupSize,
      default: '',
      validator: (val: string) => {
        return ['small', 'medium', 'large'].includes(val)
      },
    },
  },
  setup(props, { slots }) {
    const defaults = slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Button) {
        throw new Error(
          'The children of ButtonGroup must be Button Component,Please delete all elements except Button',
        )
      }
    })
    return {
      defaults,
    }
  },
})
</script>
