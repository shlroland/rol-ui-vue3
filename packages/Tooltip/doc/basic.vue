<template>
  <div class="demo-container">
    <Tooltip content="这是一段内容" :effect="effect" popper-class="popperIII">
      <Button type="primary">Button</Button>
    </Tooltip>
  </div>
  <Button @click="visible = !visible">切换</Button>
</template>

<script>
import Tooltip from '@rol-ui/tooltip'
import Button from '@rol-ui/button'

export default {
  components: {
    Tooltip,
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
