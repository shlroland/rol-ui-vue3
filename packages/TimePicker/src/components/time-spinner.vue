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
    >
      <li
        v-for="(disabled, key) in listMap[item].value"
        :key="key"
        class="rol-time-spinner__item"
        :class="{ active: key === timePartsMap[item].value, disabled }"
        @click="handleClick(item,{ value: key,disabled })"
      >
        <template
          v-if="item === 'hours'"
        >
          {{ ('0' + (amPmMode ? key % 12 || 12 : key)).slice(-2) }}{{ getAmPmFlag(key) }}
        </template>
        <template v-else>{{ ('0' + key).slice(-2) }}</template>
      </li>
    </rol-scrollbar>
  </div>
</template>

<script lang="ts">
import { ComponentPublicInstance, computed, defineComponent, getCurrentInstance, Ref, ref, VNode } from 'vue'
import RolScrollbar from '@rol-ui/scrollbar'
import { Dayjs } from 'dayjs'
import { getTimeLists } from './useTimePicker'

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
  setup(props, { emit }) {
    const currentScrollbar = ref(null)
    const listHoursRef: Ref<Nullable<VNode>> = ref(null)
    const listMinutesRef: Ref<Nullable<VNode>> = ref(null)
    const listSecondsRef: Ref<Nullable<VNode>> = ref(null)
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

    const typeItemHeight = type => {
      const el = listRefsMap[type]
      return el.value.$el.querySelector('li').offsetHeight
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
      console.log(listRefsMap[type])
      if (el.value) {
        el.value.$el.querySelector('.rol-scrollbar__wrap').scrollTop = Math.max(0, value * typeItemHeight(type))
      }
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

    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value)
        adjustSpinner(type, value)
      }
    }

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
    }
  },
})
</script>

<style></style>
