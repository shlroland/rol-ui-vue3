---
title: Avatar
description: Avatar component doc
wrapperClass: avatar-demo-wrapper
tags:
  - 'components'
  - 'data'
---

# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基本用法

通过 `shape` 和 `size` 设置头像的形状和大小。

```vue demo
<template>
  <rol-row class="demo-avatar demo-basic">
    <rol-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <rol-avatar :size="50" :src="circleUrl"></rol-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <rol-avatar :size="size" :src="circleUrl"></rol-avatar>
        </div>
      </div>
    </rol-col>
    <rol-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <rol-avatar shape="square" :size="50" :src="squareUrl"></rol-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <rol-avatar shape="square" :size="size" :src="squareUrl"></rol-avatar>
        </div>
      </div>
    </rol-col>
  </rol-row>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: 'https://i.loli.net/2020/12/29/9PrEtmqQuHcGzi2.png',
      squareUrl: 'https://i.loli.net/2020/12/29/lfd9RzsFKX7k18Q.png',
      sizeList: ['large', 'medium', 'small'],
    }
  },
}
</script>
```

### 展示类型

支持三种类型：图标、图片和字符

```vue demo
<template>
  <rol-row class="demo-type">
    <rol-col :span="8">
      <rol-avatar icon="user"></rol-avatar>
    </rol-col>
    <rol-col :span="8">
      <rol-avatar src="https://i.loli.net/2020/12/29/5kcoKlfEpVNraPm.png" background-color="#fff"></rol-avatar>
    </rol-col>
    <rol-col :span="8">
      <rol-avatar>user</rol-avatar>
    </rol-col>
  </rol-row>
</template>
```

## 图片加载失败的 fallback 行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

```vue demo
<template>
  <div class="demo-type">
    <rol-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </rol-avatar>
  </div>
</template>

<script>
export default {
  methods: {
    errorHandler() {
      return true
    },
  },
}
</script>
```

## 图片如何适应容器框

当展示类型为图片的时候，使用 `fit` 属性定义图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

```vue demo
<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
      <div class="title">{{ fit }}</div>
      <rol-avatar shape="square" :size="100" :fit="fit" :src="url"></rol-avatar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
}
</script>
```

### Attributes

| 参数             | 说明                                                               | 类型          | 可选值                                     | 默认值 |
| ---------------- | ------------------------------------------------------------------ | ------------- | ------------------------------------------ | ------ |
| icon             | 设置头像的图标类型，参考 Icon 组件                                 | string        |                                            |        |
| size             | 设置头像的大小                                                     | number/string | number / large / medium / small            | large  |
| shape            | 设置头像的形状                                                     | string        | circle / square                            | circle |
| background-color | 设置头像的背景颜色                                                 | string        | -                                          | #b5b5b5 |
| src              | 图片头像的资源地址                                                 | string        |                                            |        |
| srcSet           | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 | string        |                                            |        |
| alt              | 描述图像的替换文本                                                 | string        |                                            |        |
| fit              | 当展示类型为图片的时候，设置图片如何适应容器框                     | string        | fill / contain / cover / none / scale-down | cover  |

### Events

| 事件名 | 说明                                                                 | 回调参数   |
| ------ | -------------------------------------------------------------------- | ---------- |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 | (e: Event) |

### Slot

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义头像展示内容 |
