<template>
  <table :class="['rol-date-table', { 'is-week-mode': selectionMode === 'week' }]">
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
        <td v-for="(cell, key_) in row" :key="key_">
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
import { computed, PropType, reactive, ref, onMounted } from 'vue'
import type { Dayjs } from 'dayjs'
import { coerceTruthyValueToArray } from '@rol-ui/utils/util'
import dayjs from 'dayjs'

const weeks = {
  sun: '日',
  mon: '一',
  tue: '二',
  wed: '三',
  thu: '四',
  fri: '五',
  sat: '六',
}

export default {
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
  setup(props) {
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

    const rows = computed(() => {
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
          let cell = row[props.showWeekNumber ? j + 1 : j]
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
          cell.inRange =
            props.minDate &&
            calTime.isSameOrAfter(props.minDate, 'day') &&
            calTime &&
            calTime.isSameOrAfter(calEndDate, 'day')
          cell.start = props.minDate && calTime.isSame(props.minDate, 'day')
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

    const isWeekActive = cell => {
      if (props.selectionMode !== 'week') return false
      let newDate = props.date.startOf('day')
      if (cell.type === 'prev-month') {
        newDate = newDate.subtract(1, 'month')
      }
      if (cell.type === 'next-month') {
        newDate = newDate.add(1, 'month')
      }
      newDate = newDate.date(parseInt(cell.text, 10))

      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7
        const weekDate = props.parsedValue.subtract(dayOffset, 'day')
        return weekDate.isSame(newDate, 'day')
      }
      return false
    }

    onMounted(() => {
      console.log(rows.value)
    })

    return {
      WEEKS,
      WEEKLIST,
      rows,
      isWeekActive,
    }
  },
}
</script>

<style lang="scss" scoped></style>
