export type ProgressFuncType = (percentage: number) => string
export interface RProgressProps {
  type: string
  percentage: number
  status: string
  strokeWidth: number
  strokeLinecap: string
  textInside: boolean
  width: number
  showText: boolean
  color: string | Array<string | { color: string; percentage: number }> | ProgressFuncType
  format: ProgressFuncType
}
