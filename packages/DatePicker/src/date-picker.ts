import { DEFAULT_FORMATS_DATE, DEFAULT_FORMATS_DATEPICKER } from '@rol-ui/utils/time-constant'
import { CommonPicker } from '@rol-ui/time-picker'
import { defineComponent, h } from 'vue'
import DatePickerPanel from './components/panel-date-picker.vue'
import DateRangePicker from './components/panel-date-range.vue'
import MonthRangePickPanel from './components/panel-month-range.vue'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(localeData)
dayjs.extend(isLeapYear)
dayjs.extend(advancedFormat)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

const getPanel = (type: string) => {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePicker
  } else if (type === 'monthrange') {
    return MonthRangePickPanel
  }
  return DatePickerPanel
}

export default defineComponent({
  name: 'RolDatePicker',
  props: {
    type: {
      type: String,
      default: 'date',
    },
  },
  setup(props) {
    const format = DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE
    return () =>
      h(
        CommonPicker,
        {
          format,
          type: props.type,
          ...props,
        },
        {
          default: scopedProps => h(getPanel(props.type), scopedProps),
        },
      )
  },
})
