<template>
  <nav :class="['rol-breadcrumb', `is-${alignment}`, `is-${size}`]" aria-label="breadcrumbs">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script lang="ts">
import { PropType } from 'vue'

type RAlignment = PropType<'left' | 'centered' | 'right'>
type RSize = PropType<'small' | 'normal' | 'medium' | 'large'>
type RSeparator = PropType<'arrow-separator' | 'bullet-separator' | 'dot-separator' | 'succeeds-separator'>

export default {
  name: 'RolBreadcrumb',
  props: {
    alignment: {
      type: String as RAlignment,
      default: 'left',
      validator(val: string): boolean {
        return ['left', 'centered', 'right'].indexOf(val) !== -1
      },
    },
    size: {
      type: String as RSize,
      default: 'normal',
      validator(val: string): boolean {
        return ['small', 'normal', 'medium', 'large'].indexOf(val) !== -1
      },
    },
    separator: {
      type: String as RSeparator,
      default: '',
      validator(val: string): boolean {
        return ['arrow-separator', 'bullet-separator', 'dot-separator', 'succeeds-separator', ''].indexOf(val) !== -1
      },
    },
  },
}
</script>

<style></style>
