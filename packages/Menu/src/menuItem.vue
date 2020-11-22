<template>
  <li
    :class="[
      'rol-menu-item',
      {
        'is-active': active,
        'is-disabled': disabled,
      },
    ]"
    :style="[paddingStyle, itemStyle]"
    role="menuitem"
    tabindex="-1"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @focus="onMouseEnter"
    @blur="onMouseLeave"
    @mouseleave="onMouseLeave"
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
import { emitEvent, useMenu } from './useMenu'
import { findColorInvert } from '@rol-ui/utils/color'

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
    const { parentMenu, paddingStyle, indexPath } = useMenu(instance, props.index)

    const hoverBackground = computed(() => {
      return rootMenu.hoverBackground.value
    })

    const backgroundColor = computed(() => {
      return rootMenu.props.backgroundColor || ''
    })

    const activeBackgroundColor = computed(() => {
      return rootMenu.props.activeBackgroundColor || ''
    })

    const activeTextColor = computed(() => {
      return findColorInvert(activeBackgroundColor.value)
    })

    const textColor = computed(() => {
      return rootMenu.props.textColor || ''
    })

    const active = computed(() => {
      return props.index === rootMenu.activeIndex.value
    })

    const itemStyle = computed(() => {
      const style = {
        color: active.value ? `${activeTextColor.value}` : textColor.value,
        backgroundColor: active.value ? `${activeBackgroundColor.value}` : backgroundColor.value,
        borderBottomColor: '',
      }

      return style
    })

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.rootMenuEmit(emitEvent.ITEMCLICK, {
          index: props.index,
          indexPath,
        })
        emit(emitEvent.CLICK, {
          index: props.index,
          indexPath,
        })
      }
    }

    const onMouseEnter = () => {
      if (!rootMenu.props.backgroundColor) return
      if (active.value) {
        instance.vnode.el.style.backgroundColor = activeBackgroundColor.value
      } else {
        instance.vnode.el.style.backgroundColor = hoverBackground.value
      }
    }

    const onMouseLeave = () => {
      if (!rootMenu.props.backgroundColor) return
      if (active.value) return
      instance.vnode.el.style.backgroundColor = backgroundColor.value
    }

    return {
      active,
      handleClick,
      backgroundColor,
      paddingStyle,
      itemStyle,
      onMouseEnter,
      onMouseLeave,
    }
  },
})
</script>

<style></style>
