<template>
  <button type="button" class="btn-prev">
    <span v-if="nextText">{{ nextText }}</span>
    <Icon v-else name="chevron-right"></Icon>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolNext',
  components: {
    Icon,
  },
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    pageCount: {
      type: Number,
      default: 50,
    },
    nextText: {
      type: String,
      default: '',
    },
  },
})
</script>
