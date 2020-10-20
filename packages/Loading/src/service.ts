import { createComponent, unmountComponent } from '@rol-ui/utils/component'
import { removeClass } from '@rol-ui/utils/dom'
import { assign } from 'lodash'
import { addStyle } from './addStyle'
import { defaultProps, defaults, releaseComponentInternalInstance } from './directive'
import LoadingIns from './index.vue'

let fullscreenLoading: undefined | releaseComponentInternalInstance

const Loading = (options = {} as defaultProps) => {
  options = assign({} as defaultProps, defaults, options)

  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target) as HTMLElement
  }

  options.target = options.target || document.body
  if (options.target !== document.body) {
    options.fullscreen = false
  } else {
    options.body = true
  }

  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading
  }
  const parent = options.body ? document.body : options.target

  const instance: releaseComponentInternalInstance = createComponent(
    LoadingIns,
    {
      ...options,
      visible: true,
      onAfterLeave() {
        if (options.fullscreen) {
          fullscreenLoading = undefined
        }
        const target = options.fullscreen || options.body ? document.body : options.target
        removeClass(target as HTMLElement, 'rol-loading-parent--relative')
        removeClass(target as HTMLElement, 'rol-loading-parent--hidden')
        unmountComponent(instance)
      },
    },
    [],
  )
  addStyle(options, parent, instance.ctx)

  parent.appendChild(instance.ctx.$el)

  if (options.fullscreen) {
    fullscreenLoading = instance
  }

  instance.close = function () {
    this.ctx.close()
  }
  console.log(instance)
  return instance
}

export default Loading
