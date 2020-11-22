<template>
  <li
    :class="['rol-submenu', active && 'is-active', , opened && 'is-opened', disabled && 'is-disabled']"
    role="menuitem"
    aria-haspopup="true"
    aria-expanded="opened"
  >
    <div
      v-if="!isMenuPopup"
      ref="verticalTitleRef"
      class="rol-submenu__title"
      :style="[paddingStyle, titleStyle, { backgroundColor }]"
      @click="handleClick"
      @mouseenter="handleTitleMouseenter"
      @mouseleave="handleTitleMouseleave"
    >
      <slot name="title"></slot>
      <span class="rol-submenu__icon-arrow">
        <rol-icon name="angle-down" :style="{ color: textColor }"></rol-icon>
      </span>
    </div>
    <rol-collapse-transition v-if="!isMenuPopup">
      <ul
        v-show="opened"
        role="menu"
        class="rol-menu rol-menu--inline"
        :style="{ backgroundColor: backgroundColor || '' }"
      >
        <slot></slot>
      </ul>
    </rol-collapse-transition>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, computed, getCurrentInstance, ref } from 'vue'
import RolCollapseTransition from '@rol-ui/collapse-transition'
import RolIcon from '@rol-ui/icon'
import { RootMenuProvider } from './menu'
import { emitEvent, useMenu } from './useMenu'
import { findColorInvert } from '@rol-ui/utils/color'

export default defineComponent({
  name: 'RolSubmenu',
  components: { RolCollapseTransition, RolIcon },
  props: {
    index: {
      type: String,
      required: true,
    },
    showTimeout: {
      type: Number,
      default: 300,
    },
    hideTimeout: {
      type: Number,
      default: 300,
    },
    disabled: Boolean,
  },
  setup(props) {
    const { isMenuPopup, openedMenus, props: rootProps, rootMenuEmit, hoverBackground } = inject<RootMenuProvider>(
      'rootMenu',
    )
    const instance = getCurrentInstance()
    const { paddingStyle, indexPath, parentMenu } = useMenu(instance, props.index)
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      currentPlacement: '',
      mouseInChild: false,
      opened: false,
    })

    const verticalTitleRef = ref<HTMLElement>(null)
    const popperVnode = ref(null)

    const opened = computed(() => {
      return openedMenus.value.includes(props.index)
    })

    const backgroundColor = computed(() => {
      return rootProps.backgroundColor || ''
    })

    const textColor = computed(() => {
      return rootProps.textColor || ''
    })

    // const activeBackgroundColor = computed(() => {
    //   return rootProps.activeBackgroundColor || ''
    // })

    // const activeTextColor = computed(() => {
    //   return findColorInvert(activeBackgroundColor.value)
    // })

    const active = computed(() => {
      let isActive = false
      const submenus = data.submenus
      const items = data.items

      Object.keys(items).forEach(index => {
        if (items[index].active) {
          isActive = true
        }
      })

      Object.keys(submenus).forEach(index => {
        if (submenus[index].active) {
          isActive = true
        }
      })
      return isActive
    })

    const titleStyle = computed(() => {
      return {
        borderBottomColor: active.value ? '' : 'transparent',
        color: textColor.value,
      }
    })

    const handleClick = () => {
      if (rootProps.collapse || props.disabled) return
      rootMenuEmit(emitEvent.SUBMENUCLICK, { index: props.index })
    }

    const handleTitleMouseenter = () => {
      if (!rootProps.backgroundColor) return
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = hoverBackground.value)
    }

    const handleTitleMouseleave = () => {
      if (!rootProps.backgroundColor) return
      const title = popperVnode.value?.triggerRef || verticalTitleRef.value
      title && (title.style.backgroundColor = rootProps.backgroundColor || '')
    }

    return {
      isMenuPopup,
      opened,
      handleClick,
      backgroundColor,
      paddingStyle,
      active,
      titleStyle,
      textColor,
      verticalTitleRef,
      popperVnode,
      handleTitleMouseenter,
      handleTitleMouseleave,
    }
  },
})
</script>

<style></style>
