<template>
  <rol-menu-collapse-transition v-if="collapseTransition">
    <ul
      :key="+collapse"
      role="menubar"
      :style="{ backgroundColor: backgroundColor || '' }"
      :class="['rol-menu', { 'rol-menu--collapse': collapse }]"
    >
      <slot></slot>
    </ul>
  </rol-menu-collapse-transition>
  <ul
    v-else
    :key="+collapse"
    role="menubar"
    :style="{ backgroundColor: backgroundColor || '' }"
    :class="['rol-menu', { 'rol-menu--collapse': collapse }]"
  >
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, getCurrentInstance, onMounted, provide, ref, watch } from 'vue'
import RolMenuCollapseTransition from './menu-collapse-transition.vue'
import useMenuColor from './useMenuColor'
import { emitEvent } from './useMenu'
import mitt from 'mitt'
import { RegisterMenuItem, RootMenuProvider } from './menu'

export default defineComponent({
  name: 'RolMenu',
  components: {
    RolMenuCollapseTransition,
  },
  props: {
    defaultActive: {
      type: String,
      default: '',
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    collapse: Boolean,
    backgroundColor: { type: String },
    textColor: { type: String },
    activeBackgroundColor: { type: String },
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, ctx) {
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : [])
    const instance = getCurrentInstance()
    const activeIndex = ref(props.defaultActive)
    const items = ref({})
    const submenus = ref({})
    const alteredCollapse = ref(false)
    const rootMenuEmitter = mitt()
    const hoverBackground = useMenuColor(props.backgroundColor)

    const initializeMenu = () => {
      const index = activeIndex.value
      const activeItem = items.value[index]
      if (!activeItem || props.collapse) return
      let indexPath = activeItem.indexPath
      indexPath.forEach(index => {
        let submenu = submenus.value[index]
        submenu && openMenu(index, submenu?.indexPath)
      })
    }

    const addSubMenu = (item: RegisterMenuItem) => {
      submenus.value[item.index] = item
    }

    const removeSubMenu = (item: RegisterMenuItem) => {
      delete submenus.value[item.index]
    }

    const addMenuItem = (item: RegisterMenuItem) => {
      items.value[item.index] = item
    }

    const removeMenuItem = (item: RegisterMenuItem) => {
      delete items.value[item.index]
    }

    const closeMenu = (index: string) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }
    const openMenu = (index: string, indexPath?: ComputedRef<string[]>) => {
      if (openedMenus.value.includes(index)) return
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index: string) => {
          return indexPath.value.indexOf(index) !== -1
        })
      }
      openedMenus.value.push(index)
    }

    const handleItemClick = (item: { index: string; indexPath: ComputedRef<string[]>; route?: any }) => {
      const { index, indexPath } = item
      const hasIndex = item.index !== null
      if (hasIndex) {
        activeIndex.value = item.index
      }

      ctx.emit(emitEvent.SELECT, index, indexPath, item)
    }

    const handleSubmenuClick = (submenu: { index: string; indexPath?: ComputedRef<string[]> }) => {
      const { index, indexPath } = submenu
      let isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index)
        ctx.emit(emitEvent.CLOSE, index, indexPath)
      } else {
        openMenu(index)
        ctx.emit(emitEvent.OPEN, index, indexPath)
      }
    }

    const updateActiveIndex = (val?: string) => {
      const itemsInData = items.value
      const item = itemsInData[val] || itemsInData[activeIndex.value] || itemsInData[props.defaultActive]
      if (item) {
        activeIndex.value = item.index
        initializeMenu()
      } else {
        if (!alteredCollapse.value) {
          activeIndex.value = null
        } else {
          alteredCollapse.value = false
        }
      }
    }

    watch(
      () => props.defaultActive,
      currentActive => {
        if (!items[currentActive]) {
          activeIndex.value = ''
        }
        updateActiveIndex(currentActive)
      },
    )

    watch(items.value, () => {
      updateActiveIndex()
    })

    provide<RootMenuProvider>('rootMenu', {
      props,
      openedMenus,
      isMenuPopup: props.collapse,
      activeIndex,
      hoverBackground,
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on,
      items,
      submenus,
      methods: {
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
      },
    })

    onMounted(() => {
      initializeMenu()
      rootMenuEmitter.on(emitEvent.ITEMCLICK, handleItemClick)
      rootMenuEmitter.on(emitEvent.SUBMENUCLICK, handleSubmenuClick)
    })
  },
})
</script>

<style></style>
