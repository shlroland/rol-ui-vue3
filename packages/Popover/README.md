---
title: Popover
description: Popover component doc
wrapperClass: popover-demo-wrapper
tags:
  - 'components'
  - 'data'
---

# Popover 气泡卡片

Popover 的属性与 Tooltip 类似。

## 基础用法

`trigger`属性用于设置何时触发 Popover，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 Popover 的元素，有两种写法：使用 `#reference` 的具名插槽。

```vue demo
<template>
  <rol-popover
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <rol-button>hover 激活</rol-button>
    </template>
  </rol-popover>

  <rol-popover
    placement="bottom"
    title="标题"
    :width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <rol-button>click 激活</rol-button>
    </template>
  </rol-popover>

  <rol-popover
    ref="popover"
    placement="right"
    title="标题"
    :width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <rol-button>focus 激活</rol-button>
    </template>
  </rol-popover>

  <rol-popover
    placement="bottom"
    title="标题"
    :width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model:visible="visible"
  >
    <template #reference>
      <rol-button @click="visible = !visible">手动激活</rol-button>
    </template>
  </rol-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
}
</script>
```

### Attributes

| 参数                      | 说明                                                                                                    | 类型           | 可选值                                                                                                    | 默认值                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| trigger                   | 触发方式                                                                                                | String         | click/focus/hover/manual                                                                                  | click                                                   |
| title                     | 标题                                                                                                    | String         | —                                                                                                         | —                                                       |
| content                   | 显示的内容，也可以通过 `slot` 传入 DOM                                                                  | String         | —                                                                                                         | —                                                       |
| width                     | 宽度                                                                                                    | String, Number | —                                                                                                         | 最小宽度 150px                                          |
| placement                 | 出现位置                                                                                                | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                  |
| disabled                  | Popover 是否可用                                                                                        | Boolean        | —                                                                                                         | false                                                   |
| visible / v-model:visible | 状态是否可见                                                                                            | Boolean        | —                                                                                                         | false                                                   |
| offset                    | 出现位置的偏移量                                                                                        | Number         | —                                                                                                         | 0                                                       |
| transition                | 定义渐变动画                                                                                            | String         | —                                                                                                         | fade-in-linear                                          |
| show-arrow                | 是否显示 Tooltip 箭头                                                                                   | Boolean        | —                                                                                                         | true                                                    |
| popper-options            | [popper.js](https://popper.js.org/documentation.html) 的参数                                            | Object         | 参考 [popper.js](https://popper.js.org/documentation.html) 文档                                           | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class              | 为 popper 添加类名                                                                                      | String         | —                                                                                                         | —                                                       |
| open-delay                | 触发方式为 hover 时的显示延迟，单位为毫秒                                                               | Number         | —                                                                                                         | —                                                       |
| close-delay               | 触发方式为 hover 时的隐藏延迟，单位为毫秒                                                               | number         | —                                                                                                         | 200                                                     |
| tabindex                  | Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number         | —                                                                                                         | 0                                                       |

### Slot

| 参数      | 说明                          |
| --------- | ----------------------------- |
| —         | Popover 内嵌 HTML 文本        |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events

| 事件名称    | 说明                   | 回调参数 |
| ----------- | ---------------------- | -------- |
| show        | 显示时触发             | —        |
| after-enter | 显示动画播放完毕后触发 | —        |
| hide        | 隐藏时触发             | —        |
| after-leave | 隐藏动画播放完毕后触发 | —        |
