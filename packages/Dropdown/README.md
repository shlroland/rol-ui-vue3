---
title: Dropdown
description: Dropdown component doc
wrapperClass: dropdown-demo-wrapper
tags:
  - 'components'
  - 'navigation'
---

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

```vue demo
<template>
</template>

<style scoped>
.rol-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #409eff;
}
</style>
```

## 触发对象

设置`split-button`属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为`true`即可。

```vue demo
<template>
<rol-dropdown split-button type="primary">
  更多菜单
  <template #dropdown>
    <rol-dropdown-menu>
      <rol-dropdown-item>黄金糕</rol-dropdown-item>
      <rol-dropdown-item>狮子头</rol-dropdown-item>
      <rol-dropdown-item>螺蛳粉</rol-dropdown-item>
      <rol-dropdown-item>双皮奶</rol-dropdown-item>
      <rol-dropdown-item>蚵仔煎</rol-dropdown-item>
    </rol-dropdown-menu>
  </template>
</rol-dropdown>
</template>
```
