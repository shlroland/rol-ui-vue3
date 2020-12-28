---
title: Input
description: Input component doc
wrapperClass: input-wrapper-class
tags:
  - 'components'
  - 'form'
---

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

```vue demo
<template>
  <rol-input v-model="input" placeholder="请输入内容"></rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input: ref(''),
    }
  },
}
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

```vue demo
<template>
  <rol-input placeholder="请输入内容" v-model="input" disabled></rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input: ref(''),
    }
  },
}
</script>
```

## 可清空

使用`clearable`属性即可得到一个可清空的输入框

```vue demo
<template>
  <rol-input v-model="input" placeholder="请输入内容" clearable></rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input: ref(''),
    }
  },
}
</script>
```

## 密码框

使用`show-password`属性即可得到一个可切换显示隐藏的密码框

```vue demo
<template>
  <rol-input v-model="input" placeholder="请输入密码" show-password></rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input: ref(''),
    }
  },
}
</script>
```

## 带 icon 的输入框

可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。

```vue demo
<template>
  <h5>属性添加</h5>
  <rol-input v-model="input1" placeholder="请输入优先级" suffix-icon="sort-amount-up"></rol-input>
  <rol-input v-model="input2" placeholder="请输入内容" prefix-icon="search"></rol-input>
  <h5>slot添加</h5>
  <rol-input v-model="input3" placeholder="请输入优先级">
    <template #suffix>
      <rol-icon class="rol-input__icon" name="sort-amount-up"></rol-icon>
    </template>
  </rol-input>
  <rol-input v-model="input4" placeholder="请输入内容">
    <template #prefix>
      <rol-icon class="rol-input__icon" name="search"></rol-icon>
    </template>
  </rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
    }
  },
}
</script>
```

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。  
文本域高度可通过 `rows` 属性控制

```vue demo
<template>
  <rol-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"> </rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      textarea: ref(''),
    }
  },
}
</script>
```

## 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，
并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

```vue demo
<template>
  <rol-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"> </rol-input>
  <rol-divider></rol-divider>
  <rol-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="textarea2">
  </rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      textarea1: ref(''),
      textarea2: ref(''),
    }
  },
}
</script>
```

## 复合型输入框

可前置或后置元素，一般为标签或按钮

```vue demo
<template>
  <rol-input placeholder="请输入内容" v-model="input1">
    <template #prepend>Http://</template>
  </rol-input>
  <rol-divider></rol-divider>
  <rol-input placeholder="请输入内容" v-model="input2">
    <template #append>.com</template>
  </rol-input>
  <rol-divider></rol-divider>
  <rol-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <template #prepend>
      <rol-select style="width: 150px" v-model="select" placeholder="请选择">
        <rol-select-option label="餐厅名" value="1"></rol-select-option>
        <rol-select-option label="订单号" value="2"></rol-select-option>
        <rol-select-option label="用户电话" value="3"></rol-select-option>
      </rol-select>
    </template>
    <template #append>
      <rol-button icon="search"></rol-button>
    </template>
  </rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref(''),
    }
  },
}
</script>
```

## 尺寸

可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。

```vue demo
<template>
  <rol-input placeholder="请输入内容" v-model="input1"> </rol-input>
  <rol-input size="medium" placeholder="请输入内容" v-model="input2"> </rol-input>
  <rol-input size="small" placeholder="请输入内容" v-model="input3"> </rol-input>
  <rol-input size="mini" placeholder="请输入内容" v-model="input4"> </rol-input>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      input4: ref(''),
    }
  },
}
</script>
```

### Input Attributes

| 参数            | 说明                                                                                    | 类型             | 可选值                                                                                                                                | 默认值 |
| --------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| type            | 类型                                                                                    | string           | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text   |
| value / v-model | 绑定值                                                                                  | string / number  | —                                                                                                                                     | —      |
| maxlength       | 原生属性，最大输入长度                                                                  | number           | —                                                                                                                                     | —      |
| minlength       | 原生属性，最小输入长度                                                                  | number           | —                                                                                                                                     | —      |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效                | boolean          | —                                                                                                                                     | false  |
| placeholder     | 输入框占位文本                                                                          | string           | —                                                                                                                                     | —      |
| clearable       | 是否可清空                                                                              | boolean          | —                                                                                                                                     | false  |
| show-password   | 是否显示切换密码图标                                                                    | boolean          | —                                                                                                                                     | false  |
| disabled        | 禁用                                                                                    | boolean          | —                                                                                                                                     | false  |
| size            | 输入框尺寸，只在 `type!="textarea"` 时有效                                              | string           | medium / small / mini                                                                                                                 | —      |
| prefix-icon     | 输入框头部图标                                                                          | string           | —                                                                                                                                     | —      |
| suffix-icon     | 输入框尾部图标                                                                          | string           | —                                                                                                                                     | —      |
| rows            | 输入框行数，只对 `type="textarea"` 有效                                                 | number           | —                                                                                                                                     | 2      |
| autosize        | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 } | boolean / object | —                                                                                                                                     | false  |
| autocomplete    | 原生属性，自动补全                                                                      | string           | on, off                                                                                                                               | off    |
| auto-complete   | 下个主版本弃用                                                                          | string           | on, off                                                                                                                               | off    |
| name            | 原生属性                                                                                | string           | —                                                                                                                                     | —      |
| readonly        | 原生属性，是否只读                                                                      | boolean          | —                                                                                                                                     | false  |
| max             | 原生属性，设置最大值                                                                    | —                | —                                                                                                                                     | —      |
| min             | 原生属性，设置最小值                                                                    | —                | —                                                                                                                                     | —      |
| step            | 原生属性，设置输入字段的合法数字间隔                                                    | —                | —                                                                                                                                     | —      |
| resize          | 控制是否能被用户缩放                                                                    | string           | none, both, horizontal, vertical                                                                                                      | —      |
| autofocus       | 原生属性，自动获取焦点                                                                  | boolean          | true, false                                                                                                                           | false  |
| form            | 原生属性                                                                                | string           | —                                                                                                                                     | —      |
| label           | 输入框关联的 label 文字                                                                 | string           | —                                                                                                                                     | —      |
| tabindex        | 输入框的 tabindex                                                                       | string           | -                                                                                                                                     | -      |

### Input Slots

| name    | 说明                                    |
| ------- | --------------------------------------- |
| prefix  | 输入框头部内容，只对 `type="text"` 有效 |
| suffix  | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append  | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events

| 事件名称 | 说明                                          | 回调参数                  |
| -------- | --------------------------------------------- | ------------------------- |
| blur     | 在 Input 失去焦点时触发                       | (event: Event)            |
| focus    | 在 Input 获得焦点时触发                       | (event: Event)            |
| change   | 仅在输入框失去焦点或用户按下回车时触发        | (value: string \| number) |
| input    | 在 Input 值改变时触发                         | (value: string \| number) |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

### Input Methods

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| focus  | 使 input 获取焦点   | —    |
| blur   | 使 input 失去焦点   | —    |
| select | 选中 input 中的文字 | —    |
