<template>
  <aside class="rol-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
})
</script>
