<template>
  <div class="demo-container">
    <div>
      <Select v-model="value1" filterable multiple>
        <SelectOption v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></SelectOption>
      </Select>
    </div>
    <div> value: {{ value1 }} </div>
    <Select v-model="value" multiple filterable allow-create default-first-option placeholder="请输入关键词">
      <SelectOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </SelectOption>
    </Select>
  </div>
  <!-- <div class="demo">
    <Select v-model="value2" multiple>
      <SelectOption v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></SelectOption>
    </Select>
    <div> value: {{ value2 }} </div>
  </div> -->
  <!-- <Select v-model="value" placeholder="请选择">
    <select-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
      <span style="float: left;">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px;">{{ item.value }}</span>
    </select-option>
  </Select> -->

  <!-- <Select v-model="value" placeholder="请选择">
    <select-option-group v-for="group in options" :key="group.label" :label="group.label">
      <select-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
      </select-option>
    </select-option-group>
  </Select> -->
</template>

<script lang="ts">
import { Select, SelectOption } from '@rol-ui/select'
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
          value: 'HTML',
          label: 'HTML',
        },
        {
          value: 'CSS',
          label: 'CSS',
        },
        {
          value: 'JavaScript',
          label: 'JavaScript',
        },
      ],
      value: [],
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
      // cities: [
      //   {
      //     value: 'Beijing',
      //     label: '北京',
      //   },
      //   {
      //     value: 'Shanghai',
      //     label: '上海',
      //   },
      //   {
      //     value: 'Nanjing',
      //     label: '南京',
      //   },
      //   {
      //     value: 'Chengdu',
      //     label: '成都',
      //   },
      //   {
      //     value: 'Shenzhen',
      //     label: '深圳',
      //   },
      //   {
      //     value: 'Guangzhou',
      //     label: '广州',
      //   },
      // ],
      // options: [
      //   {
      //     label: '热门城市',
      //     options: [
      //       {
      //         value: 'Shanghai',
      //         label: '上海',
      //       },
      //       {
      //         value: 'Beijing',
      //         label: '北京',
      //       },
      //     ],
      //   },
      //   {
      //     label: '城市名',
      //     options: [
      //       {
      //         value: 'Chengdu',
      //         label: '成都',
      //       },
      //       {
      //         value: 'Shenzhen',
      //         label: '深圳',
      //       },
      //       {
      //         value: 'Guangzhou',
      //         label: '广州',
      //       },
      //       {
      //         value: 'Dalian',
      //         label: '大连',
      //       },
      //     ],
      //   },
      // ],
      // value: '',
    }
  },
  methods: {},
})
</script>

<style>
.demo {
  margin-bottom: 200px;
}
</style>
