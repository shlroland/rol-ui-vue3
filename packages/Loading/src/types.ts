import type { Ref, VNode } from 'vue'

export interface RLoadingParentElement extends HTMLElement {
  vLoadingAddClassList?: () => void
}

export type RLoadingOptions = {
  parent?: RLoadingParentElement
  background?: string
  spinner?: boolean | string
  text?: string
  fullscreen?: boolean
  body?: boolean
  lock?: boolean
  customClass?: string
  visible?: boolean
  target?: string | HTMLElement
}

export type RLoadingInstance = {
  parent?: Ref<RLoadingParentElement>
  background?: Ref<string>
  spinner?: Ref<boolean | string>
  text?: Ref<string>
  fullscreen?: Ref<boolean>
  body?: Ref<boolean>
  lock?: Ref<boolean>
  customClass?: Ref<string>
  visible?: Ref<boolean>
  target?: Ref<string | HTMLElement>
  originalPosition?: Ref<string>
  originalOverflow?: Ref<string>
  setText: (text: string) => void
  close: () => void
  handleAfterLeave: () => void
  vm: VNode
  $el: HTMLElement
}

export type RLoadingGlobalConfig = {
  fullscreenLoading: RLoadingInstance
}

export type RLoadingCreateComponentParams = {
  options: RLoadingOptions
  globalLoadingOption: RLoadingGlobalConfig
}
