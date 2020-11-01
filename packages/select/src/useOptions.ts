import { computed } from 'vue'

export function useOption(props, states) {
  const isObject = computed(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === '[object object]'
  })
  const currentLabel = computed(() => {
    return props.label || (isObject.value ? '' : props.value)
  })
  return {
    currentLabel,
  }
}
