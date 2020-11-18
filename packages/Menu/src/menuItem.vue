<template>
  <li class="rol-menu-item" role="menuitem" tabindex="-1">
    <!-- <template> -->
    <slot></slot>
    <slot name="title"></slot>
    <!-- </template> -->
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolMenuItem',
})
</script>

<style></style>
