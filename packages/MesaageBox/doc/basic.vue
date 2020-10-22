<template>
  <Button>按 钮</Button>
  <MessageBoxIns title="消息弹框" />
</template>

<script lang="ts">
import Button from '@rol-ui/button'
import { MessageBoxIns } from '@rol-ui/message-box'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Button,
    MessageBoxIns,
  },

  setup() {
    const openFullScreen2 = () => {
      console.log(1)
    }

    return {
      openFullScreen2,
    }
  },
})
</script>

<style></style>
