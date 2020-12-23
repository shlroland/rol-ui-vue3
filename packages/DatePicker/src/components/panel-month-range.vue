<template>
  <div :class="['rol-picker-panel rol-date-range-picker', { 'has-sidebar': $slots.sidebar }]">
    <div class="rol-picker-panel__body-wrapper">
      <slot name="sidebar" class="rol-picker-panel__sidebar"></slot>
      <div v-if="hasShortcuts" class="rol-picker-panel__sidebar">
        <button
          v-for="(shortcut, key) in shortcuts"
          :key="key"
          type="button"
          class="rol-picker-panel__shortcut"
          @click="handleShortcutClick(shortcut)"
        >
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
              class="rol-picker-panel__icon-btn arrow-right"
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
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
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
            @changerange="handleChangeRange"
            @pick="handleRangePick"
            @select="onSelect"
          ></month-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Dayjs } from 'dayjs/esm'
import dayjs from 'dayjs/esm'
import { computed, defineComponent, inject, PropType, ref, watch } from 'vue'
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
    visible: Boolean,
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

    const handleChangeRange = val => {
      rangeState.value = val
    }

    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate
      const maxDate_ = val.maxDate
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return
      }
      maxDate.value = maxDate_
      minDate.value = minDate_

      if (!close) return
      handleConfirm()
    }

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        ctx.emit('pick', [dayjs(shortcut.value[0]), dayjs(shortcut.value[1])])
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const onSelect = selecting => {
      rangeState.value.selecting = selecting
      if (!selecting) {
        rangeState.value.endDate = null
      }
    }

    const handleConfirm = (visible = false) => {
      if (isValidValue([minDate.value, maxDate.value])) {
        ctx.emit('pick', [minDate.value, maxDate.value], visible)
      }
    }

    const isValidValue = value => {
      return Array.isArray(value) && value && value[0] && value[1] && value[0].valueOf() <= value[1].valueOf()
    }

    const formatToString = value => {
      return value.map(_ => _.format(format))
    }

    const getDefaultValue = () => {
      let start
      if (Array.isArray(defaultValue)) {
        const left = dayjs(defaultValue[0])
        let right = dayjs(defaultValue[1])
        if (!props.unlinkPanels) {
          right = left.add(1, 'year')
        }
        return [left, right]
      } else if (defaultValue) {
        start = dayjs(defaultValue)
      } else {
        start = dayjs()
      }
      return [start, start.add(1, 'year')]
    }

    ctx.emit('set-picker-option', ['formatToString', formatToString])

    watch(
      () => props.parsedValue,
      newVal => {
        if (newVal && newVal.length === 2) {
          minDate.value = newVal[0]
          maxDate.value = newVal[1]
          leftDate.value = minDate.value
          if (props.unlinkPanels && maxDate.value) {
            const minDateYear = minDate.value.year()
            const maxDateYear = maxDate.value.year()
            rightDate.value = minDateYear === maxDateYear ? maxDate.value.add(1, 'year') : maxDate.value
          } else {
            rightDate.value = leftDate.value.add(1, 'year')
          }
        } else {
          const defaultArr = getDefaultValue()
          leftDate.value = defaultArr[0]
          rightDate.value = defaultArr[1]
        }
      },
      {
        immediate: true,
      },
    )

    watch(
      () => props.visible,
      newVal => {
        if (!newVal && minDate.value && !maxDate.value) {
          const startDate = props.parsedValue[0] ?? dayjs(props.parsedValue[0])
          const endDate = props.parsedValue[1] ?? dayjs(props.parsedValue[1])

          rangeState.value.selecting = false
          rangeState.value.endDate = null
          minDate.value = startDate
          maxDate.value = endDate
        }
      },
    )

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
      handleChangeRange,
      handleRangePick,
      onSelect,
      handleShortcutClick,
    }
  },
})
</script>

<style scoped></style>
