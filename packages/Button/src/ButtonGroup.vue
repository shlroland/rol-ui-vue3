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
        return ['center', 'right', ''].includes(val)
      },
    },
    groupSize: {
      type: String as IButtonGroupSize,
      default: 'normal',
      validator: (val: string) => {
        return ['small', 'medium', 'large', 'normal'].includes(val)
      },
    },
  },
  setup(props, { slots }) {
    let defaults = slots.default()
    defaults = defaults.filter(tag => {
      if (tag.type !== Button) {
        console.warn('The children of ButtonGroup must be Button Component,Please delete all elements except Button')
      } else {
        return true
      }
    })
    return {
      defaults,
    }
  },
})
</script>
