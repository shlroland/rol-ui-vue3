<template>
  <div
    :class="[
      'rol-tabs__nav-wrap',
      align ? `is-${align}` : '',
      size ? `is-${size}` : '',
      type ? `is-${type}` : '',
      {
        'is-toggle-rounded': toggleRounded,
      },
    ]"
  >
    <ul>
      <li class="is-active"><a>Pictures</a></li>
      <li><a>Music</a></li>
      <li><a>Videos</a></li>
      <li><a>Documents</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type RTabsAlign = PropType<'centered' | 'right'>
type RTabsSize = PropType<'small' | 'medium' | 'large'>
type RTabsType = PropType<'boxed'>

export default defineComponent({
  props: {
    align: {
      type: String as RTabsAlign,
      default: '',
      validator: (val: string) => {
        return ['centered', 'right'].includes(val)
      },
    },
    size: {
      type: String as RTabsSize,
      default: '',
      validator: (val: string) => {
        return ['small', 'medium', 'large'].includes(val)
      },
    },
    type: {
      type: String as RTabsType,
      default: '',
      validator: (val: string) => {
        return ['boxed'].includes(val)
      },
    },
    toggleRounded: Boolean,
  },
})
</script>
