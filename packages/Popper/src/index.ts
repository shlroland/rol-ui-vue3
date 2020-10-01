import { defineComponent, onActivated, onBeforeUnmount, onDeactivated, onMounted } from 'vue'
import { UPDATE_VISIBLE_EVENT } from './core'
import defaultProps from './core/props'
import usePopper from './core'
import throwError from '@rol-ui/utils/error'
import { renderBlock } from '@rol-ui/utils/vnode'
import renderTrigger from './view/trigger'

export default defineComponent({
  name: 'RolPopper',
  props: defaultProps,
  emits: [UPDATE_VISIBLE_EVENT, 'after-enter', 'after-leave'],
  setup(props, ctx) {
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
    const { $slots, tabIndex, popperId } = this
    const trigger = renderTrigger($slots.trigger?.(), {
      ariaDescribedby: popperId,
      ref: 'triggerRef',
      tabindex: tabIndex,
      onMouseDown: stop,
      onMouseUp: stop,
      ...this.events,
    })
    console.log(trigger)
    return trigger
  },
})
