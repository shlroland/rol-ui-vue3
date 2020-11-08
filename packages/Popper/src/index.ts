import {
  defineComponent,
  Fragment,
  h,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  renderSlot,
  Teleport,
  toDisplayString,
  withDirectives,
} from 'vue'
import { UPDATE_VISIBLE_EVENT } from './core'
import defaultProps, { RPopperOptions } from './core/props'
import usePopper from './core'
import throwError from '@rol-ui/utils/error'
import { renderArrow, renderMask, renderPopper, renderTrigger } from './view'
import { renderBlock } from '@rol-ui/utils/vnode'
import { OutSideClick } from '@rol-ui/directives'

export default defineComponent({
  name: 'RolPopper',
  props: defaultProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave'],
  setup(props: RPopperOptions, ctx) {
    if (!ctx.slots.trigger) {
      throwError('RolPopper', 'Trigger must be provided')
    }
    const popperStates = usePopper(props, ctx)
    const forceDestory = () => popperStates.doDestroy(true)

    onMounted(popperStates.initPopperInstance)
    onBeforeUnmount(forceDestory)
    onActivated(popperStates.initPopperInstance)
    onDeactivated(forceDestory)
    return popperStates
  },
  render() {
    const {
      class: className,
      $slots,
      tabIndex,
      popperId,
      showArrow,
      effect,
      transition,
      popperClass,
      popperStyle,
      pure,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      visibility,
      appendToBody,
      hide,
    } = this

    const arrow = renderArrow(showArrow)

    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperStyle,
        popperId,
        pure,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ],
    )

    const triggerVNode = renderTrigger($slots.trigger?.(), {
      ariaDescribedby: popperId,
      class: className,
      ref: 'triggerRef',
      tabindex: tabIndex,
      onMouseDown: stop,
      onMouseUp: stop,
      ...this.events,
    })

    const trigger = this.manualMode ? triggerVNode : withDirectives(triggerVNode, [[OutSideClick, hide]])

    return renderBlock(Fragment, null, [
      trigger,
      appendToBody ? h(Teleport as any, { to: 'body', key: 0 }, [popper]) : renderBlock(Fragment, { key: 1 }, [popper]),
    ])
  },
})
