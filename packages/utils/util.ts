import { Ref } from 'vue'
import { toRawType } from '@vue/shared'

export const clearTimer = (timer: Ref<TimeoutHandle>) => {
  clearTimeout(timer.value)
  timer.value = null
}

export const isValidWidthUnit = (val: string) =>
  ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit => val.endsWith(unit))

export const generateId = (): number => Math.floor(Math.random() * 10000)

export const isBool = (val: unknown) => typeof val === 'boolean'
export const isNumber = (val: unknown) => typeof val === 'number'
export const isHTMLElement = (val: unknown) => toRawType(val).startsWith('HTML')
