export type ValueType = boolean | string | number
export interface RSwitchProps {
  modelValue: ValueType
  value: ValueType
  disabled: boolean
  width: number
  activeIconClass: string
  inactiveIconClass: string
  activeText: string
  inactiveText: string
  activeColor: string
  inactiveColor: string
  activeValue: ValueType
  inactiveValue: ValueType
  name: string
  validateEvent: boolean
  id: string
  loading: boolean
}
