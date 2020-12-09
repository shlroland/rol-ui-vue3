<template>
  <transition name="rol-zoom-in-top">
    <div v-if="visible" class="rol-time-range-picker rol-picker-panel">
      <div class="rol-time-range-picker__content">
        <div class="rol-time-range-picker__cell">
          <div class="rol-time-range-picker__header"> 开始时间</div>
          <div
            :class="[
              'rol-time-range-picker__body rol-time-panel__content',
              {
                'has-seconds': showSeconds,
                'is-arrow': arrowControl,
              },
            ]"
          >
            <time-spinner
              ref="minSpinner"
              role="start"
              :show-seconds="showSeconds"
              :arrow-control="arrowControl"
              :am-pm-mode="amPmMode"
              :spinner-date="minDate"
              :disabled-hours="disabledHours_"
              :disabled-minutes="disabledMinutes_"
              :disabled-seconds="disabledSeconds_"
              @change="handleMinChange"
              @set-option="onSetOption"
              @select-range="setMinSelectionRange"
            >
            </time-spinner>
          </div>
        </div>
        <div class="rol-time-range-picker__cell">
          <div class="rol-time-range-picker__header"> 结束时间</div>
          <div
            :class="[
              'rol-time-range-picker__body rol-time-panel__content',
              {
                'has-seconds': showSeconds,
                'is-arrow': arrowControl,
              },
            ]"
          >
            <time-spinner
              ref="maxSpinner"
              role="end"
              :show-seconds="showSeconds"
              :am-pm-mode="amPmMode"
              :arrow-control="arrowControl"
              :spinner-date="maxDate"
              :disabled-hours="disabledHours_"
              :disabled-minutes="disabledMinutes_"
              :disabled-seconds="disabledSeconds_"
              @change="handleMaxChange"
              @set-option="onSetOption"
              @select-range="setMaxSelectionRange"
            ></time-spinner>
          </div>
        </div>
      </div>
      <div class="rol-time-panel__footer">
        <button class="rol-time-panel__btn cancel" @click="handleCancel">取消</button>
        <button class="rol-time-panel__btn confirm" @click="handleConfirm">确认</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { PICKER_BASE_PROVIDER } from '@rol-ui/time-picker/src/components/common/constant'
import dayjs, { Dayjs } from 'dayjs'
import { computed, defineComponent, inject, PropType, ref } from 'vue'
import TimeSpinner from './time-spinner.vue'
import union from 'lodash/union'
import { getAvaliableArrs } from './useTimePicker'
import { EVENT_CODE } from '@rol-ui/utils/aria'

