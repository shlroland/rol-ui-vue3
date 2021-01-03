---
title: Modal
description: Modal component doc
wrapperClass: modal-demo-wrapper
tags:
  - 'components'
  - 'feedback'
---

# Modal 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。

```vue demo
<template>
  <rol-button type="text" @click="dialogVisible = true">点击打开 Dialog</rol-button>

  <rol-modal title="提示" v-model:visible="dialogVisible" width="30%" :before-close="handleClose">
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <rol-button @click="dialogVisible = false">取 消</rol-button>
        <rol-button type="primary" @click="dialogVisible = false">确 定</rol-button>
      </span>
    </template>
  </rol-modal>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'

export default {
  setup() {
    const dialogVisible = ref(false)
    const instance = getCurrentInstance()

    const handleClose = done => {
      instance.ctx
        .$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }

    return {
      dialogVisible,
      handleClose,
    }
  },
}
</script>
```

### Attributes

| 参数                  | 说明                                                                         | 类型                                 | 可选值 | 默认值 |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| visible(v-model)      | 是否显示 Dialog                                                              | boolean                              | —      | —      |
| title                 | Dialog 的标题，也可通过具名 slot （见下表）传入                              | string                               | —      | —      |
| width                 | Dialog 的宽度                                                                | string                               | —      | 50%    |
| fullscreen            | 是否为全屏 Dialog                                                            | boolean                              | —      | false  |
| top                   | Dialog CSS 中的 margin-top 值                                                | string                               | —      | 15vh   |
| overlay               | 是否需要遮罩层                                                               | boolean                              | —      | true   |
| append-to-body        | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                              | —      | false  |
| lock-scroll           | 是否在 Dialog 出现时将 body 滚动锁定                                         | boolean                              | —      | true   |
| custom-class          | Dialog 的自定义类名                                                          | string                               | —      | —      |
| open-delay            | Dialog 打开的延时时间，单位毫秒                                              | number                               | —      | 0      |
| close-delay           | Dialog 关闭的延时时间，单位毫秒                                              | number                               | —      | 0      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                                           | boolean                              | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                                             | boolean                              | —      | true   |
| show-close            | 是否显示关闭按钮                                                             | boolean                              | —      | true   |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                           | function(done)，done 用于关闭 Dialog | —      | —      |
| center                | 是否对头部和底部采用居中布局                                                 | boolean                              | —      | false  |
| destroy-on-close      | 关闭时销毁 Dialog 中的元素                                                   | boolean                              | —      | false  |

### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称 | 说明                        | 回调参数 |
| -------- | --------------------------- | -------- |
| open     | Dialog 打开的回调           | —        |
| opened   | Dialog 打开动画结束时的回调 | —        |
| close    | Dialog 关闭的回调           | —        |
| closed   | Dialog 关闭动画结束时的回调 | —        |
