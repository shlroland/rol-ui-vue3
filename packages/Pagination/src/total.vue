<template>
  <span class="rol-pagination__total"> 共 {{ total }} 条 </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolTotal',
  props: {
    total: {
      type: Number,
      default: 1000,
    },
  },
})
</script>

<style></style>
