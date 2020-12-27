---
title: Checkbox
description: Checkbox component doc
wrapperClass: Checkbox-wrapper-class
tags:
  - 'components'
  - 'form'
---

# Checkbox 复选框

一组备选项中进行多选

## 基础用法

简单的 checkbox  
在 rol-checkbox 元素中定义 v-model 绑定变量，单一的 checkbox 中，默认绑定变量的值会是 Boolean，选中为 true。

```vue demo
<template>
  <rol-checkbox v-model="checked">备选项</rol-checkbox>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const checked = ref(true)
    return {
      checked,
    }
  },
}
</script>
```

## 禁用状态

多选框不可用状态。

```vue demo
<template>
  <rol-checkbox v-model="checked1" disabled>备选项1</rol-checkbox>
  <rol-checkbox v-model="checked2" disabled>备选项2</rol-checkbox>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const checked1 = ref(true)
    const checked2 = ref(false)
    return {
      checked1,
      checked2,
    }
  },
}
</script>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

```vue demo
<template>
  <rol-checkbox-group v-model="checkList">
    <rol-checkbox label="复选框 A"></rol-checkbox>
    <rol-checkbox label="复选框 B"></rol-checkbox>
    <rol-checkbox label="复选框 C"></rol-checkbox>
    <rol-checkbox label="禁用" disabled></rol-checkbox>
    <rol-checkbox label="选中且禁用" disabled></rol-checkbox>
  </rol-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const checkList = ref(['选中且禁用', '复选框 A'])
    return {
      checkList,
    }
  },
}
</script>
```

## indeterminate 状态

在实现全选效果时，你可能会用到 indeterminate 属性

```vue demo
<template>
  <rol-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</rol-checkbox>
  <div class="m-4"></div>
  <rol-checkbox-group v-model="checkList" @change="handleCheckedFruitsChange">
    <rol-checkbox v-for="fruit in fruitList" :label="fruit" :key="fruit">{{ fruit }}</rol-checkbox>
  </rol-checkbox-group>
</template>

<script>
import { ref } from 'vue'

const fruits = ['苹果', '樱桃', '橘子', '榴莲']

export default {
  setup(props) {
    const checkAll = ref(false)
    const fruitList = ref(fruits)
    const checkList = ref(['苹果', '樱桃'])
    const isIndeterminate = ref(true)

    const handleCheckAllChange = val => {
      checkList.value = val ? fruitList.value : []
      isIndeterminate.value = false
    }

    const handleCheckedFruitsChange = value => {
      let checkedCount = value.length
      checkAll.value = checkedCount === fruitList.value.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < fruitList.value.length
    }

    return {
      checkAll,
      fruitList,
      checkList,
      isIndeterminate,
      handleCheckAllChange,
      handleCheckedFruitsChange,
    }
  },
}
</script>
```

## 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

```vue demo
<template>
  <rol-checkbox-group v-model="checkList" :min="1" :max="2">
    <rol-checkbox v-for="fruit in fruitList" :label="fruit" :key="fruit">{{ fruit }}</rol-checkbox>
  </rol-checkbox-group>
</template>
<script>
import { ref } from 'vue'

const fruits = ['苹果', '樱桃', '橘子', '榴莲']

export default {
  setup(props) {
    const fruitList = ref(fruits)
    const checkList = ref(['苹果', '樱桃'])

    return {
      fruitList,
      checkList,
    }
  },
}
</script>
```

## 按钮样式

按钮样式的多选组合。

```vue demo
<template>
  <div>
    <rol-checkbox-group v-model="checkboxGroup1">
      <rol-checkbox-button v-for="fruit in fruitList" :label="fruit" :key="fruit">{{ fruit }}</rol-checkbox-button>
    </rol-checkbox-group>
  </div>
  <div class="mt-8">
    <rol-checkbox-group v-model="checkboxGroup2" size="large">
      <rol-checkbox-button v-for="fruit in fruitList" :label="fruit" :key="fruit">{{ fruit }}</rol-checkbox-button>
    </rol-checkbox-group>
  </div>
  <div class="mt-8">
    <rol-checkbox-group v-model="checkboxGroup2" size="medium">
      <rol-checkbox-button v-for="fruit in fruitList" :label="fruit" :disabled="fruit === '榴莲'" :key="fruit">{{
        fruit
      }}</rol-checkbox-button>
    </rol-checkbox-group>
  </div>
  <div class="mt-8">
    <rol-checkbox-group v-model="checkboxGroup2" size="small" disabled>
      <rol-checkbox-button v-for="fruit in fruitList" :label="fruit" :key="fruit">{{ fruit }}</rol-checkbox-button>
    </rol-checkbox-group>
  </div>
