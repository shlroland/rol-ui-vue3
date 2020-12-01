<template>
  <transition name="rol-zoom-in-top">
    <div v-if="visible" class="rol-time-panel">
      <div class="rol-time-panel__content"></div>
      <div class="rol-time-panel__footer">
        <button class="rol-time-panel__btn cancel">取消</button>
        <button class="rol-time-panel__btn confirm">确认</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PanelTimePicker',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    datetimeRole: {
      type: String,
    },
    parsedValue: {
      type: [Object, String] as PropType<string | Dayjs>,
    },
    format: {
      type: String,
      default: '',
    },
  },
})
</script>

<style></style>
