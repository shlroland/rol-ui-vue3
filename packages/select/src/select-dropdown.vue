<template>
  <div
    ref="popperRef"
    class="rol-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { selectKey } from './token'

export default defineComponent({
  name: 'RolSelectDropdown',
  componentName: 'RolSelectDropdown',
  setup() {
    const select = inject(selectKey)
    const popperRef = ref<HTMLDivElement>(null)

    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const minWidth = computed(() => select.selectWrapper?.getBoundingClientRect().width + 'px')

    onMounted(() => {
      select.instance.ctx.popperRef = popperRef.value
    })

    return {
      minWidth,
      popperClass,
      isMultiple,
      popperRef,
    }
  },
})
</script>

<style></style>
