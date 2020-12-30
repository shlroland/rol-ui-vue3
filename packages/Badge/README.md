---
title: Badge
description: Badge component doc
wrapperClass: badge-demo-wrapper
tags:
  - 'components'
  - 'data'
---

# Badge 标记

出现在按钮、图标旁的数字或状态标记。

## 基本用法

定义`value`属性，它接受`Number`或者`String`。

```vue demo
<template>
  <rol-badge :value="12" class="demo-grid">
    <rol-button>评论</rol-button>
  </rol-badge>
  <rol-badge :value="3" class="demo-grid">
    <rol-button>回复</rol-button>
  </rol-badge>
  <rol-badge :value="1" class="demo-grid" type="primary">
    <rol-button>评论</rol-button>
  </rol-badge>
  <rol-badge :value="2" class="demo-grid" type="warning">
    <rol-button>回复</rol-button>
  </rol-badge>

  <rol-dropdown trigger="click">
    <span class="rol-dropdown-link">
      点我查看
    </span>
    <template #dropdown>
      <rol-dropdown-menu>
        <rol-dropdown-item class="clearfix">
          评论
          <rol-badge class="mark" :value="12" />
        </rol-dropdown-item>
        <rol-dropdown-item class="clearfix">
          回复
          <rol-badge class="mark" :value="3" />
        </rol-dropdown-item>
      </rol-dropdown-menu>
    </template>
  </rol-dropdown>
</template>
```

## 最大值

可自定义最大值。

由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```vue demo
<template>
  <rol-badge :value="200" :max="99" class="demo-grid">
    <rol-button>评论</rol-button>
  </rol-badge>
  <rol-badge :value="100" :max="10" class="demo-grid">
    <rol-button>回复</rol-button>
  </rol-badge>
</template>
```

## 自定义内容

定义`value`为`String`类型是时可以用于显示自定义文本。

```vue demo
<template>
  <rol-badge value="new" class="demo-grid">
    <rol-button>评论</rol-button>
  </rol-badge>
  <rol-badge value="hot" class="demo-grid">
    <rol-button>回复</rol-button>
  </rol-badge>
</template>
```

## 小红点

除了数字外，设置`is-dot`属性，它接受一个`Boolean`。

```vue demo
<template>
  <rol-badge is-dot class="demo-grid">数据查询</rol-badge>
  <rol-badge is-dot class="demo-grid">
    <rol-button class="share-button" icon="external-link-alt" type="primary"></rol-button>
  </rol-badge>
</template>
```

### Attributes

| 参数   | 说明                                                         | 类型           | 可选值                                      | 默认值 |
| ------ | ------------------------------------------------------------ | -------------- | ------------------------------------------- | ------ |
| value  | 显示值                                                       | string, number | —                                           | —      |
| max    | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | number         | —                                           | —      |
| is-dot | 小圆点                                                       | boolean        | —                                           | false  |
| hidden | 隐藏 badge                                                   | boolean        | —                                           | false  |
| type   | 类型                                                         | string         | primary / success / warning / danger / info | —      |
