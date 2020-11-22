<template>
  <li class="rol-menu-item-group">
    <div class="rol-menu-item-group__title" :style="[paddingStyle]">
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, reactive, getCurrentInstance } from 'vue'
import { useMenu } from './useMenu'

export default defineComponent({
  name: 'RolMenuItemGroup',
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    const data = reactive({ paddingLeft: 20 })
    const instance = getCurrentInstance()
    const { paddingStyle } = useMenu(instance)

    return {
      data,
      paddingStyle,
    }
  },
})
</script>

<style></style>
