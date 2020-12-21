import { computed, nextTick, onMounted, ref, SetupContext, watch } from 'vue'
import { isServer } from '@rol-ui/utils/is$'
import { clearTimer } from '@rol-ui/utils/util'
import { useModalEvent } from '@rol-ui/hooks'
import { useLockScreen } from '@rol-ui/hooks'
import { UPDATE_VISIBLE_EVENT } from '@rol-ui/utils/constants'

interface UseModalProps {
  beforeClose?: (close: (shouldCancel: boolean) => void) => void
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  closeDelay?: number
  destroyOnClose?: boolean
  fullscreen?: boolean
  lockScroll?: boolean
  visible: boolean
  openDelay?: number
  top?: string
  width?: string
  zIndex?: number
  center?: boolean
}

export const CLOSE_EVENT = 'close'
export const OPEN_EVENT = 'open'
export const CLOSED_EVENT = 'closed'
export const OPENED_EVENT = 'opened'

export default function (props: UseModalProps, ctx: SetupContext) {
  const _visible = ref(false)
  const closed = ref(false)
  const modalRef = ref<HTMLDivElement>(null)
  const openTimer = ref<TimeoutHandle>(null)
  const closeTimer = ref<TimeoutHandle>(null)
  const zIndex = ref(props.zIndex || 2001)

  const style = computed(() => {
    const style = {} as CSSStyleDeclaration
    if (!props.fullscreen) {
      if (!props.center) {
        style.marginTop = props.top
      }
      if (props.width) {
        style.width = props.width
      }
    }
    style.zIndex = String(zIndex.value + 1)
    return style
  })

  function afterEnter() {
    ctx.emit(OPENED_EVENT)
  }

  function afterLeave() {
    ctx.emit(CLOSED_EVENT)
    ctx.emit(UPDATE_VISIBLE_EVENT, false)
  }

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

  if (props.lockScroll) {
    useLockScreen(_visible)
  }

  function hide(shouldCancel: boolean) {
    if (shouldCancel) return
    closed.value = true
    _visible.value = false
  }

  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide)
    } else {
      close()
    }
  }

  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose()
    }
  }

  if (props.closeOnPressEscape) {
    useModalEvent(
      {
        handleClose,
      },
      _visible,
    )
  }

  watch(
    () => props.visible,
    val => {
      if (val) {
        closed.value = false
        open()
        ctx.emit(OPEN_EVENT)
        nextTick(() => {
          console.log(modalRef)
          modalRef.value.scrollTop = 0
        })
      } else {
        close()
        if (!closed.value) {
          ctx.emit(CLOSE_EVENT)
        }
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
    onModalClick,
    handleClose,
    afterEnter,
    afterLeave,
  }
}
