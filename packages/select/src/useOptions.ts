import { computed, inject } from 'vue'
import { selectKey } from './token'

export function useOption(props, states) {
  const isObject = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'
  })
  const currentLabel = computed(() => {
    return props.label || (isObject.value ? '' : props.value)
  })

  const select = inject(selectKey)
  return {
    currentLabel,
    select,
  }
}
