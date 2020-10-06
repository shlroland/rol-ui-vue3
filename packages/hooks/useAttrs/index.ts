import { entries } from '@rol-ui/utils/util'
import { getCurrentInstance, reactive, shallowRef, watchEffect } from 'vue'

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export default (excludeListeners = false, excludeKeys: string[] = []) => {
  const instance = getCurrentInstance()
  const attrs = shallowRef({})
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)
  instance.attrs = reactive(instance.attrs)

  watchEffect(() => {
    const res = entries(instance.attrs).reduce((acc, [key, val]) => {
      if (!allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))) {
        acc[key] = val
      }
      return acc
    }, {})
    attrs.value = res
  })

  return attrs
}
