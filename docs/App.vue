<template>
  <div class="bg-white transition-colors duration-500 dark:bg-gray-800 text-gray-900 dark:text-gray-200"> </div>
  <rol-select v-model="value1" multiple>
    <rol-select-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></rol-select-option>
  </rol-select>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const value1 = ref([])

    const options1 = ref([
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
    ])

    return {
      value1,
      options1,
    }
  },
}
</script>
