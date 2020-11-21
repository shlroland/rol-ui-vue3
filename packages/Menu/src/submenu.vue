<template>
  <li :class="['rol-submenu']" role="menuitem" aria-haspopup="true" aria-expanded="opened">
    <div ref="verticalTitleRef" class="rol-submenu__title">
      <slot name="title"></slot>
    </div>
    <rol-collapse-transition>
      <ul role="menu" class="rol-menu rol-menu--inline">
        <slot></slot>
      </ul>
    </rol-collapse-transition>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RolCollapseTransition from '@rol-ui/collapse-transition'
// import RolPopper from '@rol-ui/popper'

export default defineComponent({
  name: 'RolSubmenu',
  components: { RolCollapseTransition },
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
})
</script>

<style></style>
