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
              :disabled-hours="disabledHours"
              :disabled-minutes="disabledMinutes"
              :disabled-seconds="disabledSeconds"
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
              :disabled-hours="disabledHours"
              :disabled-minutes="disabledMinutes"
              :disabled-seconds="disabledSeconds"
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
  setup(props) {
    const minDate = computed(() => props.parsedValue)
    const maxDate = computed(() => props.parsedValue)
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
      showSeconds,
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue,
      amPmMode,
      minDate,
      maxDate,
    }
  },
})
</script>

<style></style>