</template>
<script>
import { ref } from 'vue'

const fruits = ['苹果', '樱桃', '橘子', '榴莲']

export default {
  setup(props) {
    const fruitList = ref(fruits)
    const checkboxGroup1 = ref(['苹果'])
    const checkboxGroup2 = ref(['苹果'])
    const checkboxGroup3 = ref(['苹果'])
    const checkboxGroup4 = ref(['苹果'])

    return {
      fruitList,
      checkboxGroup1,
      checkboxGroup2,
      checkboxGroup3,
      checkboxGroup4,
    }
  },
}
</script>
```

## 带有边框

设置 border 属性可以渲染为带有边框的多选框。

```vue demo
<template>
  <div>
    <rol-checkbox v-model="checked1" label="备选项1" border></rol-checkbox>
    <rol-checkbox v-model="checked2" label="备选项2" border></rol-checkbox>
  </div>
  <div class="mt-9">
    <rol-checkbox v-model="checked3" label="备选项1" border size="medium"></rol-checkbox>
    <rol-checkbox v-model="checked4" label="备选项2" border size="medium"></rol-checkbox>
  </div>
  <div class="mt-9">
    <rol-checkbox-group v-model="checkboxGroup1" size="small">
      <rol-checkbox label="备选项1" border></rol-checkbox>
      <rol-checkbox label="备选项2" border disabled></rol-checkbox>
    </rol-checkbox-group>
  </div>
  <div class="mt-9">
    <rol-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <rol-checkbox label="备选项1" border></rol-checkbox>
      <rol-checkbox label="备选项2" border></rol-checkbox>
    </rol-checkbox-group>
  </div>
</template>
<script>
import { ref } from 'vue'

const fruits = ['苹果', '樱桃', '橘子', '榴莲']

export default {
  setup(props) {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(true)
    const checkboxGroup1 = ref([])
    const checkboxGroup2 = ref([])

    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checkboxGroup1,
      checkboxGroup2,
    }
  },
}
</script>
```

### Checkbox Attributes

| 参数            | 说明                                                                  | 类型                      | 可选值                | 默认值 |
| --------------- | --------------------------------------------------------------------- | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                                                                | string / number / boolean | —                     | —      |
| label           | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —                     | —      |
| true-label      | 选中时的值                                                            | string / number           | —                     | —      |
| false-label     | 没有选中时的值                                                        | string / number           | —                     | —      |
| disabled        | 是否禁用                                                              | boolean                   | —                     | false  |
| border          | 是否显示边框                                                          | boolean                   | —                     | false  |
| size            | Checkbox 的尺寸，仅在 border 为真时有效                               | string                    | medium / small / mini | —      |
| name            | 原生 name 属性                                                        | string                    | —                     | —      |
| checked         | 当前是否勾选                                                          | boolean                   | —                     | false  |
| indeterminate   | 设置 indeterminate 状态，只负责样式控制                               | boolean                   | —                     | false  |

### Checkbox Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes

| 参数            | 说明                                                             | 类型    | 可选值                | 默认值  |
| --------------- | ---------------------------------------------------------------- | ------- | --------------------- | ------- |
| value / v-model | 绑定值                                                           | array   | —                     | —       |
| size            | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | large / medium / small / mini | —       |
| disabled        | 是否禁用                                                         | boolean | —                     | false   |
| min             | 可被勾选的 checkbox 的最小数量                                   | number  | —                     | —       |
| max             | 可被勾选的 checkbox 的最大数量                                   | number  | —                     | —       |
| text-color      | 按钮形式的 Checkbox 激活时的文本颜色                             | string  | —                     | #ffffff |
| fill            | 按钮形式的 Checkbox 激活时的填充色和边框色                       | string  | —                     | #3273dc |

### Checkbox-group Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button Attributes

| 参数        | 说明                                                                  | 类型                      | 可选值 | 默认值 |
| ----------- | --------------------------------------------------------------------- | ------------------------- | ------ | ------ |
| label       | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —      | —      |
| true-label  | 选中时的值                                                            | string / number           | —      | —      |
| false-label | 没有选中时的值                                                        | string / number           | —      | —      |
| disabled    | 是否禁用                                                              | boolean                   | —      | false  |
| name        | 原生 name 属性                                                        | string                    | —      | —      |
| checked     | 当前是否勾选                                                          | boolean                   | —      | false  |
