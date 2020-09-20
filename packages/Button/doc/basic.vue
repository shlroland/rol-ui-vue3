<template>
  <Button>按钮</Button>
  <!-- <Icon /> -->
</template>

<script lang="ts">
import Button from '@rol-ui-vue3/Button/src/Button.vue'
export default {
  components: {
    Button,
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
