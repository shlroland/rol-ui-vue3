<template>
  <div
    class="rol-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
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
      @change="handleChange"
      @keydown.enter="switchValue"
    />
    <span
      v-if="inactiveValue || inactiveText"
      :class="['rol-switch__label', 'rol-switch__label--left', !checked ? 'is-active' : '']"
    >
      <span v-if="inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
    <span ref="core" class="rol-switch__core" :style="{ width: coreWidth + 'px' }">
      <div class="rol-switch__action">
        <rol-icon v-if="loading" name="spinner" size="xs" spin></rol-icon>
      </div>
    </span>
    <span
      v-if="activeIconClass || activeText"
      :class="['rol-switch__label', 'rol-switch__label--right', checked ? 'is-active' : '']"
    >
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import { ValueType } from './switch'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolSwitch',
  components: {
    RolIcon,
  },
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
  emits: ['update:modelValue', 'change', 'input'],
  setup(props, { emit }) {
    const input = ref<Nullable<HTMLInputElement>>(null)
    const core = ref<Nullable<HTMLSpanElement>>(null)
    const coreWidth = ref(props.width)
    const isModelValue = ref(props.modelValue !== false)

    watch(
      () => props.modelValue,
      () => {
        isModelValue.value = true
      },
    )
    watch(
      () => props.value,
      () => {
        isModelValue.value = false
      },
    )

    const switchDisabled = computed((): boolean => {
      return props.disabled || props.loading
    })
    const actualValue = computed(
      (): ValueType => {
        return isModelValue.value ? props.modelValue : props.value
      },
    )
    const checked = computed(() => {
      return actualValue.value === props.activeValue
    })

    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit('update:modelValue', props.inactiveValue)
      emit('change', props.inactiveValue)
      emit('input', props.inactiveValue)
    }

    const setBackgroundColor = () => {
      const newColor = checked.value ? props.activeColor : props.inactiveColor
      core.value.style.borderColor = newColor
      core.value.style.backgroundColor = newColor
      ;(core.value.children[0] as HTMLElement).style.color = newColor
    }

    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue
      emit('update:modelValue', val)
      emit('change', val)
      emit('input', val)
      nextTick(() => {
        input.value.checked = Boolean(checked.value)
      })
    }

    const switchValue = () => {
      !switchDisabled.value && handleChange()
    }

    onMounted(() => {
      watch(checked, () => {
        input.value.checked = Boolean(checked.value)
        if (props.activeColor || props.inactiveValue) {
          setBackgroundColor()
        }
      })
      coreWidth.value = coreWidth.value || 40
      if (props.activeValue || props.inactiveValue) {
        setBackgroundColor()
      }
      input.value.checked = Boolean(checked.value)
    })

    return {
      checked,
      switchDisabled,
      input,
      core,
      coreWidth,
      switchValue,
    }
  },
})
</script>
