<template>
  <rol-popper
    v-model:visible="pickerVisible"
    manual-mode
    effect="light"
    trigger="click"
    popper-class="rol-picker__popper"
    :stop-popper-mouse-event="false"
    append-to-body
    @before-enter="pickerActualVisible = true"
    @after-leave="pickerActualVisible = false"
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
        @input="onUserInput"
        @change="handleChange"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <template #prefix>
          <span class="rol-input__icon" @focus="handleFocus">
            <rol-icon :name="triggerClass"></rol-icon>
          </span>
        </template>
        <template #suffix>
          <span v-show="showClose" class="rol-input__icon rol-icon-circle-close" @click="onClearIconClick">
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
        @click="handleFocus"
        @keydown="handleKeydown"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
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
          @input="handleStartInput"
          @change="handleStartChange"
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
          @input="handleEndInput"
          @change="handleEndChange"
        />
        <span v-show="showClose" class="rol-input__icon rol-range__close-icon" @click="onClearIconClick">
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
        :getPopperRef="getPopperRef"
        v-bind="$attrs"
        @pick="onPick"
        @set-picker-option="onSetPickerOption"
        @select-range="setSelectionRange"
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
import { PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'
import { PickerOptions } from '../../time-picker-type'
import dayjs, { Dayjs } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { EVENT_CODE } from '@rol-ui/utils/aria'

dayjs.extend(customParseFormat)

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
    const refContainer = ref(null)
    const valueOnOpen = ref(null)
    const pickerOptions = ref({} as PickerOptions)
    const popperRef = ref(null)
    const userInput = ref(null)

    const getPopperRef = value => {
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

    const refInput = computed(() => {
      // console.log(refContainer)
      // todo: fix: cannt take effec
      if (refContainer.value) {
        const _r: HTMLElement = isRangeInput.value ? refContainer.value : refContainer.value.$el
        return [].slice.call(_r.querySelectorAll('input'))
      }
      return []
    })

    const triggerClass = computed(() => {
      return props.prefixIcon || (isTimeLikePicker.value ? ['far', 'clock'] : ['far', 'calendar-alt'])
    })

    const parseUserInputToDayjs = value => {
      if (!value) return null
      return pickerOptions.value.parseUserInput(value)
    }

    const formatDayjsToString = value => {
      if (!value) {
        return null
      }
      return pickerOptions.value.formatToString(value)
    }

    const isValidValue = value => {
      return pickerOptions.value.isValidValue(value)
    }

    const onMouseEnter = () => {
      if (props.readonly || props.disabled) return
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true
      }
    }

    const onMouseLeave = () => {
      showClose.value = false
    }

    const onClickOutside = () => {
      if (!pickerVisible.value) return
      pickerVisible.value = false
    }

    const onClearIconClick = event => {
      if (props.readonly || props.disabled) return
      if (showClose.value) {
        event.stopPropagation()
        emitInput(null)
        emitChange(null)
        showClose.value = false
        pickerVisible.value = false
      }
    }

    const blurInput = () => {
      refInput.value.forEach(input => input.blur())
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

    const setSelectionRange = (start, end, pos) => {
      const inputs = refInput.value as HTMLInputElement[]
      if (!inputs.length) return
      if (!pos || pos === 'min') {
        inputs[0].setSelectionRange(start, end)
        inputs[0].focus()
      } else if (pos === 'max') {
        inputs[1].setSelectionRange(start, end)
        inputs[1].focus()
      }
    }

    const onUserInput = e => {
      userInput.value = e
    }

    const handleFocus = (event: Event) => {
      if (props.readonly || props.disabled) return
      pickerVisible.value = true
      ctx.emit('focus', event)
    }

    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value) as Dayjs | Dayjs[]
        if (value) {
          if (isValidValue(value)) {
            if (isRangeInput.value) {
              emitInput((value as Dayjs[]).map(item => item.toDate()))
            } else {
              emitInput((value as Dayjs).toDate())
            }
            userInput.value = null
          }
        }
      }

      if (userInput.value === '') {
        emitInput(null)
        emitChange(null)
        userInput.value = null
      }
    }

    const handleStartChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[0])
      if (value) {
        userInput.value = [formatDayjsToString(value), displayValue.value[1]]
        const newValue = [value, parsedValue.value && parsedValue.value[1]]
        if (isValidValue(newValue)) {
          emitInput(newValue)
          userInput.value = null
        }
      }
    }

    const handleEndChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[1])
      if (value) {
        userInput.value = [displayValue.value[0], formatDayjsToString(value)]
        const newValue = [parsedValue.value && parsedValue.value[0], value]
        if (isValidValue(newValue)) {
          emitInput(newValue)
          userInput.value = null
        }
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const code = event.code

      if (code === EVENT_CODE.esc) {
        pickerVisible.value = false
        event.stopPropagation()
        return
      }

      if (code === EVENT_CODE.tab) {
        if (!isRangeInput.value) {
          handleChange()
          pickerVisible.value = false
          event.stopPropagation()
        } else {
          setTimeout(() => {
            if (refInput.value.indexOf(document.activeElement) === -1) {
              pickerVisible.value = false
              blurInput()
            }
          }, 10)
        }
        return
      }

      if (code === EVENT_CODE.enter) {
        if (userInput.value === '' || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange()
          pickerVisible.value = false
        }
        event.stopPropagation()
        return
      }

      if (userInput.value) {
        event.stopPropagation()
        return
      }

      if (pickerOptions.value.handleKeydown) {
        pickerOptions.value.handleKeydown(event)
      }
    }

    const handleStartInput = (event: InputEvent) => {
      if (userInput.value) {
        userInput.value = [(event.target as HTMLInputElement).value, userInput.value[1]]
      } else {
        userInput.value = [(event.target as HTMLInputElement).value, null]
      }
    }

    const handleEndInput = (event: InputEvent) => {
      if (userInput.value) {
        userInput.value = [userInput.value[0], (event.target as HTMLInputElement).value]
      } else {
        userInput.value = [null, (event.target as HTMLInputElement).value]
      }
    }

    provide(PICKER_BASE_PROVIDER, props)

    return {
      pickerVisible,
      isRangeInput,
      onClickOutside,
      displayValue,
      isDatesPicker,
      triggerClass,
      parsedValue,
      showClose,
      handleFocus,
      getPopperRef,
      popperRef,
      onPick,
      onSetPickerOption,
      onUserInput,
      handleChange,
      refContainer,
      handleKeydown,
      setSelectionRange,
      onMouseEnter,
      onMouseLeave,
      onClearIconClick,
      handleStartInput,
      handleEndInput,
      handleStartChange,
      handleEndChange,
    }
  },
})
</script>

<style></style>
