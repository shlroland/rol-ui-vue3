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
        <!-- <button ></button> -->
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
          <button
            type="button"
            :aria-label="'前一年'"
            class="rol-picker-panel__icon-btn rol-date-picker__prev-btn"
          ></button>
          <button
            v-show="currentView === 'date'"
            type="button"
            :aria-label="'上个月'"
            class="rol-picker-panel__icon-btn rol-date-picker__prev-btn"
          ></button>
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
          ></span>
          <button
            type="button"
            :aria-label="'后一年'"
            class="rol-picker-panel__icon-btn rol-date-picker__next-btn"
          ></button>
          <button
            v-show="currentView === 'date'"
            type="button"
            :aria-label="'下个月'"
            class="rol-picker-panel__icon-btn rol-date-picker__next-btn"
          ></button>
        </div>
        <div class="rol-picker-panel__content">
          <date-table
            v-if="currentView === 'date'"
            :selection-mode="selectionMode"
            :date="innerDate"
            :parsed-value="parsedValue"
          ></date-table>
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
import { computed, defineComponent, inject, PropType, ref, onMounted } from 'vue'
import RolInput from '@rol-ui/input'
import RolButton from '@rol-ui/button'
import { PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'
import dayjs, { Dayjs } from 'dayjs'
import { extractDateFormat, extractTimeFormat } from '@rol-ui/utils/time-utils'
import DateTable from './basic-date-table.vue'

export default defineComponent({
  name: 'PanelDatePicker',
  components: {
    RolInput,
    RolButton,
    DateTable,
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
  setup(props) {
    const { shortcuts, disabledDate, cellClassName, defaultTime, defaultValue, arrowControl } = inject(
      PICKER_BASE_PROVIDER,
    ) as any
    const popperRef = ref<HTMLElement>(null)
    const userInputDate = ref(null)
    const userInputTime = ref(null)
    const innerDate = ref(dayjs())
    const currentView = ref('date')

    const hasShortcuts = computed(() => false)

    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')

    const selectionMode = computed(() => {
      if (['week', 'month', 'year', 'dates'].includes(props.type)) {
        return props.type
      }
      return 'day'
    })

    const yearLabel = computed(() => {
      return ''
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

    const handleInputDate = val => {
      userInputDate.value = val
    }

    const handleInputTime = val => {
      userInputTime.value = val
    }

    onMounted(() => {
      props.getPopperRef(popperRef.value)
    })

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
      handleInputDate,
      handleInputTime,
    }
  },
})
</script>

<style></style>
