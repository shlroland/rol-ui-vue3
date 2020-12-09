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
              :disabled-hours="_disabledHours"
              :disabled-minutes="_disabledMinutes"
              :disabled-seconds="_disabledSeconds"
              @change="handleMinChange"
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
              :disabled-hours="_disabledHours"
              :disabled-minutes="_disabledMinutes"
              :disabled-seconds="_disabledSeconds"
              @change="handleMaxChange"
            ></time-spinner>
          </div>
        </div>
      </div>
      <div class="rol-time-panel__footer">
        <button class="rol-time-panel__btn cancel">取消</button>
        <button class="rol-time-panel__btn confirm">确认</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { PICKER_BASE_PROVIDER } from '@rol-ui/time-picker/src/components/common/constant'
import { Dayjs } from 'dayjs'
import { computed, defineComponent, inject, PropType } from 'vue'
import TimeSpinner from './time-spinner.vue'
import union from 'lodash/union'
// import { getAvaliableArrs } from './useTimePicker'

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
  emits: ['pick'],
  setup(props, { emit }) {
    const minDate = computed(() => props.parsedValue[0] as Dayjs)
    const maxDate = computed(() => props.parsedValue[1] as Dayjs)
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

    // const isValidValue = date => {
    //   const parsedDate = date.map(_ => dayjs(_))
    //   // const result =
    // }

    const _disabledHours = (role, compare: Dayjs) => {
      const defaultDisable = disabledHours ? disabledHours(role) : []
      const isStart = role === 'start'
      const compareDate = compare || (isStart ? maxDate.value : minDate.value)
      const compareHour = compareDate.hour()
      const nextDisable = isStart ? makeSelectRange(compareHour + 1, 23) : makeSelectRange(0, compareHour - 1)
      return union(defaultDisable, nextDisable)
    }

    const _disabledMinutes = (hour, role, compare: Dayjs) => {
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

    const _disabledSeconds = (hour, minute, role, compare) => {
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

    // const { getAvaliableHours, getAvaliableMinutes, getAvaliableSeconds } = getAvaliableArrs(
    //   _disabledHours,
    //   _disabledMinutes,
    //   _disabledSeconds,
    // )
    //
    // const getRangeAvaliableTimeEach = (startDate: Dayjs, endDate: Dayjs, role) => {
    //
    // }

    const handleChange = (minDate, maxDate) => {
      emit('pick', [minDate, maxDate], true)
    }

    const handleMinChange = date => {
      handleChange(date.millisecond(0), maxDate.value)
    }
    const handleMaxChange = date => {
      handleChange(minDate.value, date.millisecond(0))
    }

    return {
      showSeconds,
      arrowControl,
      _disabledHours,
      _disabledMinutes,
      _disabledSeconds,
      defaultValue,
      amPmMode,
      minDate,
      maxDate,
      handleChange,
      handleMinChange,
      handleMaxChange,
    }
  },
})
</script>

<style></style>
