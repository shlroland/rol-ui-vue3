<template>
  <div
    ref="popperRef"
    :class="[
      'rol-picker-panel rol-date-picker',
      {
        'has-sidebar': $slots.sidebar || hasShortcuts,
        'has-time': showTime,
      },
    ]"
  >
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
        <div v-if="showTime" class="rol-date-picker__time-header">
          <span class="rol-date-picker__editor-wrap">
            <rol-input
              :placeholder="'选择日期'"
              :model-value="visibleDate"
              size="small"
              @input="handleInputDate"
            ></rol-input>
          </span>
          <span class="rol-date-picker__editor-wrap">
            <rol-input
              :placeholder="'选择时间'"
              :model-value="visibleTime"
              size="small"
              @input="handleInputTime"
            ></rol-input>
          </span>
        </div>
        <div
          v-show="currentView !== 'time'"
          :class="[
            'rol-date-picker__header',
            {
              'rol-date-picker__header--bordered': currentView === 'year' || currentView === 'month',
            },
          ]"
        >
          <button type="button" :aria-label="'前一年'" class="rol-picker-panel__icon-btn rol-date-picker__prev-btn">
            <rol-icon name="angle-double-left"></rol-icon>
          </button>
          <button
            v-show="currentView === 'date'"
            type="button"
            :aria-label="'上个月'"
            class="rol-picker-panel__icon-btn rol-date-picker__prev-btn"
          >
            <rol-icon name="angle-left"></rol-icon>
          </button>
          <span role="button" class="rol-date-picker__header-label">{{ yearLabel }}</span>
          <span
            v-show="currentView === 'date'"
            role="button"
            :class="[
              'rol-date-picker__header-label',
              {
                active: currentView === 'month',
              },
            ]"
          >{{ MONTHLIST['month' + (month + 1)] }}</span>
          <button type="button" :aria-label="'后一年'" class="rol-picker-panel__icon-btn rol-date-picker__next-btn">
            <rol-icon name="angle-double-right"></rol-icon>
          </button>
          <button
            v-show="currentView === 'date'"
            type="button"
            :aria-label="'下个月'"
            class="rol-picker-panel__icon-btn rol-date-picker__next-btn"
          >
            <rol-icon name="angle-right"></rol-icon>
          </button>
        </div>
        <div class="rol-picker-panel__content">
          <date-table
            v-if="currentView === 'date'"
            :selection-mode="selectionMode"
            :date="innerDate"
            :parsed-value="parsedValue"
            :disabled-date="disabledDate"
            @pick="handleDatePicker"
          ></date-table>
          <month-table
            v-if="currentView === 'month'"
            :date="innerDate"
            :parsed-value="parsedValue"
            :disabled-date="disabledDate"
            @pick="handleMonthPick"
          ></month-table>
        </div>
      </div>
    </div>
    <div v-show="footerVisible && currentView === 'date'" class="rol-picker-panel__footer">
      <rol-button v-show="selectionMode !== 'dates'" size="small" type="text" class="rol-picker-panel__link-btn">
        此刻
      </rol-button>
      <rol-button size="small" class="rol-picker-panel__link-btn">
        确定
      </rol-button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref, onMounted, reactive, watch } from 'vue'
import RolInput from '@rol-ui/input'
import RolButton from '@rol-ui/button'
import RolIcon from '@rol-ui/icon'
import { PICKER_BASE_PROVIDER, timeWithRange } from '@rol-ui/utils/time-constant'
import dayjs, { Dayjs } from 'dayjs'
import { extractDateFormat, extractTimeFormat } from '@rol-ui/utils/time-utils'
import DateTable from './basic-date-table.vue'
import MonthTable from './basic-month-table.vue'

const months = {
  month1: '1 月',
  month2: '2 月',
  month3: '3 月',
  month4: '4 月',
  month5: '5 月',
  month6: '6 月',
  month7: '7 月',
  month8: '8 月',
  month9: '9 月',
  month10: '10 月',
  month11: '11 月',
  month12: '12 月',
}

