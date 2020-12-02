import { method } from 'lodash'

const makeList = (total, method, methodFunc) => {
  const arr = []
  const disabledArr = method && (methodFunc() as number[])
  for (let i = 0; i < total; i++) {
    arr[i] = disabledArr ? disabledArr.includes(i) : false
  }

  return arr
}

export const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare?) => {
    return makeList(24, disabledHours, () => disabledHours(role, compare))
  }
  const getMinutesList = (hour, role, compare?) => {
    return makeList(60, disabledMinutes, () => disabledMinutes(hour, role, compare))
  }

  const getSecondsList = (hour, minute, role, compare?) => {
    return makeList(60, disabledSeconds, () => disabledSeconds(hour, minute, role, compare))
  }
  return {
    getHoursList,
    getMinutesList,
    getSecondsList,
  }
}
