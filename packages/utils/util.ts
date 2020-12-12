import { ComponentInternalInstance, ref, Ref } from 'vue'
import { toRawType, extend } from '@vue/shared'
import { AnyFunction } from './types'
import { EVENT_CODE } from './aria'
import { addClass, on } from './dom'

export type PartialCSSStyleDeclaration = Partial<Pick<CSSStyleDeclaration, 'transform' | 'transition' | 'animation'>>

export const clearTimer = (timer: Ref<TimeoutHandle>) => {
  clearTimeout(timer.value)
  timer.value = null
}

export const isValidWidthUnit = (val: string) =>
  ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit => val.endsWith(unit))

export const generateId = (): number => Math.floor(Math.random() * 10000)

export const isBool = (val: unknown) => typeof val === 'boolean'

export const isNumber = (val: unknown) => typeof val === 'number'

export const isHTMLElement = (val: unknown) => {
  return toRawType(val).startsWith('HTML')
}

export const coerceTruthyValueToArray = arr => {
  if (!arr && arr !== 0) return []
  return Array.isArray(arr) ? arr : [arr]
}

export const escapeRegexpString = (value = ''): string => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

export const entries = <T>(obj: Hash<T>): [string, T][] => {
  return Object.keys(obj).map((key: string) => [key, obj[key]])
}

export const rafThrottle: <T extends AnyFunction<any>>(fn: T) => AnyFunction<void> = fn => {
  let locked = false
  return function (...args: any[]) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(() => {
      fn.apply(this, args)
      locked = false
    })
  }
}

export const autoprefixer = function (style: PartialCSSStyleDeclaration): PartialCSSStyleDeclaration {
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}

export const initDropdownDomEvent = (
  dropdownChildren: ComponentInternalInstance,
  triggerElm: HTMLButtonElement,
  _instance: any,
) => {
  const menuItems = ref<Nullable<HTMLButtonElement[]>>(null)
  const menuItemsArray = ref<Nullable<HTMLElement[]>>(null)
  const dropdownElm = ref<Nullable<HTMLElement>>(null)
  const listId = ref(`dropdown-menu-${generateId()}`)
  dropdownElm.value = dropdownChildren?.subTree.el as HTMLElement

  const removeTabIndex = () => {
    triggerElm.setAttribute('tabindex', '-1')
    menuItemsArray.value?.forEach(item => {
      item.setAttribute('tabindex', '-1')
    })
  }

  function resetTabIndex(ele: HTMLElement) {
    removeTabIndex()
    ele?.setAttribute('tabindex', '0')
  }

  const handleTriggerKeyDown = (ev: KeyboardEvent) => {
    const code = ev.code
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      removeTabIndex()
      resetTabIndex(menuItems.value[0])
      menuItems.value[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      _instance.handleClick()
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
    }
  }

  const handleItemKeyDown = (ev: KeyboardEvent) => {
    const code = ev.code
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target as HTMLElement)
    const max = menuItemsArray.value.length - 1
    let nextIndex: number

    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else {
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      removeTabIndex()
      resetTabIndex(menuItems.value[nextIndex])
      menuItems.value[nextIndex].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      triggerElmFocus()
      ;(target as HTMLElement).click()
      if (_instance.props.hideOnClick) {
        _instance.hide()
      } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
        _instance.hide()
        triggerElmFocus()
      }
    }
  }
  const initAria = () => {
    dropdownElm.value.setAttribute('id', listId.value)
    triggerElm.setAttribute('aria-haspopup', 'list')
    triggerElm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) {
      triggerElm.setAttribute('role', 'button')
      triggerElm.setAttribute('tabindex', _instance.tabindex)
      addClass(triggerElm, 'rol-dropdown-selfdefine')
    }
  }

  const initEvent = () => {
    on(triggerElm, 'keydown', handleTriggerKeyDown)
    on(dropdownElm.value, 'keydown', handleItemKeyDown, true)
  }

  const initDomOperation = () => {
    menuItems.value = (dropdownElm.value.querySelectorAll("[tabindex='-1']") as unknown) as HTMLButtonElement[]
    menuItemsArray.value = [].slice.call(menuItems.value)
    initAria()
    initEvent()
  }

  function triggerElmFocus() {
    triggerElm?.focus?.()
  }

  initDomOperation()
}

export function toObject<T>(arr: Array<T>): Record<string, T> {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

export const getValueByPath = (obj: any, paths = ''): unknown => {
  let ret: unknown = obj
  paths.split('.').map(path => {
    ret = ret?.[path]
  })

  return ret
}
