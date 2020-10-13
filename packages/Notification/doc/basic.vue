<template>
  <Button @click="openMsg">通知</Button>
  <!-- <NotificationIns title="提示" message="这是提示文案" /> -->
</template>

<script>
import Button from '@rol-ui/button'
import Notification, { NotificationIns } from '@rol-ui/notification'
export default {
  components: {
    // NotificationIns,
    Button,
  },
  methods: {
    openMsg() {
      Notification({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
      })
    },
  },
}
</script>

<style></style>
