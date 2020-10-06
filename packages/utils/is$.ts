export const isServer = typeof window === undefined
export const isBool = (val: unknown) => typeof val === 'boolean'
export const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined
export const isHtmlEle = (e: HTMLElement) => e && e.nodeType === 1
