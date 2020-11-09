import { Emitter } from 'mitt'
import { ComponentInternalInstance, ComponentPublicInstance, SetupContext, VNode } from 'vue'
import { useSelectStates } from './useSelect'

export type States = ReturnType<typeof useSelectStates>

export type RolSelectCtx = SetupContext<
  ('update:modelValue' | 'change' | 'focus' | 'blur' | 'clear' | 'remove-tag' | 'visible-change')[]
>

export interface PopperVnode extends VNode {
  update(): void
  doDestroy(): void
}

export interface RSelectPublicInstance extends ComponentPublicInstance {
  popperRef: HTMLDivElement
}
export interface RSelectInternalInstance extends ComponentInternalInstance {
  ctx: RSelectPublicInstance
}

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
  instance: RSelectInternalInstance
}

export interface SelectGroupContext {
  disabled: boolean
}
