import { on, once } from '@rol-ui/utils/dom'
import { ObjectDirective } from 'vue'

export default {
  beforeMount(el, binding) {
    let interval = null
    let startTime

    const handler = () => binding.value && binding.value()
    const clear = () => {
      if (Date.now() - startTime < 100) {
        handler()
      }
      clearInterval(interval)
      interval = null
    }

    on(el, 'mousedown', event => {
      if ((event as any).button !== 0) return
      startTime = Date.now()
      once(document as any, 'mouseup', clear)
      clearInterval(interval)
      interval = setInterval(handler, 100)
    })
  },
} as ObjectDirective
