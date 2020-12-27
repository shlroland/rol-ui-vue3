import { Component, ComputedRef, WritableComputedRef } from 'vue'

export type RModelType = boolean | string | number

export type RRadioSize = 'small' | 'normal' | 'medium' | 'mini' | 'large'

export interface RadioGroupContext {
  name: 'RolRadioGroup'
  modelValue: RModelType
  fill: string
  textColor: string
  disabled: boolean
  size: RRadioSize
  radioGroupSize: RRadioSize
  changeEvent: (val: RModelType) => void
}

export interface RUseRadioAttrsProps {
  disabled?: boolean
  label: string | number | boolean
}

export interface RUseRadioAttrsState {
  isGroup: ComputedRef<boolean>
  radioGroup: RadioGroupContext
  model: WritableComputedRef<string | number | boolean>
}
