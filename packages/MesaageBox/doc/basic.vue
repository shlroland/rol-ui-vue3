<template>
  <Button @click="openMsgBox">按 钮</Button>
  <!-- <MessageBoxIns title="消息弹框" /> -->
</template>

<script lang="ts">
import Button from '@rol-ui/button'
import MessageBox from '@rol-ui/message-box'
import Message from '@rol-ui/meassage'
import { defineComponent, h } from 'vue'

export default defineComponent({
  components: {
    Button,
    // MessageBoxIns,
  },

  setup() {
    const openMsgBox = () => {
      MessageBox.alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          Message({
            message: `action: ${action}`,
          })
        },
      })
    }

    return {
      openMsgBox,
    }
  },
})
</script>

<style></style>
