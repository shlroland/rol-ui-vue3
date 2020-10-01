import { generateId, isBool, isHTMLElement } from '@rol-ui/utils/util'
import { ComponentPublicInstance, computed, reactive, ref, SetupContext, watch } from 'vue'
import { isString, isArray } from '@vue/shared'
import { PopperInstance, RefElement, RPopperOptions, RTriggerType } from './props'
import { createPopper } from '@popperjs/core'
import usePopperOptions from './usePopperOptions'

export const UPDATE_VISIBLE_EVENT = 'update:visible'
type REmitOptions = typeof UPDATE_VISIBLE_EVENT | 'after-enter' | 'after-leave'

export default function (props: RPopperOptions, { emit }: SetupContext<REmitOptions[]>) {
  const arrowRef = ref<RefElement>(null)
  const triggerRef = ref<ComponentPublicInstance | HTMLElement>(null)
  const popperRef = ref<RefElement>(null)

  const popperId = `rol-popper-${generateId()}`
  let popperInstance: Nullable<PopperInstance> = null
  let showTimer: Nullable<TimeoutHandle> = null
  let hideTimer: Nullable<TimeoutHandle> = null
  let triggerFocused = false
  const popperOptions = usePopperOptions(props, {
    arrow: arrowRef,
  })

  watch(popperOptions, val => {
    if (!popperInstance) return
    popperInstance.setOptions(val)
    popperInstance.update()
  })

  const events = {} as {
    onClick?: (e: Event) => void
    onMouseEnter?: (e: Event) => void
    onMouseLeave?: (e: Event) => void
    onFocus?: (e: Event) => void
    onBlur?: (e: Event) => void
  }

  const isManualMode = computed(() => props.manualMode || props.trigger === 'manual')
  const state = reactive({
    visible: !!props.visible,
  })

  const visibility = computed<boolean>({
    get() {
      if (props.disabled) {
        return false
      } else {
        return isBool(props.visible) ? props.visible : state.visible
      }
    },
    set(val) {
      if (isManualMode.value) return
      isBool(props.visible) ? emit(UPDATE_VISIBLE_EVENT, val) : (state.visible = val)
    },
  })

  const detachPopper = () => {
    popperInstance?.destroy?.()
    popperInstance = null
  }
  const initPopperInstance = () => {
    console.log(triggerRef.value.$el)
    const _trigger = isHTMLElement(triggerRef.value)
      ? triggerRef.value
      : (triggerRef.value as ComponentPublicInstance).$el
    detachPopper()
    popperInstance = createPopper(_trigger, popperRef.value, popperOptions.value)
    popperInstance.update()
  }

  const _show = () => {
    if (props.hideAfter > 0) {
      hideTimer = window.setTimeout(() => {
        _hide()
      }, props.hideAfter)
    }
    visibility.value = true
    popperInstance.update()
  }

  const _hide = () => {
    visibility.value = false
  }

  const clearTimers = () => {
    clearTimeout(showTimer)
    clearTimeout(hideTimer)
  }

  const show = () => {
    if (isManualMode.value || props.disabled) return
    clearTimers()
    if (props.showAfter === 0) {
      _show()
    } else {
      showTimer = window.setTimeout(() => {
        _show()
      }, props.showAfter)
    }
  }
  const close = () => {
    _hide()
    if (props.disabled) {
      doDestroy(true)
    }
  }
  const hide = () => {
    if (isManualMode.value) return
    clearTimers()
    if (props.closeDelay > 0) {
      hideTimer = window.setTimeout(() => {
        close()
      }, props.closeDelay)
    } else {
      close()
    }
  }

  const doDestroy = (forceDestroy?: boolean) => {
    if (!popperInstance || (visibility.value && !forceDestroy)) return
    detachPopper()
  }

  const onPopperMouseLeave = () => {
    const { trigger } = props
    const shouldPrevent =
      (isString(trigger) && (trigger === 'click' || trigger === 'focus')) ||
      (trigger.length === 1 && (trigger[0] === 'click' || trigger[0] === 'focus'))
    if (shouldPrevent) return

    hide()
  }

  const onPopperMouseEnter = () => {
    if (props.enterable) {
      clearTimeout(hideTimer)
    }
  }

  if (!isManualMode.value) {
    const toggleState = () => {
      if (visibility.value) {
        hide()
      } else {
        show()
      }
    }

    const popperEventsHandler = (e: Event) => {
      e.stopPropagation()
      switch (e.type) {
        case 'click': {
          if (triggerFocused) {
            triggerFocused = false
          } else {
            toggleState()
          }
          break
        }
        case 'mouseenter': {
          show()
          break
        }
        case 'mouseleave': {
          hide()
          break
        }
        case 'focus': {
          triggerFocused = true
          show()
          break
        }
        case 'blur': {
          triggerFocused = false
          hide()
          break
        }
      }
    }

    const mapEvents = (t: RTriggerType) => {
      switch (t) {
        case 'click': {
          events.onClick = popperEventsHandler
          break
        }
        case 'hover': {
          events.onMouseEnter = popperEventsHandler
          events.onMouseLeave = popperEventsHandler
          break
        }
        case 'focus': {
          events.onFocus = popperEventsHandler
          events.onBlur = popperEventsHandler
          break
        }
        default: {
          break
        }
      }
    }
    if (isArray(props.trigger)) {
      Object.values(props.trigger).map(mapEvents)
    } else {
      mapEvents(props.trigger)
    }
  }

  return {
    doDestroy,
    show,
    hide,
    onPopperMouseEnter,
    onPopperMouseLeave,
    onAfterEnter: () => {
      emit('after-enter')
    },
    onAfterLeave: () => {
      emit('after-leave')
    },
    initPopperInstance,
    arrowRef,
    events,
    popperId,
    popperInstance,
    popperRef,
    triggerRef,
    visibility,
  }
}
