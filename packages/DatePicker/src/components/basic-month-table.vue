<template>
  <table class="rol-month-table" @click="handleMonthTableClick" @mousemove="handleMouseMove">
    <tbody>
      <tr v-for="(row, key) in rows" :key="key">
        <td v-for="(cell, key_) in row" :key="key_" :class="getCellStyle(cell)">
          <div>
            <a class="cell">{{ MONTHSLIST[months[cell.text]] }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { DatePickerTableCell } from '../date-picker-types'
import { datesInMonth } from '@rol-ui/utils/time-utils'
import { coerceTruthyValueToArray } from '@rol-ui/utils/util'
import { hasClass } from '@rol-ui/utils/dom'

const monthsList = {
  jan: '一月',
  feb: '二月',
  mar: '三月',
  apr: '四月',
  may: '五月',
  jun: '六月',
  jul: '七月',
  aug: '八月',
  sep: '九月',
  oct: '十月',
  nov: '十一月',
  dec: '十二月',
}

export default defineComponent({
  name: 'BasicMonthTable',
  props: {
    disabledDate: {
      type: Function as PropType<(_: Date) => void>,
    },
    selectionMode: {
      type: String,
      default: 'month',
    },
    minDate: {
      type: Object as PropType<Dayjs>,
    },
    maxDate: {
      type: Object as PropType<Dayjs>,
    },
    date: {
      type: Object as PropType<Dayjs>,
    },
    parsedValue: {
      type: Object as PropType<Dayjs>,
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false,
      }),
    },
  },
  emits: ['pick', 'select', 'changerange'],
  setup(props, ctx) {
    const months = ref(
      props.date
        .locale('en')
        .localeData()
        .monthsShort()
        .map(_ => _.toLowerCase()),
    )
    const tableRows = ref([[], [], []])
    const lastRow = ref(null)
    const lastColumn = ref(null)

    const MONTHSLIST = reactive(monthsList)

    const rows = computed(() => {
      const _rows = tableRows.value
      const now = dayjs().startOf('month')
      for (let i = 0; i < 3; i++) {
        const row = _rows[i]
        for (let j = 0; j < 4; j++) {
          let cell = row[j] as DatePickerTableCell
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: 'normal',
              inRange: false,
              start: false,
              end: false,
            }
          }
          cell.type = 'normal'
          const index = i * 4 + j
          const calTime = props.date.startOf('year').month(index)
          const calEndDate = props.rangeState.endDate || props.maxDate || (props.rangeState.selecting && props.minDate)
          // cell.inRange =
          //   props.minDate &&
          //   calTime.isSameOrAfter(props.minDate, 'month') &&
          //   calEndDate &&
          //   calTime.isSameOrBefore(calEndDate, 'month')
          // cell.start = props.minDate && calTime.isSame(props.minDate, 'month')
          // cell.end = calEndDate && calTime.isSame(calEndDate, 'month')

          if (calEndDate >= props.minDate) {
            cell.inRange =
              props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'month') &&
              calTime &&
              calTime.isSameOrBefore(calEndDate, 'month')
            cell.start = props.minDate && calTime.isSame(props.minDate, 'month')
            cell.end = calEndDate && calTime.isSame(calEndDate, 'month')
          } else {
            cell.inRange =
              props.minDate &&
              calTime.isSameOrAfter(calEndDate, 'month') &&
              calTime &&
              calTime.isSameOrBefore(props.minDate, 'month')
            cell.end = props.minDate && calTime.isSame(props.minDate, 'month')
            cell.start = calEndDate && calTime.isSame(calEndDate, 'month')
          }
          const isToday = now.isSame(calTime)

          if (isToday) {
            cell.type = 'today'
          }
          cell.text = index
          let cellDate = calTime.toDate()
          cell.disabled = ((props.disabledDate && props.disabledDate(cellDate)) as unknown) as boolean
          row[j] = cell
        }
      }
      return _rows
    })

    const getCellStyle = (cell: DatePickerTableCell) => {
      const style = {} as any
      const year = props.date.year()
      const today = dayjs()
      const month = cell.text

      style.disabled = props.disabledDate ? datesInMonth(year, month).every(props.disabledDate) : false
      style.current =
        coerceTruthyValueToArray(props.parsedValue).findIndex(date => date.year() === year && date.month() === month) >=
        0
      style.today = today.year() === year && today.month() === month
      if (cell.inRange) {
        style['in-range'] = true

        if (cell.start) {
          style['start-date'] = true
        }
        if (cell.end) {
          style['end-date'] = true
        }
      }
      return style
    }

    const handleMonthTableClick = (event: MouseEvent) => {
      let target = event.target as HTMLTableDataCellElement
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode as HTMLTableDataCellElement
      }

      if (target.tagName === 'DIV') {
        target = target.parentNode as HTMLTableDataCellElement
      }

      if (target.tagName !== 'TD') return

      if (hasClass(target, 'disabled')) return

      const row = (target.parentNode as HTMLTableRowElement).rowIndex
      const column = target.cellIndex
      const month = row * 4 + column
      const newDate = props.date.startOf('year').month(month)
      if (props.selectionMode === 'range') {
        if (!props.rangeState.selecting) {
          ctx.emit('pick', { minDate: newDate, maxDate: null })
          ctx.emit('select', true)
        } else {
          if (newDate >= props.minDate) {
            ctx.emit('pick', { minDate: props.minDate, maxDate: newDate })
          } else {
            ctx.emit('pick', { minDate: newDate, maxDate: props.minDate })
          }
          ctx.emit('select', false)
        }
      } else {
        ctx.emit('pick', month)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!props.rangeState.selecting) return
      let target = event.target as HTMLTableDataCellElement
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode as HTMLTableDataCellElement
      }

      if (target.tagName === 'DIV') {
        target = target.parentNode as HTMLTableDataCellElement
      }

      if (target.tagName !== 'TD') return

      const row = (target.parentNode as HTMLTableRowElement).rowIndex
      const column = target.cellIndex

      if (rows.value[row][column].disabled) return
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row
        lastColumn.value = column
        ctx.emit('changerange', {
          selecting: true,
          endDate: props.date.startOf('year').month(row * 4 + column),
        })
      }
    }

    return {
      rows,
      MONTHSLIST,
      months,
      getCellStyle,
      handleMonthTableClick,
      handleMouseMove,
    }
  },
})
</script>

<style scoped></style>
