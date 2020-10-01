<template>
  <div class="demo-container">
    <Popover content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" title="标题" popper-class="popperIII">
      <template #reference>
        <Button type="primary">Button</Button>
      </template>
    </Popover>
  </div>
  <Button @click="visible = !visible">切换</Button>
</template>

<script>
import Popover from '@rol-ui/popover'
import Button from '@rol-ui/button'

export default {
  components: {
    Popover,
    Button,
  },
  data() {
    return {
      visible: true,
      effect: 'light',
    }
  },
}
</script>

<style scoped>
.demo-container {
  margin-bottom: 40px;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
