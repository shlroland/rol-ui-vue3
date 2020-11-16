import { AnyFunction } from '@rol-ui/utils/types'
import { ComputedRef } from 'vue'

export interface RPagination {
  currentPage?: ComputedRef<number>
  pageCount?: ComputedRef<number>
  disabled?: ComputedRef<boolean>
  changeEvent?: AnyFunction<any>
  handleSizesChange?: AnyFunction<any>
}

export interface RPaginationProps {
  pageSize: number
  small: boolean
  total: number
  pageCount: number
  pagerCount: number
  currentPage: number
  layout: Record<string, string | undefined>
  pageSizes: Array<number>
  popperClass: string
  prevText: string
  nextText: string
  background: boolean
  disabled: boolean
  hideOnSinglePage: boolean
}

export interface RPaginationSetups {
  currentPage: number
  pageCount: number
  pagerCount: number
  disabled: boolean
  pageSizes: Array<number>
}
