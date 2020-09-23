import { defineComponent, h, PropType, withDirectives, vShow, SetupContext, Transition } from 'vue'
import useModal from './useModal'
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
      default: false,
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
    modal: {
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
  setup(props, ctx) {
    const { visible, handleClose, onModalClick, style } = useModal(props, ctx)

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
    console.log(style)
    const combination = h(
      'div',
      {
        ariaModal: true,
        ariaLabel: props.title || 'modal',
        class: ['rol-modal-card', props.customClass],
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
        },
        {
          default: () => overlay,
        },
      )
      return renderIns
    }
  },
})

export default modal
