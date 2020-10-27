<template>
  <div class="demo-container">
    <Input v-model:modelValue="value1" />
  </div>
  <div class="demo-container">
    <Input placeholder="请输入内容" :disabled="true" />
  </div>
  <div class="demo-contaier"> </div>
</template>

<script>
import Input from '@rol-ui/input'
export default {
  components: {
    Input,
  },
  data() {
    return {
      value1: '',
    }
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-card {
  width: 480px;
}
</style>
