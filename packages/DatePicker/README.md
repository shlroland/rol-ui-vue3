---
title: DatePicker
description: DatePicker component doc
wrapperClass: date-picker-demo-wrapper
tags:
  - 'components'
  - 'form'
---

# DatePicker 日期选择器

用于选择或输入日期

## 基本用法

以「日」为基本单位，基础的日期选择控件

基本单位由`type`属性指定。通过`shortcuts`配置快捷选项，禁用日期通过 `disabledDate` 设置，传入函数

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认</span>
      <rol-date-picker v-model="value1" type="date" placeholder="选择日期"> </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <rol-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
      >
      </rol-date-picker>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref(new Date(2020, 12, 31, 18, 30))
    const value2 = ref(new Date(2020, 12, 31, 18, 30))
    const shortcuts = ref([
      {
        text: 'Today',
        value: new Date(),
      },
      {
        text: 'Yesterday',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          return date
        })(),
      },
      {
        text: 'A week ago',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          return date
        })(),
      },
    ])

    const disabledDate = time => {
      return time.getTime() > Date.now()
    }

    return {
      value1,
      value2,
      shortcuts,
      disabledDate,
    }
  },
}
</script>
```

## 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年或多个日期

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">周</span>
      <rol-date-picker v-model="value1" type="week" format="gggg 第 ww 周" placeholder="选择周"> </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">月</span>
      <rol-date-picker v-model="value2" type="month" placeholder="选择月"> </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">年</span>
      <rol-date-picker v-model="value3" type="year" placeholder="选择年"> </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">多个日期</span>
      <rol-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期"> </rol-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    }
  },
}
</script>
```

## 选择日期范围

可在一个选择器中便捷地选择一个时间范围

在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用`unlink-panels`属性解除联动。

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认</span>
      <rol-date-picker
        v-model="value1"
        type="daterange"
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
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
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

## 选择月份范围

可在一个选择器中便捷地选择一个月份范围

在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用`unlink-panels`属性解除联动。

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认</span>
      <rol-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      >
      </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <rol-date-picker
        v-model="value2"
        type="monthrange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :shortcuts="shortcuts"
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
    const shortcuts = ref([
      {
        text: '本月',
        value: [new Date(), new Date()],
      },
      {
        text: '今年至今',
        value: (() => {
          const end = new Date()
          const start = new Date(new Date().getFullYear(), 0)
          return [start, end]
        })(),
      },
      {
        text: '最近六个月',
        value: (() => {
          const end = new Date()
          const start = new Date()
          start.setMonth(start.getMonth() - 6)
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

## 默认值

如果用户没有选择日期，那默认展示当前日的月份。你可以使用 `default-value` 来设置成其他的日期。

如果类型是 `daterange`, `default-value` 则会设置左边窗口的默认值。

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认</span>
      <rol-date-picker v-model="value1" type="date" placeholder="Pick a date" :default-value="new Date(2014, 9, 1)">
      </rol-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <rol-date-picker
        v-model="value2"
        type="daterange"
        align="right"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="[new Date(2014, 9, 1), new Date(2014, 10, 1)]"
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

    return {
      value1,
      value2,
    }
  },
}
</script>
```

## 日期格式

使用`format`指定输入框的格式。

默认情况下，组件接受并返回`Date`对象。

在 [日期格式](https://day.js.org/docs/zh-CN/display/format) 查看 Day.js 支持的 format 参数。

```vue demo
<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">值：{{ value1 }}</div>
      <rol-date-picker v-model="value1" type="date" placeholder="选择日期" format="YYYY 年 MM 月 DD 日">
      </rol-date-picker>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref([])

    return {
      value1,
    }
  },
}
</script>
```

### Attributes

| 参数              | 说明                                           | 类型                                      | 可选值                                                                                          | 默认值     |
| ----------------- | ---------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| value / v-model   | 绑定值                                         | date(DatePicker) / array(DateRangePicker) | —                                                                                               | —          |
| readonly          | 完全只读                                       | boolean                                   | —                                                                                               | false      |
| disabled          | 禁用                                           | boolean                                   | —                                                                                               | false      |
| editable          | 文本框可输入                                   | boolean                                   | —                                                                                               | true       |
| clearable         | 是否显示清除按钮                               | boolean                                   | —                                                                                               | true       |
| size              | 输入框尺寸                                     | string                                    | large/medium/small/mini                                                                         | large      |
| placeholder       | 非范围选择时的占位内容                         | string                                    | —                                                                                               | —          |
| start-placeholder | 范围选择时开始日期的占位内容                   | string                                    | —                                                                                               | —          |
| end-placeholder   | 范围选择时结束日期的占位内容                   | string                                    | —                                                                                               | —          |
| type              | 显示类型                                       | string                                    | year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange                        | date       |
| format            | 显示在输入框中的格式                           | string                                    | 见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)                                        | yyyy-MM-dd |
| align             | 对齐方式                                       | string                                    | left, center, right                                                                             | left       |
| popper-class      | DatePicker 下拉框的类名                        | string                                    | —                                                                                               | —          |
| range-separator   | 选择范围时的分隔符                             | string                                    | —                                                                                               | '-'        |
| default-value     | 可选，选择器打开时默认显示的时间               | Date                                      | 可被`new Date()`解析                                                                            | —          |
| default-time      | 范围选择时选中日期所使用的当日内具体时刻       | Date[]                                    | 数组，长度为 2，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00` | —          |
| name              | 原生属性                                       | string                                    | —                                                                                               | —          |
| unlink-panels     | 在范围选择器里取消两个日期面板之间的联动       | boolean                                   | —                                                                                               | false      |
| prefix-icon       | 自定义头部图标的类名                           | string                                    | —                                                                                               | -          |
| clear-icon        | 自定义清空图标的类名                           | string                                    | —                                                                                               | -          |
| validate-event    | 输入时是否触发表单的校验                       | boolean                                   | -                                                                                               | true       |
| shortcuts         | 设置快捷选项，需要传入数组对象                 | object[{ text: string, value: Date }]     | —                                                                                               | —          |
| disabledDate      | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function                                  | —                                                                                               | —          |

### Shortcuts

| 参数    | 说明                                                                                                  | 类型     | 可选值 | 默认值 |
| ------- | ----------------------------------------------------------------------------------------------------- | -------- | ------ | ------ |
| text    | 标题文本                                                                                              | string   | —      | —      |
| onClick | 选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.\$emit('pick', new Date()) | function | —      | —      |

### Events

| 事件名称 | 说明                    | 回调参数   |
| -------- | ----------------------- | ---------- |
| change   | 用户确认选定的值时触发  | 组件绑定值 |
| blur     | 当 input 失去焦点时触发 | 组件实例   |
| focus    | 当 input 获得焦点时触发 | 组件实例   |

### Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| focus  | 使 input 获取焦点 | —    |
