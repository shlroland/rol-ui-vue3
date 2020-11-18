<template>
  <li :class="['rol-submenu']" role="menuitem" aria-haspopup="true" aria-expanded="opened">
    <div ref="verticalTitleRef" class="rol-submenu__title">
      <slot name="title"></slot>
    </div>
    <ul
      role="menu"
      class="rol-menu rol-menu--inline"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolSubmenu',
  componentName: 'RolSubmenu',
  props: {
    index: {
      type: String,
      required: true,
    },
    showTimeout: {
      type: Number,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      default: 300,
    },
    disabled: Boolean,
  },
})
</script>

<style></style>
