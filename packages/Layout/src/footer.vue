<template>
  <footer class="rol-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
})
</script>
