<template>
  <ul
    class="rol-dropdown-menu"
    :class="[size && `rol-dropdown-menu--${size}`]"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { initDropdownDomEvent } from '@rol-ui/utils/util'
import { computed, defineComponent, getCurrentInstance, inject, onMounted } from 'vue'
import { DropdownInstance } from './dropdown'
export default defineComponent({
  name: 'RolDropdownMenu',
  setup() {
    const rolDropdown = inject<DropdownInstance>('rolDropdown')
    const size = computed(() => rolDropdown?.dropdownSize)

    const show = () => {
      rolDropdown.show()
    }

    const hide = () => {
      if (rolDropdown.trigger.value === 'click') return
      rolDropdown.hide()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(dropdownMenu, rolDropdown.triggerElm.value, rolDropdown.instance)
    })

    return {
      size,
      show,
      hide,
    }
  },
})
</script>

<style></style>
