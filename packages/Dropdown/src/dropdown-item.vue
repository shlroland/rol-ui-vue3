<template>
  <li
    class="rol-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'rol-dropdown-menu__item--divided': divided,
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <Icon v-if="icon" :name="icon" />
    <slot></slot>
  </li>
</template>

<script lang="ts">
import Icon, { IconProps } from '@rol-ui/icon'
import { defineComponent, PropType } from 'vue'

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
})
</script>

<style></style>
