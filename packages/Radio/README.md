---
title: Radio
description: Radio component doc
wrapperClass: Checkbox-wrapper-class
tags:
  - 'components'
  - 'form'
---

# Radio 单选框

在一组备选项中进行单选

## 基本用法

最简单的用法
设置 v-model 绑定变量，选中意味着变量的值为相应 Radio label 属性的值  
label 可以是`String`、`Number`或`Boolean`。

```vue demo
<template>
  <rol-radio v-model="radio" label="1">备选项</rol-radio>
  <rol-radio v-model="radio" label="2">备选项</rol-radio>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const radio = ref('1')
    return {
      radio,
    }
  },
}
</script>
```

## 禁用状态

设置`disabled`禁用 Radio 组件

```vue demo
<template>
  <rol-radio disabled v-model="radio" label="禁用">备选项</rol-radio>
  <rol-radio disabled v-model="radio" label="选中且禁用">备选项</rol-radio>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const radio = ref('选中且禁用')
    return {
      radio,
    }
  },
}
</script>
```

## 单选框组

结合`rol-radio-group`元素和子元素`rol-radio`可以实现单选组  
绑定`v-model`，在`rol-radio`中设置好 label

```vue demo
<template>
  <rol-radio-group v-model="radio">
    <rol-radio :label="3">备选项1</rol-radio>
    <rol-radio :label="6">备选项2</rol-radio>
    <rol-radio :label="9">备选项3</rol-radio>
  </rol-radio-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const radio = ref('6')
    return {
      radio,
    }
  },
}
</script>
```

## 按钮样式

按钮样式的单选组合

```vue demo
<template>
  <div>
    <rol-radio-group v-model="radio1" size="large">
      <rol-radio-button label="苹果"></rol-radio-button>
      <rol-radio-button label="葡萄"></rol-radio-button>
      <rol-radio-button label="柚子"></rol-radio-button>
      <rol-radio-button label="火龙果"></rol-radio-button>
    </rol-radio-group>
  </div>
  <div class="mt-8">
    <rol-radio-group v-model="radio2" size="medium">
      <rol-radio-button label="苹果"></rol-radio-button>
      <rol-radio-button label="葡萄"></rol-radio-button>
      <rol-radio-button label="柚子"></rol-radio-button>
      <rol-radio-button label="火龙果"></rol-radio-button>
    </rol-radio-group>
  </div>
  <div class="mt-8">
    <rol-radio-group v-model="radio3">
      <rol-radio-button label="苹果"></rol-radio-button>
      <rol-radio-button label="葡萄" disabled></rol-radio-button>
      <rol-radio-button label="柚子"></rol-radio-button>
      <rol-radio-button label="火龙果"></rol-radio-button>
    </rol-radio-group>
  </div>
  <div class="mt-8">
    <rol-radio-group v-model="radio4" size="small" disabled>
      <rol-radio-button label="苹果"></rol-radio-button>
      <rol-radio-button label="葡萄"></rol-radio-button>
      <rol-radio-button label="柚子"></rol-radio-button>
      <rol-radio-button label="火龙果"></rol-radio-button>
    </rol-radio-group>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const radio1 = '苹果'
    const radio2 = '葡萄'
    const radio3 = '柚子'
    const radio4 = '火龙果'
    return {
      radio1,
      radio2,
      radio3,
      radio4,
    }
  },
}
</script>
```

## 带有边框

设置`border`属性可以渲染为带有边框的单选框。

```vue demo
<template>
  <div>
    <rol-radio v-model="radio1" label="苹果" border></rol-radio>
    <rol-radio v-model="radio1" label="葡萄" border></rol-radio>
  </div>
  <div class="mt-8">
    <rol-radio v-model="radio2" label="苹果" border size="medium"></rol-radio>
    <rol-radio v-model="radio2" label="葡萄" border size="medium"></rol-radio>
  </div>
  <div class="mt-8">
    <rol-radio-group v-model="radio3" size="small">
      <rol-radio label="苹果" border></rol-radio>
      <rol-radio label="葡萄" border disabled></rol-radio>
    </rol-radio-group>
  </div>
  <div class="mt-8">
    <rol-radio-group v-model="radio4" size="mini" disabled>
      <rol-radio label="苹果" border></rol-radio>
      <rol-radio label="葡萄" border></rol-radio>
    </rol-radio-group>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const radio1 = '苹果'
    const radio2 = '苹果'
    const radio3 = '苹果'
    const radio4 = '苹果'
    return {
      radio1,
      radio2,
      radio3,
      radio4,
    }
  },
}
</script>
```

### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | large / medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #3273dc   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |