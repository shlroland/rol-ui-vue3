---
title: Loading
description: Loading component doc
wrapperClass: loading-demo-wrapper
tags:
  - 'components'
  - 'feedback'
---

# Loading 加载

加载数据时显示动效。

## 区域加载

在容器中加载数据时显示。

```vue demo
<template>
  <div v-loading="true" class="w-full h-96 bg-gray-200 flex justify-center items-center">
    等待中
  </div>
</template>
```

## 自定义

可自定义加载文案、图标和背景色。

在绑定了`v-loading`指令的元素上添加`rol-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`rol-loading-spinner`和`rol-loading-background`属性分别用来设定图标类名和背景色值。

```vue demo
<template>
  <div
    v-loading="true"
    rol-loading-text="拼命加载中"
    rol-loading-spinner="spinner"
    rol-loading-background="rgba(0, 0, 0, 0.8)"
    class="w-full h-96 bg-gray-200 flex justify-center items-center"
  >
    等待中
  </div>
</template>
```

## 整页加载

页面数据加载时显示。

当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上）。

```vue demo
<template>
  <rol-button type="primary" @click="openFullScreen1" v-loading.fullscreen="fullscreenLoading">
    指令方式
  </rol-button>
  <rol-button style="margin-left: 1.5em" type="primary" @click="openFullScreen2">
    服务方式
  </rol-button>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
export default {
  setup(props, ctx) {
    const fullscreenLoading = ref(false)
    const $loading = getCurrentInstance().appContext.config.globalProperties.$loading

    const openFullScreen1 = () => {
      fullscreenLoading.value = true
      setTimeout(() => {
        fullscreenLoading.value = false
      }, 2000)
    }

    const openFullScreen2 = () => {
      const loading = $loading({
        lock: true,
        text: 'Loading',
        spinner: 'spinner',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      setTimeout(() => {
        loading.close()
      }, 2000)
    }

    return {
      fullscreenLoading,
      openFullScreen1,
      openFullScreen2,
    }
  },
}
</script>
```

## 服务

Loading 还可以以服务的方式调用。引入 Loading 服务：

```javascript
import { RolLoading } from 'rol-ui'
```

在需要调用时：

```javascript
RolLoading.service(options)
```

其中 `options` 参数为 Loading 的配置项，具体见下表。`LoadingService` 会返回一个 Loading 实例，可通过调用该实例的 `close` 方法来关闭它：

```javascript
let loadingInstance = RolLoading.service(options)
this.$nextTick(() => {
  // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close()
})
```

需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：

```javascript
let loadingInstance1 = RolLoading.service({ fullscreen: true })
let loadingInstance2 = RolLoading.service({ fullscreen: true })
console.log(loadingInstance1 === loadingInstance2)
```

此时调用它们中任意一个的 `close` 方法都能关闭这个全屏 Loading。

### Options

| 参数        | 说明                                                                                                                                       | 类型                                  | 可选值  | 默认值        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ------- | ------------- |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string                         | —       | document.body |
| body        | 同 `v-loading` 指令中的 `body` 修饰符                                                                                                      | boolean                               | —       | false         |
| fullscreen  | 同 `v-loading` 指令中的 `fullscreen` 修饰符                                                                                                | boolean                               | —       | true          |
| text        | 显示在加载图标下方的加载文案                                                                                                               | string                                | —       | —             |
| spinner     | 自定义加载图标类名                                                                                                                         | string                                | —       | —             |
| background  | 遮罩背景色                                                                                                                                 | string                                | —       | —             |
| customClass | Loading 的自定义类名                                                                                                                       | string                                | —       | —             |
