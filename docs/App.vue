<template>
  <doc-header></doc-header>
</template>

<script lang="ts">
import DocHeader from './components/DocHeader.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    DocHeader,
  },
  setup() {
    const value1 = ref([])
    const value2 = ref('')
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
      value2,
      options1,
    }
  },
}
</script>
