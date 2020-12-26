---
title: Button
description: Button component doc
wrapperClass: preview-class
tags:
  - 'components'
---

## Button 按钮

常用的操作按钮。

## 基础用法

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```vue demo
<template>
  <rol-row>
    <rol-button>默认按钮</rol-button>
    <rol-button type="primary">主要按钮</rol-button>
    <rol-button type="success">成功按钮</rol-button>
    <rol-button type="info">信息按钮</rol-button>
    <rol-button type="warning">警告按钮</rol-button>
    <rol-button type="danger">危险按钮</rol-button>
    <rol-button type="link">链接按钮</rol-button>
    <rol-button type="text">文字按钮</rol-button>
    <rol-button type="white">空白按钮</rol-button>
    <rol-button type="light">危险按钮</rol-button>
    <rol-button type="">危险按钮</rol-button>
    <rol-button type="">危险按钮</rol-button>
  </rol-row>
</template>

<style lang="scss" scoped>
.rol-row {
  .rol-button {
    margin: 5px;
  }
}
</style>
```

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
