<template>
  <button type="button" class="btn-next" :disabled="internalDisabled" @click.self.prevent>
    <span v-if="nextText">{{ nextText }}</span>
    <Icon v-else name="chevron-right"></Icon>
  </button>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
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
  setup(props) {
    const internalDisabled = computed(
      () => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0,
    )
    return {
      internalDisabled,
    }
  },
})
</script>
