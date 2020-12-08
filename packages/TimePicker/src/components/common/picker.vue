<template>
  <rol-popper
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
        v-clickoutside="onClickOutside"
        class="rol-date-editor"
        :class="'rol-date-editor--' + type"
        :model-value="displayValue"
        :name="name"
        :size="size"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="!editable || readonly || isDatesPicker || type === 'week'"
        @focus="handleFocus"
      >
        <template #prefix>
          <span class="rol-input__icon" @focus="handleFocus">
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
        @focus="handleFocus"
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
          @focus="handleFocus"
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
          @focus="handleFocus"
        />
        <span v-show="showClose" class="rol-input__icon rol-range__close-icon">
          <rol-icon :name="clearIcon"></rol-icon>
        </span>
      </div>
    </template>
    <template #default>
      <slot
        :visible="pickerVisible"
        :parsed-value="parsedValue"
        :format="format"
        :type="type"
        :default-value="defaultValue"
        :getPoppperRef="getPoppperRef"
        v-bind="$attrs"
        @pick="onPick"
        @set-picker-option="onSetPickerOption"
        @mousedown.stop
      ></slot>
    </template>
  </rol-popper>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide, ref } from 'vue'
import { OutSideClick } from '@rol-ui/directives'
import RolPopper from '@rol-ui/popper'
import RolInput from '@rol-ui/input'
import RolIcon from '@rol-ui/icon'
import { PICKER_BASE_PROVIDER } from './constant'
import { PickerOptions } from '../../time-picker-type'
import dayjs, { Dayjs } from 'dayjs'

const dateEquals = (a, b) => {
  const aIsDate = a instanceof Date
  const bIsDate = b instanceof Date
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime()
  }
  if (!aIsDate && !bIsDate) {
    return a === b
  }
  return false
}

const valueEquals = (a, b) => {
  const aIsArray = a instanceof Array
  const bIsArray = b instanceof Array
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false
    }
    return a.every((item, index) => dateEquals(item, b[index]))
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b)
  }
  return false
}

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
  emits: ['focus', 'update:modelValue', 'change'],
  setup(props, ctx) {
    const pickerVisible = ref(false)
    const showClose = ref(false)
    const refConatiner = ref(null)
    const valueOnOpen = ref(null)
    const pickerOptions = ref({} as PickerOptions)
    const popperRef = ref(null)
    const userInput = ref(null)

    const getPoppperRef = value => {
      popperRef.value = value
    }

    const valueIsEmpty = computed(() => {
      return !props.modelValue || (Array.isArray(props.modelValue) && !props.modelValue.length)
    })

    const isRangeInput = computed(() => {
      return props.type.indexOf('range') > -1
    })

    const displayValue = computed(() => {
      if (!pickerOptions.value.panelReady) return
      if (!isTimeLikePicker.value && valueIsEmpty.value) return
      if (!pickerVisible.value && valueIsEmpty.value) return
      const formattedValue = formatDayjsToString(parsedValue.value)
      if (Array.isArray(userInput.value)) {
        return [
          userInput.value[0] || (formattedValue && formattedValue[0]) || '',
          userInput.value[1] || (formattedValue && formattedValue[1]) || '',
        ]
      } else if (userInput.value !== null) {
        return userInput.value
      }
      if (formattedValue) {
        return isDatesPicker.value ? (formattedValue as Array<string>).join(', ') : formattedValue
      }
      return ''
    })

    const isDatesPicker = computed(() => {
      return props.type === 'dates'
    })

    const isTimeLikePicker = computed(() => {
      return props.type.indexOf('time') !== -1
    })

    const parsedValue = computed(() => {
      let result
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          result = pickerOptions.value.getDefaultValue()
        }
      } else {
        if (Array.isArray(props.modelValue)) {
          result = props.modelValue.map(_ => dayjs(_))
        } else {
          result = dayjs(props.modelValue as Date)
        }
      }
      if (pickerOptions.value.getRangeAvaliableTime) {
        result = pickerOptions.value.getRangeAvaliableTime(result)
      }
      return result
    })

    const triggerClass = computed(() => {
      return props.prefixIcon || (isTimeLikePicker.value ? ['far', 'clock'] : ['far', 'calendar-alt'])
    })

    const formatDayjsToString = value => {
      if (!value) {
        return null
      }
      return pickerOptions.value.formatToString(value)
    }

    const isValidValue = value => {
      return pickerOptions.value.isValidValue(value)
    }

    const onClickOutside = () => {
      if (!pickerVisible.value) return
      pickerVisible.value = false
    }

    const handleFocus = (event: Event) => {
      if (props.readonly || props.disabled) return
      pickerVisible.value = true
      ctx.emit('focus', event)
    }

    const emitInput = val => {
      if (!valueEquals(props.modelValue, val)) {
        ctx.emit('update:modelValue', val)
      }
    }

    const emitChange = val => {
      if (!valueEquals(val, valueOnOpen.value)) {
        ctx.emit('change', val)
      }
    }

    const onPick = (date: Dayjs, visible = false) => {
      pickerVisible.value = visible
      let result
      if (Array.isArray(date)) {
        result = date.map(_ => _.toDate())
      } else {
        result = date ? date.toDate() : date
      }
      userInput.value = null
      emitInput(result)
      emitChange(result)
    }

    const onSetPickerOption = e => {
      pickerOptions.value[e[0]] = e[1]
      pickerOptions.value.panelReady = true
    }

    provide(PICKER_BASE_PROVIDER, props)

    return {
      pickerVisible,
      isRangeInput,
      onClickOutside,
      refConatiner,
      displayValue,
      isDatesPicker,
      triggerClass,
      parsedValue,
      showClose,
      handleFocus,
      getPoppperRef,
      popperRef,
      onPick,
      onSetPickerOption,
    }
  },
})
</script>

<style></style>
