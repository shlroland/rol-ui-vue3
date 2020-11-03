<template>
  <div>
    <Select v-model="value">
      <SelectOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></SelectOption>
    </Select>
  </div>
  <div>
    value: {{ value }}
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
      options: [
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
      value: '',
    }
  },
})
</script>
