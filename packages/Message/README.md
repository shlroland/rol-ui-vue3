---
title: Message
description: Message component doc
wrapperClass: message-demo-wrapper
tags:
  - 'components'
  - 'feedback'
---

# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。全局注册了一个`$message`方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

```vue demo
<template>
  <rol-button @click="open">打开消息提示</rol-button>
  <rol-button style="margin-left:15px" @click="openVn">VNode</rol-button>
</template>

<script>
import { defineComponent, h, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()

    return {
      open() {
        instance.ctx.$message('只是一条消息提示')
      },
      openVn() {
        instance.ctx.$message({
          message: h('p', null, [h('span', null, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')]),
        })
      },
    }
  },
})
</script>
```

## 不同状态

当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置`type`字段可以定义不同的状态，默认为`info`。此时正文内容以`message`的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入`type`字段的情况下像`open4`那样直接调用。

```vue demo
<template>
  <rol-button @click="open1">成功</rol-button>
  <rol-button style="margin-left:15px" @click="open2">警告</rol-button>
  <rol-button style="margin-left:15px" @click="open3">消息</rol-button>
  <rol-button style="margin-left:15px" @click="open4">错误</rol-button>
</template>

<script>
import { defineComponent, h, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()

    return {
      open1() {
        instance.ctx.$message.success('只是一条成功提示')
      },
      open2() {
        instance.ctx.$message.warning('只是一条警告提示')
      },
      open3() {
        instance.ctx.$message('只是一条消息提示')
      },
      open4() {
        instance.ctx.$message.danger('只是一条错误提示')
      },
    }
  },
})
</script>
```

## 可关闭

默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用`showClose`字段。此外，和 Notification 一样，Message 拥有可控的`duration`，设置`0`为不会被自动关闭，默认为 3000 毫秒。

```vue demo
<template>
  <rol-button @click="open1">成功</rol-button>
  <rol-button style="margin-left:15px" @click="open2">警告</rol-button>
  <rol-button style="margin-left:15px" @click="open3">消息</rol-button>
  <rol-button style="margin-left:15px" @click="open4">错误</rol-button>
</template>

<script>
import { defineComponent, h, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()

    return {
      open1() {
        instance.ctx.$message({
          showClose: true,
          message: '这是一条消息提示',
        })
      },
      open2() {
        instance.ctx.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success',
        })
      },
      open3() {
        instance.ctx.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning',
        })
      },
      open4() {
        instance.ctx.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'danger',
        })
      },
    }
  },
})
</script>
```

## 文字居中

使用 `center` 属性让文字水平居中。

```vue demo
<template>
  <rol-button :plain="true" @click="openCenter">文字居中</rol-button>
</template>

<script>
import { defineComponent, h, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()

    return {
      openCenter() {
        instance.ctx.$message({
          message: '居中的文字',
          center: true,
        })
      },
    }
  },
})
</script>
```

## 使用 HTML 片段

将`dangerouslyUseHTMLString`属性设置为 true，`message` 就会被当作 HTML 片段处理。

```vue demo
<template>
  <rol-button :plain="true" @click="openHTML">使用 HTML 片段</rol-button>
</template>

<script>
import { defineComponent, h, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()

    return {
      openHTML() {
        instance.ctx.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>',
        })
      },
    }
  },
})
</script>
```

Rol-ui 为 `app.config.globalProperties` 添加了全局方法 \$message。因此在 vue instance 中可以采用在 method 中调用 `this.$message` 方法唤起 `RolMessage`。

### 单独引用

```javascript
import { RolMessageWrap } from 'rol-ui'
```

此时调用方法为 `RolMessageWrap(options)`。我们也为每个 type 定义了各自的方法，如 `RolMessageWrap.success(options)`。并且可以调用 `RolMessageWrap.closeAll()` 手动关闭所有实例。

### Options

| 参数                     | 说明                                          | 类型           | 可选值                     | 默认值 |
| ------------------------ | --------------------------------------------- | -------------- | -------------------------- | ------ |
| message                  | 消息文字                                      | string / VNode | —                          | —      |
| type                     | 主题                                          | string         | success/warning/info/error | info   |
| iconClass                | 自定义图标的类名，会覆盖 `type`               | string         | —                          | —      |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理         | boolean        | —                          | false  |
| customClass              | 自定义类名                                    | string         | —                          | —      |
| duration                 | 显示时间, 毫秒。设为 0 则不会自动关闭         | number         | —                          | 3000   |
| showClose                | 是否显示关闭按钮                              | boolean        | —                          | false  |
| center                   | 文字是否居中                                  | boolean        | —                          | false  |
| onClose                  | 关闭时的回调函数, 参数为被关闭的 message 实例 | function       | —                          | —      |
| offset                   | Message 距离窗口顶部的偏移量                  | number         | —                          | 20     |

### 方法

调用 `RolMessageWrap` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |
