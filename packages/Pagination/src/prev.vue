<template>
  <button type="button" class="btn-prev" :disabled="internalDisabled" @click.self.prevent>
    <span v-if="prevText">{{ prevText }}</span>
    <Icon v-else name="chevron-left"></Icon>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Icon from '@rol-ui/icon'

export default defineComponent({
  name: 'RolPrev',
  components: {
    Icon,
  },
  props: {
    disabled: Boolean,
    currentPage: {
      type: Number,
      default: 1,
    },
    prevText: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1)
    return {
      internalDisabled,
    }
  },
})
</script>
