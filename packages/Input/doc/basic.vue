<template>
  <div class="demo-container">
    <Input v-model:modelValue="value1" />
  </div>
  <div class="demo-container">
    <Input placeholder="请输入内容" :disabled="true" />
  </div>
  <div class="demo-container">
    <Input v-model="value2" placeholder="请输入内容" clearable />
  </div>
  <div class="demo-container">
    <Input v-model="value3" placeholder="请输入内容" show-password />
  </div>
  <div class="demo-container">
    <Input v-model="value4" placeholder="请输入内容" :suffix-icon="['fab', '500px']" />
  </div>
  <div class="demo-container">
    <Input v-model="value4" placeholder="请输入内容">
    <template #suffix>
      <Icon :name="['fab', '500px']" />
    </template>
    </Input>
  </div>
  <div class="demo-container">
    <Input v-model="textarea" type="textarea" :rows="2" placeholder="请输入内容"></Input>
  </div>
  <div class="demo-container">
    <Input v-model="input1" placeholder="请输入内容"> <template #prepend>Http://</template></Input>
    <Input v-model="input1" placeholder="请输入内容"> <template #append>.com</template></Input>
  </div>
  <div class="demo-container">
    <Input v-model="input1" placeholder="请输入内容" :suffix-icon="['fab','adversal']"> </Input>
    <Input v-model="input1" size="medium" placeholder="请输入内容" :suffix-icon="['fab','adversal']"> </Input>
    <Input v-model="input1" size="small" placeholder="请输入内容" :suffix-icon="['fab','adversal']"> </Input>
    <Input v-model="input1" size="mini" placeholder="请输入内容" :suffix-icon="['fab','adversal']"> </Input>
  </div>
</template>

<script lang="ts">
import Input from '@rol-ui/input'
import Icon from '@rol-ui/icon'
export default {
  components: {
    Input,
    Icon,
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      textarea: '',
      input1: '',
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
