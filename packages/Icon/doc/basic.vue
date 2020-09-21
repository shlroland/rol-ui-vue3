<template>
  <Icon
    :icon="['fas', 'camera']"
    size="lg"
    transform="shrink-6 left-4"
    :mask="['far', 'circle']"
    :class="[{ icon: true }, 'coffee', 'wm', { app: false }]"
    xxx="2222"
  />
</template>

<script lang="ts">
import Icon from '@rol-ui/icon/src/index.vue'

export default {
  components: {
    Icon,
    // Icon,
  },
  setup() {
    return {
      aa() {
        alert(1111)
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
