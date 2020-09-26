<template>
  <span class="rol-icon">
    <component :is="node" />
  </span>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { classList, normalizeIconArgs, objectWithKey, convert } from './utils'
import {
  parse as faParse,
  icon as faIcon,
  IconProp,
  SizeProp,
  FlipProp,
  RotateProp,
  library,
} from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

type IconProps = PropType<IconProp>
type SizeProps = PropType<SizeProp>
type FlipProps = PropType<FlipProp>
type RotateProps = PropType<RotateProp>

export default defineComponent({
  name: 'RolIcon',
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    fixedWidth: {
      type: Boolean,
      default: false,
    },
    flip: {
      type: String as FlipProps,
      default: null,
      validator: (value: string) =>
        ['horizontal', 'vertical', 'both'].indexOf(value) > -1,
    },
    name: {
      type: [Object, Array, String] as IconProps,
      required: true,
    },
    mask: {
      type: [Object, Array, String],
      default: null,
    },
    pulse: {
      type: Boolean,
      default: false,
    },
    rotation: {
      type: [String, Number] as RotateProps,
      default: null,
      validator: (value: string | number) =>
        [90, 180, 270].indexOf(parseInt(value as string, 10)) > -1,
    },
    swapOpacity: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as SizeProps,
      default: null,
      validator: (value: string) =>
        [
          'lg',
          'xs',
          'sm',
          '1x',
          '2x',
          '3x',
          '4x',
          '5x',
          '6x',
          '7x',
          '8x',
          '9x',
          '10x',
        ].indexOf(value) > -1,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    transform: {
      type: [String, Object],
      default: null,
    },
    symbol: {
      type: [Boolean, String],
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    inverse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const { attrs } = ctx
    const iconArgs = normalizeIconArgs(props.name)
    const classes = objectWithKey('classes', classList(props))
    const transform = objectWithKey(
      'transform',
      typeof props.transform === 'string'
        ? faParse.transform(props.transform)
        : props.transform,
    )
    const mask = objectWithKey('mask', normalizeIconArgs(props.mask))
    const renderedIcon = faIcon(iconArgs, {
      ...classes,
      ...transform,
      ...mask,
      symbol: props.symbol,
      title: props.title,
    })
    if (!renderedIcon) {
      return console.error('Could not find one or more icon(s)', iconArgs, mask)
    }
    const abstractElement = renderedIcon.abstract[0]
    return { node: convert(abstractElement, {}, attrs)() }
  },
})
</script>

<style lang="scss">

</style>
