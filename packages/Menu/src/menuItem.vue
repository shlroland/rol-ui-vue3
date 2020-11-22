<template>
  <li
    :class="[
      'rol-menu-item',
      {
        'is-active': active,
        'is-disabled': disabled,
      },
    ]"
    role="menuitem"
    tabindex="-1"
    @click="handleClick"
  >
    <!-- <template> -->
    <slot></slot>
    <slot name="title"></slot>
    <!-- </template> -->
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject } from 'vue'
import { RMenuItemProps, RootMenuProvider } from './menu'
import { emitEvent } from './useMenu'

export default defineComponent({
  name: 'RolMenuItem',
  props: {
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  setup(props: RMenuItemProps, { emit, slots }) {
    const instance = getCurrentInstance()
    const rootMenu = inject<RootMenuProvider>('rootMenu')

    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value
    })
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.rootMenuEmit(emitEvent.ITEMCLICK, {
          index: props.index,
        })
        emit(emitEvent.CLICK, {
          index: props.index,
        })
      }
    }

    return {
      active,
      handleClick,
    }
  },
})
</script>

<style></style>
