import { Ref } from 'vue'

export const clearTimer = (timer: Ref<TimeoutHandle>) => {
  clearTimeout(timer.value)
  timer.value = null
}
