<template>
  <transition name="rol-notification-fade">
    <div
      v-show="visible"
      :id="id"
      ref="$notification"
      :class="['rol-notification', customClass, horizontalClass, type ? `is-${type}` : '', light && 'is-light']"
      :style="positionStyle"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @click="click"
    >
      <button v-if="showClose" class="delete" @click.stop="close"></button>
      <div class="rol-notification__title" v-text="title"></div>
      <p class="rol-notification__content">
        <slot>
          <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
          <!-- Caution here, message could've been compromized, nerver use user's input as message -->
          <!-- eslint-disable-next-line -->
          <p v-else v-html="message"></p>
        </slot>
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import { RButtonType } from '@rol-ui/Button'
import { EVENT_CODE } from '@rol-ui/utils/aria'
import { off, on } from '@rol-ui/utils/dom'
import { computed, defineComponent, onMounted, PropType, ref, VNode, watch } from 'vue'
export type NotificationVM = VNode
export default defineComponent({
  name: 'RolNotification',
  props: {
    type: {
      type: String as PropType<RButtonType>,
      default: '',
      validator: (val: string) => {
        return ['primary', 'success', 'warning', 'danger', 'info', 'link', 'text', ''].includes(val)
      },
    },
    light: Boolean,
    position: {
      type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>,
      default: 'top-right',
    },
    offset: { type: Number, default: 0 },
    customClass: { type: String, default: '' },
    message: {
      type: [String, Object] as PropType<string | NotificationVM>,
      default: '',
    },
    title: { type: String, default: '' },
    dangerouslyUseHTMLString: { type: Boolean, default: false },
    showClose: { type: Boolean, default: true },
    id: { type: String, default: '' },
    onClick: {
      type: Function as PropType<() => void>,
      default: () => void 0,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
    duration: { type: Number, default: 4500 },
  },
  setup(props) {
    const horizontalClass = computed(() => {
      return props.position.indexOf('right') > 1 ? 'right' : 'left'
    })

    const verticalProperty = computed(() => {
      return props.position.startsWith('top') ? 'top' : 'bottom'
    })
    const positionStyle = computed(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
      }
    })

    const visible = ref(false)
    const closed = ref(false)
    const timer = ref(null)
    const $notification = ref<HTMLDivElement | null>(null)

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
      off($notification.value, 'transitionend', destroyElement)
      if (props.onClose) props.onClose()
      $notification.value.parentNode.removeChild($notification.value)
    }

    const click = () => {
      props?.onClick()
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
        on($notification.value, 'transitionend', destroyElement)
      }
    })

    onMounted(() => {
      startTimer()
      visible.value = true
      on(document, 'keydown', keydown)
    })

    return {
      horizontalClass,
      positionStyle,
      $notification,
      close,
      visible,
      destroyElement,
      keydown,
      clearTimer,
      startTimer,
      click,
    }
  },
  //   mounted() {
  //     console.log(this.$el)
  //   },
})
</script>

<style></style>
