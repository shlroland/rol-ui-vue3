import { getValueByPath } from '@rol-ui/utils/util'
import { computed, getCurrentInstance, inject } from 'vue'
import { selectGroupKey, selectKey } from './token'

export function useOption(props, states) {
  const select = inject(selectKey)
  const selectGroup = inject(selectGroupKey, { disabled: false })
  const instance = getCurrentInstance()
  const isObject = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'
  })
  const currentLabel = computed(() => {
    return props.label || (isObject.value ? '' : props.value)
  })

  const isEqual = (a: unknown, b: unknown) => {
    if (!isObject.value) {
      return a === b
    } else {
      const valueKey = select.props.valueKey
      return getValueByPath(a, valueKey) === getValueByPath(b, valueKey)
    }
  }

  const contains = (arr: unknown[], target: unknown) => {
    if (!isObject.value) {
      return arr && arr.indexOf(target) > -1
    } else {
      const valueKey = select.props.valueKey
      return (
        arr &&
        arr.some(item => {
          return getValueByPath(item, valueKey) === getValueByPath(target, valueKey)
        })
      )
    }
  }

  const itemSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual(props.value, select.props.modelValue)
    } else {
      return contains(select.props.modelValue, props.value)
    }
  })

  const limitReached = computed(() => {
    if (select.props.multiple) {
      return (
        !itemSelected.value &&
        (select.props.value || []).length >= select.props.multipleLimit &&
        select.props.multipleLimit > 0
      )
    } else {
      return false
    }
  })

  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value
  })

  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.options.indexOf(instance)
    }
  }

  return {
    currentLabel,
    select,
    itemSelected,
    isDisabled,
    hoverItem,
  }
}
