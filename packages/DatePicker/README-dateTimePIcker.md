---
title: DateTimePicker
description: DateTimePicker component doc
wrapperClass: date-time-picker-demo-wrapper
tags:
  - 'components'
  - 'form'
---

# DateTimePicker 日期时间选择器

## 日期和时间点

通过设置`type`属性为`datetime`，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。

```vue demo
<template>
  <div class="container-three">
    <div class="block">
      <span class="demonstration">默认</span>
      <rol-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"> </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <rol-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :shortcuts="shortcuts">
      </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <rol-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" :default-time="defaultTime">
      </rol-date-picker>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    const value3 = ref('')
    const shortcuts = ref([
      {
        text: '今天',
        value: new Date(),
      },
      {
        text: '昨天',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          return date
        })(),
      },
      {
        text: '一周前',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          return date
        })(),
      },
    ])

    return {
      value1,
      value2,
      value3,
      shortcuts,
      defaultTime: ref(new Date(2000, 1, 1, 12, 0, 0)),
    }
  },
}
</script>
```

## ## 日期和时间范围

设置`type`为`datetimerange`即可选择日期和时间范围

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认</span>
      <rol-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <rol-date-picker
        v-model="value2"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      >
      </rol-date-picker>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref([new Date(2014, 10, 10, 10, 10), new Date(2014, 10, 11, 10, 10)])
    const value2 = ref([])
    const shortcuts = ref([
      {
        text: '最近一周',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          return [start, end]
        })(),
      },
      {
        text: '最近一个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        })(),
      },
      {
        text: '最近三个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        })(),
      },
    ])

    return {
      value1,
      value2,
      shortcuts,
    }
  },
}
</script>
```

## 默认的起始与结束时刻

使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。`default-time`接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00</span>
      <rol-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="defaultTime1"
      >
      </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
      <rol-date-picker
        v-model="value2"
        type="datetimerange"
        align="right"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="defaultTime2"
      >
      </rol-date-picker>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref([])
    const value2 = ref([])
    const defaultTime1 = ref([new Date(2014, 1, 1, 12, 0, 0)])
    const defaultTime2 = ref([new Date(2000, 1, 1, 12, 0, 0), new Date(2000, 2, 1, 8, 0, 0)])

    return {
      value1,
      value2,
      defaultTime1,
      defaultTime2,
    }
  },
}
</script>
```

### Attributes

| 参数               | 说明                                                              | 类型                                              | 可选值                                                                                                                                                   | 默认值               |
| ------------------ | ----------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| value / v-model    | 绑定值                                                            | date(DateTimePicker) / array(DateTimeRangePicker) | —                                                                                                                                                        | —                    |
| readonly           | 完全只读                                                          | boolean                                           | —                                                                                                                                                        | false                |
| disabled           | 禁用                                                              | boolean                                           | —                                                                                                                                                        | false                |
| editable           | 文本框可输入                                                      | boolean                                           | —                                                                                                                                                        | true                 |
| clearable          | 是否显示清除按钮                                                  | boolean                                           | —                                                                                                                                                        | true                 |
| size               | 输入框尺寸                                                        | string                                            | large/medium/small/mini                                                                                                                                  | large                |
| placeholder        | 非范围选择时的占位内容                                            | string                                            | —                                                                                                                                                        | —                    |
| start-placeholder  | 范围选择时开始日期的占位内容                                      | string                                            | —                                                                                                                                                        | —                    |
| end-placeholder    | 范围选择时结束日期的占位内容                                      | string                                            | —                                                                                                                                                        | —                    |
| time-arrow-control | 是否使用箭头进行时间选择                                          | boolean                                           | —                                                                                                                                                        | false                |
| type               | 显示类型                                                          | string                                            | year/month/date/week/ datetime/datetimerange/daterange                                                                                                   | date                 |
| format             | 显示在输入框中的格式                                              | string                                            | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)                                                                                                 | yyyy-MM-dd HH:mm:ss  |
| align              | 对齐方式                                                          | string                                            | left, center, right                                                                                                                                      | left                 |
| popper-class       | DateTimePicker 下拉框的类名                                       | string                                            | —                                                                                                                                                        | —                    |
| range-separator    | 选择范围时的分隔符                                                | string                                            | -                                                                                                                                                        | '-'                  |
| default-value      | 可选，选择器打开时默认显示的时间                                  | Date                                              | 可被`new Date()`解析                                                                                                                                     | —                    |
| default-time       | 选中日期后的默认具体时刻                                          | Date / 范围选择时：Date[]                         | 非范围选择时：Date 对象；范围选择时：数组，长度为 2，每项值为 Date 对象，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 `00:00:00` | —                    |
| name               | 原生属性                                                          | string                                            | —                                                                                                                                                        | —                    |
| unlink-panels      | 在范围选择器里取消两个日期面板之间的联动                          | boolean                                           | —                                                                                                                                                        | false                |
| prefix-icon        | 自定义头部图标的类名                                              | string                                            | —                                                                                                                                                        | -         |
| clear-icon         | 自定义清空图标的类名                                              | string                                            | —                                                                                                                                                        | - |
| shortcuts          | 设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表 | Object[]                                          | —                                                                                                                                                        | —                    |
| disabledDate       | 设置禁用状态，参数为当前日期，要求返回 Boolean                    | Function                                          | —                                                                                                                                                        | —                    |
| cellClassName      | 设置日期的 className                                              | Function(Date)                                    | —                                                                                                                                                        | —                    |

### Shortcuts

| 参数    | 说明                                                                                                  | 类型     | 可选值 | 默认值 |
| ------- | ----------------------------------------------------------------------------------------------------- | -------- | ------ | ------ |
| text    | 标题文本                                                                                              | string   | —      | —      |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.\$emit('pick', new Date()) | function | —      | —      |

### Events

| Event Name | Description             | Parameters |
| ---------- | ----------------------- | ---------- |
| change     | 用户确认选定的值时触发  | 组件绑定值 |
| blur       | 当 input 失去焦点时触发 | 组件实例   |
| focus      | 当 input 获得焦点时触发 | 组件实例   |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |

### Slots

| Name            | 说明         |
| --------------- | ------------ |
| range-separator | 自定义分隔符 |
