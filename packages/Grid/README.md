---
title: Grid
description: Grid component doc
wrapperClass: grid-wrapper-class
tags:
  - 'components'
  - 'layout'
---

# Grid 栅格布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

从堆叠到水平排列。  
使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

```vue demo
<template>
  <rol-row>
    <rol-col :span="24"><div class="content-col bg-purple-500">col-24</div></rol-col>
  </rol-row>
  <rol-row>
    <rol-col :span="12"><div class="content-col bg-purple-300">col-12</div></rol-col>
    <rol-col :span="12"><div class="content-col bg-purple-200">col-12</div></rol-col>
  </rol-row>
  <rol-row>
    <rol-col :span="8"><div class="content-col bg-purple-200">col-8</div></rol-col>
    <rol-col :span="8"><div class="content-col bg-purple-300">col-8</div></rol-col>
    <rol-col :span="8"><div class="content-col bg-purple-200">col-8</div></rol-col>
  </rol-row>
  <rol-row>
    <rol-col :span="6"><div class="content-col bg-purple-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-purple-200">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-purple-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-purple-200">col-6</div></rol-col>
  </rol-row>
  <rol-row>
    <rol-col :span="4"><div class="content-col bg-purple-200">col-4</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-purple-300">col-4</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-purple-200">col-4</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-purple-300">col-4</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-purple-200">col-4</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-purple-300">col-4</div></rol-col>
  </rol-row>
</template>
```

## 分栏间隔

Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。

```vue demo
<template>
  <rol-row :gutter="20">
    <rol-col :span="6"><div class="content-col bg-blue-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-blue-400">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-blue-500">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-blue-600">col-6</div></rol-col>
  </rol-row>
</template>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

```vue demo
<template>
  <rol-row :gutter="20">
    <rol-col :span="16"><div class="content-col bg-orange-300">col-16</div></rol-col>
    <rol-col :span="8"><div class="content-col bg-orange-400">col-8</div></rol-col>
  </rol-row>
  <rol-row :gutter="20">
    <rol-col :span="8"><div class="content-col bg-orange-400">col-8</div></rol-col>
    <rol-col :span="8"><div class="content-col bg-orange-400">col-8</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-orange-500">col-4</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-orange-500">col-4</div></rol-col>
  </rol-row>
  <rol-row :gutter="20">
    <rol-col :span="4"><div class="content-col bg-orange-600">col-4</div></rol-col>
    <rol-col :span="16"><div class="content-col bg-orange-500">col-16</div></rol-col>
    <rol-col :span="4"><div class="content-col bg-orange-400">col-4</div></rol-col>
  </rol-row>
</template>
```

## 分栏偏移

支持偏移指定的栏数。

```vue demo
<template>
  <rol-row :gutter="20">
    <rol-col :span="6"><div class="content-col bg-yellow-300">col-6</div></rol-col>
    <rol-col :span="6" :offset="6"><div class="content-col bg-yellow-400">col-6,offset-6</div></rol-col>
  </rol-row>
  <rol-row :gutter="20">
    <rol-col :span="6" :offset="6"><div class="content-col bg-yellow-500">col-6,offset-6</div></rol-col>
    <rol-col :span="6" :offset="6"><div class="content-col bg-yellow-500">col-6,offset-6</div></rol-col>
  </rol-row>
  <rol-row :gutter="20">
    <rol-col :span="12" :offset="6"><div class="content-col bg-yellow-600">col-12,offset-6</div></rol-col>
  </rol-row>
</template>
```

## `flex`布局

将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 `start`, `center`, `end`, `space-between`, `space-around` 其中的值来定义子元素的排版方式。

```vue demo
<template>
  <rol-row type="flex" class="bg-gray-100">
    <rol-col :span="6"><div class="content-col bg-gray-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-400">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-500">col-6</div></rol-col>
  </rol-row>
  <rol-row type="flex" class="bg-gray-100" justify="center">
    <rol-col :span="6"><div class="content-col bg-gray-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-400">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-500">col-6</div></rol-col>
  </rol-row>
  <rol-row type="flex" class="bg-gray-100" justify="end">
    <rol-col :span="6"><div class="content-col bg-gray-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-400">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-500">col-6</div></rol-col>
  </rol-row>
  <rol-row type="flex" class="bg-gray-100" justify="space-between">
    <rol-col :span="6"><div class="content-col bg-gray-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-400">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-500">col-6</div></rol-col>
  </rol-row>
  <rol-row type="flex" class="bg-gray-100" justify="space-around">
    <rol-col :span="6"><div class="content-col bg-gray-300">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-400">col-6</div></rol-col>
    <rol-col :span="6"><div class="content-col bg-gray-500">col-6</div></rol-col>
  </rol-row>
</template>
```

## 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

```vue demo
<template>
  <rol-row :gutter="10">
    <rol-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="content-col bg-green-200"></div></rol-col>
    <rol-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="content-col bg-green-300"></div></rol-col>
    <rol-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="content-col bg-green-400"></div></rol-col>
    <rol-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="content-col bg-green-500"></div></rol-col>
  </rol-row>
</template>
```

## 左右偏移
通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```vue demo
<template>
  <rol-row>
    <rol-col :span="18" :push="6" :pull="0">
     <div class="content-col bg-fuchsia-500"> col-18,col-push-6</div>
    </rol-col>
    <rol-col :span="6" :pull="18" :push="0">
      <div class="content-col bg-fuchsia-600">col-6,col-pull-18</div>
    </rol-col>
  </rol-row>
</template>
```

## Attributes

### Row

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | top    |
| tag     | 自定义元素标签                        | string | \*                                          | div    |

### Col

| 参数   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                         | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| push   | 栅格向右移动格数                       | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| tag    | 自定义元素标签                         | string                                      | \*     | div    |
