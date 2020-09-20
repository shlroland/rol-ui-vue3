<template>
  <Button>按钮</Button>
  <!-- <Icon /> -->
</template>

<script lang="ts">
import Button from '../Button.vue'
// import Icon from '@lib/Icon/Icon.vue'
export default {
  components: {
    Button,
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
