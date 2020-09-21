<template>
  <button
    :class="[
      'rol-button',
      `is-${size}`,
      type ? `is-${type}` : '',
      shape ? `is-${shape}` : '',
      {
        'is-fullwidth': fullwidth,
        'is-outlined': outlined,
        'is-inverted': inverted,
        'is-loading': loading,
        'is-hovered': hovered,
        'is-focused': focused,
        'is-active': active,
        'is-static': isStatic,
        'is-selected': selected,
      },
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span v-if="icon" class="rol-button-icon">
      <Icon :icon="icon" />
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import Icon from '@rol-ui/icon/src/index.vue'

type RButtonType = PropType<
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'link'
  | 'text'
  | 'white'
  | 'light'
  | 'Dark'
  | 'black'
>

type RButtonSize = PropType<'small' | 'normal' | 'medium' | 'large'>

type RButtonNativeType = PropType<'button' | 'submit' | 'reset'>

type RButtonShapeType = PropType<'round' | 'circle'>

// interface RButtonProps {
//   type: string
//   size: string
//   nativeType: string
//   shape: string
//   icon: string
//   light: boolean
//   fullwidth: boolean
//   outlined: boolean
//   inverted: boolean
//   loading: boolean
//   hovered: boolean
//   focused: boolean
//   active: boolean
//   isStatic: boolean
//   disabled: boolean
//   autofocus: boolean
// }
export default defineComponent({
  name: 'RolButton',
  components: {
    Icon,
  },
  props: {
    type: {
      type: String as RButtonType,
      default: '',
      validator: (val: string) => {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'link',
          'text',
          'white',
          'light',
          'Dark',
          'black',
        ].includes(val)
      },
    },
    size: {
      type: String as RButtonSize,
      default: '',
      validator: (val: string) => {
        return ['small', 'normal', 'medium', 'large'].includes(val)
      },
    },
    nativeType: {
      type: String as RButtonNativeType,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
    shape: {
      type: String as RButtonShapeType,
      default: '',
      validator: (val: string) => {
        return ['round', 'circle'].includes(val)
      },
    },
    icon: {
      type: [Object, Array, String],
      default: '',
    },
    light: Boolean,
    fullwidth: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    loading: Boolean,
    disabled: Boolean,
    hovered: Boolean,
    focused: Boolean,
    active: Boolean,
    isStatic: Boolean,
    autofocus: Boolean,
    selected: Boolean,
  },
  // setup(props) {
  //   console.log(1)
  //   // const IconSize = () {
  //   //   sw
  //   // }
  // },
})
</script>

<style lang="scss"></style>
