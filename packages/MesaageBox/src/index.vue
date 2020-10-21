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
import { ComponentInternalInstance, computed, defineComponent, reactive, toRefs } from 'vue'
import type { RolMessageBoxComponent } from './message-box'
import RolButton from '@rol-ui/button'

interface defaultStateProps extends Partial<RolMessageBoxComponent> {
  uid?: number
  callback?: (...rest) => unknown
  focusAfterClosed?: boolean
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
  visible: true,
  validateError: false,
}

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
    let vm: Instance | ComponentInternalInstance
    // const popup = usePopup(props, doClose)
    const state = reactive({
      ...defautState,
    })

    const hasMessage = computed(() => !!state.message)
    const confirmButtonClasses = computed(() => `rol-button--primary ${state.confirmButtonClass}`)

    return {
      ...toRefs(state),
      hasMessage,
      confirmButtonClasses,
    }
  },
})
</script>

<style></style>
