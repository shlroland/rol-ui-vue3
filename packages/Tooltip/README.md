---
title: Tooltip
description: Tooltip component doc
wrapperClass: tooltip-demo-wrapper
tags:
  - 'components'
  - 'data'
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```vue demo
<template>
  <div class="box">
    <div class="top">
      <rol-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <rol-button>上左</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <rol-button>上边</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <rol-button>上右</rol-button>
      </rol-tooltip>
    </div>
    <div class="left">
      <rol-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <rol-button>左上</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <rol-button>左边</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <rol-button>左下</rol-button>
      </rol-tooltip>
    </div>

    <div class="right">
      <rol-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <rol-button>右上</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <rol-button>右边</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <rol-button>右下</rol-button>
      </rol-tooltip>
    </div>
    <div class="bottom">
      <rol-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <rol-button>下左</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <rol-button>下边</rol-button>
      </rol-tooltip>
      <rol-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <rol-button>下右</rol-button>
      </rol-tooltip>
    </div>
  </div>
</template>
```

## 主题

通过设置`effect`属性来改变主题，默认为`dark`。(`dark`和`light`)

```vue demo
<template>
  <rol-tooltip content="Top center" placement="top">
    <rol-button>Dark</rol-button>
  </rol-tooltip>
  <rol-tooltip content="Bottom center" placement="bottom" effect="light">
    <rol-button style="margin-left: 15px">Light</rol-button>
  </rol-tooltip>
</template>
```

## 更多 Content

用具名 slot 分发`content`，替代`tooltip`中的`content`属性。

```vue demo
<template>
  <rol-tooltip placement="top">
    <template #content> 多行信息<br />第二行信息 </template>
    <rol-button>Top center</rol-button>
  </rol-tooltip>
</template>
```

### Attributes

| 参数            | 说明                                                                                                    | 类型    | 可选值                                                                                                    | 默认值                                                |
| --------------- | ------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| append-to-body  | 决定 popper 是否传送到 document.body 下                                                                 | Boolean | -                                                                                                         | false                                                 |
| effect          | 默认提供的主题                                                                                          | String  | dark/light                                                                                                | dark                                                  |
| content         | 显示的内容，也可以通过 `slot#content` 传入 DOM                                                          | String  | —                                                                                                         | —                                                     |
| placement       | Tooltip 的出现位置                                                                                      | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                |
| value / v-model | 状态是否可见                                                                                            | Boolean | —                                                                                                         | false                                                 |
| disabled        | Tooltip 是否可用                                                                                        | Boolean | —                                                                                                         | false                                                 |
| offset          | 出现位置的偏移量                                                                                        | Number  | —                                                                                                         | 0                                                     |
| transition      | 定义渐变动画                                                                                            | String  | —                                                                                                         | el-fade-in-linear                                     |
| visible-arrow   | 是否显示 Tooltip 箭头                                                                                   | Boolean | —                                                                                                         | true                                                  |
| popper-options  | [popper.js](https://popper.js.org/documentation.html) 的参数                                            | Object  | 参考 [popper.js](https://popper.js.org/documentation.html) 文档                                           | { boundariesElement: 'body', gpuAcceleration: false } |
| open-delay      | 延迟出现，单位毫秒                                                                                      | Number  | —                                                                                                         | 0                                                     |
| manual          | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效                                   | Boolean | —                                                                                                         | false                                                 |
| popper-class    | 为 Tooltip 的 popper 添加类名                                                                           | String  | —                                                                                                         | —                                                     |
| enterable       | 鼠标是否可进入到 tooltip 中                                                                             | Boolean | —                                                                                                         | true                                                  |
| hide-after      | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏                                               | number  | —                                                                                                         | 0                                                     |
| tabindex        | Tooltip 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number  | —                                                                                                         | 0                                                     |
