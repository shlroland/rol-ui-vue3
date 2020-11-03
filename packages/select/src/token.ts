import { Emitter } from 'mitt'
import { InjectionKey } from 'vue'

export interface SelectProvideContext {
  selectWrapper: HTMLElement
  cachedOptions: unknown[]
  selected: any | any[]
  multiple: boolean
  hoverIndex: number
  setSelected(): void
  valueKey: string
  remote: boolean
  optionsCount: number
  filteredOptionsCount: number
  options: unknown[]
  selectEmitter: Emitter
  onOptionDestroy(i: number)
  handleOptionSelect(vm: unknown, byClick: boolean)
  props: any
}

export const selectKey: InjectionKey<SelectProvideContext> = Symbol('Select')
