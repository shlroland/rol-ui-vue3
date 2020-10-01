import { defineComponent, h, PropType, withDirectives, vShow, Teleport, Transition, SetupContext } from 'vue'
import useModal, { CLOSE_EVENT, OPEN_EVENT, CLOSED_EVENT, OPENED_EVENT } from './useModal'
import RolOverlay from './modal-overlay'
import { isValidWidthUnit } from '@rol-ui/utils/util'
import { UPDATE_VISIBLE_EVENT } from '@rol-ui/utils/constants'

type RModalType = PropType<'content' | 'card'>

const modal = defineComponent({
  name: 'RolModal',
  props: {
    type: {
      type: String as RModalType,
      default: 'card',
      validator: (val: string) => {
        return ['content', 'card'].includes(val)
      },
    },
    visible: {
      type: Boolean,
      required: true,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function as PropType<(...args: any[]) => unknown>,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: '',
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    top: {
      type: String,
      default: '15vh',
    },
    center: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      validator: isValidWidthUnit,
    },
    zIndex: {
      type: Number,
    },
  },
  emits: [CLOSE_EVENT, OPEN_EVENT, CLOSED_EVENT, OPENED_EVENT, UPDATE_VISIBLE_EVENT],
  setup(props, ctx) {
    return useModal(props, ctx as SetupContext)
  },
  render() {
    if (this.destroyOnClose && !this.visible) {
      return null
    }
    const closeBtn = this.showClose
      ? h('button', {
          type: 'button',
          class: 'rol-modal-close',
          ariaLabel: 'close',
          onClick: this.handleClose,
        })
      : null

    const header = h(
      'header',
      {
        class: 'rol-modal-card-head',
      },
      [this.$slots.header ? this.slots.header() : h('p', { class: 'rol-modal-card-title' }, this.title), closeBtn],
    )
    const body = h(
      'section',
      {
        class: 'rol-modal-card-body',
      },
      this.$slots.default?.(),
    )

    const footer = this.$slots.footer ? h('footer', { class: 'rol-modal-card-foot' }, this.$slots.footer()) : null
    const combinationCard = h(
      'div',
      {
        ariaModal: true,
        ariaLabel: this.title || 'modal',
        class: ['rol-modal-card', { 'is-fullscreen': this.fullscreen }, this.customClass],
        role: 'dialog',
        ref: 'modalRef',
        style: this.style,
        onClick: (e: MouseEvent) => e.stopPropagation(),
      },
      [header, body, footer],
    )

    const content = h(
      'div',
      {
        ariaModal: true,
        ariaLabel: 'modal',
        class: ['rol-modal-content', this.customClass],
        role: 'dialog',
        ref: 'modalRef',
        style: this.style,
        onClick: (e: MouseEvent) => e.stopPropagation(),
      },
      {
        default: () => this.$slots.default?.(),
      },
    )

    const overlay = withDirectives(
      h(
        RolOverlay,
        {
          onClick: this.onModalClick,
          center: this.center,
          zIndex: this.zIndex,
          mask: this.overlay,
        },
        {
          default: () => (this.type === 'content' ? content : combinationCard),
        },
      ),
      [[vShow, this.visible]],
    )

    const renderIns = h(
      Transition,
      {
        name: 'rol-modal-fade',
        onAfterEnter: this.afterEnter,
        onAfterLeave: this.afterLeave,
      },
      {
        default: () => overlay,
      },
    )
    return this.appendToBody ? h(Teleport, { to: 'body' }, renderIns) : renderIns
  },
})

export default modal
