<template>
  <div :class="['rol-picker-panel rol-date-range-picker', { 'has-sidebar': $slots.sidebar }]">
    <div class="rol-picker-panel__body-wrapper">
      <slot name="sidebar" class="rol-picker-panel__sidebar"></slot>
      <div v-if="hasShortcuts" class="rol-picker-panel__sidebar">
        <button v-for="(shortcut, key) in shortcuts" :key="key" type="button" class="rol-picker-panel__shortcut">
          {{ shortcut.text }}
        </button>
      </div>
      <div class="rol-picker-panel__body">
        <div class="rol-picker-panel__content rol-date-range-picker__content is-left">
          <div class="rol-date-range-picker__header">
            <button type="button" class="rol-picker-panel__icon-btn arrow-left" @click="leftPrevYear">
              <rol-icon name="angle-double-left"></rol-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="rol-date-picker__icon-btn arrow-right"
              @click="leftNextYear"
            >
              <rol-icon name="angle-double-right"></rol-icon>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <month-table
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
          ></month-table>
        </div>
        <div class="rol-picker-panel__content rol-date-range-picker__content is-right">
          <div class="rol-date-range-picker__header">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="{ 'is-disabled': !enableYearArrow }"
              class="rol-picker-panel__icon-btn arrow-left"
              @click="rightPrevYear"
            >
              <rol-icon name="angle-double-left"></rol-icon>
            </button>
            <button type="button" class="rol-picker-panel__icon-btn arrow-right" @click="rightNextYear">
              <rol-icon name="angle-double-right"></rol-icon>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <month-table
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
          ></month-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs, { Dayjs } from 'dayjs'
import { computed, defineComponent, inject, PropType, ref } from 'vue'
import { PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'
import MonthTable from './basic-month-table.vue'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'PanelMonthRange',
  components: { MonthTable, RolIcon },
  props: {
    unlinkPanels: Boolean,
    parsedValue: {
      type: Array as PropType<Dayjs[]>,
    },
  },
  emits: ['pick', 'set-picker-option'],
  setup(props, ctx) {
    const { shortcuts, disabledDate, format, defaultValue } = inject(PICKER_BASE_PROVIDER) as any
    const leftDate = ref(dayjs())
    const rightDate = ref(dayjs().add(1, 'year'))
    const minDate = ref(null)
    const maxDate = ref(null)

    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

    const leftYear = computed(() => {
      return leftDate.value.year()
    })

    const rightYear = computed(() => {
      return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year()
    })

    const leftLabel = computed(() => {
      return `${leftDate.value.year()}年`
    })

    const rightLabel = computed(() => {
      return `${rightDate.value.year()}年`
    })

    const hasShortcuts = computed(() => !!shortcuts.length)
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1
    })

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = rightDate.value.subtract(1, 'year')
      }
    }

    const rightNextYear = () => {
      rightDate.value = rightDate.value.add(1, 'year')
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
      }
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const rightPrevYear = () => {
      rightDate.value = leftDate.value.subtract(1, 'year')
    }

    return {
      leftDate,
      rightDate,
      hasShortcuts,
      shortcuts,
      disabledDate,
      format,
      defaultValue,
      leftYear,
      rightYear,
      enableYearArrow,
      leftLabel,
      rightLabel,
      minDate,
      maxDate,
      rangeState,
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
    }
  },
})
</script>

<style scoped></style>
