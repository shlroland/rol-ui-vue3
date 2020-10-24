<template>
  <div
    v-show="visible"
    :aria-label="title || 'dialog'"
    class="rol-message-box__wrapper"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="rol-message-box" :class="[customClass, center && 'rol-message-box--center']">
      <div v-if="title !== null && title !== undefined" class="rol-message-box__header">
        <div class="rol-message__title">
          <span>{{ title }}</span>
        </div>
        <button v-if="showClose" type="button" class="rol-message-box__headerbtn" aria-label="Close">
          ×
        </button>
      </div>
      <div class="rol-message-box__content">
        <div class="rol-message-box__container">
          <div v-if="hasMessage" class="rol-message-box__message">
            <slot>
              <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
              <p v-else v-html="message"></p>
            </slot>
          </div>
        </div>
        <!-- <div v-show="showInput" class="rol-message-box__input"></div> -->
      </div>
      <div class="rol-message-box__btns">
        <rol-button>{{ cancelButtonText || '取消' }}</rol-button>
        <rol-button>{{ cancelButtonText || '确定' }}</rol-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Instance } from '@rol-ui/utils/popup-manager'
import usePopup from '@rol-ui/hooks/usePopup'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from 'vue'
import type { RolMessageBoxComponent } from './message-box'
import RolButton from '@rol-ui/button'
import Dialog from '@rol-ui/utils/aria-dialog'
import { off, on } from '@rol-ui/utils/dom'

interface defaultStateProps extends Partial<RolMessageBoxComponent> {
  uid?: number
  callback?: (...rest) => unknown
  focusAfterClosed?: string | HTMLElement
  isOnComposition?: boolean
  distinguishCancelAndClose?: boolean
  type$?: any
  visible: boolean
  validateError: boolean
}

const defautState: defaultStateProps = {
  uid: 1,
  title: undefined,
  message: '',
  type: '',
  iconClass: '',
  customClass: '',
  showInput: false,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  action: '',
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonLoading: false,
  cancelButtonLoading: false,
  confirmButtonClass: '',
  confirmButtonDisabled: false,
  cancelButtonClass: '',
  editorErrorMessage: null,
  callback: null,
  dangerouslyUseHTMLString: false,
  focusAfterClosed: null,
  isOnComposition: false,
  distinguishCancelAndClose: false,
  type$: '',
  visible: false,
  validateError: false,
}

let dialog: Dialog

export default defineComponent({
  name: 'RolMsgBox',
  components: {
    RolButton,
  },
  props: {
    openDelay: {
      type: Boolean,
      default: false,
    },
    closeDelay: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
    },
    modalFade: {
      type: Boolean,
      default: true,
    },
    modalClass: {
      type: String,
      default: '',
    },
    modalAppendToBody: {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    closeOnHashChange: {
      type: Boolean,
      default: true,
    },
    center: {
      default: false,
      type: Boolean,
    },
    roundButton: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    let vm
    const state = reactive({
      ...defautState,
    })
    const hasMessage = computed(() => !!state.message)
    const confirmButtonClasses = computed(() => `rol-button--primary ${state.confirmButtonClass}`)

    const doClose = () => {
      if (!state.visible) return
      state.visible = false
      popup.updateClosingFlag(true)
      dialog.closeDialog()
      if (props.lockScroll) {
        setTimeout(popup.restoreBodyStyle, 200)
      }
      popup.state.opened = false
      popup.doAfterClose()
      setTimeout(() => {
        if (state.action) state.callback(state.action, state)
      })
    }

    const getSafeClose = () => {
      const currentId = state.uid
      return async () => {
        await nextTick()
        if (currentId === state.uid) doClose()
      }
    }

    const getFirstFocus = () => {
      const btn = vm.vnode.el.querySelector('.rol-message-box__btns .rol-button')
      const title = vm.vnode.el.querySelector('.rol-message-box__btns .rol-message-box__title')
      return btn || title
    }

    const validate = () => {
      if (state.type$ === 'prompt') {
      }
      state.editorErrorMessage = ''
      state.validateError = false
      return true
    }

    const handleAction = action => {
      if (state.type$ === 'prompt' && action === 'confirm' && !validate()) {
        return
      }
      state.action = action
      if (typeof vm.setupInstall.state.beforeClose === 'function') {
        vm.setupInstall.state.close = getSafeClose()
        vm.setupInstall.state.beforeClose(action, state, popup.close)
      } else {
        doClose()
      }
    }

    const handleInputEnter = () => {
      if (state.inputType !== 'textarea') {
        return handleAction('confirm')
      }
    }

    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? 'close' : 'cancel')
      }
    }

    const handleClose = () => {
      handleAction('close')
    }

    const popup = usePopup(props, doClose)

    watch(
      () => state.visible,
      async val => {
        popup.state.visible = val
        if (val) {
          state.uid++
          if (state.type$ === 'alert' || state.type$ === 'confirm') {
            await nextTick()
            vm.refs.confirm.$el.focus()
          }
          state.focusAfterClosed = document.activeElement as HTMLElement
          dialog = new Dialog(vm.vnode.el, state.focusAfterClosed, getFirstFocus())
        }
        if (state.type$ !== 'prompt') return
        if (val) {
          await nextTick()
          if (vm.refs.input && vm.refs.input.$el) {
            // getInputElement().focus()
          }
        } else {
          state.editorErrorMessage = ''
          state.validateError = false
        }
      },
    )

    onBeforeMount(() => {
      vm = getCurrentInstance()
      vm.setupInstall = {
        state,
        doClose,
      }
    })

    onMounted(async () => {
      await nextTick()
      if (props.closeOnHashChange) {
        on(window, 'hashchange', popup.close)
      }
    })

    onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        off(window, 'hashchange', popup.close)
      }
      setTimeout(() => {
        dialog.closeDialog()
      })
    })

    return {
      ...toRefs(state),
      hasMessage,
      confirmButtonClasses,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      handleClose,
      doClose,
    }
  },
})
</script>

<style></style>
