<template>
  <div class="demo-container-tabs">
    <Popper
      placement="left-end"
      effect="light"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #trigger>
        <Button type="primary">Button</Button>
      </template>
    </Popper>
  </div>
  <Button @click="visible = !visible">切换</Button>
</template>

<script>
import Popper from '@rol-ui/popper'
import Button from '@rol-ui/button'

export default {
  components: {
    Popper,
    Button,
  },
  data() {
    return {
      visible: true,
    }
  },
}
</script>

<style>
.demo-container-tabs {
  margin-bottom: 40px;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
