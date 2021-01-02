<template>
  <li
    class="rol-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'rol-dropdown-menu__item--divided': divided,
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <Icon v-if="icon" :name="icon" />
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Icon, { IconProps } from '@rol-ui/icon'
import { defineComponent, getCurrentInstance, PropType } from 'vue'
import { useDropdown } from './useDropdown'

export default defineComponent({
  name: 'RolDropdownItem',
  components: {
    Icon,
  },
  props: {
    command: {
      type: [Object, String, Number],
      defautl: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    icon: { type: [Object, Array, String] as PropType<IconProps> },
  },
  setup(props) {
    const { rolDropdown } = useDropdown()
    const _instance = getCurrentInstance()

    function handleClick(e: UIEvent) {
      if (rolDropdown.hideOnClick.value) {
        rolDropdown.handleClick?.()
      }
      rolDropdown.commandHandler?.(props.command, _instance, e)
    }
    return {
      handleClick,
    }
  },
})
</script>
