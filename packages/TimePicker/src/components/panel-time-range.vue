<template>
  <transition name="rol-zoom-in-top">
    <div v-if="visible" class="rol-time-range-picker rol-picker-panel">
      <div class="rol-time-range-picker__content">
        <div class="rol-time-range-picker__cell">
          <div class="rol-time-range-picker__header"> 开始时间 </div>
          <div class="rol-time-range-picker__body rol-time-panel__content"></div>
        </div>
        <div class="rol-time-range-picker__cell">
          <div class="rol-time-range-picker__header"> 结束时间 </div>
          <div class="rol-time-range-picker__body rol-time-panel__content"></div>
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
import { Dayjs } from 'dayjs'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'PanelTimeRange',
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
})
</script>

<style></style>
