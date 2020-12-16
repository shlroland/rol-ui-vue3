<template>
  <table
    :class="['rol-date-table', { 'is-week-mode': selectionMode === 'week' }]"
    @click="handleClick"
    @mousemove="handleMouseMove"
  >
    <tbody>
      <tr>
        <th v-if="showWeekNumber">{{ '周次' }}</th>
        <th v-for="(week, key) in WEEKS" :key="key">{{ WEEKLIST[week] }}</th>
      </tr>
      <tr
        v-for="(row, key) in rows"
        :key="key"
        :class="[
          'rol-date-table__row',
          {
            current: isWeekActive(row[1]),
          },
        ]"
      >
        <td v-for="(cell, key_) in row" :key="key_" :class="getCellClasses(cell)">
          <div>
            <span>
              {{ cell.text }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, PropType, reactive, ref, defineComponent } from 'vue'
import type { Dayjs } from 'dayjs'
import { coerceTruthyValueToArray } from '@rol-ui/utils/util'
import dayjs from 'dayjs'
import type { DatePickerTableCell } from '../date-picker-types'

const weeks = {
  sun: '日',
  mon: '一',
  tue: '二',
  wed: '三',
  thu: '四',
  fri: '五',
  sat: '六',
}

export default defineComponent({
  name: 'BasicDateTable',
  props: {
    date: {
      type: Object as PropType<Dayjs>,
    },
    minDate: {
      type: Object as PropType<Dayjs>,
    },
    maxDate: {
      type: Object as PropType<Dayjs>,
    },
    parsedValue: {
      type: [Object, Array] as PropType<Dayjs | Dayjs[]>,
    },
    selectionMode: {
      type: String,
      default: 'day',
    },
    showWeekNumber: {
      type: Boolean,
      default: false,
    },
    disabledDate: {
      type: Function,
    },
    cellClassName: {
      type: Function,
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false,
      }),
    },
  },
  emits: ['changerange', 'pick', 'select'],
  setup(props, { emit }) {
    const firstDayOfWeek = (props.date as Dayjs).localeData().firstDayOfWeek() || 7
    const WEEKS_CONSTANT = (props.date as Dayjs)
      .locale('en')
      .localeData()
      .weekdaysShort()
      .map(_ => _.toLowerCase())
    const lastRow = ref(null)
    const lastColumn = ref(null)
    const tableRows = ref([[], [], [], [], [], []])

    const WEEKLIST = reactive(weeks)
    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7)
    })

    const startDate = computed(() => {
      const startDayOfMonth = props.date.startOf('month')
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, 'day')
    })

    const offsetDay = computed(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek
    })

    const rows = computed<DatePickerTableCell[][]>(() => {
      const startOfMonth = (props.date as Dayjs).startOf('month')
      const startOfMonthDay = startOfMonth.day() || 7
      const dateCountOfMonth = startOfMonth.daysInMonth()
      const dateCountOfLastMonth = startOfMonth.subtract(1, 'month').daysInMonth()

      const offset = offsetDay.value
      const _rows = tableRows.value

      let count = 1

      const selectedDate: Dayjs[] = props.selectionMode === 'dates' ? coerceTruthyValueToArray(props.parsedValue) : []

      const calRow = dayjs().startOf('day')

      for (let i = 0; i < 6; i++) {
        const row = _rows[i]
        if (props.showWeekNumber) {
          if (!row[0]) {
            row[0] = {
              type: 'week',
              text: startDate.value.add(i * 7 + 1, 'day').week(),
            }
          }
        }
        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j] as DatePickerTableCell
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
          const index = i * 7 + j
          const calTime = startDate.value.add(index - offset, 'day')
          cell.type = 'normal'
          const calEndDate = props.rangeState.endDate || props.maxDate || (props.rangeState.selecting && props.minDate)

          if (calEndDate >= props.minDate) {
            cell.inRange =
              props.minDate &&
              calTime.isSameOrAfter(props.minDate, 'day') &&
              calTime &&
              calTime.isSameOrBefore(calEndDate, 'day')
            cell.start = props.minDate && calTime.isSame(props.minDate, 'day')
            cell.end = calEndDate && calTime.isSame(calEndDate, 'day')
          } else {
            cell.inRange =
                props.minDate &&
                calTime.isSameOrAfter(calEndDate, 'day') &&
                calTime &&
                calTime.isSameOrBefore(props.minDate, 'day')
            cell.end = props.minDate && calTime.isSame(props.minDate, 'day')
            cell.start = calEndDate && calTime.isSame(calEndDate, 'day')
          }

          const isToday = calTime.isSame(calRow, 'day')

          if (isToday) {
            cell.type = 'today'
          }
          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth =
              startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset

            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - (j % 7)) + 1 + i * 7
              cell.type = 'prev-month'
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++
            } else {
              cell.text = count++ - dateCountOfMonth
              cell.type = 'next-month'
            }
          }
          const cellDate = calTime.toDate()
          cell.selected = selectedDate.find(_ => _.valueOf() === calTime.valueOf())
          cell.disabled = props.disabledDate && props.disabledDate(cellDate)
          cell.customClass = props.cellClassName && props.cellClassName(cellDate)
          row[props.showWeekNumber ? j + 1 : j] = cell
        }

        if (props.selectionMode === 'week') {
          const start = props.showWeekNumber ? 1 : 0
          const end = props.showWeekNumber ? 7 : 6
          const isActive = isWeekActive(row[start + 1])
          row[start].inRange = isActive
          row[start].start = isActive
          row[end].inRange = isActive
          row[end].end = isActive
        }
      }
      return _rows
    })

    const isWeekActive = (cell: DatePickerTableCell) => {
      if (props.selectionMode !== 'week') return false
      let newDate = props.date.startOf('day')
      if (cell.type === 'prev-month') {
        newDate = newDate.subtract(1, 'month')
      }
      if (cell.type === 'next-month') {
        newDate = newDate.add(1, 'month')
      }
      newDate = newDate.date(parseInt(cell.text as string, 10))

      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7
        const weekDate = props.parsedValue.subtract(dayOffset, 'day')
        return weekDate.isSame(newDate, 'day')
      }
      return false
    }

    const cellMatchesDate = (cell: DatePickerTableCell, date: Dayjs) => {
      if (!date) return false
      return dayjs(date).isSame(props.date.date(Number(cell.text)), 'day')
    }

    const getDateOfCell = (row: number, column: number) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value
      return startDate.value.add(offsetFromStart, 'day') as Dayjs
    }

    const getCellClasses = (cell: DatePickerTableCell) => {
      let classes = []
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available')
        if (cell.type === 'today') {
          classes.push('today')
        }
      } else {
        classes.push(cell.type)
      }

      if (
        props.selectionMode === 'day' &&
        (cell.type === 'normal' || cell.type === 'today') &&
        cellMatchesDate(cell, props.parsedValue as Dayjs)
      ) {
        classes.push('current')
      }
      if (cell.inRange && (cell.type === 'normal' || cell.type === 'today' || props.selectionMode === 'week')) {
        classes.push('in-range')

        if (cell.start) {
          classes.push('start-date')
        }

        if (cell.end) {
          classes.push('end-date')
        }
      }
      if (cell.disabled) {
        classes.push('disabled')
      }

      if (cell.selected) {
        classes.push('selected')
      }

      if (cell.customClass) {
        classes.push(cell.customClass)
      }

      return classes.join(' ')
    }

    const handleClick = (event: MouseEvent) => {
      let target = event.target as HTMLTableDataCellElement
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode as HTMLTableDataCellElement
      }

      if (target.tagName === 'DIV') {
        target = target.parentNode as HTMLTableDataCellElement
      }

      if (target.tagName !== 'TD') return

      const row = (target.parentNode as HTMLTableRowElement).rowIndex - 1
      const column = props.selectionMode === 'week' ? 1 : target.cellIndex
      const cell = rows.value[row][column]

      if (cell.disabled || cell.type === 'week') return

      const newDate = getDateOfCell(row, column)

      if (props.selectionMode === 'range') {
        if (!props.rangeState.selecting) {
          emit('pick', { minDate: newDate, maxDate: null })
          emit('select', true)
        } else {
          if (newDate >= props.minDate) {
            emit('pick', { minDate: props.minDate, maxDate: newDate })
          } else {
            emit('pick', { minDate: newDate, maxDate: props.minDate })
          }
          emit('select', false)
        }
      } else if (props.selectionMode === 'day') {
        emit('pick', newDate)
      } else if (props.selectionMode === 'week') {
        const weekNumber = newDate.week()
        const value = newDate.year() + 'w' + weekNumber
        emit('pick', {
          year: newDate.year(),
          week: weekNumber,
          value: value,
          date: newDate,
        })
      } else if (props.selectionMode === 'dates') {
        const newValue = cell.selected
          ? coerceTruthyValueToArray(props.parsedValue).filter(_ => _.valueOf() !== newDate.valueOf())
          : coerceTruthyValueToArray(props.parsedValue).concat([newDate])
        emit('pick', newValue)
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
      const row = (target.parentNode as HTMLTableRowElement).rowIndex - 1
      const column = props.selectionMode === 'week' ? 1 : target.cellIndex

      if (rows.value[row][column].disabled) return
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row
        lastColumn.value = column
        emit('changerange', {
          selecting: true,
          endDate: getDateOfCell(row, column),
        })
      }
    }


    return {
      WEEKS,
      WEEKLIST,
      rows,
      startDate,
      offsetDay,
      isWeekActive,
      getCellClasses,
      handleClick,
      handleMouseMove,
    }
  },
})
</script>

<style lang="scss" scoped></style>
