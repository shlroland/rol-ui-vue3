---
title: PageHeader
description: PageHeader component doc
tags:
  - 'components'
  - 'data'
---

# Badge 标记

简单的页面头部组件封装

## 基本用法

定义`value`属性，它接受`Number`或者`String`。

```vue demo
<template>
  <rol-page-header @back="goBack" content="详情页面"> </rol-page-header>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log('go back')
    },
  },
}
</script>
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |------------------------------ | ------ |
| title     | 标题           | string    |  —                            | 返回   |
| content   | 内容           | string    |  —                            | —      |


### Events
| 事件名称   | 说明           | 回调参数   |
|---------- |-------------- |---------- |
| back      | 点击左侧区域触发 | —        |

### Slots
| 事件名称    | 说明         |
|---------- |------------- |
| title     | 标题内容      |
| content   | 内容         |
