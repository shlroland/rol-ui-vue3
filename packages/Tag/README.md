---
title: Tag
description: Tag component doc
wrapperClass: tag-demo-wrapper
tags:
  - 'components'
  - 'data'
---

# Tag 标签

用于标记和选择。

## 基础用法

由`type`属性来选择 tag 的类型，也可以通过`color`属性来自定义背景色。

```vue demo
<template>
  <rol-tag>标签一</rol-tag>
  <rol-tag type="dark">标签二</rol-tag>
  <rol-tag type="light">标签三</rol-tag>
  <rol-tag type="white">标签四</rol-tag>
  <rol-tag type="black">标签五</rol-tag>
  <rol-tag type="light">标签六</rol-tag>
  <rol-tag type="primary">标签七</rol-tag>
  <rol-tag type="link">标签八</rol-tag>
  <rol-tag type="info">标签九</rol-tag>
  <rol-tag type="success">标签十</rol-tag>
  <rol-tag type="warning">标签十一</rol-tag>
  <rol-tag type="danger">标签十二</rol-tag>
</template>
```

## 可移除标签

设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。

```vue demo
<template>
  <rol-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
    {{ tag.name }}
  </rol-tag>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' },
      ],
    }
  },
}
</script>
```

## 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现

```vue demo
<template>
  <rol-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
    {{ tag }}
  </rol-tag>

  <rol-input
    class="input-new-tag"
    v-if="inputVisible"
    v-model="inputValue"
    ref="saveTagInput"
    size="small"
    @blur="handleInputConfirm"
  >
  </rol-input>
  <rol-button v-else class="button-new-tag" @click="showInput">+ New Tag</rol-button>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  setup() {
    const dynamicTags = ref(['标签一', '标签二', '标签三'])
    const inputVisible = ref(false)
    const inputValue = ref('')

    const saveTagInput = ref(null)

    const handleClose = tag => {
      dynamicTags.value.splice(dynamicTags.value.findIndex(tag), 1)
    }

    const showInput = () => {
      inputVisible.value = true
    }

    const handleInputConfirm = () => {
      if (inputValue) {
        dynamicTags.value.push(inputValue.value)
      }
      inputVisible.value = false
      inputValue.value = ''
    }

    return {
      dynamicTags,
      inputVisible,
      inputValue,
      saveTagInput,
      handleClose,
      showInput,
      handleInputConfirm,
    }
  },
}
</script>

<style scoped>
.rol-tag + .rol-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
```

## 不同尺寸

额外的尺寸：`large`、`medium`、`small`，通过设置`size`属性来配置它们。

```vue demo
<template>
  <rol-tag size="large" closable>大型标签</rol-tag>
  <rol-tag size="medium" closable>中等标签</rol-tag>
  <rol-tag closable>默认标签</rol-tag>
  <rol-tag size="small" closable>小型标签</rol-tag>
</template>
```

## 不同主题和形状

Tag 组件提供了`light`主题和`rounded`圆形

```vue demo
<template>
  <div class="demo-tag-group">
    <span class="demo-tag-group__title">light</span>
    <rol-tag v-for="item in items" :key="item.label" :type="item.type" light>
      {{ item.label }}
    </rol-tag>
  </div>
  <div class="demo-tag-group">
    <span class="demo-tag-group__title">rouned</span>
    <rol-tag v-for="item in items" :key="item.label" :type="item.type" rounded>
      {{ item.label }}
    </rol-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { type: '', label: '标签一' },
        { type: 'success', label: '标签二' },
        { type: 'info', label: '标签三' },
        { type: 'danger', label: '标签四' },
        { type: 'warning', label: '标签五' },
      ],
    }
  },
}
</script>
```

## 标签组

提供了便签的集合,可以简单的看做大量`rol-tag`的容器，也可以通过`has-addons`组合出不同效果

```vue demo
<template>
  <div class="demo-tag-group" style="width: 500px">
    <rol-tag-group all-size="normal">
      <rol-tag v-for="item in normalGroup" :key="item">
        {{ item }}
      </rol-tag>
    </rol-tag-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      normalGroup: [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
        'Twenty',
      ],
    }
  },
}
</script>
```

## 组合标签

```vue demo
<template>
  <div class="demo-tag-group">
    <span class="demo-tag-group__title">badge</span>
    <rol-tags-addons left-text="Package" right-text="rol-ui" right-type="success"> </rol-tags-addons>
  </div>
  <div class="demo-tag-group">
    <span class="demo-tag-group__title">badge</span>
    <rol-tags-addons mode="badge" left-text="npm" right-text="0.0.1" right-type="success"> </rol-tags-addons>
  </div>
  <div class="demo-tag-group">
    <span class="demo-tag-group__title">blog</span>
    <rol-tags-addons
      v-show="labelVisible"
      mode="blog"
      left-text="Alex"
      left-type="danger"
      @close="labelVisible = false"
    >
    </rol-tags-addons>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const labelVisible = ref(true)

    return {
      labelVisible,
    }
  },
}
</script>
```

### Tag Attributes

| 参数                | 说明             | 类型    | 可选值                                                                                    | 默认值 |
| ------------------- | ---------------- | ------- | ----------------------------------------------------------------------------------------- | ------ |
| type                | 类型             | string  | dark / light / white / black / light / primary / link / info / success / warning / danger | —      |
| closable            | 是否可关闭       | boolean | —                                                                                         | false  |
| disable-transitions | 是否禁用渐变动画 | boolean | —                                                                                         | false  |
| rounded             | 是否圆角         | boolean | —                                                                                         | false  |
| color               | 背景色           | string  | —                                                                                         | —      |
| size                | 尺寸             | string  | large / medium / small                                                                    | —      |
| light               | light 主题       | boolean |                                                                                           | false  |

### TagGroup Attributes

| 参数     | 说明 | 类型   | 可选值                 | 默认值 |
| -------- | ---- | ------ | ---------------------- | ------ |
| all-size | 尺寸 | string | large / medium / small | —      |

### TagAddons Attributes

| 参数       | 说明         | 类型   | 可选值                                                                                    | 默认值 |
| ---------- | ------------ | ------ | ----------------------------------------------------------------------------------------- | ------ |
| mode       | 组合标签类型 | string | blog / badge /free                                                                        | free   |
| size       | 尺寸         | string | large / medium / small                                                                    | —      |
| left-text  | 左边标签文本 | string |                                                                                           | —      |
| right-text | 右边标签文本 | string |                                                                                           | —      |
| left-type  | 左边标签类型 | string | dark / light / white / black / light / primary / link / info / success / warning / danger | —      |
| right-type | 右边标签类型 | string | dark / light / white / black / light / primary / link / info / success / warning / danger | —      |
