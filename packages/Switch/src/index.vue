<template>
  <div
    class="rol-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
  >
    <input
      :id="id"
      ref="input"
      type="checkbox"
      :name="name"
      class="rol-switch__input"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
    />
    <span
      v-if="inactiveValue || inactiveText"
      :class="['rol-switch__label','rol-switch__label--left',!checked ? 'is-active': '']"
    >
      <span v-if="inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
    <span ref="core" class="rol-switch__core" :style="{ width: coreWidth + 'px' }">
      <div class="rol-switch__action"></div>
    </span>
    <span
      v-if="activeIconClass || activeText"
      :class="['rol-switch__label','rol-switch__label--right',checked ? 'is-active': '']"
    >
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { ValueType } from './switch'

export default defineComponent({
  name: 'RolSwitch',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 40,
    },
    activeIconClass: {
      type: String,
      default: '',
    },
    inactiveIconClass: {
      type: String,
      default: '',
    },
    activeText: {
      type: String,
      default: '',
    },
    inactiveText: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const coreWidth = ref(props.width)
    const isModelValue = ref(props.modelValue !== false)

    const switchDisabled = computed((): boolean => {
      return props.disabled || props.loading
    })
    const actualValue = computed(
      (): ValueType => {
        return isModelValue.value ? props.modelValue : props.value
      },
    )
    const checked = computed(() => {
      return isModelValue.value ? props.modelValue : props.value
    })

    return {
      checked,
      switchDisabled,
    }
  },
})
</script>

<style>
</style>
