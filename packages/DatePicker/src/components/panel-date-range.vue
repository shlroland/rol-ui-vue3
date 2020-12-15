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
            <button type="button" class="rol-picker-panel__icon-btn arrow-left" @click="leftPrevYear">
              <rol-icon name="angle-double-left"></rol-icon>
            </button>
            <button type="button" class="rol-picker-panel__icon-btn arrow-left" @click="leftPrevMonth">
              <rol-icon name="angle-left"></rol-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              class="rol-picker-panel__icon-btn arrow-right"
              :class="{ 'is-disabled': !enableYearArrow }"
              :disabled="!enableYearArrow"
              @click="leftNextYear"
            >
              <rol-icon name="angle-double-right"></rol-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              class="rol-picker-panel__icon-btn arrow-right"
              :class="{ 'is-disabled': !enableMonthArrow }"
              :disabled="!enableMonthArrow"
              @click="leftNextMonth"
            >
              <rol-icon name="angle-right"></rol-icon>
            </button>
            <div>{{ leftLabel }}</div>
          </div>
          <date-table
            selection-mode="range"
            :date="leftDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
          ></date-table>
        </div>
        <div class="rol-picker-panel__content rol-date-range-picker__content is-right">
          <div class="rol-date-range-picker__header">
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableYearArrow"
              :class="[
                'rol-picker-panel__icon-btn arrow-left',
                {
                  'is-disabled': !enableYearArrow,
                },
              ]"
              @click="rightPrevYear"
            >
              <rol-icon name="angle-double-left"></rol-icon>
            </button>
            <button
              v-if="unlinkPanels"
              type="button"
              :disabled="!enableMonthArrow"
              :class="[
                'rol-picker-panel__icon-btn arrow-left',
                {
                  'is-disabled': !enableMonthArrow,
                },
              ]"
              @click="rightPrevMonth"
            >
              <rol-icon name="angle-left"></rol-icon>
            </button>
            <button type="button" class="rol-picker-panel__icon-btn arrow-right" @click="rightNextYear">
              <rol-icon name="angle-double-right"></rol-icon>
            </button>
            <button type="button" class="rol-picker-panel__icon-btn arrow-right" @click="rightNextMonth">
              <rol-icon name="angle-right"></rol-icon>
            </button>
            <div>{{ rightLabel }}</div>
          </div>
          <date-table
            selection-mode="range"
            :date="rightDate"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            :cell-class-name="cellClassName"
          ></date-table>
        </div>
      </div>
    </div>
    <div v-if="showTime" class="rol-picker-panel__footer">
      <rol-button size="small" type="text" class="rol-picker-panel__link-btn">清空</rol-button>
      <rol-button size="small" light class="rol-picker-panel__link-btn" :disabled="btnDisabled">确定</rol-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { OutSideClick } from '@rol-ui/directives'
import { months, PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'
import DateTable from './basic-date-table.vue'
import RolButton from '@rol-ui/button'
import RolIcon from '@rol-ui/icon'

export default defineComponent({
  name: 'PanelDateRange',
  components: {
    DateTable,
    RolButton,
    RolIcon,
  },
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
    const minDate = ref(null)
    const maxDate = ref(null)
    const rangeState = ref({
      endDate: null,
      selecting: false,
    })

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

    const btnDisabled = computed(() => {
      return !(
        minDate.value &&
        maxDate.value &&
        !rangeState.value.selecting &&
        isValidValue([minDate.value, maxDate.value])
      )
    })

    const isValidValue = value => {
      return Array.isArray(value) && value && value[0] && value[1] && value[0].valueOf() <= value[1].valueOf()
    }

    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, 'year')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, 'month')
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, 'month')
      }
    }

    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'year')
        rightDate.value = leftDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'year')
      }
    }

    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, 'month')
        rightDate.value = rightDate.value.add(1, 'month')
      } else {
        rightDate.value = rightDate.value.add(1, 'month')
      }
    }

    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, 'year')
    }

    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, 'month')
    }

    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, 'year')
    }

    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, 'month')
    }

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
      leftDate,
      rightDate,
      minDate,
      maxDate,
      rangeState,
      enableYearArrow,
      enableMonthArrow,
      btnDisabled,
      leftPrevYear,
      leftPrevMonth,
      rightNextYear,
      rightNextMonth,
      leftNextYear,
      leftNextMonth,
      rightPrevYear,
      rightPrevMonth,
    }
  },
})
</script>

<style scoped></style>
