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
      },
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'

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
      default: 'normal',
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
  },
})
</script>

<style lang="scss">
@import '../../style/index.scss';

$button-color: $text-strong !default;
$button-background-color: $scheme-main !default;
$button-family: false !default;

$button-border-color: $border !default;
$button-border-width: $control-border-width !default;

$button-padding-vertical: calc(0.5em - #{$button-border-width}) !default;
$button-padding-horizontal: 1em !default;

$button-hover-color: $link-hover !default;
$button-hover-border-color: $link-hover-border !default;

$button-focus-color: $link-focus !default;
$button-focus-border-color: $link-focus-border !default;
$button-focus-box-shadow-size: 0 0 0 0.125em !default;

$button-focus-box-shadow-color: Rgba($link, 0.25) !default;

$button-active-color: $link-active !default;
$button-active-border-color: $link-active-border !default;

$button-active-color: $link-active !default;
$button-active-border-color: $link-active-border !default;

$button-text-color: $text !default;
$button-text-decoration: underline !default;
$button-text-hover-background-color: $background !default;
$button-text-hover-color: $text-strong !default;

$button-disabled-background-color: $scheme-main !default;
$button-disabled-border-color: $border !default;
$button-disabled-shadow: none !default;
$button-disabled-opacity: 0.5 !default;

$button-static-color: $text-light !default;
$button-static-background-color: $scheme-main-ter !default;
$button-static-border-color: $border !default;

$button-colors: $colors !default;

@mixin button-small {
  border-radius: $radius-small;
  font-size: $size-small;
}

@mixin button-normal {
  font-size: $size-normal;
}
@mixin button-medium {
  font-size: $size-medium;
}

@mixin button-large {
  font-size: $size-large;
}

.rol-button {
  @extend %control;
  @extend %unselectable;
  padding-bottom: $button-padding-vertical;
  padding-left: $button-padding-horizontal;
  padding-right: $button-padding-horizontal;
  padding-top: $button-padding-vertical;
  background-color: $button-background-color;
  border-color: $button-border-color;
  border-width: $button-border-width;
  color: $button-color;
  cursor: pointer;
  @if $button-family {
    font-family: $button-family;
  }
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  strong {
    color: inherit;
  }

  &:hover,
  &.is-hovered {
    border-color: $button-hover-border-color;
    color: $button-hover-color;
  }
  &:focus,
  &.is-focused {
    border-color: $button-focus-border-color;
    color: $button-focus-color;
    &:not(:active) {
      box-shadow: $button-focus-box-shadow-size $button-focus-box-shadow-color;
    }
  }
  &:active,
  &.is-active {
    border-color: $button-active-border-color;
    color: $button-active-color;
  }
  &.is-text {
    background-color: transparent;
    border-color: transparent;
    color: $button-text-color;
    text-decoration: $button-text-decoration;
    &:hover,
    &.is-hovered,
    &:focus,
    &.is-focused {
      background-color: $button-text-hover-background-color;
      color: $button-text-hover-color;
    }

    &:active,
    &.is-active {
      background-color: Darken($button-text-hover-background-color, 5%);
      color: $button-text-hover-color;
    }

    &[disabled],
    fieldset[disabled] & {
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
    }
  }
  @each $name, $pair in $button-colors {
    $color: nth($pair, 1);
    $color-invert: nth($pair, 2);

    &.is-#{$name} {
      background-color: $color;
      border-color: transparent;
      color: $color-invert;
      &:hover,
      &.is-hovered {
        background-color: Darken($color, 2.5%);
        border-color: transparent;
        color: $color-invert;
      }
      &:focus,
      &.is-focused {
        border-color: transparent;
        color: $color-invert;
        &:not(:active) {
          box-shadow: $button-focus-box-shadow-size Rgba($color, 0.25);
        }
      }
      &:active,
      &.is-active {
        background-color: Darken($color, 5%);
        border-color: transparent;
        color: $color-invert;
      }
      &[disabled],
      fieldset[disabled] & {
        background-color: $color;
        border-color: transparent;
        box-shadow: none;
      }
      &.is-inverted {
        background-color: $color-invert;
        color: $color;
        &:hover,
        &.is-hovered {
          background-color: Darken($color-invert, 5%);
        }
        &[disabled],
        fieldset[disabled] & {
          background-color: $color-invert;
          border-color: transparent;
          box-shadow: none;
          color: $color;
        }
      }
      &.is-loading {
        &::after {
          border-color: transparent
            transparent
            $color-invert
            $color-invert !important;
        }
      }
      &.is-outlined {
        background-color: transparent;
        border-color: $color;
        color: $color;
        &:hover,
        &.is-hovered,
        &:focus,
        &.is-focused {
          background-color: $color;
          border-color: $color;
          color: $color-invert;
        }
        &.is-loading {
          &::after {
            border-color: transparent transparent $color $color !important;
          }
          &:hover,
          &.is-hovered,
          &:focus,
          &.is-focused {
            &::after {
              border-color: transparent
                transparent
                $color-invert
                $color-invert !important;
            }
          }
        }
        &[disabled],
        fieldset[disabled] & {
          background-color: transparent;
          border-color: $color;
          box-shadow: none;
          color: $color;
        }
      }
      &.is-inverted.is-outlined {
        background-color: transparent;
        border-color: $color-invert;
        color: $color-invert;
        &:hover,
        &.is-hovered,
        &:focus,
        &.is-focused {
          background-color: $color-invert;
          color: $color;
        }
        &.is-loading {
          &:hover,
          &.is-hovered,
          &:focus,
          &.is-focused {
            &::after {
              border-color: transparent transparent $color $color !important;
            }
          }
        }
        &[disabled],
        fieldset[disabled] & {
          background-color: transparent;
          border-color: $color-invert;
          box-shadow: none;
          color: $color-invert;
        }
      }
      @if length($pair) >= 4 {
        $color-light: nth($pair, 3);
        $color-dark: nth($pair, 4);
        &.is-light {
          background-color: $color-light;
          color: $color-dark;
          &:hover,
          &.is-hovered {
            background-color: Darken($color-light, 2.5%);
            border-color: transparent;
            color: $color-dark;
          }
          &:active,
          &.is-active {
            background-color: Darken($color-light, 5%);
            border-color: transparent;
            color: $color-dark;
          }
        }
      }
    }
  }
  &.is-small {
    @include button-small;
  }
  &.is-normal {
    @include button-normal;
  }
  &.is-medium {
    @include button-medium;
  }
  &.is-large {
    @include button-large;
  }

  &[disabled],
  fieldset[disabled] & {
    background-color: $button-disabled-background-color;
    border-color: $button-disabled-border-color;
    box-shadow: $button-disabled-shadow;
    opacity: $button-disabled-opacity;
  }

  &.is-fullwidth {
    display: flex;
    width: 100%;
  }

  &.is-loading {
    color: transparent !important;
    pointer-events: none;
    &::after {
      @extend %loader;
      @include center(1em);
      position: absolute !important;
    }
  }

  &.is-static {
    background-color: $button-static-background-color;
    border-color: $button-static-border-color;
    color: $button-static-color;
    box-shadow: none;
    pointer-events: none;
  }

  &.is-rounded {
    border-radius: $radius-rounded;
    padding-left: calc(#{$button-padding-horizontal} + 0.25em);
    padding-right: calc(#{$button-padding-horizontal} + 0.25em);
  }
  &.is-circle {
    border-radius: 50%;
    padding: 0;
    text-align: center;
    min-width: $control-height;
  }
}
</style>
