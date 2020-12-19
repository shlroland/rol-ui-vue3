<template>
  <Button @click="openMsg">通知</Button>
  <Button @click="open2">成功</Button>
  <Button @click="open3">警告</Button>
  <Button @click="open4">消息</Button>
  <Button @click="open5">错误</Button>
  <!-- <NotificationIns title="提示" message="这是提示文案" /> -->
</template>

<script>
import { Button } from '@rol-ui/button'
import Message from '@rol-ui/meassage'
export default {
  components: {
    // NotificationIns,
    Button,
  },
  methods: {
    openMsg() {
      Message({
        message: '这是一条自动关闭的消息',
        duration: 4000,
      })
    },
    open2() {
      Message.success({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 4000,
      })
    },
    open3() {
      Message.warning({
        title: '提示',
        message: '这是一条自动关闭的消息',
        duration: 4000,
      })
    },
    open4() {
      Message.info({
        title: '提示',
        message: '这是一条自动关闭的消息',
        duration: 4000,
        light: true,
      })
    },
    open5() {
      Message.danger({
        title: '提示',
        message: '这是一条自动关闭的消息',
        duration: 0,
        center: true,
      })
    },
  },
}
</script>

<style></style>