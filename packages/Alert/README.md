---
title: Alert
description: Alert component doc
wrapperClass: alert-demo-wrapper
tags:
  - 'components'
  - 'feedback'
---

# Alert 警告

用于页面中展示重要的提示信息。

## 基本用法

组件提供四种主题，由`type`属性指定，默认值为`info`。

```vue demo
<template>
  <rol-alert title="成功提示的文案" type="success" />
  <rol-alert title="消息提示的文案" type="info" />
  <rol-alert title="警告提示的文案" type="warning" />
  <rol-alert title="错误提示的文案" type="danger" />
  <rol-alert title="主题提示的文案" type="primary" />
  <rol-alert title="链接提示的文案" type="link" />
</template>
```

## 主题

提供了浅色主题

```vue demo
<template>
  <rol-alert title="成功提示的文案" type="success" light />
  <rol-alert title="消息提示的文案" type="info" light />
  <rol-alert title="警告提示的文案" type="warning" light />
  <rol-alert title="错误提示的文案" type="danger" light />
  <rol-alert title="主题提示的文案" type="primary" light />
  <rol-alert title="链接提示的文案" type="link" light />
</template>
```

## 位置

提供了文字居中显示

```vue demo
<template>
  <rol-alert title="成功提示的文案" type="success" center />
  <rol-alert title="消息提示的文案" type="info" center />
  <rol-alert title="警告提示的文案" type="warning" center />
  <rol-alert title="错误提示的文案" type="danger" center />
  <rol-alert title="主题提示的文案" type="primary" center />
  <rol-alert title="链接提示的文案" type="link" center />
</template>
```

## 带有辅助性文字介绍

除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。

```vue demo
<template>
  <rol-alert
    title="带辅助性文字介绍"
    type="success"
    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  >
  </rol-alert>
</template>
```

### Attributes

| 参数        | 说明                               | 类型    | 可选值                     | 默认值 |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| title       | 标题                               | string  | —                          | —      |
| type        | 主题                               | string  | success/warning/info/error | info   |
| description | 辅助性文字。也可通过默认 slot 传入 | string  | —                          | —      |
| closable    | 是否可关闭                         | boolean | —                          | true   |
| center      | 文字是否居中                       | boolean | —                          | false  |
| light       | 使用浅色主题                       | boolean |                            | false  |

### Slot

| Name  | Description |
| ----- | ----------- |
| —     | 描述        |
| title | 标题的内容  |

### Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 alert 时触发的事件 | —        |
