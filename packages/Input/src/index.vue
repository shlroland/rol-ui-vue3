<template>
  <div
    :class="[
      type === 'textarea' ? 'rol-textarea' : 'rol-input',
      inputSize ? 'rol-input--' + inputSize : '',
      {
        'is-disabled': inputDisabled,
        'is-exceed': inputExceed,
        'rol-input-group': $slots.prepend || $slots.append,
        'rol-input-group--append': $slots.append,
        'rol-input-group--prepend': $slots.prepend,
        'rol-input--prefix': $slots.prefix || prefixIcon,
        'rol-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword,
      },
      $attrs.class,
    ]"
    :style="$attrs.style"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="rol-input-group__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-if="type !== 'textarea'"
        ref="input"
        class="rol-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :tabindex="tabindex"
        :aria-label="label"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @change="handleChange"
      />
      <span v-if="$slots.prefix || prefixIcon" class="rol-input__prefix">
        <slot name="prefix"></slot>
        <Icon v-if="prefixIcon" :name="prefixIcon" class="rol-input__icon" />
      </span>
      <span v-if="getSuffixVisible" class="rol-input__suffix">
        <span class="rol-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <Icon v-if="suffixIcon" :name="suffixIcon" class="rol-input__icon" />
          </template>
          <Icon
            v-if="showClear"
            class="rol-input__icon rol-input__clear"
            :name="['far', 'times-circle']"
            @mousedown.prevent
          />
          <Icon v-if="showPwdVisible" :name="['far', 'eye']" class="rol-input__icon rol-input__clear" />
          <span v-if="isWordLimitVisible" class="rol-input__count">
            <span class="rol-input__count-inner"> {{ textLength }}/{{ upperLimit }} </span>
          </span>
        </span>
      </span>
      <div v-if="$slots.append" class="rol-input-group__append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      ref="textarea"
      class="rol-textarea__inner"
      v-bind="$attrs"
      :tabindex="tabindex"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :style="textareaStyle"
      :aria-label="label"
    ></textarea>
    <span
      v-if="isWordLimitVisible && type === 'textarea'"
      class="rol-input__count"
    >{{ textLength }}/{{ upperLimit }}</span>
  </div>
</template>

<script lang="ts">
import { computed, nextTick, PropType, ref, shallowRef } from 'vue'
import Icon from '@rol-ui/icon'
import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'

type AutosizeProp =
  | {
      minRows?: number
      maxRows?: number
    }
  | boolean

export default {
  name: 'RolInput',
  components: {
    Icon,
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    size: {
      type: String as PropType<'large' | 'medium' | 'small' | 'mini' | null>,
      validator: (val: string) => !val || ['large', 'medium', 'small', 'mini'].includes(val),
    },
    resize: {
      type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
      validator: (val: string) => ['none', 'both', 'horizontal', 'vertical'].includes(val),
    },
    autosize: {
      type: [Boolean, Object] as PropType<AutosizeProp>,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val: string) => ['on', 'off'].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    suffixIcon: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    tabindex: {
      type: String,
      default: '',
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['mouseenter', 'mouseleave', 'input', 'change', UPDATE_MODELVALUE_EVENT],
  setup(props, ctx) {
    const passwordVisible = ref(false)
    const nativeInputValue = computed(() => String(props.modelValue))
    const focused = ref(false)
    const hovering = ref(false)
    const isComposing = ref(false)
    const input = ref(null)
    const textarea = ref(null)
    const _textareaCalcStyle = shallowRef({})

    const inputOrTextarea = computed(() => input.value || textarea.value)
    const inputSize = computed(() => props.size)
    const inputDisabled = computed(() => props.disabled)
    const upperLimit = computed(() => ctx.attrs.maxlength)
    const isWordLimitVisible = computed(() => {
      return (
        props.showWordLimit &&
        ctx.attrs.maxlength &&
        (props.type === 'text' || props.type === 'textarea') &&
        !inputDisabled.value &&
        !props.readonly &&
        !props.showPassword
      )
    })

    const textLength = computed(() => {
      return typeof props.modelValue === 'number' ? String(props.modelValue).length : (props.modelValue || '').length
    })
    const textareaStyle = computed(() => ({
      ..._textareaCalcStyle.value,
      resize: props.resize,
    }))
    const inputExceed = computed(() => {
      // show exceed style if length of initial value greater then maxlength
      return isWordLimitVisible.value && textLength.value > upperLimit.value
    })

    const showClear = computed(() => {
      return (
        props.clearable &&
        !inputDisabled.value &&
        !props.readonly &&
        nativeInputValue.value &&
        (focused.value || hovering.value)
      )
    })

    const showPwdVisible = computed(() => {
      return (
        props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value)
      )
    })

    const getSuffixVisible = computed(() => {
      return ctx.slots.suffix || props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value
    })

    const setNativeInputValue = () => {
      const input = inputOrTextarea.value
      if (!input || input.value === nativeInputValue.value) return
      input.value = nativeInputValue.value
    }

    const handleInput = (event: InputEvent) => {
      const { value } = event.target as HTMLInputElement
      if (isComposing.value) return
      if (value === nativeInputValue.value) return

      ctx.emit(UPDATE_MODELVALUE_EVENT, value)
      ctx.emit('input', value)
      nextTick(setNativeInputValue)
    }

    const handleChange = event => {
      ctx.emit('change', event.target.value)
    }

    const onMouseLeave = e => {
      hovering.value = false
      ctx.emit('mouseleave', e)
    }

    const onMouseEnter = e => {
      hovering.value = true
      ctx.emit('mouseenter', e)
    }

    const handleCompositionStart = () => {
      isComposing.value = true
    }

    const handleCompositionUpdate = (event: CompositionEvent) => {
      const text = (event.target as HTMLInputElement).value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = !!lastCharacter
    }

    const handleCompositionEnd = () => {
      if (isComposing.value) {
        isComposing.value = false
      }
    }

    return {
      inputSize,
      inputDisabled,
      inputExceed,
      passwordVisible,
      getSuffixVisible,
      showClear,
      isWordLimitVisible,
      showPwdVisible,
      textLength,
      upperLimit,
      textareaStyle,
      onMouseEnter,
      onMouseLeave,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handleInput,
      handleChange,
    }
  },
}
</script>

<style></style>
