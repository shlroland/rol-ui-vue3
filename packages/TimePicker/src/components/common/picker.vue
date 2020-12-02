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
        v-bind="$attrs"
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
import dayjs from 'dayjs'

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
  emits: ['focus'],
  setup(props, ctx) {
    const pickerVisible = ref(false)
    const showClose = ref(false)
    const refConatiner = ref(null)
    const valueOpen = ref(null)
    const pickerOptions = ref({} as PickerOptions)

    const valueIsEmpty = computed(() => {
      return !props.modelValue || (Array.isArray(props.modelValue) && !props.modelValue.length)
    })

    const isRangeInput = computed(() => {
      return props.type.indexOf('range') > -1
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

    const onClickOutside = () => {
      if (!pickerVisible.value) return
      pickerVisible.value = false
    }

    const handleFocus = (event: Event) => {
      if (props.readonly || props.disabled) return
      pickerVisible.value = true
      ctx.emit('focus', event)
    }

    provide(PICKER_BASE_PROVIDER, { props })

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
    }
  },
})
</script>

<style></style>
