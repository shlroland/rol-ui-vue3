<script lang="ts">
import { defineComponent, h, PropType } from 'vue'
import RolPopper, { Effect, Options, Placement, RTrigger } from '@rol-ui/popper'
import { UPDATE_VISIBLE_EVENT } from '@rol-ui/utils/constants'
import throwError from '@rol-ui/utils/error'

// type RRolTooltip = {
//   effect: Effect
//   class: string
//   popperClass: string
//   content: string
//   disabled: boolean
//   enterable: boolean
//   hideAfter: number
//   manual: boolean
//   visible: boolean
//   offset: number
//   placement: Placement
//   popperOptions: Options
//   showAfter: number
//   tabindex: number | string
//   transition: string
//   trigger: string | string[]
//   visibleArrow: boolean
// }

export default defineComponent({
  name: 'RolTooltip',
  components: {
    RolPopper,
  },
  props: {
    effect: {
      type: String as PropType<Effect>,
      default: Effect.DARK,
    },
    class: {
      type: String,
      default: '',
    },
    popperClass: {
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
      throwError('[RolTooltip]', 'You need to pass a v-model to el-tooltip when `manual` is true')
    }
    const onUpdateVisible = val => {
      ctx.emit(UPDATE_VISIBLE_EVENT, val)
    }
    return () => {
      return h(
        RolPopper,
        {
          class: props.class,
          disabled: props.disabled,
          effect: props.effect,
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
          popperClass: props.popperClass,
          'onUpdate:visible': onUpdateVisible,
        },
        {
          default: () => (ctx.slots.content ? ctx.slots.content() : props.content),
          trigger: () => ctx.slots.default(),
        },
      )
    }
  },
})
</script>
