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
  <rol-dropdown>
    <span class="rol-dropdown-link"> 下拉菜单 <rol-icon name="chevron-down"></rol-icon></span>
    <template #dropdown>
      <rol-dropdown-menu>
        <rol-dropdown-item>黄金糕</rol-dropdown-item>
        <rol-dropdown-item>狮子头</rol-dropdown-item>
        <rol-dropdown-item>螺蛳粉</rol-dropdown-item>
        <rol-dropdown-item disabled>双皮奶</rol-dropdown-item>
        <rol-dropdown-item divided>蚵仔煎</rol-dropdown-item>
      </rol-dropdown-menu>
    </template>
  </rol-dropdown>
</template>
```
