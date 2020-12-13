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

export const limitTimeRange = (date: Dayjs | string | Date, ranges: Dayjs[][], format = 'HH:mm:ss'): Dayjs => {
  const ndate = dayjs(date)
  const nranges = ranges.map(range => range.map(item => dayjs(item)))
  if (ranges.length === 0) return ndate

  if (nranges.some(nrange => ndate.isSameOrAfter(nrange[0]) && ndate.isSameOrBefore(nrange[1]))) {
    return ndate
  }

  let minDate = nranges[0][0]
  let maxDate = nranges[0][0]

  nranges.forEach(nrange => {
    minDate = dayjs(Math.min(nrange[0].valueOf(), minDate.valueOf()))
    maxDate = dayjs(Math.max(nrange[1].valueOf(), minDate.valueOf()))
  })

  const ret = ndate.isSameOrBefore(minDate) ? minDate : maxDate
  ret.year(ndate.year()).month(ndate.year()).date(ndate.date())
  return ret
}

export const timeWithRange = (date: Dayjs | string | Date, ranges: Dayjs[][], format = 'HH:mm:ss') => {
  const limitedDate = limitTimeRange(date, ranges, format)
  return limitedDate.isSame(date)
}

export const datesInMonth = (year, month) => {
  const firstDay = dayjs().startOf('month').month(month).year(year)
  const numOfDays = firstDay.daysInMonth()
  return rangeArr(numOfDays).map(n => firstDay.add(n, 'day').toDate())
}

export const datesInYear = (year: number) => {
  const firstDay = dayjs().startOf('year')
  const numOfDays = dayjs(year).isLeapYear() ? 366 : 365
  return rangeArr(numOfDays).map(n => firstDay.add(n, 'day').toDate())
}
