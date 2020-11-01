import { Emitter } from 'mitt'
import { InjectionKey, VNode } from 'vue'

export interface SelectProvideContext {
  options:unknown[]
  cachedOptions:any[]
  optionsCount:number
  filteredOptionsCount: number
  hoverIndex: number
  handleOptionSelect(vm: unknown, byClick: boolean)
  selectEmitter:Emitter
  onOptionDestroy(i: number)
  props: any
  inputWidth: number
  selectWrapper: HTMLElement
  popper:VNode
}

export const selectKey: InjectionKey<SelectProvideContext> = Symbol('Select')
