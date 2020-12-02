<template>
  <transition name="rol-zoom-in-top">
    <div v-if="visible" class="rol-time-panel">
      <div class="rol-time-panel__content" :class="{ 'has-seconds': showSeconds }">
        <time-spinner
          ref="spinner"
          role="start"
          :arrow-control="arrowControl"
          :am-pm-mode="amPmMode"
          :spinner-date="parsedValue"
          :disabled-hours="disabledHours"
          :disabled-minutes="disabledMinutes"
          :disabled-seconds="disabledSeconds"
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
import { computed, defineComponent, inject, PropType } from 'vue'
import Dayjs from 'dayjs'
import TimeSpinner from './time-spinner.vue'
import { PICKER_BASE_PROVIDER } from './common/constant'

export default defineComponent({
  name: 'PanelTimePicker',
  components: { TimeSpinner },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    // datetimeRole: {
    //   type: String,
    // },
    parsedValue: {
      type: [Object, String] ,
    },
    format: {
      type: String,
      default: '',
    },
  },
  setup(props) {
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

    return {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue,
      showSeconds,
      amPmMode,
    }
  },
})
</script>

<style></style>
