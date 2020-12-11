<template>
  <div
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
            <el-input :placeholder="选择日期"></el-input>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import RolInput from '@rol-ui/input'
import { PICKER_BASE_PROVIDER } from '@rol-ui/utils/time-constant'
import dayjs, { Dayjs } from 'dayjs'

export default defineComponent({
  name: 'PanelDatePicker',
  components: {
    // RolInput,
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
  },
  setup(props) {
    const { shortcuts, disabledDate, cellClassName, defaultTime, defaultValue, arrowControl } = inject(
      PICKER_BASE_PROVIDER,
    ) as any

    const userInputDate = ref(null)
    const innerDate = ref(dayjs())
    const hasShortcuts = computed(() => false)
    const showTime = computed(() => props.type === 'datetime' || props.type === 'datetimerange')
    const visibleDate = computed(() => {
      if (userInputDate.value) return userInputDate.value
      if (!props.parsedValue && !defaultValue) return
      return ((props.parsedValue || innerDate.value) as Dayjs)
    })

    return {
      hasShortcuts,
      showTime,
    }
  },
})
</script>

<style></style>
