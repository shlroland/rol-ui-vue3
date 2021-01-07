<script lang="ts">
import { defineComponent, h, PropType, ref } from 'vue'
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
      default: 'dark' as Effect,
    },
    class: {
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
      validator: (val: unknown) => {
        return typeof val === 'boolean'
      },
      default: undefined,
    },
    offset: {
      type: Number,
      default: 12,
    },
    openDelay: {
      type: Number,
      default: 0,
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
    transition: {
      type: String,
      default: 'rol-fade-in-linear',
    },
    trigger: {
      type: [String, Array] as PropType<string | string[]>,
      default: () => ['hover'],
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    stopPopperMouseEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: [UPDATE_VISIBLE_EVENT],
  setup(props, ctx) {
    if (props.manual && typeof props.visible === 'undefined') {
      throwError('[RolTooltip]', 'You need to pass a v-model to rol-tooltip when `manual` is true')
    }

    const popper = ref(null)
    const onUpdateVisible = val => {
      ctx.emit(UPDATE_VISIBLE_EVENT, val)
    }

    const updatePopper = () => {
      return popper.value.update()
    }

    return {
      popper,
      onUpdateVisible,
      updatePopper,
    }
  },
  render() {
    const {
      $slots,
      content,
      disabled,
      effect,
      enterable,
      hideAfter,
      manual,
      offset,
      openDelay,
      onUpdateVisible,
      placement,
      popperOptions,
      showAfter,
      transition,
      trigger,
      visibleArrow,
      stopPopperMouseEvent,
    } = this

    const popper = h(
      RolPopper,
      {
        ref: 'popper',
        appendToBody: true,
        class: this.class,
        disabled,
        effect,
        enterable,
        hideAfter,
        manualMode: manual,
        offset,
        placement,
        showAfter: openDelay || showAfter, // this is for mapping API due to we decided to rename the current openDelay API to showAfter for better readability,
        showArrow: visibleArrow,
        stopPopperMouseEvent,
        transition,
        trigger,
        popperOptions, // Breakings!: Once popperOptions is provided, the whole popper is under user's control, ElPopper nolonger generates the default options for popper, this is by design if the user wants the full control on @PopperJS, read the doc @https://popper.js.org/docs/v2/
        visible: this.visible,
        'onUpdate:visible': onUpdateVisible,
      },
      {
        default: () => ($slots.content ? $slots.content() : content),
        trigger: () => $slots.default(),
      },
    )
    return popper
  },
})
</script>
