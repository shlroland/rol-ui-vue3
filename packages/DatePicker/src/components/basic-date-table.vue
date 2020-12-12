<template>
  <table :class="['rol-date-table', { 'is-week-mode': selectionMode === 'week' }]">
    <tbody>
      <tr>
        <th v-if="showWeekNumber">{{ '周次' }}</th>
        <th v-for="(week, key) in WEEKS" :key="key">{{ WEEKLIST[week] }}</th>
      </tr>
      <!--      <tr v-for="(row, key) in rows"></tr>-->
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, reactive, ref } from 'vue'
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
    const firstDayOfWeek = (props.date as Dayjs).$locale().weekStart || 7
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
      const startDayofMonth = props.date.startOf('month')
      return startDayofMonth.subtract(startDayOfMonth.day() || 7, 'day')
    })

    const offsetDay = computed(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek
    })
    const rows = computed(() => {
      const startOfMonth = (props.date as Dayjs).startOf('month')
      const startOfMonthDay = startOfMonth.day() || 7
      const dateCountOfMonth = startOfMonth.daysInMonth()
      const dateCountOfLastMonth = startOfMonth.subtract(1, 'month')

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
        // for (let j = 0;j < 7;j++) {
        //
        // }
      }
    })

    return {
      WEEKS,
      WEEKLIST,
    }
  },
}
</script>

<style lang="scss" scoped></style>
