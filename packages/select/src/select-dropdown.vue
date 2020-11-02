<template>
  <div
    class="rol-select-dropdown"
    :class="[{ 'is-multiple': isMultiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import { selectKey } from './token'

export default defineComponent({
  name: 'RolSelectDropdown',
  componentName: 'RolSelectDropdown',
  setup() {
    const select = inject(selectKey)
console.log(select.selectWrapper)
    const popperClass = computed(() => select.props.popperClass)
    const isMultiple = computed(() => select.props.multiple)
    const minWidth = computed(() => select.selectWrapper?.getBoundingClientRect().width + 'px')

    return {
      minWidth,
      popperClass,
      isMultiple,
    }
  },
})
</script>

<style></style>
