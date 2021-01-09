---
title: Tabs
description: Tabs component doc
wrapperClass: tabs-demo-wrapper
tags:
  - 'components'
  - 'navigation'
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合

## 基础用法

`value` 属性来指定当前选中的标签页

```vue demo
<template>
  <rol-tabs v-model="activeName" @tab-click="handleClick">
    <rol-tab-pane label="用户管理" name="first">用户管理</rol-tab-pane>
    <rol-tab-pane label="配置管理" name="second">配置管理</rol-tab-pane>
    <rol-tab-pane label="角色管理" name="third">角色管理</rol-tab-pane>
    <rol-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</rol-tab-pane>
  </rol-tabs>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default {
  setup() {
    const activeName = ref('first')

    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return {
      activeName,
      handleClick,
    }
  },
}
</script>
```

## 选项卡样式

只需要设置 `boxed` 属性为 `card` 就可以使选项卡改变为标签风格。

```vue demo
<template>
  <rol-tabs v-model="activeName" type="boxed" @tab-click="handleClick">
    <rol-tab-pane label="用户管理" name="first">用户管理</rol-tab-pane>
    <rol-tab-pane label="配置管理" name="second">配置管理</rol-tab-pane>
    <rol-tab-pane label="角色管理" name="third">角色管理</rol-tab-pane>
    <rol-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</rol-tab-pane>
  </rol-tabs>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default {
  setup() {
    const activeName = ref('first')

    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    return {
      activeName,
      handleClick,
    }
  },
}
</script>
```

## 位置

标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```vue demo
<template>
  <rol-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <rol-radio-button label="top">top</rol-radio-button>
    <rol-radio-button label="right">right</rol-radio-button>
    <rol-radio-button label="bottom">bottom</rol-radio-button>
    <rol-radio-button label="left">left</rol-radio-button>
  </rol-radio-group>

  <rol-tabs :tab-position="tabPosition" style="height: 200px;">
    <rol-tab-pane label="用户管理">用户管理</rol-tab-pane>
    <rol-tab-pane label="配置管理">配置管理</rol-tab-pane>
    <rol-tab-pane label="角色管理">角色管理</rol-tab-pane>
    <rol-tab-pane label="定时任务补偿">定时任务补偿</rol-tab-pane>
  </rol-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left',
    }
  },
}
</script>
```

## 自定义标签页

可以通过具名 `slot` 来实现自定义标签页的内容

```vue demo
<template>
  <rol-tabs type="boxed">
    <rol-tab-pane>
      <template #label>
        <span><rol-icon name="calendar-alt"></rol-icon> 我的行程</span>
      </template>
      我的行程
    </rol-tab-pane>
    <rol-tab-pane label="消息中心">消息中心</rol-tab-pane>
    <rol-tab-pane label="角色管理">角色管理</rol-tab-pane>
    <rol-tab-pane label="定时任务补偿">定时任务补偿</rol-tab-pane>
  </rol-tabs>
</template>
```

## 关闭标签页

关闭标签页只能在选项卡样式的标签页下使用

```vue demo
<template>
  <rol-tabs v-model="editableTabsValue" type="boxed" closable @tab-remove="tabMove">
    <rol-tab-pane :key="item.name" v-for="(item, index) in editableTabs" :label="item.title" :name="item.name">
      {{ item.content }}
    </rol-tab-pane>
  </rol-tabs>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const editableTabsValue = ref('2')
    const editableTabs = ref([
      {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
      },
      {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
      },
      {
        title: 'Tab 3',
        name: '3',
        content: 'Tab 3 content',
      },
      {
        title: 'Tab 4',
        name: '4',
        content: 'Tab 4 content',
      },
      {
        title: 'Tab 5',
        name: '5',
        content: 'Tab 7 content',
      },
    ])

    const tabMove = targetName => {
      let tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter(tab => tab.name !== targetName)
    }

    return {
      editableTabsValue,
      editableTabs,
      tabMove,
    }
  },
}
</script>
```

## 均分宽度

`fullwidth`属性可以让标签页均分父容器宽度

```vue demo
<template>
  <rol-tabs type="boxed" fullwidth>
    <rol-tab-pane label="消息中心">我的行程</rol-tab-pane>
    <rol-tab-pane label="消息中心">消息中心</rol-tab-pane>
    <rol-tab-pane label="角色管理">角色管理</rol-tab-pane>
    <rol-tab-pane label="定时任务补偿">定时任务补偿</rol-tab-pane>
  </rol-tabs>
</template>
```

## 均分宽度

`fullwidth`属性可以让标签页均分父容器宽度

```vue demo
<template>
  <rol-tabs type="boxed" fullwidth>
    <rol-tab-pane label="消息中心">我的行程</rol-tab-pane>
    <rol-tab-pane label="消息中心">消息中心</rol-tab-pane>
    <rol-tab-pane label="角色管理">角色管理</rol-tab-pane>
    <rol-tab-pane label="定时任务补偿">定时任务补偿</rol-tab-pane>
  </rol-tabs>
</template>
```

### Tabs Attributes

| 参数            | 说明                                                                        | 类型                                | 可选值                | 默认值              |
| --------------- | --------------------------------------------------------------------------- | ----------------------------------- | --------------------- | ------------------- |
| value / v-model | 绑定值，选中选项卡的 name                                                   | string                              | —                     | 第一个选项卡的 name |
| type            | 风格类型                                                                    | string                              | boxed                 | —                   |
| closable        | 标签是否可关闭                                                              | boolean                             | —                     | false               |
| tab-position    | 选项卡所在位置                                                              | string                              | top/right/bottom/left | top                 |
| stretch         | 标签的宽度是否自撑开                                                        | boolean                             | -                     | false               |
| before-leave    | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | —                     | —                   |
| fullwidth       | 均分容器宽度                                                                | boolean                             | —                     | —                   |

### Tabs Events

| 事件名称  | 说明             | 回调参数              |
| --------- | ---------------- | --------------------- |
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 |

### Tab-pane Attributes

| 参数     | 说明                                              | 类型    | 可选值 | 默认值                                                |
| -------- | ------------------------------------------------- | ------- | ------ | ----------------------------------------------------- |
| label    | 选项卡标题                                        | string  | —      | —                                                     |
| disabled | 是否禁用                                          | boolean | —      | false                                                 |
| name     | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | string  | —      | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable | 标签是否可关闭                                    | boolean | —      | false                                                 |
| lazy     | 标签是否延迟渲染                                  | boolean | —      | false                                                 |
