import { AnyFunction } from '@rol-ui/utils/types'
import { ComputedRef } from 'vue'

export interface RCheckboxProps {
  modelValue: string | boolean | number
  label?: string | boolean | number
  indeterminate?: boolean
  disabled?: boolean
  checked?: boolean
  name?: string
  trueLabel?: string | number
  falseLabel?: string | number
  id?: string
  controls?: string
  border?: boolean
  size?: string
}

export interface RCheckboxGroupInstance {
  name?: string
  modelValue?: ComputedRef
  disabled?: ComputedRef<boolean>
  min?: ComputedRef<string | number>
  max?: ComputedRef<string | number>
  size?: ComputedRef<string>
  fill?: ComputedRef<string>
  textColor?: ComputedRef<string>
  checkboxGroupSize?: ComputedRef<string>
  changeEvent?: AnyFunction<any>
}
