<template>
  <a class="rol-tag is-delete" @click="handleClose"></a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolTagClose',
  emits: ['close'],
  methods: {
    handleClose() {
      event.stopPropagation()
      this.$emit('close', event)
    },
  },
})
</script>
