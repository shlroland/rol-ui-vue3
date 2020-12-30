---
title: Popconfirm
description: Popconfirm component doc
wrapperClass: popconfirm-demo-wrapper
tags:
  - 'components'
  - 'data'
---

# Popconfirm 气泡确认框

Popconfirm 的属性与 Popover 类似。

## 基础用法

在 Popconfirm 中，只有 `title` 属性可用，`content` 属性不会被展示。

```vue demo
<template>
  <rol-popconfirm title="这是一个问题内容？" hide-icon>
    <template #reference>
      <rol-button type="primary">Button</rol-button>
    </template>
  </rol-popconfirm>
</template>
```

## 自定义

可以在 Popconfirm 中自定义内容。

```vue demo
<template>
  <rol-popconfirm
    confirmButtonText="好的"
    cancelButtonText="不用了"
    icon="exclamation-triangle"
    iconColor="red"
    title="这是一段内容确定删除吗？"
  >
    <template #reference>
      <rol-button>删除</rol-button>
    </template>
  </rol-popconfirm>
</template>
```

### Attributes

| 参数              | 说明          | 类型    | 可选值 | 默认值  |
| ----------------- | ------------- | ------- | ------ | ------- |
| title             | 标题          | String  | —      | —       |
| confirmButtonText | 确认按钮文字  | String  | —      | —       |
| cancelButtonText  | 取消按钮文字  | String  | —      | —       |
| confirmButtonType | 确认按钮类型  | String  | —      | Primary |
| cancelButtonType  | 取消按钮类型  | String  | —      | Text    |
| icon              | Icon          | String  | —      | -       |
| iconColor         | Icon 颜色     | String  | —      | #f90    |
| hideIcon          | 是否隐藏 Icon | Boolean | —      | false   |

### Slot

| 参数      | 说明                             |
| --------- | -------------------------------- |
| reference | 触发 Popconfirm 显示的 HTML 元素 |

### Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| confirm  | 点击确认按钮时触发 | —        |
| cancel   | 点击取消按钮时触发 | —        |
