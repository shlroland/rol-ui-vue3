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
            @changerange="handleChangeRange"
            @pick="handleRangPick"
            @select="onSelect"
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
            @changerange="handleChangeRange"
            @pick="handleRangPick"
            @select="onSelect"
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
import { computed, defineComponent, inject, PropType, ref, watch } from 'vue'
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
    visible: Boolean,
  },
  emits: ['set-picker-option', 'pick'],
  setup(props, ctx) {
    const { shortcuts, disabledDate, cellClassName, defaultTime, defaultValue, arrowControl, format } = inject(
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

    const formatToString = (value: Dayjs[]) => {
      return value.map(_ => _.format(format))
    }

    const getDefaultValue = () => {
      let start
      if (Array.isArray(defaultValue)) {
        const left = dayjs(defaultValue[0])
        let right = dayjs(defaultValue[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'month')
        }
        return [left, right]
      } else if (defaultValue) {
        start = dayjs(defaultValue)
      } else {
        start = dayjs()
      }
      return [start, start.add(1, 'month')]
    }

    const formatEmit = (emitDayjs: Dayjs, index?) => {
      if (!emitDayjs) return
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index] || defaultTime)
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date())
      }
      return emitDayjs
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const handleChangeRange = val => {
      rangeState.value = val
    }

    const handleRangPick = (val, close = true) => {
      const _minDate = formatEmit(val.minDate, 0)
      const _maxDate = formatEmit(val.maxDate, 1)
      console.log(_minDate, _maxDate)
      if (maxDate.value === _maxDate && minDate.value === _minDate) return
      maxDate.value = _maxDate
      minDate.value = _minDate

      if (!close || showTime.value) return
      handleConfirm()
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    ctx.emit('set-picker-option', ['formatToString', formatToString])

    watch(
      () => props.parsedValue,
      newVal => {
        if (!newVal) {
          minDate.value = null
          maxDate.value = null
        }
        if (newVal && newVal.length === 2) {
          minDate.value = newVal[0]
          maxDate.value = newVal[1]
          leftDate.value = minDate.value
          if (props.unlinkPanels && maxDate.value) {
            const minDateYear = minDate.value.year()
            const minDateMonth = minDate.value.month()
            const maxDateYear = maxDate.value.year()
            const maxDateMonth = maxDate.value.month()
            rightDate.value =
              minDateYear === maxDateYear && minDateMonth === maxDateMonth
                ? maxDate.value.add(1, 'month')
                : maxDate.value
          } else {
            rightDate.value = leftDate.value.add(1, 'month')
          }
        } else {
          const defaultArr = getDefaultValue()
          leftDate.value = defaultArr[0]
          rightDate.value = defaultArr[1]
        }
      },
      { immediate: true },
    )

    watch(
      () => props.visible,
      newVal => {
        if (!newVal && minDate.value && !maxDate.value) {
          const startDate = props.parsedValue[0] ?? dayjs(props.parsedValue[0])
          const endDate = props.parsedValue[1] ?? dayjs(props.parsedValue[1])

          rangeState.value.selecting = false
          rangeState.value.endDate = minDate.value = maxDate.value = dayjs(props.parsedValue[1])
          minDate.value = startDate
          maxDate.value = endDate
        }
      },
    )

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
      handleChangeRange,
      handleRangPick,
      onSelect,
    }
  },
})
</script>

<style scoped></style>
