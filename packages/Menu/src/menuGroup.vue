<template>
  <li class="rol-menu-item-group">
    <div class="rol-menu-item-group__title" :style="{ paddingLeft: levelPadding + 'px' }">
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, getCurrentInstance, inject } from 'vue'
import { RootMenuProvider } from './menu'

export default defineComponent({
  name: 'RolMenuItemGroup',
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    const data = reactive({ paddingLeft: 20 })
    const instance = getCurrentInstance()

    const { props: rootProps } = inject<RootMenuProvider>('rootMenu')

    const levelPadding = computed(() => {
      let padding = 20
      let parent = instance.parent
      if (rootProps.collapse) return 20
      while (parent && parent.type.name !== 'RolMenu') {
        if (parent.type.name === 'RolSubmenu') {
          padding += 20
        }
        parent = parent.parent
      }
      return padding
    })

    return {
      data,
      levelPadding,
    }
  },
})
</script>

<style></style>
