<template>
  <rol-button
    :class="['rol-checkbox-button', { 'is-checked': isChecked }]"
    :size="size"
    :disabled="disabled"
    :style="isChecked ? activeStyle : null"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    @click.stop="handleClick"
  >
    <slot>{{ label }}</slot>
    <input
      v-if="trueLabel || falseLabel"
      ref="input"
      v-model="model"
      :checked="isChecked"
      class="rol-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    />
    <input
      v-else
      ref="input"
      v-model="model"
      class="rol-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :value="label"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    />
  </rol-button>
</template>

<script lang="ts">
import { Button as RolButton } from '@rol-ui/button'
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { computed, defineComponent, ref } from 'vue'
import { useCheckbox, useCheckboxGroup } from './useCheckbox'

export default defineComponent({
  name: 'RolCheckboxButton',
  components: {
    RolButton,
  },
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: () => undefined,
    },
    label: {
      type: [Boolean, Number, String],
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
      default: undefined,
    },
    trueLabel: {
      type: [String, Number],
      default: undefined,
    },
    falseLabel: {
      type: [String, Number],
      default: undefined,
    },
  },
  emits: [UPDATE_MODELVALUE_EVENT, 'change'],
  setup(props) {
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox(props)
    const { checkboxGroup } = useCheckboxGroup()
    const input = ref<HTMLInputElement>(null)

    const handleClick = () => {
      if (input.value) {
        input.value.click()
      }
    }

    const activeStyle = computed(() => {
      return {
        backgroundColor: checkboxGroup?.fill?.value ?? '',
        borderColor: checkboxGroup?.fill?.value ?? '',
        color: checkboxGroup?.textColor?.value ?? '',
        boxShadow: '-1px 0 0 0 ' + checkboxGroup?.fill?.value ?? '',
      }
    })

    return {
      focus,
      isChecked,
      isDisabled,
      size,
      model,
      handleChange,
      activeStyle,
      input,
      handleClick,
    }
  },
})
</script>

<style></style>
