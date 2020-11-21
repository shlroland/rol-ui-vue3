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
import { defineComponent, provide, ref } from 'vue'
import RolMenuCollapseTransition from './menu-collapse-transition.vue'

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
  setup(props) {
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : [])

    provide('rootMenu', {
      props,
      openedMenus,
      isMenuPopup: props.collapse,
    })
  },
})
</script>

<style></style>
