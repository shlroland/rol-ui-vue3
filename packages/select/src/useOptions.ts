import { escapeRegexpString, getValueByPath } from '@rol-ui/utils/util'
import { computed, getCurrentInstance, inject, watch } from 'vue'
import { selectEvents, selectGroupKey, selectKey } from './token'

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

  const queryChange = (query: string) => {
    const regexp = new RegExp(escapeRegexpString(query), 'i')
    states.visible = regexp.test(currentLabel.value) || props.created
    if (!states.visible) {
      select.filteredOptionsCount--
    }
  }

  watch(
    () => currentLabel.value,
    () => {
      if (!props.created && !select.props.remote) select.setSelected()
    },
  )

  watch(
    () => props.value,
    (val, oldVal) => {
      const { remote, valueKey } = select.props
      if (!props.created && !remote) {
        if (valueKey && typeof val === 'object' && typeof oldVal === 'object' && val[valueKey] === oldVal[valueKey]) {
          return
        }
        select.setSelected()
      }
    },
  )

  select.selectEmitter.on(selectEvents.queryChange, queryChange)

  return {
    currentLabel,
    select,
    itemSelected,
    isDisabled,
    hoverItem,
  }
}
