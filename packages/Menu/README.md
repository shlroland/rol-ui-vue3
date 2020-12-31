---
title: Menu
description: Menu component doc
wrapperClass: menu-demo-wrapper
tags:
  - 'components'
  - 'navigation'
---

# Menu 垂直菜单

当数据量过多时，使用分页分解数据。

## 侧栏

垂直菜单，可内嵌子菜单。

```vue demo
<template>
  <rol-row class="tac">
    <rol-col :span="6">
      <h5>默认颜色</h5>
      <rol-menu default-active="2" class="rol-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <rol-submenu index="1">
          <template #title>
            <rol-icon name="compass"></rol-icon>
            <span>导航一</span>
          </template>
          <rol-menu-item-group>
            <template #title>分组一</template>
            <rol-menu-item index="1-1">选项1</rol-menu-item>
            <rol-menu-item index="1-2">选项2</rol-menu-item>
          </rol-menu-item-group>
          <rol-menu-item-group title="分组2">
            <rol-menu-item index="1-3">选项3</rol-menu-item>
          </rol-menu-item-group>
          <rol-submenu index="1-4">
            <template #title>选项4</template>
            <rol-menu-item index="1-4-1">选项1</rol-menu-item>
          </rol-submenu>
        </rol-submenu>
        <rol-menu-item index="2">
          <rol-icon name="bars"></rol-icon>
          <template #title>
            <span>导航二</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <rol-icon name="file-alt"></rol-icon>

          <template #title>
            <span>导航三</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="4">
          <rol-icon name="sliders-h"></rol-icon>
          <template #title>
            <span>导航四</span>
          </template>
        </rol-menu-item>
      </rol-menu>
    </rol-col>
    <rol-col :span="6" style="margin-left: 15px;">
      <h5>自定义颜色</h5>
      <rol-menu
        default-active="2"
        class="rol-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-background-color="#ffdd57"
      >
        <rol-submenu index="1">
          <template #title>
            <rol-icon name="compass"></rol-icon>
            <span>导航一</span>
          </template>
          <rol-menu-item-group>
            <template #title>分组一</template>
            <rol-menu-item index="1-1">选项1</rol-menu-item>
            <rol-menu-item index="1-2">选项2</rol-menu-item>
          </rol-menu-item-group>
          <rol-menu-item-group title="分组2">
            <rol-menu-item index="1-3">选项3</rol-menu-item>
          </rol-menu-item-group>
          <rol-submenu index="1-4">
            <template #title>选项4</template>
            <rol-menu-item index="1-4-1">选项1</rol-menu-item>
          </rol-submenu>
        </rol-submenu>
        <rol-menu-item index="2">
          <i class="rol-icon-menu"></i>
          <rol-icon name="bars"></rol-icon>
          <span slot="title">导航二</span>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <rol-icon name="file-alt"></rol-icon>
          <span slot="title">导航三</span>
        </rol-menu-item>
        <rol-menu-item index="4">
          <rol-icon name="sliders-h"></rol-icon>
          <span slot="title">导航四</span>
        </rol-menu-item>
      </rol-menu>
    </rol-col>
  </rol-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
```

## 折叠

```vue demo
<template>
  <rol-row class="tac">
    <rol-col :span="6">
      <h5>默认颜色</h5
      ><span>
        <rol-button @click="changeCollapse(false)">展开</rol-button>
        <rol-button @click="changeCollapse(true)">收起</rol-button>
      </span>
      <rol-menu
        default-active="2"
        class="rol-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <rol-submenu index="1">
          <template #title>
            <rol-icon name="compass"></rol-icon>
            <span>导航一</span>
          </template>
          <rol-menu-item-group>
            <template #title>分组一</template>
            <rol-menu-item index="1-1">选项1</rol-menu-item>
            <rol-menu-item index="1-2">选项2</rol-menu-item>
          </rol-menu-item-group>
          <rol-menu-item-group title="分组2">
            <rol-menu-item index="1-3">选项3</rol-menu-item>
          </rol-menu-item-group>
          <rol-submenu index="1-4">
            <template #title>选项4</template>
            <rol-menu-item index="1-4-1">选项1</rol-menu-item>
          </rol-submenu>
        </rol-submenu>
        <rol-menu-item index="2">
          <rol-icon name="bars"></rol-icon>
          <template #title>
            <span>导航二</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="3" disabled>
          <rol-icon name="file-alt"></rol-icon>

          <template #title>
            <span>导航三</span>
          </template>
        </rol-menu-item>
        <rol-menu-item index="4">
          <rol-icon name="sliders-h"></rol-icon>
          <template #title>
            <span>导航四</span>
          </template>
        </rol-menu-item>
      </rol-menu>
    </rol-col>
  </rol-row>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    changeCollapse(flag) {
      this.isCollapse = flag
    },
  },
}
</script>
```

### Menu Attribute

| 参数                | 说明                                                                                | 类型    | 可选值        | 默认值  |
| ------------------- | ----------------------------------------------------------------------------------- | ------- | ------------- | ------- |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                                | boolean | —             | false   |
| background-color    | 菜单的背景色（仅支持 hex 格式）                                                     | string  | —             | #ffffff |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                                                   | string  | —             | #303133 |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）                                           | string  | —             | #409EFF |
| default-active      | 当前激活菜单的 index                                                                | string  | —             | —       |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                                                 | Array   | —             | —       |
| unique-opened       | 是否只保持一个子菜单的展开                                                          | boolean | —             | false   |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)                                | string  | hover / click | hover   |
| router              | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —             | false   |
| collapse-transition | 是否开启折叠动画                                                                    | boolean | —             | true    |

### Menu Methods

| 方法名称 | 说明                | 参数                                |
| -------- | ------------------- | ----------------------------------- |
| open     | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close    | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events

| 事件名称 | 说明                | 回调参数                                                                   |
| -------- | ------------------- | -------------------------------------------------------------------------- |
| select   | 菜单激活回调        | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path              |
| open     | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close    | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |

### SubMenu Attribute

| 参数                  | 说明                                                                     | 类型        | 可选值 | 默认值                                 |
| --------------------- | ------------------------------------------------------------------------ | ----------- | ------ | -------------------------------------- |
| index                 | 唯一标志                                                                 | string/null | —      | null                                   |
| popper-class          | 弹出菜单的自定义类名                                                     | string      | —      | —                                      |
| show-timeout          | 展开 sub-menu 的延时                                                     | number      | —      | 300                                    |
| hide-timeout          | 收起 sub-menu 的延时                                                     | number      | —      | 300                                    |
| disabled              | 是否禁用                                                                 | boolean     | —      | false                                  |
| popper-append-to-body | 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性 | boolean     | —      | 一级子菜单：true / 非一级子菜单：false |

### Menu-Item Attribute

| 参数     | 说明                | 类型    | 可选值 | 默认值 |
| -------- | ------------------- | ------- | ------ | ------ |
| index    | 唯一标志            | string  | —      | —      |
| route    | Vue Router 路径对象 | Object  | —      | —      |
| disabled | 是否禁用            | boolean | —      | false  |

### Menu-Group Attribute

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| title | 分组标题 | string | —      | —      |
