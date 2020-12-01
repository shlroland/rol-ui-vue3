<template>
  <rol-popper
    ref="popper"
    v-model:visible="pickerVisible"
    manual-mode
    effect="light"
    trigger="click"
    popper-class="rol-picker__popper"
    :stop-popper-mouse-event="false"
  >
    <template #trigger>
      <rol-input
        v-if="!isRangeInput"
        ref="refContainer"
        class="rol-date-editor"
        :class="'rol-date-editor--' + type"
        :model-value="displayValue"
        :name="name"
        :size="size"
        :disabled="pickerDisabled"
        :placeholder="placeholder"
        :readonly="!editable || readonly || isDatesPicker || type === 'week'"
      >
        <template #prefix>
          <span class="rol-input__icon">
            <rol-icon :name="triggerClass"></rol-icon>
          </span>
        </template>
        <template #suffix>
          <span class="rol-input__icon">
            <rol-icon :name="['far', 'times-circle']"></rol-icon>
          </span>
        </template>
      </rol-input>
      <div
        v-else
        ref="refContainer"
        v-clickoutside="onClickOutside"
        :class="[
          'rol-date-editor rol-range-editor rol-input__inner',
          'rol-date-editor--' + type,
          size ? `rol-range-editor--${size}` : '',
          disabled ? 'is-disabled' : '',
          pickerVisible ? 'is-active' : '',
        ]"
      >
        <span class="rol-input__icon rol-range__icon">
          <rol-icon :name="triggerClass"></rol-icon>
        </span>
        <input
          class="rol-range-input"
          autocomplete="off"
          :name="name && name[0]"
          :placeholder="startPlaceholder"
          :value="displayValue && displayValue[0]"
          :disabled="disabled"
          :readonly="!editable || readonly"
        />
        <slot name="range-separator">
          <span class="rol-range-separator">{{ rangeSeparator }}</span>
        </slot>
        <input
          class="rol-range-input"
          autocomplete="off"
          :name="name && name[1]"
          :value="displayValue && displayValue[1]"
          :disabled="disabled"
          :readonly="!editable || readonly"
        />
        <span class="rol-input__icon rol-range__close-icon">
          <rol-icon :name="clearIcon"></rol-icon>
        </span>
      </div>
    </template>
    <template #default>
      <slot
        :visible="pickerVisible"
        :parse-value="parsedValue"
        :format="format"
        :type="type"
        :default-value="defaultValue"
        v-bind="$attrs"
      ></slot>
    </template>
  </rol-popper>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { OutSideClick } from '@rol-ui/directives'
import RolPopper from '@rol-ui/popper'
import RolInput from '@rol-ui/input'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'Picker',
  components: {
    RolPopper,
    RolInput,
    RolIcon,
  },
  directives: { clickoutside: OutSideClick },
  props: {
    name: {
      type: [Array, String],
      default: '',
    },
    format: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    clearIcon: {
      type: [String, Array, Object],
      default: () => ['far', 'times-circle'],
    },
    editable: {
      type: Boolean,
      default: true,
    },
    prefixIcon: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<'large' | 'medium' | 'small' | 'mini'>,
      default: 'normal',
      validator: (val: string) => ['large', 'medium', 'small', 'mini', 'normal'].includes(val),
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [Date, Array, String] as PropType<string | Date | Date[]>,
      default: '',
    },
    rangeSeparator: {
      type: String,
      default: '-',
    },
    startPlaceholder: String,
    endPlaceholder: String,
    defaultValue: {
      type: [Date, Array] as PropType<Date | Date[]>,
    },
    defaultTime: {
      type: [Date, Array] as PropType<Date | Date[]>,
    },
    isRange: {
      type: Boolean,
      default: false,
    },
    disabledHours: {
      type: Function,
    },
    disabledMinutes: {
      type: Function,
    },
    disabledSeconds: {
      type: Function,
    },
    disabledDate: {
      type: Function,
    },
    cellClassName: {
      type: Function,
    },
    shortcuts: {
      type: Array,
      default: () => [],
    },
    arrowControl: {
      type: Boolean,
      default: false,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const pickerVisible = ref(false)
    const refConatiner = ref(null)
    const valueOpen = ref(null)

    const isRangeInput = computed(() => {
      console.log(typeof props.type)
      return props.type.indexOf('time') > -1
    })

    const displayValue = computed(() => {
      return ''
    })

    const isDatesPicker = computed(() => {
      return props.type === 'dates'
    })

    const isTimeLikePicker = computed(() => {
      return props.type.indexOf('time') !== -1
    })

    const parseValue = computed(() => {
      return ''
    })

    const triggerClass = computed(() => {
      return props.prefixIcon || (isTimeLikePicker.value ? ['far', 'clock'] : ['far', 'calendar-alt'])
    })

    const onClickOutside = () => {
      //1111
    }

    return {
      pickerVisible,
      isRangeInput,
      onClickOutside,
      refConatiner,
      displayValue,
      isDatesPicker,
      triggerClass,
      parseValue,
    }
  },
})
</script>

<style></style>
