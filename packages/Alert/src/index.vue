<template>
  <transition name="rol-alert-fade">
    <div
      v-show="visible"
      role="alert"
      :class="['rol-alert', center ? 'is-center' : '', light ? 'is-light' : '', typeClass]"
    >
      <div class="rol-alert__content">
        <span v-if="title || $slots.title" :class="['rol-alert__title', isBoldTitle]">
          <slot name="title">{{ title }}</slot>
        </span>
        <p v-if="description || $slots.default" class="rol-alert__description">
          <slot>
            {{ description }}
          </slot>
        </p>
        <button v-if="closable" class="rol-alert__closebtn" @click="close"></button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
export default defineComponent({
  name: 'RolAlert',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    center: Boolean,
    light: Boolean,
    closable: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | ''>,
      default: 'info',
      validator: (val: string) => {
        return ['primary', 'success', 'warning', 'danger', 'info', 'link', ''].includes(val)
      },
    },
  },
  emits: ['click'],
  setup(props, ctx) {
    const visible = ref(true)

    const isBoldTitle = computed(() => (props.description || ctx.slots.default ? 'is-bold' : ''))
    const typeClass = computed(() => `rol-alert--${props.type}`)
    const close = evt => {
      visible.value = false
      ctx.emit('click', evt)
    }
    return {
      visible,
      isBoldTitle,
      close,
      typeClass,
    }
  },
})
</script>

<style></style>
