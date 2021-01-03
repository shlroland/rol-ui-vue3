---
title: Progress
description: Progress component doc
wrapperClass: progress-demo-wrapper
tags:
  - 'components'
  - 'feedback'
---

## 线形进度条

组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。通过 `format` 属性来指定进度条文字内容。

```vue demo
<template>
  <rol-progress :percentage="50"></rol-progress>
  <rol-progress :percentage="100" :format="format"></rol-progress>
  <rol-progress :percentage="100" status="success"></rol-progress>
  <rol-progress :percentage="100" status="warning"></rol-progress>
  <rol-progress :percentage="50" status="exception"></rol-progress>
</template>

<script>
export default {
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
  },
}
</script>
```

## 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

```vue demo
<template>
  <rol-progress :text-inside="true" :stroke-width="26" :percentage="70"></rol-progress>
  <rol-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></rol-progress>
  <rol-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></rol-progress>
  <rol-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></rol-progress>
</template>

<style scoped>
.rol-progress {
  margin: 10px;
}
</style>
```

## 自定义颜色

可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。

```vue demo
<template>
  <rol-progress :percentage="percentage" :color="customColor"></rol-progress>

  <rol-progress :percentage="percentage" :color="customColorMethod"></rol-progress>

  <rol-progress :percentage="percentage" :color="customColors"></rol-progress>

  <div>
    <rol-button-group>
      <rol-button icon="minus" @click="decrease"></rol-button>
      <rol-button icon="plus" @click="increase"></rol-button>
    </rol-button-group>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const percentage = ref(20)
    const customColor = ref('#076cc1')
    const customColors = ref([
      { color: '#ff4757', percentage: 20 },
      { color: '#ffa502', percentage: 40 },
      { color: '#2ed573', percentage: 60 },
      { color: '#1e90ff', percentage: 80 },
      { color: '#5352ed', percentage: 100 },
    ])

    const customColorMethod = percentage => {
      if (percentage < 30) {
        return '#a4b0be'
      } else if (percentage < 70) {
        return '#f39c12'
      } else {
        return '#2ecc71'
      }
    }

    const increase = () => {
      percentage.value += 10
      if (percentage.value > 100) {
        percentage.value = 100
      }
    }

    const decrease = () => {
      percentage.value -= 10
      if (percentage.value < 0) {
        percentage.value = 0
      }
    }

    return {
      percentage,
      customColor,
      customColors,
      customColorMethod,
      increase,
      decrease,
      customColors,
    }
  },
}
</script>

<style scoped>
.rol-progress {
  margin: 10px;
}
</style>
```

### Attributes

| 参数           | 说明                                                          | 类型                  | 可选值                    | 默认值 |
| -------------- | ------------------------------------------------------------- | --------------------- | ------------------------- | ------ |
| **percentage** | **百分比（必填）**                                            | number                | 0-100                     | 0      |
| type           | 进度条类型                                                    | string                | line                      | line   |
| stroke-width   | 进度条的宽度，单位 px                                         | number                | —                         | 6      |
| text-inside    | 进度条显示文字内置在进度条内（只在 type=line 时可用）         | boolean               | —                         | false  |
| status         | 进度条当前状态                                                | string                | success/exception/warning | —      |
| color          | 进度条背景色（会覆盖 status 状态颜色）                        | string/function/array | —                         | ''     |
| show-text      | 是否显示进度条文字内容                                        | boolean               | —                         | true   |
