<template>
  <li v-show="visible" class="rol-select-dropdown__item">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, toRefs } from 'vue'
import { useOption } from './useOptions'

export default defineComponent({
  name: 'RolSelectOption',
  props: {
    value: {
      required: true,
      type: [String, Number, Object],
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
    })

    const { currentLabel,select } = useOption(props, states)

    const { visible, hover } = toRefs(states)

    const vm = getCurrentInstance().proxy

    select.options.push(vm)

    return {
      currentLabel,
      visible,
    }
  },
})
</script>
