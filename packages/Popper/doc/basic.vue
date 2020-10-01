<template>
  <div class="demo-container">
    <Popper placement="left-end" effect="light" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <template #trigger>
        <Button type="primary">Button</Button>
      </template>
    </Popper>
  </div>
</template>

<script>
import Popper from '@rol-ui/popper'
import Button from '@rol-ui/button'

export default {
  components: {
    Popper,
    Button,
  },
}
</script>

<style>
.demo-container {
  margin-bottom: 40px;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
