import dayjs, { Dayjs } from 'dayjs'
import { rangeArr } from './time-utils'

export const DEFAULT_FORMATS_TIME = 'HH:mm:ss'
export const DEFAULT_FORMATS_DATE = 'YYYY-MM-DD'
export const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  week: 'gggg[w]ww',
  year: 'YYYY',
  month: 'YYYY-MM',
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: 'YYYY-MM',
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
}

export const PICKER_BASE_PROVIDER = 'pickerBaseProvider'


export const months = {
  month1: '1 月',
  month2: '2 月',
  month3: '3 月',
  month4: '4 月',
  month5: '5 月',
  month6: '6 月',
  month7: '7 月',
  month8: '8 月',
  month9: '9 月',
  month10: '10 月',
  month11: '11 月',
  month12: '12 月',
}
