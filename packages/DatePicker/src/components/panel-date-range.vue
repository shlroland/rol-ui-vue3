<template>
  <div
    :class="[
      'rol-picker-panel rol-date-range-picker',
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime,
      },
    ]"
  >
    <div class="rol-picker-panel__body-wrapper">
      <slot name="sidebar" class="rol-picker-panel__sidebar"></slot>
      <div v-if="hasShortcuts" class="rol-picker-panel__sidebar">
        <button v-for="(shortcut, key) in shortcuts" :key="key" type="button" class="rol-picker-panel__shortcut">
          {{ shortcut.text }}
        </button>
      </div>
      <div class="rol-picker-panel__body">
        <div v-if="showTime" class="rol-date-range-picker__time-header">
          <span></span>
        </div>
        <div class="rol-picker-panel__content rol-date-range-picker__content is-left">
          <div class="rol-date-range-picker__header">
            <button type="button" class="rol-picker-panel__icon-btn"></button>
            <button type="button" class="rol-picker-panel__icon-btn"></button>
            <button type="button" class="rol-picker-panel__icon-btn"></button>
            <button type="button" class="rol-picker-panel__icon-btn"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { OutSideClick } from '@rol-ui/directives'
import { months, PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'

export default defineComponent({
  name: 'PanelDateRange',
  directives: { clickoutside: OutSideClick },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array as PropType<Dayjs[]>,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { shortcuts, disabledDate, cellClassName, defaultTime, defaultValue, arrowControl } = inject(
      PICKER_BASE_PROVIDER,
    ) as any

    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'month'))

    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')
    const hasShortcuts = computed(() => !!shortcuts.length)
    const leftLabel = computed(() => {
      return leftDate.value.year() + ' ' + '年' + months['month' + (leftDate.value.month() + 1)]
    })
    const rightLabel = computed(() => {
      return rightDate.value.year() + ' ' + '年' + months['month' + (rightDate.value.month() + 1)]
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const leftMonth = computed(() => {
      return leftDate.value.month()
    })

    const rightYear = computed(() => {
      return rightDate.value.year()
    })

    const rightMonth = computed(() => {
      return rightDate.value.month()
    })

    const enableYearArrow = computed(() => {
      return (
        props.unlinkPanels &&
        rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12
      )
    })

    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0
      return (
        props.unlinkPanels &&
        new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value)
      )
    })

    return {
      shortcuts,
      disabledDate,
      cellClassName,
      defaultTime,
      defaultValue,
      arrowControl,
      hasShortcuts,
      showTime,
      leftYear,
      rightYear,
      leftLabel,
      rightLabel,
      leftMonth,
      rightMonth,
    }
  },
})
</script>

<style scoped></style>
