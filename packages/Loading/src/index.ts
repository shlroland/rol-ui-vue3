import { addClass, getStyle, removeClass } from '@rol-ui/utils/dom'
import { isServer } from '@rol-ui/utils/is$'
import PopupManager from '@rol-ui/utils/popup-manager'
import { createLoadingComponent } from './createLoadingComponent'
import { RLoadingGlobalConfig, RLoadingInstance, RLoadingOptions } from './types'

const defaults: RLoadingOptions = {
  parent: null,
  background: '',
  spinner: false,
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: '',
}

const globalLoadingOption: RLoadingGlobalConfig = {
  fullscreenLoading: null,
}

const addStyle = (options: RLoadingOptions, parent: HTMLElement, instance: RLoadingInstance) => {
  const maskStyle: Partial<CSSStyleDeclaration> = {}

  if (options.fullscreen) {
    instance.originalOverflow.value = getStyle(document.body, 'overflow')
    instance.originalPosition.value = getStyle(document.body, 'position')

    maskStyle.zIndex = String(PopupManager.nextZIndex())
  } else if (options.body) {
    instance.originalPosition.value = getStyle(document.body, 'position')
    ;['top', 'left'].forEach(property => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] =
        (options.target as HTMLElement).getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] -
        parseInt(getStyle(document.body, `margin-${property}`), 10) +
        'px'
    })
    ;['height', 'width'].forEach(property => {
      maskStyle[property] = (options.target as HTMLElement).getBoundingClientRect()[property] + 'px'
    })
  } else {
    instance.originalPosition.value = getStyle(parent, 'position')
  }
  Object.keys(maskStyle).forEach(property => {
    instance.$el.style[property] = maskStyle[property]
  })
}

const addClassList = (options: RLoadingOptions, parent: HTMLElement, instance: RLoadingInstance) => {
  if (instance.originalPosition.value !== 'absolute' && instance.originalPosition.value !== 'fixed') {
    addClass(parent, 'rol-loading-parent--relative')
  } else {
    removeClass(parent, 'rol-loading-parent--relative')
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, 'rol-loading-parent--hidden')
  } else {
    removeClass(parent, 'rol-loading-parent--hidden')
  }
}

const Loading = (options: RLoadingOptions = {}): RLoadingInstance => {
  if (isServer) return

  options = {
    ...defaults,
    ...options,
  }

  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target) as HTMLElement
  }

  options.target = options.target || document.body

  if (options.target !== document.body) {
    options.fullscreen = false
  } else {
    options.body = true
  }

  if (options.fullscreen && globalLoadingOption.fullscreenLoading) {
    globalLoadingOption.fullscreenLoading.close()
  }

  const parent = options.body ? document.body : options.target
  options.parent = parent

  const instance = createLoadingComponent({
    options,
    globalLoadingOption,
  })

  addStyle(options, parent, instance)
  addClassList(options, parent, instance)

  options.parent.vLoadingAddClassList = () => {
    addClassList(options, parent, instance)
  }

  parent.appendChild(instance.$el)
  if (options.fullscreen) {
    globalLoadingOption.fullscreenLoading = instance
  }
  return instance
}

export default Loading
