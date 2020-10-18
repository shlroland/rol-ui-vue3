<template>
  <div>
    <Alert title="成功提示的文案" type="success" />
    <Alert title="消息提示的文案" type="info" />
    <Alert title="警告提示的文案" type="warning" />
    <Alert title="错误提示的文案" type="danger" />
    <Alert title="成功提示的文案" type="success" light />
    <Alert title="消息提示的文案" type="info" light />
    <Alert title="警告提示的文案" type="warning" light />
    <Alert title="错误提示的文案" type="danger" light />
    <Alert title="成功提示的文案" type="success" center />
    <Alert
      title="成功提示的文案"
      type="success"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
    />
  </div>
</template>

<script>
import Alert from '@rol-ui/alert'
export default {
  components: {
    Alert,
  },
}
</script>

<style></style>
