import { addClass, getStyle, removeClass } from '@rol-ui/utils/dom'
import PopupManager from '@rol-ui/utils/popup-manager'
import { CSSProperties } from 'vue'

export const addStyle = (options: any, parent: HTMLElement, ctx: any) => {
  const maskStyle = {} as CSSProperties
  if (options.fullscreen) {
    addClass(ctx.$el, 'is-fullscreen')
    ctx.originalPosition = getStyle(document.body, 'position')
    ctx.originalOverflow = getStyle(document.body, 'overflow')
    maskStyle.zIndex = PopupManager.nextZIndex()
  } else if (options.body) {
    removeClass(ctx.$el, 'is-fullscreen')
    ctx.originalPosition = getStyle(document.body, 'position')
    ;['top', 'left'].forEach(property => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.documentElement[scroll] + 'px'
      ;['height', 'width'].forEach(property => {
        maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px'
      })
    })
  } else {
    ctx.originalPosition = getStyle(parent, 'position')
  }

  Object.keys(maskStyle).forEach(property => {
    ctx.$el.style[property] = maskStyle[property]
  })

  if (ctx.originalPosition !== 'absolute' && ctx.originalPosition !== 'fixed') {
    addClass(parent, 'rol-loading-parent--relative')
  }

  if (options.fullscreen && options.lock) {
    addClass(parent, 'rol-loading-parent--hidden')
  }
}
