<template>
  <transition name="rol-zoom-in-top">
    <div v-if="visible" ref="popperRef" class="rol-time-panel">
      <div class="rol-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          :role="datetimeRole || 'start'"
          :arrow-control="arrowControl"
          :am-pm-mode="amPmMode"
          :spinner-date="parsedValue"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
          @change="handleChange"
        ></time-spinner>
      </div>
      <div class="rol-time-panel__footer">
        <button class="rol-time-panel__btn cancel">取消</button>
        <button class="rol-time-panel__btn confirm">确认</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, watch } from 'vue'
import type { Dayjs } from 'dayjs'
import TimeSpinner from './time-spinner.vue'
import { PICKER_BASE_PROVIDER } from './common/constant'
import { getAvaliableArrs } from './useTimePicker'

export default defineComponent({
  name: 'PanelTimePicker',
  components: { TimeSpinner },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    datetimeRole: {
      type: String,
    },
    parsedValue: {
      type: [Object, String],
    },
    format: {
      type: String,
      default: '',
    },
    getPoppperRef: {
      type: Function,
    },
  },
emits: ['pick'],
  setup(props, { emit }) {
    const popperRef = ref<HTMLElement>(null)
    const { arrowControl, disabledHours, disabledMinutes, disabledSeconds, defaultValue } = inject(
      PICKER_BASE_PROVIDER,
    ) as any

    const { getAvaliableHours, getAvaliableMinutes, getAvaliableSeconds } = getAvaliableArrs(
      disabledHours,
      disabledMinutes,
      disabledSeconds,
    )

    const showSeconds = computed(() => {
      return props.format.includes('ss')
    })

    const amPmMode = computed(() => {
      if (props.format.includes('A')) return 'A'
      if (props.format.includes('a')) return 'a'
      return ''
    })

    const handleChange = (date: Dayjs) => {
      if (!props.visible) {
        return
      }
      const result = getRangeAvaliableTime(date).millisecond(0)
      emit('pick', result, true)
    }

    const getRangeAvaliableTime = (date: Dayjs) => {
      const avaliableMap = {
        hour: getAvaliableHours,
        minute: getAvaliableMinutes,
        second: getAvaliableSeconds,
      }
      let result = date
      ;['hour', 'minute', 'second'].forEach(_ => {
        if (avaliableMap[_]) {
          let avaliableArr
          const method = avaliableMap[_]
          if (_ === 'minute') {
            avaliableArr = method(result.hour(), props.datetimeRole)
          } else if (_ === 'second') {
            avaliableArr = method(result.hour(), result.minute(), props.datetimeRole)
          } else {
            avaliableArr = method(props.datetimeRole)
          }

          if (avaliableArr && avaliableArr.length && !avaliableArr.includes(result[_]())) {
            result = result[_](avaliableArr[0])
          }
        }
      })
      return result
    }

    watch(popperRef, () => {
      props.getPoppperRef(popperRef.value)
    })

    return {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue,
      showSeconds,
      amPmMode,
      popperRef,
      handleChange,
    }
  },
})
</script>

<style></style>
