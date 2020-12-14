import dayjs, { Dayjs } from 'dayjs'

export const rangeArr = n => {
  return Array.from(Array(n).keys())
}

export const extractDateFormat = (format: string) => {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim()
}

export const extractTimeFormat = format => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, '').trim()
}

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