export default defineComponent({
  name: 'PanelDatePicker',
  components: {
    RolInput,
    RolButton,
    RolIcon,
    DateTable,
    MonthTable,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    parsedValue: {
      type: [Object, Array] as PropType<Dayjs | Dayjs[]>,
    },
    format: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
    getPopperRef: {
      type: Function,
    },
  },
  emits: ['pick', 'set-picker-option'],
  setup(props, ctx) {
    const { shortcuts, disabledDate, cellClassName, defaultTime, defaultValue, arrowControl } = inject(
      PICKER_BASE_PROVIDER,
    ) as any
    const popperRef = ref<HTMLElement>(null)
    const userInputDate = ref(null)
    const userInputTime = ref(null)
    const innerDate = ref(dayjs())
    const currentView = ref('date')
    const MONTHLIST = reactive(months)
    const selectableRange = ref([])

    const month = computed(() => {
      return innerDate.value.month()
    })
    const year = computed(() => {
      return innerDate.value.year()
    })

    const hasShortcuts = computed(() => !!shortcuts.length)

    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')

    const selectionMode = computed(() => {
      if (['week', 'month', 'year', 'dates'].includes(props.type)) {
        return props.type
      }
      return 'day'
    })

    const yearLabel = computed(() => {
      const yearTranslation = '年'
      if (currentView.value === 'year') {
        const startYear = Math.floor(year.value / 10) * 10
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation
        }
        return startYear + ' - ' + (startYear + 9)
      }
      return year.value + ' ' + yearTranslation
    })

    const dateFormat = computed(() => {
      return extractDateFormat(props.format)
    })

    const timeFormat = computed(() => {
      return extractTimeFormat(props.format)
    })

    const visibleTime = computed(() => {
      if (userInputTime.value) return userInputTime.value
      if (!props.parsedValue && !defaultValue) return
      return ((props.parsedValue || innerDate.value) as Dayjs).format(timeFormat.value)
    })

    const visibleDate = computed(() => {
      if (userInputDate.value) return userInputDate.value
      if (!props.parsedValue && !defaultValue) return
      return ((props.parsedValue || innerDate.value) as Dayjs).format(dateFormat.value)
    })

    const footerVisible = computed(() => {
      return showTime.value || selectionMode.value === 'dates'
    })

    const checkDateWithRange = (date: Dayjs) => {
      return selectableRange.value.length > 0 ? timeWithRange(date, selectableRange.value, props.format) : true
    }

    const handleInputDate = val => {
      userInputDate.value = val
    }

    const handleInputTime = val => {
      userInputTime.value = val
    }

    const formatEmit = (emitDayjs: Dayjs) => {
      if (showTime.value) return emitDayjs.millisecond()
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime)
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date())
      }
      return emitDayjs.startOf('day')
    }

    const pickEmit = (value, ...args) => {
      if (!value) {
        ctx.emit('pick', value, ...args)
      } else if (Array.isArray(value)) {
        const dates = value.map(formatEmit)
        ctx.emit('pick', dates, ...args)
      } else {
        ctx.emit('pick', formatEmit(value), ...args)
      }
      userInputDate.value = null
      userInputTime.value = null
    }

    const handleDatePicker = (value: Dayjs) => {
      if (selectionMode.value === 'day') {
        let newDate = props.parsedValue
          ? (props.parsedValue as Dayjs).year(value.year()).month(value.month()).date(value.date())
          : value
        if (!checkDateWithRange(newDate)) {
          newDate = (selectableRange.value[0][0] as Dayjs).year(value.year()).month(value.month()).date(value.date())
        }
        innerDate.value = newDate
        pickEmit(newDate, showTime.value)
      } else if (selectionMode.value === 'week') {
        pickEmit(value.date)
      } else if (selectionMode.value === 'dates') {
        pickEmit(value, true) // set false to keep panel open
      }
    }

    const handleMonthPick = (month: number) => {
      innerDate.value = innerDate.value.startOf('month').month(month)
      if (selectionMode.value === 'month') {
        pickEmit(innerDate.value)
      } else {
        currentView.value = 'date'
      }
    }

    const handleShortcutClick = shortcut => {
      if (shortcut.value) {
        pickEmit(dayjs(shortcut.value))
        return
      }
      if (shortcut.onClick) {
        shortcut.onClick(ctx)
      }
    }

    const isValidValue = (date: Dayjs) => {
      return date.isValid() && (disabledDate ? !disabledDate(date.toDate()) : true)
    }

    const formatToString = value => {
      if (selectionMode.value === 'dates') {
        return value.map(_ => _.format(props.format))
      }
      return value.format(props.format)
    }

    const parseUserInput = value => {
      return dayjs(value, props.format)
    }

    const getDefaultValue = () => {
      return dayjs(defaultValue)
    }

    const handleKeydown = (event: KeyboardEvent) => {
      console.log(event)
    }

    onMounted(() => {
      props.getPopperRef(popperRef.value)
    })

    ctx.emit('set-picker-option', ['isValidValue', isValidValue])
    ctx.emit('set-picker-option', ['formatToString', formatToString])
    ctx.emit('set-picker-option', ['parseUserInput', parseUserInput])
    ctx.emit('set-picker-option', ['handleKeydown', handleKeydown])

    watch(
      () => selectionMode.value,
      (val: string) => {
        if (['month', 'year'].includes(val)) {
          currentView.value = val
          return
        }
        currentView.value = 'date'
      },
      {
        immediate: true,
      },
    )

    return {
      hasShortcuts,
      showTime,
      visibleDate,
      visibleTime,
      userInputDate,
      userInputTime,
      currentView,
      yearLabel,
      selectionMode,
      footerVisible,
      innerDate,
      shortcuts,
      disabledDate,
      cellClassName,
      defaultTime,
      arrowControl,
      popperRef,
      MONTHLIST,
      month,
      handleInputDate,
      handleInputTime,
      handleDatePicker,
      handleMonthPick,
      handleShortcutClick,
    }
  },
})
</script>

<style></style>
