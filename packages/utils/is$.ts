import { Ref } from 'vue'

export const isServer = typeof window === undefined
export const isBool = (val: unknown) => typeof val === 'boolean'
export const isObject = (value: any) => Object.prototype.toString.call(value).toLowerCase() === '[object object]'
export const isNull = (value: any) => Object.prototype.toString.call(value).toLowerCase() === '[object null]'
export const isUndefined = (value: any) => Object.prototype.toString.call(value).toLowerCase() === '[object undefined]'
export const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined
export const isHtmlEle = (e: HTMLElement) => e && e.nodeType === 1
export const isFirefox = function (): boolean {
  return !isServer && !!window.navigator.userAgent.match(/firefox/i)
}
export const isIE = function (): boolean {
  return !isServer && !isNaN(Number(document.DOCUMENT_NODE))
}

export const isEdge = function (): boolean {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1
}
export function isKorean(text: string): boolean {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
  return reg.test(text)
}

/**
 * Unwraps refed value
 * @param ref Refed value
 */
export function $<T>(ref: Ref<T>)  {
  return ref.value
}