const makeSelectRange = (start, end) => {
  const result = []
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

export default defineComponent({
  name: 'PanelTimeRange',
  components: {
    TimeSpinner,
  },
  props: {
    visible: {
      type: [Boolean],
      default: false,
    },
    parsedValue: {
      type: [Array, String] as PropType<string | Array<Dayjs>>,
    },
    format: {
      type: String,
      default: '',
    },
  },
  emits: ['pick', 'set-picker-option', 'select-range'],
  setup(props, { emit }) {
    const minDate = computed(() => props.parsedValue[0] as Dayjs)
    const maxDate = computed(() => props.parsedValue[1] as Dayjs)
    const oldValue = ref(props.parsedValue)
    const selectionRange = ref([0, 2])
    const offset = computed(() => (showSeconds.value ? 11 : 8))

    const { arrowControl, disabledHours, disabledMinutes, disabledSeconds, defaultValue } = inject(
      PICKER_BASE_PROVIDER,
    ) as any

    const showSeconds = computed(() => {
      return props.format.includes('ss')
    })

    const amPmMode = computed(() => {
      if (props.format.includes('A')) return 'A'
      if (props.format.includes('a')) return 'a'
      return ''
    })

    const isValidValue = date => {
      const parsedDate = date.map(_ => dayjs(_))
      const result = getRangeAvaliableTime(parsedDate)
      return parsedDate[0].isSame(result[0]) && parsedDate[1].isSame(result[1])
    }

    const disabledHours_ = (role, compare: Dayjs) => {
      const defaultDisable = disabledHours ? disabledHours(role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      const nextDisable = isStart ? makeSelectRange(compareHour + 1, 23) : makeSelectRange(0, compareHour - 1)
      return union(defaultDisable, nextDisable)
    }

    const disabledMinutes_ = (hour, role, compare: Dayjs) => {
      const defaultDisable = disabledMinutes ? disabledMinutes(hour, role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      if (hour !== compareDate.hour()) {
        return defaultDisable
      }
      const compareMinute = compareDate.minute()
      const nextDisable = isStart ? makeSelectRange(compareMinute + 1, 59) : makeSelectRange(0, compareMinute - 1)
      return union(defaultDisable, nextDisable)
    }

    const disabledSeconds_ = (hour, minute, role, compare) => {
      const defaultDisable = disabledMinutes ? disabledSeconds(hour, minute, role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      const compareMinute = compareDate.minute()
      if (hour !== compareHour || minute !== compareMinute) {
        return defaultDisable
      }
      const compareSecond = compareDate.second()
      const nextDisable = isStart ? makeSelectRange(compareSecond + 1, 59) : makeSelectRange(0, compareSecond - 1)
      return union(defaultDisable, nextDisable)
    }

    const { getAvaliableHours, getAvaliableMinutes, getAvaliableSeconds } = getAvaliableArrs(
      disabledHours_,
      disabledMinutes_,
      disabledSeconds_,
    )

    const getRangeAvaliableTime = (dates: Dayjs[]) => {
      return dates.map((_, index) => getRangeAvaliableTimeEach(dates[0], dates[1], index === 0 ? 'start' : 'end'))
    }

    const getRangeAvaliableTimeEach = (startDate: Dayjs, endDate: Dayjs, role) => {
      const avaliableMap = {
        hour: getAvaliableHours,
        minute: getAvaliableMinutes,
        second: getAvaliableSeconds,
      }
      const isStart = role === 'start'
      let result = isStart ? startDate : endDate
      const compareDate = isStart ? endDate : startDate
      ;['hour', 'minute', 'second'].forEach(_ => {
        if (avaliableMap[_]) {
          let avaliableArr
          const method = avaliableMap[_]
          if (_ === 'minute') {
            avaliableArr = method(result.hour(), role, compareDate)
          } else if (_ === 'second') {
            avaliableArr = method(result.hour(), result.minute(), role, compareDate)
          } else {
            avaliableArr = method(role, compareDate)
          }
          if (avaliableArr && avaliableArr.length && !avaliableArr.includes(result[_]())) {
            const pos = isStart ? 0 : avaliableArr.length - 1
            result = result[_](avaliableArr[pos])
          }
        }
      })
      return result
    }

    const formatToString = value => {
      if (!value) return null
      if (Array.isArray(value)) {
        return value.map(_ => _.format(props.format))
      }
      return value.format(props.format)
    }

    const parseUserInput = value => {
      if (!value) return null
      if (Array.isArray(value)) {
        return value.map(_ => dayjs(_, props.format))
      }
      return dayjs(value, props.format)
    }

    const getDefaultValue = () => {
      if (Array.isArray(defaultValue)) {
        return defaultValue.map(_ => dayjs(_))
      }
      return [dayjs(defaultValue), dayjs(defaultValue).add(60, 'm')]
    }

    const changeSelectionRange = step => {
      const list = showSeconds.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11]
      const mapping = ['hours', 'minutes'].concat(showSeconds.value ? ['seconds'] : [])
      const index = list.indexOf(selectionRange.value[0])
      const next = (index + step + list.length) % list.length
      const half = list.length / 2
      if (next < half) {
        timePickerOptions['start_emitSelectRange'](mapping[next])
      } else {
        timePickerOptions['end_emitSelectRange'](mapping[next - half])
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const code = event.code
      if (code === EVENT_CODE.left || code === EVENT_CODE.right) {
        const step = code === EVENT_CODE.left ? -1 : 1
        changeSelectionRange(step)
        event.preventDefault()
        return
      }
      if (code === EVENT_CODE.up || code === EVENT_CODE.down) {
        const step = code === EVENT_CODE.up ? -1 : 1
        const role = selectionRange.value[0] < offset.value ? 'start' : 'end'
        timePickerOptions[`${role}_scrollDown`](step)
        event.preventDefault()
        return
      }
    }

    emit('set-picker-option', ['formatToString', formatToString])
    emit('set-picker-option', ['parseUserInput', parseUserInput])
    emit('set-picker-option', ['isValidValue', isValidValue])
    emit('set-picker-option', ['getDefaultValue', getDefaultValue])
    emit('set-picker-option', ['getRangeAvaliableTime', getRangeAvaliableTime])
    emit('set-picker-option', ['handleKeydown', handleKeydown])

    const timePickerOptions = {} as any

    const onSetOption = e => {
      timePickerOptions[e[0]] = e[1]
    }

    const handleChange = (minDate, maxDate) => {
      emit('pick', [minDate, maxDate], true)
    }

    const handleMinChange = date => {
      handleChange(date.millisecond(0), maxDate.value)
    }
    const handleMaxChange = date => {
      handleChange(minDate.value, date.millisecond(0))
    }

    const handleConfirm = (visible = false) => {
      emit('pick', [minDate.value, maxDate.value], visible)
    }

    const handleCancel = () => {
      emit('pick', oldValue.value, null)
    }

    const setMinSelectionRange = (start, end) => {
      emit('select-range', start, end, 'min')
      selectionRange.value = [start, end]
    }

    const setMaxSelectionRange = (start, end) => {
      emit('select-range', start, end, 'max')
      selectionRange.value = [start + offset.value, end + offset.value]
    }

    return {
      showSeconds,
      arrowControl,
      disabledHours_,
      disabledMinutes_,
      disabledSeconds_,
      defaultValue,
      amPmMode,
      minDate,
      maxDate,
      handleChange,
      handleMinChange,
      handleMaxChange,
      handleConfirm,
      handleCancel,
      onSetOption,
      setMinSelectionRange,
      setMaxSelectionRange,
    }
  },
})
</script>

<style></style>
