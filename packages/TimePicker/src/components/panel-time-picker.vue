<template>
  <transition :name="transitionName">
    <div v-if="actualVisible || visible" ref="popperRef" class="rol-time-panel">
      <div class="rol-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          :role="datetimeRole"
          :arrow-control="arrowControl"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          :spinner-date="parsedValue"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
          @change="handleChange"
          @set-option="onSetOption"
          @select-range="setSelectionRange"
        ></time-spinner>
      </div>
      <div class="rol-time-panel__footer">
        <button class="rol-time-panel__btn cancel" @click="handleCancel">取消</button>
        <button class="rol-time-panel__btn confirm" @click="() => handleConfirm(false)">确认</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import TimeSpinner from './time-spinner.vue'
import { PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'
import { getAvaliableArrs } from './useTimePicker'
import { EVENT_CODE } from '@rol-ui/utils/aria'

export default defineComponent({
  name: 'PanelTimePicker',
  components: { TimeSpinner },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    actualVisible: {
      type: Boolean,
      default: undefined,
    },
    datetimeRole: {
      type: String,
      default: 'start',
    },
    parsedValue: {
      type: [Object, String],
    },
    format: {
      type: String,
      default: '',
    },
    getPopperRef: {
      type: Function,
    },
  },
  emits: ['pick', 'select-range', 'set-picker-option'],
  setup(props, { emit }) {
    const popperRef = ref<HTMLElement>(null)
    const oldValue = ref(props.parsedValue)
    const selectionRange = ref([0, 2])
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

    const transitionName = computed(() => {
      return props.actualVisible === undefined ? 'rol-zoom-in-top' : ''
    })

    const handleChange = (date: Dayjs) => {
      if (!props.visible) {
        return
      }
      const result = getRangeAvaliableTime(date).millisecond(0)
      emit('pick', result, true)
    }

    const handleCancel = () => {
      emit('pick', oldValue.value, false)
    }

    const handleConfirm = (visible = false, first?) => {
      if (first) return
      emit('pick', props.parsedValue, visible)
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

    const timePickerOptions = {} as any

    const onSetOption = e => {
      timePickerOptions[e[0]] = e[1]
    }
    const setSelectionRange = (start, end) => {
      emit('select-range', start, end)
      selectionRange.value = [start, end]
    }

    const changeSelectRange = step => {
      const list = [0, 3].concat(showSeconds.value ? [6] : [])
      const mapping = ['hours', 'minutes'].concat(showSeconds.value ? ['seconds'] : [])
      const index = list.indexOf(selectionRange.value[0])
      const next = (index + step + list.length) % list.length
      timePickerOptions['start_emitSelectRange'](mapping[next])
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const code = event.code

      if (code === EVENT_CODE.left || code === EVENT_CODE.right) {
        const step = code === EVENT_CODE.left ? -1 : 1
        changeSelectRange(step)
        event.preventDefault()
        return
      }

      if (code === EVENT_CODE.up || code === EVENT_CODE.down) {
        const step = code === EVENT_CODE.up ? -1 : 1
        const name = `${props.datetimeRole}_scrollDown`
        timePickerOptions[name](step)
        event.preventDefault()
        return
      }
    }

    const parseUserInput = value => {
      if (!value) return null
      return dayjs(value, props.format)
    }

    const formatToString = value => {
      if (!value) return null
      return value.format(props.format)
    }

    const getDefaultValue = () => {
      return dayjs(defaultValue)
    }

    const isValidValue = date => {
      const parsedDate = dayjs(date)
      const result = getRangeAvaliableTime(parsedDate)
      return parsedDate.isSame(result)
    }
    emit('set-picker-option', ['isValidValue', isValidValue])
    emit('set-picker-option', ['formatToString', formatToString])
    emit('set-picker-option', ['parseUserInput', parseUserInput])
    emit('set-picker-option', ['handleKeydown', handleKeydown])
    emit('set-picker-option', ['getRangeAvaliableTime', getRangeAvaliableTime])
    emit('set-picker-option', ['getDefaultValue', getDefaultValue])

    // const comVisible = computed(() => {
    //   return props.visible
    // })
    // watch([popperRef, comVisible], () => {
    //   if (popperRef.value) {
    //     props.getPopperRef(popperRef.value)
    //   }
    // })

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
      onSetOption,
      setSelectionRange,
      transitionName,
      handleCancel,
      handleConfirm,
    }
  },
})
</script>

<style></style>
