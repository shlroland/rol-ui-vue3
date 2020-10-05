<template>
  <div class="demo-container">
    <Popconfirm title="这是一个问题内容？" hide-icon>
      <template #reference>
        <Button type="primary">Button</Button>
      </template>
    </Popconfirm>
  </div>
  <Button @click="visible = !visible">切换</Button>
</template>

<script>
import Popconfirm from '@rol-ui/popconfirm'
import Button from '@rol-ui/button'

export default {
  components: {
    Popconfirm,
    Button,
  },
  data() {
    return {
      visible: true,
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
