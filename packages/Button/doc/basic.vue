<template>
  <Button>按钮</Button>
  <Button type="primary" icon="search">搜索</Button>
</template>

<script lang="ts">
import Button from '@rol-ui/Button/src/Button.vue'
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
