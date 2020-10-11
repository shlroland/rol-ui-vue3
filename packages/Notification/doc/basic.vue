<template>
  <Button>通知</Button>
  <NotificationIns title="提示" message="这是提示文案" />
</template>

<script>
import Button from '@rol-ui/button'
import { NotificationIns } from '@rol-ui/notification'
export default {
  components: {
    NotificationIns,
    Button,
  },
}
</script>

<style></style>
