import type { Dayjs } from 'dayjs'

export interface DatePickerTableCell {
  column: number
  customClass?: string | string[]
  disabled?: boolean
  end: boolean
  inRange?: boolean
  row: number
  selected?: boolean | Dayjs
  start?: boolean
  text?: number | string
  type: string
}
