<template>
  <ul
    :key="+collapse"
    role="menubar"
    :style="{ backgroundColor: backgroundColor || '' }"
    :class="['rol-menu', { 'rol-menu--collapse': collapse }]"
  >
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RolMenu',
  components: 'RolMenu',
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
})
</script>

<style></style>
