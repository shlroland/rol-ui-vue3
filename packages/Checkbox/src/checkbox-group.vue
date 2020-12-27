<template>
  <div class="rol-checkbox-group rol-buttons has-addons" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { computed, defineComponent, nextTick, PropType, provide, toRefs } from 'vue'

export default defineComponent({
  name: 'RolCheckboxGroup',
  props: {
    modelValue: {
      type: [Object, Boolean, Array],
      default: () => undefined,
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String as PropType<'normal' | 'medium' | 'small' | 'mini' | 'large'>,
      default: 'normal',
      validator: (val: string) => ['medium', 'small', 'mini', 'normal','large'].includes(val),
    },
    fill: {
      type: String,
      default: undefined,
    },
    textColor: {
      type: String,
      default: undefined,
    },
  },
  emits: [UPDATE_MODELVALUE_EVENT, 'change'],
  setup(props, { emit }) {
    const checkboxGroupSize = computed(() => props.size)

    const changeEvent = value => {
      emit(UPDATE_MODELVALUE_EVENT, value)
      nextTick(() => {
        emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        changeEvent(value)
      },
    })

    provide('CheckboxGroup', {
      name: 'RolCheckboxGroup',
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent,
    })
  },
})
</script>

