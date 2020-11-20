<template>
  <li class="rol-menu-item-group">
    <div class="rol-menu-item-group__title">
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolMenuItemGroup',
  props: {
    title: {
      type: String,
    },
  },
})
</script>

<style></style>
