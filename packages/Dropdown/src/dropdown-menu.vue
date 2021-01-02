<template>
  <ul
    v-clickOutside:[triggerElm]="innerHide"
    :class="['rol-dropdown-menu',size && `rol-dropdown-menu--${size}`]"
    @mouseenter.stop="show"
    @mouseleave.stop="hide"
  >
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onMounted } from 'vue'
import { useDropdown, initDropdownDomEvent } from './useDropdown'
import { OutSideClick } from '@rol-ui/directives'

export default defineComponent({
  name: 'RolDropdownMenu',
  directives: {
    ClickOutside: OutSideClick,
  },
  setup() {
    const { rolDropdown } = useDropdown()
    const size = computed(() => rolDropdown?.dropdownSize)

    const show = () => {
      rolDropdown.show()
    }

    const hide = () => {
      if (rolDropdown.trigger.value === 'click') return
      rolDropdown.hide()
    }

    function _hide() {
      rolDropdown.hide?.()
    }

    onMounted(() => {
      const dropdownMenu = getCurrentInstance()
      initDropdownDomEvent(dropdownMenu, rolDropdown.triggerElm.value, rolDropdown.instance)
    })

    return {
      size,
      show,
      hide,
      innerHide: _hide,
      triggerElm: rolDropdown.triggerElm,
    }
  },
})
</script>
