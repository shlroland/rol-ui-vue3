---
title: Notification
description: Notification component doc
wrapperClass: notification-demo-wrapper
tags:
  - 'components'
  - 'feedback'
---

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基本用法

适用性广泛的通知栏

Notification 组件提供通知功能，全局注册了`$notify`方法，接收一个`options`字面量参数，在最简单的情况下，你可以设置`title`字段和`message`字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置`duration`，可以控制关闭的时间间隔，特别的是，如果设置为`0`，则不会自动关闭。注意：`duration`接收一个`Number`，单位为毫秒，默认为`4500`。

```vue demo
<template>
  <rol-button @click="open1">
    可自动关闭
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open2">
    不会自动关闭
  </rol-button>
</template>

<script>
import { h, getCurrentInstance } from 'vue'

export default {
  setup() {
   const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const open1 = () => {
      globalFuncs.$notify({
        title: '标题名称',
        message: h(
          'i',
          { style: 'color: teal' },
          '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案',
        ),
      })
    }

    const open2 = () => {
      globalFuncs.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0,
      })
    }

    return {
      open1,
      open2,
    }
  },
}
</script>
```

## 带有倾向性

Notification 组件准备了四种通知类型：`success`, `warning`, `info`, `error`。通过`type`字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入`type`字段的情况下像`open3`和`open4`那样直接调用。

```vue demo
<template>
  <rol-button @click="open1">
    成功
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open2">
    警告
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open3">
    消息
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open4">
    错误
  </rol-button>
</template>

<script>
import { h, getCurrentInstance } from 'vue'

export default {
  setup() {
    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const open1 = () => {
      globalFuncs.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success',
      })
    }

    const open2 = () => {
      globalFuncs.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning',
      })
    }

    const open3 = () => {
      globalFuncs.$notify({
        title: '消息',
        message: '这是一条消息的提示消息',
      })
    }

    const open4 = () => {
      globalFuncs.$notify({
        title: '错误',
        message: '这是一条错误的提示消息',
        type: 'danger',
      })
    }

    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
}
</script>
```

## 自定义弹出位置

使用`position`属性定义 Notification 的弹出位置，支持四个选项：`top-right`、`top-left`、`bottom-right`、`bottom-left`，默认为`top-right`。

```vue demo
<template>
  <rol-button @click="open1">
    右上角
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open2">
    右下角
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open3">
    左下角
  </rol-button>
  <rol-button style="margin-left: 15px" @click="open4">
    左上角
  </rol-button>
</template>

<script>
import { h, getCurrentInstance } from 'vue'

export default {
  setup() {
    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const open1 = () => {
      globalFuncs.$notify({
        title: '自定义位置',
        message: '右上角弹出的消息',
      })
    }

    const open2 = () => {
      globalFuncs.$notify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right',
      })
    }

    const open3 = () => {
      globalFuncs.$notify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left',
      })
    }

    const open4 = () => {
      globalFuncs.$notify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left',
      })
    }

    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
}
</script>
```

## 带有偏移

Notification 提供设置偏移量的功能，通过设置 `offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。

```vue demo
<template>
  <rol-button @click="open1">
    偏移的消息
  </rol-button>
</template>

<script>
import { h, getCurrentInstance } from 'vue'

export default {
  setup() {
    const globalFuncs = getCurrentInstance().appContext.config.globalProperties

    const open1 = () => {
      globalFuncs.$notify({
        title: '偏移',
        message: '这是一条带有偏移的提示消息',
        offset: 100,
      })
    }

    return {
      open1,
    }
  },
}
</script>
```

## 全局方法

Rol-ui 为 `app.config.globalProperties` 添加了全局方法 `$notify`。因此在 vue instance 中可以采用本页面中的方式调用 Notification。

### 单独引用

```javascript
import { RolNotifyWrap } from 'rol-ui'
```

此时调用方法为 `RolNotifyWrap(options)`。我们也为每个 type 定义了各自的方法，如 `RolNotifyWrap.success(options)`。并且可以调用 `RolNotifyWrap.closeAll()` 手动关闭所有实例。

### Options

| 参数                     | 说明                                                                     | 类型             | 可选值                                      | 默认值    |
| ------------------------ | ------------------------------------------------------------------------ | ---------------- | ------------------------------------------- | --------- |
| title                    | 标题                                                                     | string           | —                                           | —         |
| message                  | 说明文字                                                                 | string/Vue.VNode | —                                           | —         |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理                                    | boolean          | —                                           | false     |
| type                     | 主题样式，如果不在可选值内将被忽略                                       | string           | success/warning/info/error                  | —         |
| iconClass                | 自定义图标的类名。若设置了 `type`，则 `iconClass` 会被覆盖               | string           | —                                           | —         |
| customClass              | 自定义类名                                                               | string           | —                                           | —         |
| duration                 | 显示时间, 毫秒。设为 0 则不会自动关闭                                    | number           | —                                           | 4500      |
| position                 | 自定义弹出位置                                                           | string           | top-right/top-left/bottom-right/bottom-left | top-right |
| showClose                | 是否显示关闭按钮                                                         | boolean          | —                                           | true      |
| onClose                  | 关闭时的回调函数                                                         | function         | —                                           | —         |
| onClick                  | 点击 Notification 时的回调函数                                           | function         | —                                           | —         |
| offset                   | 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 | number           | —                                           | 0         |

### 方法

调用 `RolNotifyWrap` 或 `this.$notify` 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Notification |
