<template>
  <Button @click="openMsgBox">按 钮</Button>
  <!-- <MessageBoxIns title="消息弹框" /> -->
</template>

<script lang="ts">
import Button from '@rol-ui/button'
import MessageBox from '@rol-ui/message-box'
import { defineComponent, h } from 'vue'

export default defineComponent({
  components: {
    Button,
    // MessageBoxIns,
  },

  setup() {
    const openMsgBox = () => {
      MessageBox({
        title: '消息',
        message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
    }

    return {
      openMsgBox,
    }
  },
})
</script>

<style></style>
