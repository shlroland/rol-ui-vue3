---
title: Button
description: Button component doc
tags:
  - "components"
---

# Button

This is Button component

## Install

```js
# 使用 npm
import ui from "@vitec/button";

createApp(App).use(ui);
```

## Basic

```vue demo
<template>
  <rol-button>默认按钮</rol-button>
  <rol-button type="primary">主要按钮</rol-button>
  <rol-button type="success">成功按钮</rol-button>
  <rol-button type="info">信息按钮</rol-button>
  <rol-button type="warning">警告按钮</rol-button>
  <rol-button type="danger">危险按钮</rol-button>
</template>
```