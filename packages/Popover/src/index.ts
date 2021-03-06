import { computed, defineComponent, h, PropType } from 'vue'
import RolPopper, { Effect, Options, Placement, RTrigger } from '@rol-ui/popper'
import { UPDATE_VISIBLE_EVENT } from '@rol-ui/utils/constants'
import throwError from '@rol-ui/utils/error'

export default defineComponent({
  name: 'RolPopover',
  components: {
    RolPopper,
  },
  props: {
    class: {
      type: String,
      default: '',
    },
    style: {
      type: Object,
      default: () => ({}),
    },
    popperClass: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: '200px',
    },
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    hideAfter: {
      type: Number,
      default: 0,
    },
    manual: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: undefined,
    },
    offset: {
      type: Number,
      default: 12,
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom' as Placement,
    },
    popperOptions: {
      type: Object as PropType<Options>,
      default: () => null,
    },
    showAfter: {
      type: Number,
      default: 0,
    },
    tabindex: {
      type: [Number, String],
      default: 0,
    },
    transition: {
      type: String,
      default: 'rol-fade-in-linear',
    },
    trigger: {
      type: [String, Array] as PropType<RTrigger>,
      default: () => ['hover'],
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
  },
  emits: [UPDATE_VISIBLE_EVENT],
  setup(props, ctx) {
    if (props.manual && typeof props.visible === 'undefined') {
      throwError('[RolPopover]', 'You need to pass a v-model to rol-tooltip when `manual` is true')
    }
    if (!ctx.slots.reference) {
      throwError('[RolPopover]', 'You must provide a `reference` slot')
    }

    const onUpdateVisible = val => {
      ctx.emit(UPDATE_VISIBLE_EVENT, val)
    }

    const popoverClass = computed(
      () => `${props.popperClass}  rol-popover ${props.content ? 'rol-popover--plain' : ''}`,
    )

    const popoverStyle = computed(() => {
      return Object.assign(props.style, { width: props.width })
    })

    return () => {
      return h(
        RolPopper,
        {
          effect: Effect.LIGHT,
          class: props.class,
          disabled: props.disabled,
          enterable: props.enterable,
          hideAfter: props.hideAfter,
          manualMode: props.manual,
          offset: props.offset,
          placement: props.placement,
          showAfter: props.showAfter,
          showArrow: props.visibleArrow,
          tabIndex: String(props.tabindex),
          transition: props.transition,
          trigger: props.trigger,
          popperOptions: props.popperOptions,
          visible: props.visible,
          popperClass: popoverClass.value,
          popperStyle: popoverStyle.value,
          'onUpdate:visible': onUpdateVisible,
        },
        {
          default: () =>
            ctx.slots.content
              ? ctx.slots.content()
              : [props.title ? h('div', { class: 'rol-popover__title' }, [props.title]) : null, props.content],
          trigger: () => ctx.slots.reference(),
        },
      )
    }
  },
})
