---
title: Button
description: Button component doc
wrapperClass: button-wrapper-class
tags:
  - 'components'
  - 'general'
---

## Button 按钮

常用的操作按钮。

## 基础用法

使用`type`属性来定义 Button 的样式。

```vue demo
<template>
  <rol-row>
    <rol-button>默认按钮</rol-button>
    <rol-button type="primary">主要按钮</rol-button>
    <rol-button type="success">成功按钮</rol-button>
    <rol-button type="info">信息按钮</rol-button>
    <rol-button type="warning">警告按钮</rol-button>
    <rol-button type="danger">危险按钮</rol-button>
    <rol-button type="link">链接按钮</rol-button>
    <rol-button type="text">文字按钮</rol-button>
    <rol-button type="white">空白按钮</rol-button>
    <rol-button type="light">浅色按钮</rol-button>
    <rol-button type="dark">灰黑按钮</rol-button>
    <rol-button type="black">黑色按钮</rol-button>
  </rol-row>
</template>
```

使用`light`属性来定义 Button 的样式。

```vue demo
<template>
  <rol-row>
    <rol-button light>默认按钮</rol-button>
    <rol-button light type="primary">主要按钮</rol-button>
    <rol-button light type="success">成功按钮</rol-button>
    <rol-button light type="info">信息按钮</rol-button>
    <rol-button light type="warning">警告按钮</rol-button>
    <rol-button light type="danger">危险按钮</rol-button>
    <rol-button light type="link">链接按钮</rol-button>
    <rol-button light type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

使用`outlined`属性来定义 Button 的样式。

```vue demo
<template>
  <rol-row>
    <rol-button outlined>默认按钮</rol-button>
    <rol-button outlined type="primary">主要按钮</rol-button>
    <rol-button outlined type="success">成功按钮</rol-button>
    <rol-button outlined type="info">信息按钮</rol-button>
    <rol-button outlined type="warning">警告按钮</rol-button>
    <rol-button outlined type="danger">危险按钮</rol-button>
    <rol-button outlined type="link">链接按钮</rol-button>
    <rol-button outlined type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

使用`fullwidth`属性来定义 Button 的样式。

```vue demo
<template>
  <rol-row>
    <rol-button fullwidth>默认按钮</rol-button>
    <rol-button fullwidth type="primary">主要按钮</rol-button>
    <rol-button fullwidth type="success">成功按钮</rol-button>
    <rol-button fullwidth type="info">信息按钮</rol-button>
    <rol-button fullwidth type="warning">警告按钮</rol-button>
    <rol-button fullwidth type="danger">危险按钮</rol-button>
    <rol-button fullwidth type="link">链接按钮</rol-button>
    <rol-button fullwidth type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

使用`inverted`属性来定义 Button 的样式。

```vue demo
<template>
  <rol-row>
    <rol-button inverted>默认按钮</rol-button>
    <rol-button inverted type="primary">主要按钮</rol-button>
    <rol-button inverted type="success">成功按钮</rol-button>
    <rol-button inverted type="info">信息按钮</rol-button>
    <rol-button inverted type="warning">警告按钮</rol-button>
    <rol-button inverted type="danger">危险按钮</rol-button>
    <rol-button inverted type="link">链接按钮</rol-button>
    <rol-button inverted type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

## 不同的状态

按钮不可用状态

```vue demo
<template>
  <rol-row>
    <rol-button disabled>默认按钮</rol-button>
    <rol-button disabled type="primary">主要按钮</rol-button>
    <rol-button disabled type="success">成功按钮</rol-button>
    <rol-button disabled type="info">信息按钮</rol-button>
    <rol-button disabled type="warning">警告按钮</rol-button>
    <rol-button disabled type="danger">危险按钮</rol-button>
    <rol-button disabled type="link">链接按钮</rol-button>
    <rol-button disabled type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

鼠标悬停状态

```vue demo
<template>
  <rol-row>
    <rol-button hovered>默认按钮</rol-button>
    <rol-button hovered type="primary">主要按钮</rol-button>
    <rol-button hovered type="success">成功按钮</rol-button>
    <rol-button hovered type="info">信息按钮</rol-button>
    <rol-button hovered type="warning">警告按钮</rol-button>
    <rol-button hovered type="danger">危险按钮</rol-button>
    <rol-button hovered type="link">链接按钮</rol-button>
    <rol-button hovered type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

焦点状态

```vue demo
<template>
  <rol-row>
    <rol-button focused>默认按钮</rol-button>
    <rol-button focused type="primary">主要按钮</rol-button>
    <rol-button focused type="success">成功按钮</rol-button>
    <rol-button focused type="info">信息按钮</rol-button>
    <rol-button focused type="warning">警告按钮</rol-button>
    <rol-button focused type="danger">危险按钮</rol-button>
    <rol-button focused type="link">链接按钮</rol-button>
    <rol-button focused type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

激活状态

```vue demo
<template>
  <rol-row>
    <rol-button active>默认按钮</rol-button>
    <rol-button active type="primary">主要按钮</rol-button>
    <rol-button active type="success">成功按钮</rol-button>
    <rol-button active type="info">信息按钮</rol-button>
    <rol-button active type="warning">警告按钮</rol-button>
    <rol-button active type="danger">危险按钮</rol-button>
    <rol-button active type="link">链接按钮</rol-button>
    <rol-button active type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

