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
    <rol-tooltip
      v-if="parentMenu.type.name === 'RolMenu' && rootMenu.props.collapse && $slots.title"
      effect="dark"
      placement="right"
    >
      <template #content>
        <slot name="title"></slot>
      </template>
      <div class="rol-menu-item__tooltip-content">
        <slot></slot>
      </div>
    </rol-tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject } from 'vue'
import { RMenuItemProps, RootMenuProvider } from './menu'
import { emitEvent, useMenu } from './useMenu'
import { findColorInvert } from '@rol-ui/utils/color'
import RolTooltip from '@rol-ui/tooltip'

export default defineComponent({
  name: 'RolMenuItem',
  components: { RolTooltip },
  props: {
    index: {
      default: null,
      validator: val => typeof val === 'string' || val === null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  setup(props: RMenuItemProps, { emit }) {
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
          indexPath: indexPath.value,
        })
        emit(emitEvent.CLICK, {
          index: props.index,
          indexPath: indexPath.value,
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
      parentMenu,
      rootMenu,
    }
  },
})
</script>

<style></style>
