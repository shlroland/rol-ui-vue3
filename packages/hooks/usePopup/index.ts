import { addClass, getStyle, hasClass, removeClass } from '@rol-ui/utils/dom'
import { isServer } from '@rol-ui/utils/is$'
import PopupManager, { Instance } from '@rol-ui/utils/popup-manager'
import getScrollbarWidth from '@rol-ui/utils/scrollbar-width'
import {
  ComponentInternalInstance,
  getCurrentInstance,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  reactive,
  watch,
} from 'vue'

let idSeed = 1

let scrollBarWidth

const usePopup = (props: any, doClose: (...rest: any) => unknown) => {
  let _popupId
  let _opening = false
  let _closing = false
  let vm: Instance | ComponentInternalInstance
  let _closeTimer = null
  let _openTimer = null

  const state = reactive({
    opened: false,
    bodyPaddingRight: null,
    computedBodyPaddingRight: 0,
    withoutHiddenClass: true,
    rendered: false,
    visible: false,
  })

  onBeforeMount(() => {
    _popupId = 'popup-' + idSeed++
    PopupManager.register(_popupId, vm as Instance)
  })

  onMounted(() => {
    vm = getCurrentInstance()
  })

  onBeforeUnmount(() => {
    PopupManager.deregister(_popupId)
    PopupManager.closeModal(_popupId)
    restoreBodyStyle()
  })

  const doOpen = (merProps: any) => {
    if (isServer) return
    if (state.opened) return

    _opening = true

    const dom = (vm as ComponentInternalInstance).vnode.el

    const modal = merProps.modal
    const zIndex = merProps.zIndex
    if (zIndex) {
      PopupManager.zIndex = zIndex
    }

    if (modal) {
      if (_closing) {
        PopupManager.closeModal(_popupId)
        _closing = false
      }

      PopupManager.openModal(
        _popupId,
        PopupManager.nextZIndex(),
        props.modalAppendToBody ? undefined : (dom as HTMLElement),
        merProps.modalClass,
        merProps.modalFade,
      )
      if (merProps.lockScroll) {
        state.withoutHiddenClass = !hasClass(document.body, 'rol-popup-parent--hidden')
        if (state.withoutHiddenClass) {
          state.bodyPaddingRight = document.body.style.paddingRight
          state.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10)
        }
        scrollBarWidth = getScrollbarWidth()
        const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
        const bodyOverflowY = getStyle(document.body, 'overflowY')
        if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && state.withoutHiddenClass) {
          document.body.style.paddingRight = state.computedBodyPaddingRight + scrollBarWidth + 'px'
        }
        addClass(document.body, 'rol-popup-parent--hidden')
      }
    }

    if (getComputedStyle(dom as Element).position === 'static') {
      dom.style.position = 'absolute'
    }

    dom.style.zIndex = PopupManager.nextZIndex()
    state.opened = true
    doAfterOpen()
  }

  const open = (options?: any) => {
    if (!state.rendered) {
      state.rendered = true
    }

    const _props = Object.assign({}, props || vm.proxy, options)

    if (_closeTimer) {
      clearTimeout(_closeTimer)
      _closeTimer = null
    }
    clearTimeout(_openTimer)

    const openDelay = Number(_props.openDelay)
    if (openDelay > 0) {
      _openTimer = setTimeout(() => {
        _openTimer = null
        doOpen(_props)
      }, openDelay)
    } else {
      doOpen(_props)
    }
  }

  const close = () => {
    if (_openTimer !== null) {
      clearTimeout(_openTimer)
      _openTimer = null
    }
    clearTimeout(_closeTimer)

    const closeDelay = Number(props.closeDelay)

    if (closeDelay > 0) {
      _closeTimer = setTimeout(() => {
        _closeTimer = null
        doClose()
      }, closeDelay)
    } else {
      doClose()
    }
  }

  const doAfterOpen = () => {
    _opening = false
  }

  const doAfterClose = () => {
    PopupManager.closeModal(_popupId)
    _closing = false
  }

  const updateClosingFlag = value => {
    _closing = value
  }

  const restoreBodyStyle = () => {
    if (props.modal && state.withoutHiddenClass) {
      document.body.style.paddingRight = state.bodyPaddingRight
      removeClass(document.body, 'rol-popup-parent--hidden')
    }
    state.withoutHiddenClass = true
  }

  watch(
    () => state.visible,
    async (val: boolean) => {
      if (val) {
        if (_opening) return
        if (!state.rendered) {
          state.rendered = true
          await nextTick()
          open()
        } else {
          open()
        }
      } else {
        close()
      }
    },
  )

  return {
    state,
    close,
    doAfterClose,
    updateClosingFlag,
    restoreBodyStyle,
  }
}

export default usePopup
