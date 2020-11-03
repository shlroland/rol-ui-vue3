import { getValueByPath } from '@rol-ui/utils/util'
import { computed, inject } from 'vue'
import { selectKey } from './token'

export function useOption(props, states) {
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

  const select = inject(selectKey)
  return {
    currentLabel,
    select,
    itemSelected,
  }
}
