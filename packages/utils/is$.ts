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
