<template>
  <li
    :class="['rol-submenu', active && 'is-active', , opened && 'is-opened', disabled && 'is-disabled']"
    role="menuitem"
    aria-haspopup="true"
    aria-expanded="opened"
    @mouseenter="handleMouseenter"
    @focus="handleMouseenter"
    @mouseleave="handleMouseleave(false)"
  >
    <rol-popper
      v-if="isMenuPopup"
      ref="popperVnode"
      v-model:visible="opened"
      :manual-mode="true"
      effect="light"
      :pure="true"
      :offset="6"
      :show-arrow="false"
      :popper-class="popperClass"
      placement="right-start"
      :append-to-body="appendToBody"
    >
      <template #default>
        <rol-collapse-transition>
          <div
            v-show="opened"
            ref="menu"
            :class="['rol-menu--vertical', popperClass]"
            @mouseenter="$event => handleMouseenter($event, 100)"
            @mouseleave="() => handleMouseleave(true)"
            @focus="$event => handleMouseenter($event, 100)"
          >
            <ul
              role="menu"
              :class="['rol-menu rol-menu--popup', `rol-menu--popup-right-start`]"
              :style="{ backgroundColor: rootProps.backgroundColor || '' }"
            >
              <slot name="default"></slot>
            </ul>
          </div>
        </rol-collapse-transition>
      </template>
      <template #trigger>
        <div
          class="rol-submenu__title"
          :style="[paddingStyle, titleStyle, { backgroundColor }]"
          @click="handleClick"
          @mouseenter="handleTitleMouseenter"
          @mouseleave="handleTitleMouseleave"
        >
          <slot name="title"></slot>
          <span class="rol-submenu__icon-arrow">
            <rol-icon name="angle-right" :style="{ color: textColor }"></rol-icon>
          </span>
        </div>
      </template>
    </rol-popper>
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
import {
  defineComponent,
  inject,
  reactive,
  computed,
  getCurrentInstance,
  ref,
  onBeforeMount,
  provide,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import RolCollapseTransition from '@rol-ui/collapse-transition'
import RolIcon from '@rol-ui/icon'
import RolPopper from '@rol-ui/popper'
import { RootMenuProvider, SubMenuProvider } from './menu'
import { emitEvent, useMenu } from './useMenu'
import mitt from 'mitt'

export default defineComponent({
  name: 'RolSubmenu',
  components: { RolCollapseTransition, RolIcon, RolPopper },
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
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {
      isMenuPopup,
      openedMenus,
      props: rootProps,
      rootMenuEmit,
      hoverBackground,
      rootMenuOn,
      methods: rootMethods,
    } = inject<RootMenuProvider>('rootMenu')
    const instance = getCurrentInstance()
    const { paddingStyle, indexPath, parentMenu } = useMenu(instance, props.index)
    const {
      addSubMenu: parentAddSubmenu,
      removeSubMenu: parentRemoveSubmenu,
      handleMouseleave: parentHandleMouseleave,
    } = inject<SubMenuProvider>(`subMenu:${parentMenu.value.uid}`)

    const subMenuEmitter = mitt()
    const data = reactive({
      popperJS: null,
      timeout: null,
      items: {},
      submenus: {},
      mouseInChild: false,
      opened: false,
    })

    const verticalTitleRef = ref<HTMLElement>(null)
    const popperVnode = ref(null)

    const isFirstLevel = computed(() => {
      let isFirstLevel = true
      let parent = instance.parent
      while (parent && parent.type.name !== 'RolMenu') {
        if (['RolSubmenu', 'RolMenuItemGroup'].includes(parent.type.name)) {
          isFirstLevel = false
          break
        } else {
          parent = parent.parent
        }
      }
      return isFirstLevel
    })

    const appendToBody = computed(() => {
      return props.popperAppendToBody === false ? isFirstLevel.value : Boolean(props.popperAppendToBody)
    })

    const opened = computed(() => {
      return openedMenus.value.includes(props.index)
    })

    const backgroundColor = computed(() => {
      return rootProps.backgroundColor || ''
    })

    const textColor = computed(() => {
      return rootProps.textColor || ''
    })

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

    const doDestroy = () => {
      popperVnode.value?.doDestroy()
    }

    const addSubMenu = item => {
      data.submenus[item.index] = item
    }
    const removeSubMenu = item => {
      delete data.submenus[item.index]
    }

    const handleClick = () => {
      if (rootProps.collapse || props.disabled) return
      rootMenuEmit(emitEvent.SUBMENUCLICK, { index: props.index, indexPath: indexPath.value })
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

    const handleMouseenter = (event: MouseEvent, showTimeout = props.showTimeout) => {
      if (!('ActiveXObject' in window) && event.type === 'focus' && !event.relatedTarget) return
      if (!rootProps.collapse) return
      subMenuEmitter.emit(emitEvent.MOUSEENTERCHILD)
      data.timeout = setTimeout(() => {
        rootMethods.openMenu(props.index, indexPath)
      }, showTimeout)
      if (appendToBody.value) {
        parentMenu.value.vnode.el.dispatchEvent(new MouseEvent('mouseenter'))
      }
    }

    const handleMouseleave = (deepDispatch = false) => {
      if (!rootProps.collapse) return
      subMenuEmitter.emit(emitEvent.MOUSELEAVECHILD)
      clearTimeout(data.timeout)
      data.timeout = setTimeout(() => {
        !data.mouseInChild && rootMethods.closeMenu(props.index)
      }, props.hideTimeout)
      if (appendToBody.value && deepDispatch) {
        if (instance.parent.type.name === 'RolSubmenu') {
          parentHandleMouseleave(true)
        }
      }
    }

    provide<SubMenuProvider>(`subMenu:${instance.uid}`, {
      addSubMenu,
      removeSubMenu,
      handleMouseleave,
    })

    onBeforeMount(() => {
      rootMenuOn(emitEvent.TOGGLECOLLAPSE, (val: boolean) => {
        if (!val) {
          doDestroy()
        }
      })
      subMenuEmitter.on(emitEvent.MOUSEENTERCHILD, () => {
        data.mouseInChild = true
        clearTimeout(data.timeout)
      })
      subMenuEmitter.on(emitEvent.MOUSELEAVECHILD, () => {
        data.mouseInChild = false
        clearTimeout(data.timeout)
      })
    })

    onMounted(() => {
      rootMethods.addSubMenu({
        index: props.index,
        indexPath,
        active,
      })
      parentAddSubmenu({
        index: props.index,
        indexPath,
        active,
      })
    })

    onBeforeUnmount(() => {
      parentRemoveSubmenu({
        index: props.index,
        indexPath,
        active,
      })
      rootMethods.removeSubMenu({
        index: props.index,
        indexPath,
        active,
      })
    })

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
      handleMouseenter,
      handleMouseleave,
      data,
      appendToBody,
      rootProps,
    }
  },
})
</script>

<style></style>
