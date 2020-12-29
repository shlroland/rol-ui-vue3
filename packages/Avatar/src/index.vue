<template>
  <div
    :class="[
      'rol-avatar',
      size && typeof size === 'string' ? `rol-avatar--${size}` : '',
      icon && 'rol-avatar--icon',
      shape && `rol-avatar--${shape}`,
    ]"
    :style="customStyle"
  >
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      :style="fitStyle"
      @error="handleError"
    />
    <rol-icon v-else-if="icon" :name="icon"></rol-icon>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
import RolIcon, { IconProps } from '@rol-ui/icon'
import { computed, defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'RolAvatar',
  components: { RolIcon },
  props: {
    size: {
      type: [Number, String] as PropType<number | string>,
      validator(this: never, val: unknown) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val)
        }
        return typeof val === 'number'
      },
      default: 'large',
    },
    shape: {
      type: String,
      default: 'circle',
      validator(this: never, val: string) {
        return ['circle', 'square'].includes(val)
      },
    },
    icon: {
      type: [Object, Array, String] as PropType<IconProps>,
      default: '',
    },
    src: String,
    alt: String,
    srcSet: String,
    fit: {
      type: String,
      default: 'cover',
    },
    backgroundColor: {
      type: String,
      default: '#b5b5b5',
    },
  },
  emits: ['error'],
  setup(props, { emit }) {
    const hasLoadError = ref(false)

    const sizeStyle = computed(() => {
      return typeof props.size === 'number'
        ? {
            height: `${props.size}px`,
            width: `${props.size}px`,
            lineHeight: `${props.size}px`,
          }
        : {}
    })

    const customStyle = computed(()=>{
      return Object.assign({},sizeStyle.value,{ backgroundColor: props.backgroundColor })
    })

    const fitStyle = computed(() => ({
      objectFit: props.fit,
    }))

    const handleError = (e: Event) => {
      hasLoadError.value = true
      emit('error', e)
    }

    return {
      customStyle,
      fitStyle,
      handleError,
      hasLoadError,
    }
  },
})
</script>

