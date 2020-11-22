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
import { ComputedRef, defineComponent, getCurrentInstance, onMounted, provide, ref } from 'vue'
import RolMenuCollapseTransition from './menu-collapse-transition.vue'
import { emitEvent } from './useMenu'
import mitt from 'mitt'

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
    activeTextColor: { type: String },
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

    const handleItemClick = (item: { index: string; indexPath: ComputedRef<string[]>; route?: any }) => {
      const { index, indexPath } = item
      const hasIndex = item.index !== null
      if (hasIndex) {
        activeIndex.value = item.index
      }

      ctx.emit(emitEvent.SELECT, index, indexPath, item)
    }

    const handleSubmenuClick = (submenu: { index: string }) => {
      const { index } = submenu
      let isOpened = openedMenus.value.includes(index)

      if (isOpened) {
        closeMenu(index)
        ctx.emit(emitEvent.CLOSE, index)
      } else {
        openMenu(index)
        ctx.emit(emitEvent.OPEN, index)
      }
    }

    const closeMenu = (index: string) => {
      const i = openedMenus.value.indexOf(index)
      if (i !== -1) {
        openedMenus.value.splice(i, 1)
      }
    }
    const openMenu = (index: string) => {
      if (openedMenus.value.includes(index)) return
      openedMenus.value.push(index)
    }

    provide('rootMenu', {
      props,
      openedMenus,
      isMenuPopup: props.collapse,
      activeIndex,
      rootMenuEmit: rootMenuEmitter.emit,
      rootMenuOn: rootMenuEmitter.on,
    })

    onMounted(() => {
      rootMenuEmitter.on(emitEvent.ITEMCLICK, handleItemClick)
      rootMenuEmitter.on(emitEvent.SUBMENUCLICK, handleSubmenuClick)
    })
  },
})
</script>

<style></style>