等待状态

```vue demo
<template>
  <rol-row>
    <rol-button loading>默认按钮</rol-button>
    <rol-button loading type="primary">主要按钮</rol-button>
    <rol-button loading type="success">成功按钮</rol-button>
    <rol-button loading type="info">信息按钮</rol-button>
    <rol-button loading type="warning">警告按钮</rol-button>
    <rol-button loading type="danger">危险按钮</rol-button>
    <rol-button loading type="link">链接按钮</rol-button>
    <rol-button loading type="text">文字按钮</rol-button>
  </rol-row>
</template>
```

## 形状的状态

按钮圆形或者圆角形

```vue demo
<template>
  <rol-row>
    <rol-button shape="rounded">默认按钮</rol-button>
    <rol-button shape="rounded" type="primary">主要按钮</rol-button>
    <rol-button shape="rounded" type="success">成功按钮</rol-button>
    <rol-button shape="rounded" type="info">信息按钮</rol-button>
    <rol-button shape="rounded" type="warning">警告按钮</rol-button>
    <rol-button shape="rounded" type="danger">危险按钮</rol-button>
    <rol-button shape="rounded" type="link">链接按钮</rol-button>
  </rol-row>
  <rol-row>
    <rol-button shape="circle" icon="search"></rol-button>
    <rol-button shape="circle" icon="edit" type="primary"></rol-button>
    <rol-button shape="circle" icon="check" type="success"></rol-button>
    <rol-button shape="circle" icon="envelope" type="info"></rol-button>
    <rol-button shape="circle" icon="exclamation-circle" type="warning"></rol-button>
    <rol-button shape="circle" icon="skull-crossbones" type="danger"></rol-button>
    <rol-button shape="circle" icon="link" type="link"></rol-button>
  </rol-row>
</template>
```

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

```vue demo
<template>
  <rol-row>
    <rol-button-group>
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
  </rol-row>
</template>
```

按钮组默认居左，可以居中或居右

```vue demo
<template>
  <rol-row>
    <rol-button-group position="center">
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
  </rol-row>
  <rol-row>
    <rol-button-group position="right">
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
  </rol-row>
</template>
```

## 按钮大小

按钮组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

```vue demo
<template>
  <rol-row>
    <rol-button size="large">大型按钮</rol-button>
    <rol-button size="medium">中等按钮</rol-button>
    <rol-button>默认按钮</rol-button>
    <rol-button size="small">小型按钮</rol-button>
  </rol-row>
  <rol-row class="buttons-row">
    <rol-button-group group-size="large">
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
    <rol-button-group group-size="medium">
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
    <rol-button-group>
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
    <rol-button-group group-size="small">
      <rol-button type="primary">首页</rol-button>
      <rol-button type="primary">搜索</rol-button>
    </rol-button-group>
  </rol-row>
</template>

<style scoped lang="scss">
.buttons-row {
  display: flex;
  .rol-buttons {
    margin: 0 5px;
  }
}
</style>
```

### Attributes

#### Button

| 参数        | 说明             | 类型                    | 可选值                                                                                 | 默认值 |
| ----------- | ---------------- | ----------------------- | -------------------------------------------------------------------------------------- | ------ |
| size        | 尺寸             | string                  | large / medium / small / mini                                                          | —      |
| type        | 类型             | string                  | primary / success / warning / danger / info / text / link / white / light /dark /black | —      |
| shape       | 形状             | string                  | rounded / circle                                                                       | -      |
| light       | 是否单色按钮     | boolean                 | —                                                                                      | false  |
| fullwidth   | 是否按钮占满宽度 | boolean                 | —                                                                                      | false  |
| inverted    | 是否样式反转     | boolean                 | —                                                                                      | false  |
| isStatic    | 是否静态按钮     | boolean                 | —                                                                                      | false  |
| loading     | 是否加载中状态   | boolean                 | —                                                                                      | false  |
| disabled    | 是否禁用状态     | boolean                 | —                                                                                      | false  |
| hovered     | 是否悬停状态     | boolean                 | —                                                                                      | false  |
| focused     | 是否焦点状态     | boolean                 | —                                                                                      | false  |
| active      | 是否激活状态     | boolean                 | —                                                                                      | false  |
| selected    | 是否选中状态     | boolean                 | —                                                                                      | false  |
| autofocus   | 是否自动焦点     | boolean                 | —                                                                                      | false  |
| icon        | 图标类名         | string / object / array | 具体请参考`Icon`组件                                                                   | —      |
| autofocus   | 是否默认聚焦     | boolean                 | —                                                                                      | false  |
| native-type | 原生 type 属性   | string                  | button / submit / reset                                                                | button |

#### ButtonGroup

| 参数      | 说明       | 类型    | 可选值                        | 默认值 |
| --------- | ---------- | ------- | ----------------------------- | ------ |
| addons    | 是否聚拢   | boolean | -                             | true   |
| position  | 按钮组位置 | string  | center / right                | -      |
| groupSize | 按钮组大小 | string  | large / medium / small / mini | true   |
