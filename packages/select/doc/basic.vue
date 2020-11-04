<template>
  <!-- <div class="demo-container">
    <div>
      <Select v-model="value1">
        <SelectOption v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></SelectOption>
      </Select>
    </div>
    <div> value: {{ value1 }} </div>
  </div> -->
  <div class="demo-container">
    <Select v-model="value2">
      <SelectOption
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></SelectOption>
    </Select>
    <div> value: {{ value2 }} </div>
  </div>
</template>

<script lang="ts">
import Select, { SelectOption } from '@rol-ui/select'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Select,
    SelectOption,
  },
  data() {
    return {
      options1: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value1: '',
      options2: [
        {
          value: '选项1',
          label: '黄金糕',
          disabled: true,
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          disabled: true,
        },
      ],
      value2: '',
    }
  },
})
</script>
