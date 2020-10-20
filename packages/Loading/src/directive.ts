import { App, ComponentInternalInstance, DirectiveBinding, nextTick, ObjectDirective, SetupContext } from 'vue'
import Loading from './index.vue'
import assign from 'lodash/assign'
import { createComponent } from '@rol-ui/utils/component'
import { removeClass } from '@rol-ui/utils/dom'
import { addStyle } from './addStyle'

export interface defaultProps {
  target: HTMLElement | string
  body: boolean
  fullscreen: boolean
  lock: boolean
  text: string
  spinner: string
  background: string
  customClass: string
}

export const defaults: defaultProps = {
  target: null,
  body: false,
  fullscreen: true,
  lock: false,
  text: null,
  spinner: null,
  background: null,
  customClass: '',
}

interface CtxProps extends SetupContext {
  $el: any
}

export interface releaseComponentInternalInstance extends ComponentInternalInstance {
  ctx?: CtxProps
  close?: () => void
}

const toggleLoading = (el: any, binding: DirectiveBinding<any>) => {
  if (binding.value) {
    nextTick(() => {
      let parentEl = document.body
      if (!binding.modifiers.fullscreen) {
        parentEl = el
      }
      addStyle(el.options, parentEl, el.instance)
      el.instance.show()
      parentEl.appendChild(el.mask)
    })
  } else {
    el.instance.close()
  }
}

const loadingDirective: ObjectDirective = {
  //   created() {},
  mounted(el, binding, vnode) {
    const textExr: string = el.getAttribute('rol-loading-text')
    const spinnerExr: string = el.getAttribute('rol-loading-spinner')
    const backgroundExr: string = el.getAttribute('rol-loading-background')
    const customClassExr: string = el.getAttribute('rol-loading-custom-class')
    const vm = vnode.appContext

    const options = assign({} as defaultProps, defaults, {
      text: (vm && vm[textExr]) || textExr,
      spinner: (vm && vm[spinnerExr]) || spinnerExr,
      background: (vm && vm[backgroundExr]) || backgroundExr,
      customClass: (vm && vm[customClassExr]) || customClassExr,
      fullscreen: !!binding.modifiers.fullscreen,
    })

    const mask: releaseComponentInternalInstance = createComponent(
      Loading,
      {
        ...options,
        onAfterLeave() {
          el.domVisible = false
          const target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el
          removeClass(target, 'rol-loading-parent--relative')
          removeClass(target, 'rol-loading-parent--hidden')
        },
      },
      [],
    )
    el.options = options
    el.instance = mask.ctx
    el.mask = mask.ctx.$el
    el.maskStyle = {}

    binding.value && toggleLoading(el, binding)
  },
  updated(el, binding) {
    el.instance.setText(el.getAttribute('rol-loading-text'))
    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding)
    }
  },
}

export default {
  install(app: App) {
    app.directive('loading', loadingDirective)
  },
}

export const directive = loadingDirective
