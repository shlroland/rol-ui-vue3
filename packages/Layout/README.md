---
title: Layout
description: Layout component doc
wrapperClass: layout-wrapper-class
tags:
  - 'components'
  - 'layout'
---

# Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<rol-container>`：外层容器。当子元素中包含 `<rol-header>` 或 `<rol-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<rol-header>`：顶栏容器。

`<rol-aside>`：侧边栏容器。

`<rol-main>`：主要区域容器。

`<rol-footer>`：底栏容器。

## 常见布局

```vue demo
<template>
 <rol-container class="bg-cyan-100">
  <rol-header class="bg-cyan-400">Header</rol-header>
  <rol-main class="bg-cyan-500 ">Main</rol-main>
</rol-container>

<rol-container class="bg-orange-100">
  <rol-header class="bg-orange-300">Header</rol-header>
  <rol-main class="bg-orange-400">Main</rol-main>
  <rol-footer class="bg-orange-500">Footer</rol-footer>
</rol-container>

<rol-container class="bg-yellow-100">
  <rol-aside width="200px" class="bg-yellow-300">Aside</rol-aside>
  <rol-main class="bg-yellow-400">Main</rol-main>
</rol-container>

<rol-container class="bg-green-100">
  <rol-header class="bg-green-300">Header</rol-header>
  <rol-container class="bg-green-100">
    <rol-aside width="200px" class="bg-green-400">Aside</rol-aside>
    <rol-main class="bg-green-500">Main</rol-main>
  </rol-container>
</rol-container>

<rol-container >
  <rol-header class="bg-teal-300">Header</rol-header>
  <rol-container>
    <rol-aside width="200px" class="bg-teal-600">Aside</rol-aside>
    <rol-container>
      <rol-main class="bg-teal-500">Main</rol-main>
      <rol-footer class="bg-teal-400" height="4rem">Footer</rol-footer>
    </rol-container>
  </rol-container>
</rol-container>

<rol-container>
  <rol-aside width="200px" class="bg-blue-600">Aside</rol-aside>
  <rol-container>
    <rol-header class="bg-blue-300" height="4rem">Header</rol-header>
    <rol-main class="bg-blue-800">Main</rol-main>
  </rol-container>
</rol-container>

<rol-container>
  <rol-aside width="200px" class="bg-purple-300">Aside</rol-aside>
  <rol-container>
    <rol-header class="bg-purple-100" height="4rem">Header</rol-header>
    <rol-main class="bg-purple-500">Main</rol-main>
    <rol-footer class="bg-purple-600" height="4rem">Footer</rol-footer>
  </rol-container>
</rol-container>
</template>
```

## Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `rol-header` 或 `rol-footer` 时为 vertical，否则为 horizontal |

## Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

## Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

## Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |