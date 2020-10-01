<template>
  <div class="demo-container">
    <Popper placement="bottom" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
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
}
</style>
