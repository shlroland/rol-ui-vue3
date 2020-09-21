<template>
  <Button>按钮</Button>
  <Icon
    icon="seedling"
    size="lg"
    transform="shrink-6 left-4"
    :mask="['far', 'circle']"
  />
</template>

<script lang="ts">
import Button from '@rol-ui-vue3/Button/src/Button.vue'
import Icon from '@rol-ui-vue3/Icon/src/index.vue'
export default {
  components: {
    Button,
    Icon,
  },
}
</script>
