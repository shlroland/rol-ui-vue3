<template>
  <nav :class="['rol-breadcrumb', `is-${alignment}`, `is-${size}`]" aria-label="breadcrumbs">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script lang="ts">
import { PropType, provide, VNode } from 'vue'

type RAlignment = PropType<'left' | 'centered' | 'right'>
type RSize = PropType<'small' | 'normal' | 'medium' | 'large'>

interface RBreadcrumbProps {
  alignment: string
  size: string
  separator: string
}

export interface RBreadcrumbProvide {
  separatorIns: string | VNode[]
}

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
      type: String,
      default: '/',
    },
  },
  setup(props: RBreadcrumbProps, { slots }) {
    const separatorIns = slots?.separator ? slots?.separator() : props.separator

    provide<RBreadcrumbProvide>('rootBreadcrumb', {
      separatorIns,
    })
  },
}
</script>

