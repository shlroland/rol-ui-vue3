<template>
  <div class="rol-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <rol-scrollbar
      v-for="item in spinnerItems"
      :key="item"
      :ref="getRefId(item)"
      class="rol-time-spinner__wrapper"
      wrap-style="max-height: inherit;"
      view-class="rol-time-spinner__list"
      noresize
      tag="ul"
      @mousemove="adjustCurrentSpinner(item)"
    >
      <li
        v-for="(disabled, key) in listMap[item].value"
        :key="key"
        class="rol-time-spinner__item"
        :class="{ active: key === timePartsMap[item].value, disabled }"
        @click="handleClick(item, { value: key, disabled })"
      >
        <template v-if="item === 'hours'">
          {{ ('0' + (amPmMode ? key % 12 || 12 : key)).slice(-2) }}{{ getAmPmFlag(key) }}
        </template>
        <template v-else>{{ ('0' + key).slice(-2) }}</template>
      </li>
    </rol-scrollbar>
  </div>
</template>

<script lang="ts">
import {
  ComponentPublicInstance,
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
  watch,
} from 'vue'
import RolScrollbar from '@rol-ui/scrollbar'
import { Dayjs } from 'dayjs'
import { getTimeLists } from './useTimePicker'
import { off, on } from '@rol-ui/utils/dom'
import { rafThrottle } from '@rol-ui/utils/util'

export default defineComponent({
  name: 'TimeSpinner',
  components: {
    RolScrollbar,
  },
  props: {
    role: {
      type: String,
      required: true,
    },
    spinnerDate: {
      type: Dayjs,
      required: true,
    },
    showSeconds: {
      type: Boolean,
      default: true,
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '', // 'a': am/pm; 'A': AM/PM
    },
    disabledHours: {
      type: Function,
    },
    disabledMinutes: {
      type: Function,
    },
    disabledSeconds: {
      type: Function,
    },
  },
  emits: ['change', 'select-range'],
  setup(props, { emit }) {
    const currentScrollbar = ref(null)
    const listHoursRef: Ref<Nullable<ComponentPublicInstance>> = ref(null)
    const listMinutesRef: Ref<Nullable<ComponentPublicInstance>> = ref(null)
    const listSecondsRef: Ref<Nullable<ComponentPublicInstance>> = ref(null)
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef,
    }

    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(
      props.disabledHours,
      props.disabledMinutes,
      props.disabledSeconds,
    )

    const spinnerItems = computed(() => {
      const arr = ['hours', 'minutes', 'seconds']
      return props.showSeconds ? arr : arr.slice(0, 2)
    })
    const hours = computed(() => {
      return props.spinnerDate.hour()
    })
    const minutes = computed(() => {
      return props.spinnerDate.minute()
    })
    const seconds = computed(() => {
      return props.spinnerDate.second()
    })

    const hoursList = computed(() => {
      return getHoursList(props.role)
    })

    const minutesList = computed(() => {
      return getMinutesList(hours.value, props.role)
    })
    const secondsList = computed(() => {
      return getSecondsList(hours.value, minutes.value, props.role)
    })

    const timePartsMap = computed(() => ({
      hours,
      minutes,
      seconds,
    }))

    const listMap = computed(() => ({
      hours: hoursList,
      minutes: minutesList,
      seconds: secondsList,
    }))

    const typeItemHeight = (type: string) => {
      const el = listRefsMap[type]
      return el.value.$el.querySelector('li').offsetHeight
    }

    const scrollBarHeight = (type: string) => {
      return listRefsMap[type].value.$el.offsetHeight
    }

    const getAmPmFlag = (hour: number) => {
      let shouldShowAmPm = !!props.amPmMode
      if (!shouldShowAmPm) return ''
      let isCapital = props.amPmMode === 'A'
      let content = hour < 12 ? ' am' : ' pm'
      if (isCapital) content = content.toUpperCase()
      return content
    }

    const getRefId = (item: string) => {
      return `list${item.charAt(0).toUpperCase() + item.slice(1)}Ref`
    }

    const emitSelectRange = (type: string) => {
      if (type === 'hours') {
        emit('select-range', 0, 2)
      } else if (type === 'minutes') {
        emit('select-range', 3, 5)
      } else if (type === 'seconds') {
        emit('select-range', 6, 8)
      }
      currentScrollbar.value = type
    }

    const adjustSpinner = (type: string, value) => {
      if (props.arrowControl) return
      const el = listRefsMap[type] as Ref<ComponentPublicInstance>
      if (el.value) {
        const dom = el.value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement
        const scrollTop = value * typeItemHeight(type)
        dom.scrollTop = Math.max(0, scrollTop)
      }
    }

    const adjustCurrentSpinner = (type: string) => {
      adjustSpinner(type, timePartsMap.value[type].value)
    }

    const adjustSpinners = () => {
      adjustCurrentSpinner('hours')
      adjustCurrentSpinner('minutes')
      adjustCurrentSpinner('seconds')
    }

    const modifyDateField = (type, value) => {
      const list = listMap.value[type].value
      const isDisabled = list[value]
      if (isDisabled) return
      switch (type) {
        case 'hours':
          emit('change', props.spinnerDate.hour(value).minute(minutes.value).second(seconds.value))
          break
        case 'minutes':
          emit('change', props.spinnerDate.hour(hours.value).minute(value).second(seconds.value))
          break
        case 'seconds':
          emit('change', props.spinnerDate.hour(hours.value).minute(minutes.value).second(value))
          break
      }
    }

    const handleClick = (type: string, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value)
        adjustSpinner(type, value)
        emitSelectRange(type)
      }
    }

    const handleScroll = rafThrottle((type: string) => {
      const value = Math.min(
        Math.round(
          (listRefsMap[type].value.$el.querySelector('.rol-scrollbar__wrap').scrollTop -
            (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) +
            3) /
            typeItemHeight(type),
        ),
        type === 'hours' ? 23 : 59,
      )
      modifyDateField(type, value)
    })

    const bindScrollEvent = () => {
      const hoursScroll = () => handleScroll('hours')
      const minutesScroll = () => handleScroll('minutes')
      const secondsScroll = () => handleScroll('seconds')

      on(listRefsMap['hours'].value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement, 'scroll', hoursScroll)
      on(listRefsMap['minutes'].value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement, 'scroll', minutesScroll)
      on(listRefsMap['seconds'].value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement, 'scroll', secondsScroll)

      return () => {
        off(listRefsMap['hours'].value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement, 'scroll', hoursScroll)
        off(
          listRefsMap['minutes'].value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement,
          'scroll',
          minutesScroll,
        )
        off(
          listRefsMap['seconds'].value.$el.querySelector('.rol-scrollbar__wrap') as HTMLElement,
          'scroll',
          secondsScroll,
        )
      }
    }

    const unbindScrollEvent = ref(null)

    onMounted(() => {
      nextTick(() => {
        if (!props.arrowControl) {
          unbindScrollEvent.value = bindScrollEvent()
        }
        adjustSpinners()
        if (props.role === 'start') emitSelectRange('hours')
      })
    })

    onBeforeUnmount(() => {
      unbindScrollEvent.value && unbindScrollEvent.value?.()
    })

    watch(() => props.spinnerDate, adjustSpinners)

    return {
      timePartsMap,
      listMap,
      spinnerItems,
      getAmPmFlag,
      getRefId,
      handleClick,
      listHoursRef,
      listMinutesRef,
      listSecondsRef,
      listRefsMap,
      adjustCurrentSpinner,
      emitSelectRange,
    }
  },
})
</script>

<style></style>
