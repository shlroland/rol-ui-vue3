import { InjectionKey } from 'vue'
import { SelectGroupContext, SelectProvideContext } from './type'

export const selectGroupKey: InjectionKey<SelectGroupContext> = Symbol('SelectGroup')

export const selectKey: InjectionKey<SelectProvideContext> = Symbol('Select')

export const selectEvents = {
  queryChange: 'rolOptionQueryChange',
  groupQueryChange: 'rolOptionGroupQueryChange',
}
