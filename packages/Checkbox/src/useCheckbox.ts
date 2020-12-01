import { UPDATE_MODELVALUE_EVENT } from '@rol-ui/utils/constants'
import { PartialReturnType } from '@rol-ui/utils/types'
import { computed, getCurrentInstance, inject, ref } from 'vue'
import { RCheckboxGroupInstance, RCheckboxProps } from './checkbox'

export const useCheckboxGroup = () => {
  const checkboxGroup = inject<RCheckboxGroupInstance>('CheckboxGroup', {})
  const isGroup = computed(() => checkboxGroup && checkboxGroup?.name === 'RolCheckboxGroup')
  return {
    isGroup,
    checkboxGroup,
  }
}

const useModel = (props: RCheckboxProps) => {
  let selfModel = false
  const { emit } = getCurrentInstance()
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitExceeded = ref(false)
  const store = computed(() => (checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue))
  const model = computed({
    get() {
      return isGroup.value ? store.value : props.modelValue ?? selfModel
    },
    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = false
        if (checkboxGroup.min !== undefined && val.length < checkboxGroup.min.value) {
          isLimitExceeded.value = true
        }
        if (checkboxGroup.max !== undefined && val.length > checkboxGroup.max.value) {
          isLimitExceeded.value = true
        }

        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODELVALUE_EVENT, val)
        selfModel = val as boolean
      }
    },
  })

  return {
    model,
    isLimitExceeded,
  }
}

const useCheckboxStatus = (props: RCheckboxProps, { model }: PartialReturnType<typeof useModel>) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const focus = ref(false)
  const size = computed<string | undefined>(() => checkboxGroup?.checkboxGroupSize?.value)
  const isChecked = computed(() => {
    const value = model.value
    if (Object.prototype.toString.call(value) === '[object Boolean]') {
      return value
    } else if (Array.isArray(value)) {
      return value.includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    }
  })
  const checkboxSize = computed(() => {
    const temCheckboxSize = props.size
    return isGroup.value ? checkboxGroup?.checkboxGroupSize?.value || temCheckboxSize : temCheckboxSize
  })

  return {
    isChecked,
    focus,
    size,
    checkboxSize,
  }
}

const useDisabled = (
  props: RCheckboxProps,
  { model, isChecked }: PartialReturnType<typeof useModel> & PartialReturnType<typeof useCheckboxStatus>,
) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitDisabled = computed(() => {
    const max = checkboxGroup.max?.value
    const min = checkboxGroup.min?.value
    return (
      (!!(max || min) && model.value.length >= max && !isChecked.value) ||
      (model.value.length <= min && isChecked.value)
    )
  })
  const isDisabled = computed(() => {
    const disabled = props.disabled
    return isGroup.value ? checkboxGroup.disabled?.value || disabled : disabled
  })

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export const useCheckbox = (props: RCheckboxProps) => {
  const { model, isLimitExceeded } = useModel(props)
  const { focus, size, isChecked, checkboxSize } = useCheckboxStatus(props, { model })
  const { isDisabled } = useDisabled(props, { model, isChecked })

  return {
    model,
    isChecked,
    isLimitExceeded,
    focus,
    size,
    checkboxSize,
    isDisabled,
  }
}
