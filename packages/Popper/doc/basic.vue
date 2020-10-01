<template>
  <div class="demo-container">
    <div>12311</div>
    <Popper>
      <template #trigger>
        <Button :type="primary">Button</Button>
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
