---
title: Icon
description: Icon component doc
wrapperClass: icon-wrapper-class
tags:
  - 'components'
  - 'general'
---

# Icon 图标

- `rol-ui`的图表库使用的是`fontawesome free`，已经集成`fas`,`fab`,`far`三个图标集。
- 具体图标列表请见，[fontawesome icons list](https://fontawesome.com/icons?d=gallery&m=free)。

## 基础用法

可以使用`String`,`Array`,`Object`三种数据类型定义图标。

> `String`
>
> 默认使用`fas`图标集

> `Array`
>
> icon[0]为图标集，可选`fas`,`fab`,`far`。
>
> icon[1]为图标类型

> `Object`
>
> 必须包括`prefix`(图标集)和`iconName`(图标类型)两个属性

```vue demo
<template>
  <rol-row>
    <rol-icon name="smile"></rol-icon>
    <rol-icon name="poo"></rol-icon>
    <rol-icon name="grin-squint-tears"></rol-icon>
  </rol-row>
  <rol-row>
    <rol-icon :name="['far', 'smile']"></rol-icon>
    <rol-icon :name="['far', 'grin-beam-sweat']"></rol-icon>
    <rol-icon :name="['far', 'grin-squint-tears']"></rol-icon>
  </rol-row>
  <rol-row>
    <rol-icon :name="{ prefix: 'fab', iconName: 'yarn' }"></rol-icon>
    <rol-icon :name="{ prefix: 'fab', iconName: 'vuejs' }"></rol-icon>
    <rol-icon :name="{ prefix: 'fab', iconName: 'node-js' }"></rol-icon>
  </rol-row>
</template>
```

## 基础属性

### 定义图标大小

具体定义见[size list](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)

```vue demo
<template>
  <rol-row>
    <rol-icon name="grin-squint-tears" size="lg"></rol-icon>
    <rol-icon name="grin-squint-tears" size="sm"></rol-icon>
    <rol-icon name="grin-squint-tears" size="xs"></rol-icon>
  </rol-row>
  <rol-row>
    <rol-icon name="smile" size="3x"></rol-icon>
    <rol-icon name="smile" size="2x"></rol-icon>
    <rol-icon name="smile" size="1x"></rol-icon>
  </rol-row>
</template>
```

### 固定宽度图标

具体定义见[fixed-width-icons](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)

```vue demo
<template>
  <rol-row>
    <rol-icon name="spinner" fixed-width></rol-icon>
  </rol-row>
</template>
```

### 旋转与翻转图标

具体定义见[rotating-icons](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons)

```vue demo
<template>
  <rol-row>
    <rol-icon name="snowboarding"></rol-icon>
    <rol-icon name="snowboarding" rotation="90"></rol-icon>
    <rol-icon name="snowboarding" rotation="180"></rol-icon>
    <rol-icon name="snowboarding" rotation="270"></rol-icon>
    <rol-icon name="snowboarding" flip="horizontal"></rol-icon>
    <rol-icon name="snowboarding" flip="vertical"></rol-icon>
    <rol-icon name="snowboarding" flip="both"></rol-icon>
  </rol-row>
</template>
```

### 图标动画

具体定义见[animating-icons](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons)

```vue demo
<template>
  <rol-row>
    <rol-icon name="spinner" spin></rol-icon>
    <rol-icon name="circle-notch" spin></rol-icon>
    <rol-icon name="sync" spin></rol-icon>
    <rol-icon name="cog" spin></rol-icon>
    <rol-icon name="spinner" pulse></rol-icon>
    <rol-icon name="stroopwafel" spin></rol-icon>
  </rol-row>
</template>
```

### 图标居左居右

具体定义见[pulled-icons](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons)

```vue demo
<template>
  <rol-row>
    <rol-icon name="quote-left" size="2x" pull="left"></rol-icon>
    Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but
    that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on,
    boats against the current, borne back ceaselessly into the past.
  </rol-row>
  <rol-divider />
  <rol-row>
    <rol-icon name="quote-right" size="2x" pull="right"></rol-icon>
    Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but
    that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on,
    boats against the current, borne back ceaselessly into the past.
  </rol-row>
</template>
```

边框图标

```vue demo
<template>
  <rol-row>
    <rol-icon name="angry" border></rol-icon>
    <rol-icon name="apple-alt" border></rol-icon>
    <rol-icon name="baseball-ball" border></rol-icon>
    <rol-icon name="spinner" border></rol-icon>
  </rol-row>
</template>
```

翻转图标颜色

```vue demo
<template>
  <rol-row class="inverse-background">
    <rol-icon name="smile" inverse></rol-icon>
    <rol-icon name="poo" inverse></rol-icon>
    <rol-icon name="grin-squint-tears" inverse></rol-icon>
  </rol-row>
</template>

<style>
.inverse-background {
  background-color: #999;
}
</style>
```

## 高级属性

### 图标变化

使用`grow-#`,`shrink-#`,`up-#`,`down-#`,`left-#`,`right-#`,`rotate-#`,`flip-v`,`flip-h`进行图标变化(#代表数字)  
也可以传递`Object`,例如`{ rotate: 42 }`

具体定义见[power-transforms](https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms)

#### 变大变小

```vue demo
<template>
  <rol-row>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="shrink-8"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="grow-6"></rol-icon>
  </rol-row>
</template>
```

#### 位置变化

```vue demo
<template>
  <rol-row>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="shrink-8"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="shrink-8 up-6"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="shrink-8 right-6"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="shrink-8 down-6"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="shrink-8 left-6"></rol-icon>
  </rol-row>
</template>
```

#### 旋转与翻转

```vue demo
<template>
  <rol-row>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="rotate-90"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="rotate-180"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="rotate-270"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="rotate-30"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="rotate--30"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="flip-v"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="flip-h"></rol-icon>
    <rol-icon name="seedling" size="4x" style="background:MistyRose" transform="flip-v flip-h"></rol-icon>
  </rol-row>
</template>
```

### 图标遮罩

使用`mask`属性可以给图标添加遮罩，值与 name 属性相同  
具体定义见[masking](https://fontawesome.com/how-to-use/on-the-web/styling/masking)

```vue demo
<template>
  <rol-row>
    <rol-icon name="pencil-alt" transform="shrink-10 up-.5" style="background:MistyRose" mask="comment"></rol-icon>
    <rol-icon
      :name="['fab', 'facebook-f']"
      transform="shrink-3.5 down-1.6 right-1.25"
      style="background:MistyRose"
      mask="circle"
    ></rol-icon>
    <rol-icon name="headphones" transform="shrink-6" style="background:MistyRose" mask="square"></rol-icon>
    <rol-icon name="mask" transform="shrink-3 up-1" style="background:MistyRose" mask="circle"></rol-icon>
  </rol-row>
</template>
```

### 图标标识

使用`symbol`属性可以指代一个图标，再使用`<use>`标签进行复用

```vue demo
<template>
  <rol-row>
    <rol-icon name="edit" symbol="edit"></rol-icon>
    <span class="symbol-icon">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="symbol-svg"
      >
        <use xlink:href="#edit"></use>
      </svg>
    </span>
  </rol-row>
  <rol-row>
    <rol-icon :name="['fab', 'js']" symbol="javascript"></rol-icon>
    <span class="symbol-icon">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="symbol-svg"
      >
        <use xlink:href="#javascript"></use>
      </svg>
    </span>
  </rol-row>
</template>

<style lang="scss" scoped>
.symbol-icon {
  display: inline-block;
  margin: 5px;
  width: 30px;
  height: 30px;
}
</style>
```

## Attributes

### Icon

| 参数        | 说明           | 类型                    | 可选值                                                                                              | 默认值 |
| ----------- | -------------- | ----------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| name        | 图标类型       | string / array / object | -                                                                                                   | —      |
| size        | 图标大小       | string                  | xs / sm / lg / 2x / 3x /4x /5x /6x /7x /8x /9x /10x/                                                | —      |
| fixed-width | 固定宽度       | boolean                 | -                                                                                                   | false  |
| rotation    | 图标旋转       | number                  | —                                                                                                   | 0      |
| flip        | 图标翻转       | string                  | horizontal / vertical / both                                                                        | -      |
| spin        | 旋转动画       | boolean                 | —                                                                                                   | false  |
| pulse       | 脉冲动画       | boolean                 | —                                                                                                   | false  |
| pull        | 居左居右       | string                  | left / right                                                                                        | -      |
| border      | 边框图标       | boolean                 | —                                                                                                   | false  |
| inverse     | 翻转图标颜色   | boolean                 | —                                                                                                   | false  |
| transform   | 图标变化       | string / object         | `grow-#` / `shrink-#` / `up-#` / `down-#` / `left-#` / `right-#` / `rotate-#` / `flip-v` / `flip-h` | -      |
| mask        | 图标遮罩       | string / array / object | —                                                                                                   | -      |
| symbol      | 图标标识       | string                  | —                                                                                                   | -  |
