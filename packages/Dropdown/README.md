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
    <template #default>
      <span class="rol-dropdown-link"> 下拉菜单 <rol-icon name="chevron-down"></rol-icon></span>
    </template>
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
  <div class="split-wrapper">
    <rol-dropdown>
      <rol-button type="primary"> 更多菜单<rol-icon name="chevron-down"></rol-icon> </rol-button>
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
  </div>
</template>
```

## 菜单隐藏方式

可以`hide-on-click`属性来配置。

```vue demo
<template>
  <rol-dropdown :hide-on-click="false">
    <template #default>
      <span class="rol-dropdown-link"> 下拉菜单 <rol-icon name="chevron-down"></rol-icon></span>
    </template>
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

<style scoped>
.rol-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #409eff;
}
</style>
```

## 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

```vue demo
<template>
  <rol-dropdown @command="handleCommand">
    <template #default>
      <span class="rol-dropdown-link"> 下拉菜单 <rol-icon name="chevron-down"></rol-icon></span>
    </template>
    <template #dropdown>
      <rol-dropdown-menu>
        <rol-dropdown-item command="黄金糕">黄金糕</rol-dropdown-item>
        <rol-dropdown-item command="狮子头">狮子头</rol-dropdown-item>
        <rol-dropdown-item command="螺蛳粉">螺蛳粉</rol-dropdown-item>
        <rol-dropdown-item command="双皮奶" disabled>双皮奶</rol-dropdown-item>
        <rol-dropdown-item command="蚵仔煎" divided>蚵仔煎</rol-dropdown-item>
      </rol-dropdown-menu>
    </template>
  </rol-dropdown>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command)
    },
  },
}
</script>
```

## 不同尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

```vue demo
<template>
  <div class="split-wrapper">
    <rol-dropdown size="large" split-button type="primary">
      大型菜单
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
    <rol-dropdown size="medium" split-button type="primary">
      中型尺寸
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
    <rol-dropdown split-button type="primary">
      默认尺寸
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
    <rol-dropdown size="small" split-button type="primary">
      小型尺寸
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
  </div>
</template>
```

### Dropdown Attributes

| 参数          | 说明                                                                                                     | 类型    | 可选值                                               | 默认值     |
| ------------- | -------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------- | ---------- |
| type          | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)                                     | string  | —                                                    | —          |
| size          | 菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效                                               | string  | medium / small / large                                | —          |
| split-button  | 下拉触发元素呈现为按钮组                                                                                 | boolean | —                                                    | false      |
| placement     | 菜单弹出位置                                                                                             | string  | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom-end |
| trigger       | 触发下拉的行为                                                                                           | string  | hover, click                                         | hover      |
| hide-on-click | 是否在点击菜单项后隐藏菜单                                                                               | boolean | —                                                    | true       |
| show-timeout  | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                       | number  | —                                                    | 250        |
| hide-timeout  | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）                                                       | number  | —                                                    | 150        |
| tabindex      | Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number  | —                                                    | 0          |

### Dropdown Slots

| Name     | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| —        | 触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件 |
| dropdown | 下拉列表，通常是 `<rol-dropdown-menu>` 组件                 |

### Dropdown Events

| 事件名称       | 说明                                          | 回调参数                      |
| -------------- | --------------------------------------------- | ----------------------------- |
| click          | `split-button` 为 true 时，点击左侧按钮的回调 | —                             |
| command        | 点击菜单项触发的事件回调                      | dropdown-item 的指令          |
| visible-change | 下拉框出现/隐藏时触发                         | 出现则为 true，隐藏则为 false |

### Dropdown Menu Item Attributes

| 参数     | 说明       | 类型                 | 可选值 | 默认值 |
| -------- | ---------- | -------------------- | ------ | ------ |
| command  | 指令       | string/number/object | —      | —      |
| disabled | 禁用       | boolean              | —      | false  |
| divided  | 显示分割线 | boolean              | —      | false  |
