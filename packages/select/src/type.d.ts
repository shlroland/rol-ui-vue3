import { SetupContext, VNode } from 'vue'
import { useSelectStates } from './useSelect'

export type States = ReturnType<typeof useSelectStates>

export type RolSelectCtx = SetupContext<
  ('update:modelValue' | 'change' | 'focus' | 'blur' | 'clear' | 'remove-tag' | 'visible-change')[]
>

export interface PopperVnode extends VNode {
  update(): void
  doDestroy(): void
}
