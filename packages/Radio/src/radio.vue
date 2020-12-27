<template>
  <label
    :class="['rol-radio',{
      [`rol-radio--${radioSize || ''}`]: border && radioSize,
      'is-disabled': isDisabled,
      'is-focus': focus,
      'is-bordered': border,
      'is-checked': model === label}]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
  >
    <span
      :class="['rol-radio__input',{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }]"
    >
      <span class="rol-radio__inner"></span>
      <input
        ref="radioRef"
        v-model="model"
        :value="label"
        class="rol-radio__original"
        type="radio"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span class="rol-radio__label" @keydown.stop>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { computed, defineComponent, nextTick, PropType, ref } from 'vue'
import { useRadio, useRadioAttrs } from './useRadio'
import type { RRadioSize } from './radio'

export default defineComponent({
  name: 'RolRadio',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: '',
    },
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
    disabled: Boolean,
    name: {
      type: String,
      default: '',
    },
    border: Boolean,
    size: {
      type: String as PropType<RRadioSize>,
      default: 'normal',
      validator: (val: string) => {
        return ['small', 'normal', 'medium'].includes(val)
      },
    },
  },
  emits: [UPDATE_MODELVALUE_EVENT, 'change'],
  setup(props, { emit }) {
    const { isGroup, focus, radioGroup } = useRadio()

    const radioRef = ref<HTMLInputElement>()

    const model = computed<string | number | boolean>({
      get() {
        return isGroup.value ? radioGroup.modelValue : props.modelValue
      },
      set(val) {
        if (isGroup.value) {
          radioGroup.changeEvent(val)
        } else {
          emit(UPDATE_MODELVALUE_EVENT, val)
        }
        radioRef.value.checked = props.modelValue === props.label
      },
    })

    const { tabIndex, isDisabled } = useRadioAttrs(props, { isGroup, radioGroup, model })

    const radioSize = computed(() => {
      return isGroup.value ? radioGroup.radioGroupSize || props.size : props.size
    })

    const handleChange = () => {
      nextTick(() => {
        emit('change', model.value)
      })
    }

    return {
      focus,
      isGroup,
      isDisabled,
      model,
      tabIndex,
      radioSize,
      handleChange,
      radioRef,
    }
  },
})
</script>

