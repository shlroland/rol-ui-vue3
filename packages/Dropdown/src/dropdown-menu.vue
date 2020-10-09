<template>
  <ul class="rol-dropdown-menu" :class="[size && `el-dropdown-menu--${size}`]">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RolDropdownMenu',
})
</script>

<style></style>
