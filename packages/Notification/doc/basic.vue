<template>
  <Button @click="openMsg">通知</Button>
  <Button @click="open2">不会自动关闭</Button>
  <Button @click="closeAll">关闭所有</Button>
  <!-- <NotificationIns title="提示" message="这是提示文案" /> -->
</template>

<script>
import { Button } from '@rol-ui/button'
import Notification from '@rol-ui/notification'
export default {
  components: {
    // NotificationIns,
    Button,
  },
  methods: {
    openMsg() {
      Notification({
        title: '提示',
        message: '这是一条自动关闭的消息',
      })
    },
    open2() {
      Notification({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
      })
    },
    closeAll() {
      Notification.closeAll()
    },
  },
}
</script>

<style></style>