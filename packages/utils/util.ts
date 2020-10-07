import { Ref } from 'vue'
import { toRawType } from '@vue/shared'
import { AnyFunction } from './types'

export type PartialCSSStyleDeclaration = Partial<
  Pick<CSSStyleDeclaration, 'transform' | 'transition' | 'animation'>
>

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
