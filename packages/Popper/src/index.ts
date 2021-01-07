import {
  createVNode,
  defineComponent,
  Fragment,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  renderSlot,
  Teleport,
  toDisplayString,
  withDirectives,
} from 'vue'
import throwError from '@rol-ui/utils/error'
import defaultProps from './usePopper/defaults'
import usePopper from './usePopper'
import { UPDATE_VISIBLE_EVENT } from '@rol-ui/utils/constants'
import { renderArrow, renderPopper, renderTrigger } from './renders'
import { OutSideClick as ClickOutside } from '@rol-ui/directives'
import { PatchFlags, renderBlock } from '@rol-ui/utils/vnode'

export default defineComponent({
  name: 'RolPopper',
  props: defaultProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave', 'before-enter', 'before-leave'],
  setup(props, ctx) {
    if (!ctx.slots.trigger) {
      throwError('RolPopper', 'Trigger must be provided')
    }

    const popperStates = usePopper(props, ctx)

    const forceDestroy = () => popperStates.doDestroy(true)
    onMounted(popperStates.initializePopper)
    onBeforeUnmount(forceDestroy)
    onActivated(popperStates.initializePopper)
    onDeactivated(forceDestroy)

    return popperStates
  },
  render() {
    const {
      $slots,
      appendToBody,
      class: classes,
      style,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
    } = this

    const isManual = this.isManualMode()
    const arrow = renderArrow(showArrow)

    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseEnter: onPopperMouseEnter,
        onMouseLeave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'default', {}, () => {
          return [toDisplayString(this.content)]
        }),
        arrow,
      ],
    )

    const _t = $slots.trigger?.()

    const triggerProps = {
      ariaDescribedby: popperId,
      class: classes,
      style,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[ClickOutside, hide]])

    return renderBlock(Fragment, null, [
      trigger,
      createVNode(
        Teleport as any,
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper],
        PatchFlags.PROPS,
        ['disabled'],
      ),
    ])
  },
})
