<template>
  <div class="rol-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <rol-scrollbar
      v-for="item in spinnerItems"
      :key="item"
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
      >
        <template v-if="item === 'hours'">
          {{ ('0' + (amPmMode ? key % 12 || 12 : key)).slice(-2) }}{{ getAmPmFlag(key) }}
        </template>
        <template v-else>
          {{ ('0' + key).slice(-2) }}
        </template>
      </li>
    </rol-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'
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
  setup(props) {
    const curentScrollbar = ref(null)
    const listHoursRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listMinutesRef: Ref<Nullable<HTMLElement>> = ref(null)
    const listSecondsRef: Ref<Nullable<HTMLElement>> = ref(null)
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
      props.spinnerDate.hour()
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

    const getAmPmFlag = (hour: number) => {
      let shouldShowAmPm = !!props.amPmMode
      if (!shouldShowAmPm) return ''
      let isCapital = props.amPmMode === 'A'
      let content = hour < 12 ? ' am' : ' pm'
      if (isCapital) content = content.toUpperCase()
      return content
    }

    return {
      timePartsMap,
      listMap,
      spinnerItems,
      getAmPmFlag,
    }
  },
})
</script>

<style></style>
