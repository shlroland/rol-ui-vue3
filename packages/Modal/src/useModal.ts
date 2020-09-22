import { computed, onMounted, ref, SetupContext, watch } from 'vue'
import { isServer } from '@rol-ui/utils/is$'
import { clearTimer } from '@rol-ui/utils/util'

interface UseModalProps {
  beforeClose?: (close: (shouldCancel: boolean) => void) => void
  closeOnClickModal: boolean
  closeOnPressEscape: boolean
  closeDelay: number
  destroyOnClose: boolean
  fullscreen: boolean
  lockScroll: boolean
  visible: boolean
  openDelay: number
  top: string
  width: string
  zIndex?: number
}

export const CLOSE_EVENT = 'close'
export const OPEN_EVENT = 'open'
export const CLOSED_EVENT = 'closed'
export const OPENED_EVENT = 'opened'

export default function (props: any, ctx: SetupContext) {
  const _visible = ref(false)
  const closed = ref(false)
  const modalRef = ref(null)
  const openTimer = ref<TimeoutHandle>(null)
  const closeTimer = ref<TimeoutHandle>(null)
  const zIndex = ref(2001)

  const style = computed(() => {
    const style = {} as CSSStyleDeclaration
    if (!props.fullscreen) {
      style.marginTop = props.top
      if (props.width) {
        style.width = props.width
      }
    }
    style.zIndex = String(zIndex.value + 1)
    return style
  })
  function open() {
    clearTimer(closeTimer)
    clearTimer(openTimer)
    if (props.openDelay && props.openDelay > 0) {
      openTimer.value = window.setTimeout(() => {
        openTimer.value = null
        doOpen()
      }, props.openDelay)
    } else {
      doOpen()
    }
  }

  function close() {
    // if (this.willClose && !this.willClose()) return;
    clearTimer(openTimer)
    clearTimer(closeTimer)

    if (props.closeDelay && props.closeDelay > 0) {
      closeTimer.value = window.setTimeout(() => {
        closeTimer.value = null
        doClose()
      }, props.closeDelay)
    } else {
      doClose()
    }
  }

  function doOpen() {
    if (isServer) {
      return
    }
    _visible.value = true
  }

  function doClose() {
    _visible.value = false
  }

  watch(
    () => props.visible,
    val => {
      if (val) {
        closed.value = false
        open()
      } else {
        close()
      }
    },
  )

  onMounted(() => {
    if (props.visible) {
      open()
    }
  })

  return {
    visible: _visible,
    style,
    zIndex,
  }
}
