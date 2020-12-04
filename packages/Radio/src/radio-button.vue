<template>
  <rol-button
    :class="['rol-radio-button',{ 'is-active': value === label }]"
    :style="value === label ? activeStyle : null"
    role="radio"
    :size="size"
    :disabled="isDisabled"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @click.stop="handleClick"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <slot>{{ label }}</slot>
    <input
      ref="inputRef"
      v-model="value"
      type="radio"
      class="rol-radio-button__orig-radio"
      :value="label"
      :name="name"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    />
  </rol-button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import RolButton from '@rol-ui/button'
import { useRadio } from '@rol-ui/radio/src/useRadio'
import { useRadioAttrs } from '@rol-ui/radio/src/useRadio'

export default defineComponent({
  name: 'RolRadioButton',
  components: {
    RolButton,
  },
  props: {
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
    disabled: Boolean,
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const inputRef = ref<Nullable<HTMLInputElement>>(null)

    const { isGroup, radioGroup, focus } = useRadio()

    const size = computed(() => {
      return radioGroup.radioGroupSize
    })

    const value = computed<boolean | string | number>({
      get() {
        return radioGroup.modelValue
      },
      set(val) {
        radioGroup.changeEvent(val)
      },
    })

    const { tabIndex, isDisabled } = useRadioAttrs(props, { model: value, radioGroup: radioGroup, isGroup })
    const activeStyle = computed(() => {
      return {
        backgroundColor: radioGroup.fill || '',
        borderColor: radioGroup.fill || '',
        boxShadow: radioGroup.fill ? `-1px 0 0 0 ${radioGroup.fill}` : '',
        color: radioGroup.textColor || '',
      }
    })

    const handleClick = () => {
      if (inputRef.value) {
        inputRef.value.click()
      }
    }

    return {
      isGroup,
      size,
      isDisabled,
      tabIndex,
      value,
      focus,
      activeStyle,
      inputRef,
      handleClick,
    }
  },
})
</script>

<style>
</style>
