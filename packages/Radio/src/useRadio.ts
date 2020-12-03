import { computed, inject, InjectionKey, ref } from 'vue'
import { RadioGroupContext, RUseRadioAttrsState, RUseRadioAttrsProps } from './radio'

export const radioGroupKey = 'RadioGroup' as any

export const useRadio = () => {
  const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'RolRadioGroup')

  return {
    isGroup,
    focus,
    radioGroup,
  }
}

export const useRadioAttrs = (props: RUseRadioAttrsProps, { isGroup, radioGroup, model }: RUseRadioAttrsState) => {
  const isDisabled = computed(() => {
    return isGroup.value ? radioGroup.disabled || props.disabled : props.disabled
  })

  const tabIndex = computed(() => {
    return isDisabled.value || (isGroup.value && model.value !== props.label) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }
}
