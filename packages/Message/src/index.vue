<template>
  <transition name="rol-message-fade">
    <div
      v-show="visible"
      :id="id"
      ref="messageDom"
      :class="[
        'rol-message',
        type && `rol-message--${type}`,
        center ? 'is-center' : '',
        showClose ? 'is-closable' : '',
        light ? 'is-light' : '',
        customClass,
      ]"
      :style="customStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="rol-message__content">
          {{ message }}
        </p>
        <p v-else class="rol-message__content" v-html="message"></p>
      </slot>
      <button v-if="showClose" class="delete rol-message__closeBtn" @click.stop="close"></button>
    </div>
  </transition>
</template>

<script lang="ts">
import { EVENT_CODE } from '@rol-ui/utils/aria'
import { off, on } from '@rol-ui/utils/dom'
import { computed, defineComponent, onMounted, PropType, ref, watch } from 'vue'
import type { MessageVM } from './message'

// const TypeMap: Indexable<string> = {
//   success: 'success',
//   info: 'info',
//   warning: 'warning',
//   error: 'error',
//   primary: 'primary',
//   link: 'link',
// }

export default defineComponent({
  name: 'RolMessage',
  props: {
    type: {
      type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | ''>,
      default: '',
      validator: (val: string) => {
        return ['primary', 'success', 'warning', 'danger', 'info', 'link', ''].includes(val)
      },
    },
    id: { type: String, default: '' },
    message: {
      type: [String, Object] as PropType<string | MessageVM>,
      default: '',
    },
    offset: { type: Number, default: 0 },
    center: { type: Boolean, default: false },
    light: { type: Boolean, default: false },
    customClass: { type: String, default: '' },
    zIndex: { type: Number, default: 0 },
    duration: { type: Number, default: 4500 },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    showClose: { type: Boolean, default: false },
    dangerouslyUseHTMLString: { type: Boolean, default: false },
  },
  setup(props) {
    const customStyle = computed(() => {
      return {
        top: `${props.offset}px`,
        zIndex: props.zIndex,
      }
    })

    console.log(props.light)

    const visible = ref(false)
    const closed = ref(false)
    const timer = ref(null)
    const messageDom = ref<HTMLDivElement | null>(null)

    const close = () => {
      closed.value = true
      timer.value = null
    }

    const startTimer = () => {
      if (props.duration > 0) {
        timer.value = setTimeout(() => {
          if (!closed.value) {
            close()
          }
        }, props.duration)
      }
    }

    const clearTimer = () => {
      clearTimeout(timer.value)
      timer.value = null
    }

    const destroyElement = () => {
      visible.value = false
      console.log(props.onClose)
      off(messageDom.value, 'transitionend', destroyElement)
      if (props.onClose) props.onClose()
    }

    const keydown = ({ code }: KeyboardEvent) => {
      if (code === EVENT_CODE.delete || code === EVENT_CODE.backspace) {
        clearTimer() // press delete/backspace clear timer
      } else if (code === EVENT_CODE.esc) {
        // press esc to close the notification
        if (!closed.value) {
          close()
        }
      } else {
        startTimer() // resume timer
      }
    }

    watch(closed, newVal => {
      if (newVal) {
        visible.value = false
        on(messageDom.value, 'transitionend', destroyElement)
      }
    })

    onMounted(() => {
      startTimer()
      visible.value = true
      on(document, 'keydown', keydown)
    })

    return {
      customStyle,
      messageDom,
      close,
      visible,
      destroyElement,
      keydown,
      clearTimer,
      startTimer,
    }
  },
})
</script>

<style></style>
