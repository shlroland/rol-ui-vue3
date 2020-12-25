<template>
  <doc-header></doc-header>
  <div class="w-full max-w-8xl mx-auto">
    <div class="lg:flex">
      <doc-sidebar></doc-sidebar>
      <div class="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DocHeader from './components/DocHeader.vue'
import DocSidebar from './components/DocSiderbar.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    DocHeader,
    DocSidebar,
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
