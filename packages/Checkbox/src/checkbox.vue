<template>
  <label
    :id="id"
    class="rol-checkbox"
    :class="[border && checkboxSize ? 'rol-checkbox--' + checkboxSize : '',
             { 'is-disabled': isDisabled },
             { 'is-bordered': border },
             { 'is-checked': isChecked }]"
  >
    <span
      :class="['rol-checkbox__input',{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }]"
      :tabindex="indeterminate ? 0:false"
      :role="indeterminate? 'checkbox': false"
      :aria-checked="indeterminate ? 'mixed': false"
    >
      <span class="rol-checkbox__inner"></span>
      <input
        v-if="trueLbael || falseLabel"
        :id="id"
        v-model="model"
        class="rol-checkbox__original"
        type="checkbox"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        :name="name"
      />
      <input
        v-else
        :id="id"
        v-model="model"
        class="rol-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
      />
    </span>
    <span v-if="$slots.default || label" class="rol-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { defineComponent, getCurrentInstance, onMounted, PropType } from 'vue'
import { useCheckbox } from './useCheckbox'

export default defineComponent({
  name: 'RolCheckbox',
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
    id: {
      type: String,
      default: undefined,
    },
    controls: {
      type: String,
      default: undefined,
    },
    border: Boolean,
    size: {
      type: String as PropType<'normal' | 'medium' | 'small' | 'mini'>,
      default: 'normal',
      validator: (val: string) => ['medium', 'small', 'mini', 'normal'].includes(val),
    },
  },
  emits: [UPDATE_MODELVALUE_EVENT, 'change'],
  setup(props) {
    const { focus, isChecked, checkboxSize, model, isDisabled } = useCheckbox(props)
    const instance = getCurrentInstance()

    onMounted(() => {
      instance.vnode.el.setAttribute('aria-controls', props.controls)
    })

    return {
      focus,
      isChecked,
      checkboxSize,
      model,
      isDisabled,
    }
  },
})
</script>

<style>
</style>
