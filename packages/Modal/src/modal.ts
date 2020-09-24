import { defineComponent, h, PropType, withDirectives, vShow, Teleport, Transition, SetupContext } from 'vue'
import useModal, { CLOSE_EVENT, OPEN_EVENT, CLOSED_EVENT, OPENED_EVENT, UPDATE_VISIBLE } from './useModal'
import RolOverlay from './modal-overlay'
import { isValidWidthUnit } from '@rol-ui/utils/util'

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
  emits: [CLOSE_EVENT, OPEN_EVENT, CLOSED_EVENT, OPENED_EVENT, UPDATE_VISIBLE],
  setup(props, ctx) {
    const { visible, handleClose, onModalClick, style, zIndex, afterEnter, afterLeave } = useModal(
      props,
      ctx as SetupContext,
    )

    const closeBtn = props.showClose
      ? h('button', {
          type: 'button',
          class: 'rol-modal-close',
          ariaLabel: 'close',
          onClick: handleClose,
        })
      : null

    const header = h(
      'header',
      {
        class: 'rol-modal-card-head',
      },
      [ctx.slots.header ? ctx.slots.header() : h('p', { class: 'rol-modal-card-title' }, props.title), closeBtn],
    )
    const body = h(
      'section',
      {
        class: 'rol-modal-card-body',
      },
      ctx.slots.default?.(),
    )

    const footer = ctx.slots.footer ? h('footer', { class: 'rol-modal-card-foot' }, ctx.slots.footer()) : null
    const combination = h(
      'div',
      {
        ariaModal: true,
        ariaLabel: props.title || 'modal',
        class: ['rol-modal-card', { 'is-fullscreen': props.fullscreen }, props.customClass],
        role: 'dialog',
        ref: 'modalRef',
        style: style.value,
        onClick: (e: MouseEvent) => e.stopPropagation(),
      },
      [header, body, footer],
    )

    return () => {
      const overlay = withDirectives(
        h(
          RolOverlay,
          {
            onClick: onModalClick,
            center: props.center,
            zIndex: zIndex.value,
            mask: props.overlay,
          },
          {
            default: () => combination,
          },
        ),
        [[vShow, visible.value]],
      )

      const renderIns = h(
        Transition,
        {
          name: 'rol-modal-fade',
          onAfterEnter: afterEnter,
          onAfterLeave: afterLeave,
        },
        {
          default: () => overlay,
        },
      )
      return props.appendToBody ? h(Teleport, { to: 'body' }, renderIns) : renderIns
    }
  },
})

export default modal
