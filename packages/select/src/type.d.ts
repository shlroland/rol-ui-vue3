import { SetupContext } from 'vue'
import { useSelectStates } from './useSelect'


export type States = ReturnType<typeof useSelectStates>

export type RolSelectCtx = SetupContext<
  ('update:modelValue' | 'change' | 'focus' | 'blur' | 'clear' | 'remove-tag' | 'visible-change')[]
>
