<template>
  <li :class="['rol-submenu', opened && 'is-opened']" role="menuitem" aria-haspopup="true" aria-expanded="opened">
    <div v-if="!isMenuPopup" ref="verticalTitleRef" class="rol-submenu__title" @click="handleClick">
      <slot name="title"></slot>
      <span class="rol-submenu__icon-arrow">
        <rol-icon name="angle-down"></rol-icon>
      </span>
    </div>
    <rol-collapse-transition v-if="!isMenuPopup">
      <ul v-show="opened" role="menu" class="rol-menu rol-menu--inline">
        <slot></slot>
      </ul>
    </rol-collapse-transition>
  </li>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, computed } from 'vue'
import RolCollapseTransition from '@rol-ui/collapse-transition'
import RolIcon from '@rol-ui/icon'
import { RootMenuProvider } from './menu'
import { emitEvent } from './useMenu'

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
    const { isMenuPopup, openedMenus, props: rootProps, rootMenuEmit } = inject<RootMenuProvider>('rootMenu')

    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      currentPlacement: '',
      mouseInChild: false,
      opened: false,
    })


    const opened = computed(() => {
      return openedMenus.value.includes(props.index)
    })

    const handleClick = () => {
      if (rootProps.collapse || props.disabled) return
      rootMenuEmit(emitEvent.SUBMENUCLICK, { index: props.index })
    }

    return {
      isMenuPopup,
      opened,
      handleClick,
    }
  },
})
</script>

<style></style>
