<template>
  <div class="demo-container">
    <rol-checkbox v-model="checked">备选项</rol-checkbox>
  </div>
  <div class="demo-container"></div>
  <div class="demo-contaier"></div>
</template>

<script>
import { RCol, Row } from '@rol-ui/grid'
import { Checkbox as RolCheckbox } from '@rol-ui/checkbox'
export default {
  components: {
    RolCheckbox
  },
  data(){
    return {
      checked: true
    }
  }
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
